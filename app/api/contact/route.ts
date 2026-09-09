import { NextResponse } from "next/server";
import { Resend } from "resend";

import { site } from "@/lib/site";
import { privacyVersion } from "@/lib/privacy";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (formData.get("privacyConsent") !== privacyVersion) {
      return NextResponse.json(
        { ok: false, message: "Debe leer y aceptar el aviso de privacidad vigente." },
        { status: 400 }
      );
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const evidence = formData.get("evidence");

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Ingrese un correo electrónico válido." },
        { status: 400 }
      );
    }

    const attachments = [];

    if (evidence instanceof File && evidence.size > 0) {
      if (evidence.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { ok: false, message: "El archivo no debe pesar más de 5 MB." },
          { status: 400 }
        );
      }

      const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

      if (!allowedTypes.includes(evidence.type)) {
        return NextResponse.json(
          { ok: false, message: "Solo se permiten archivos PDF, JPG o PNG." },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await evidence.arrayBuffer());

      attachments.push({
        filename: evidence.name,
        content: buffer,
      });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = process.env.FROM_EMAIL?.trim();
    if (!apiKey || !fromEmail) {
      console.error("contact_email_configuration", {
        missingApiKey: !apiKey,
        missingFromEmail: !fromEmail,
      });
      return NextResponse.json(
        { ok: false, message: "El formulario no está disponible por el momento. Contáctenos por correo o WhatsApp." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [site.email],
      replyTo: email,
      subject: `Nuevo contacto legal: ${subject}`,
      text: `
        Consentimiento de privacidad: versión ${privacyVersion}
        Recibido: ${new Date().toISOString()}
        Nuevo mensaje desde Lex Solis
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        Mensaje:
        ${message}
        ${attachments.length > 0 ? "Incluye evidencia adjunta." : ""}
      `,
      attachments,
    });

    if (error) {
      // Classify the provider response without logging addresses, message content or keys.
      const detail = error.message.toLowerCase();
      const reason = detail.includes("testing emails") || detail.includes("resend.dev")
        ? "testing_sender_restriction"
        : detail.includes("domain") && (detail.includes("verif") || detail.includes("not found"))
          ? "sender_domain_not_verified"
          : detail.includes("api key")
            ? "api_key_rejected"
            : "provider_rejected";
      console.error("contact_email_rejected", {
        reason,
        statusCode: error.statusCode,
      });
      return NextResponse.json(
        { ok: false, message: "No se pudo enviar el mensaje. Intente más tarde o contáctenos por correo o WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch {
    console.error("contact_email_unexpected_failure");

    return NextResponse.json(
      { ok: false, message: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
