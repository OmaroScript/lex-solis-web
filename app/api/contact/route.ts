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

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
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
      throw new Error("El proveedor no pudo enviar el mensaje.");
    }

    return NextResponse.json({
      ok: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch {

    return NextResponse.json(
      { ok: false, message: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
