import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");
    const evidence = formData.get("evidence");

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "Faltan campos obligatorios." },
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

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      // to: ["omaroscript.dev@gmail.com"],
      to: ["juridico@lexsolis.com"],
      replyTo: email,
      subject: `Nuevo contacto legal: ${subject}`,
      html: `
        <h2>Nuevo mensaje desde Lex Solis</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        ${attachments.length > 0 ? "<p><strong>Incluye evidencia adjunta.</strong></p>" : ""}
      `,
      attachments,
    });

    return NextResponse.json({
      ok: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { ok: false, message: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}