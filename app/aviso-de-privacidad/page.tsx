import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";
import { privacyPath, privacyVersion } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Lex Solis Jurídico",
  description: "Tratamiento de datos del formulario de contacto y medios para ejercer sus derechos de privacidad en Lex Solis Jurídico.",
  alternates: { canonical: privacyPath },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-charcoal text-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <h1 className="font-serif text-4xl md:text-5xl text-gold-400">Aviso de privacidad integral</h1>
        <p className="mt-4 text-sm text-white/60">Actualización: 8 de septiembre de 2026 · Versión {privacyVersion}</p>
        <div className="mt-10 space-y-8 text-base leading-relaxed text-white/80 [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-white [&_a]:text-gold-400 [&_a]:underline [&_a]:break-words">
          <section>
            <h2>Responsable y contacto</h2>
            <p>{site.lawyer}, quien opera como {site.name}, es responsable del tratamiento de los datos del formulario de este sitio. Domicilio: {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}, C.P. {site.address.postalCode}, México. Para asuntos de privacidad escriba a <a href={`mailto:${site.email}`}>{site.email}</a>, a la atención del responsable.</p>
          </section>
          <section>
            <h2>Información que recibe el sitio</h2>
            <p>El formulario solicita nombre, correo electrónico, asunto y mensaje. El archivo PDF, JPG o PNG es opcional. El correo que recibe el despacho incluye estos datos, el archivo, la versión del aviso aceptada y la fecha del envío. La infraestructura que sirve el sitio puede procesar dirección IP, información del navegador y registros técnicos de las solicitudes.</p>
          </section>
          <section>
            <h2>Uso de la información</h2>
            <p>Los datos se utilizan para recibir y revisar su solicitud, responderle y coordinar una consulta. La casilla del formulario expresa su consentimiento para estas finalidades. No hay finalidades publicitarias ni suscripción a boletines en este formulario. Enviar una solicitud no formaliza una contratación de servicios jurídicos.</p>
          </section>
          <section>
            <h2>Datos sensibles y documentos</h2>
            <p>Este canal de primer contacto no solicita datos sensibles. No envíe información de salud, vida sexual, creencias u otros datos íntimos, información financiera, identificaciones o datos de terceros. Describa su necesidad de manera general y omita o cubra esos datos en cualquier archivo. Si la asesoría requiere información sensible o un expediente, se acordarán por separado el canal, el aviso aplicable y el consentimiento exigible; la casilla de este formulario no sustituye ese procedimiento.</p>
          </section>
          <section>
            <h2>Servicios que intervienen</h2>
            <p>El sitio está alojado en Vercel. El formulario utiliza Resend para enviar la consulta al buzón {site.email}, alojado en el servicio de correo de Microsoft. Estos servicios pueden procesar información fuera de México. El sitio también carga tipografías de Google Fonts e imágenes de Unsplash, por lo que el navegador comunica datos técnicos a esos proveedores. Los enlaces a WhatsApp y redes sociales llevan a servicios con sus propios avisos.</p>
            <p className="mt-3">La atención del formulario no contempla vender datos ni compartirlos para publicidad. Las comunicaciones a proveedores que actúan por cuenta del responsable se distinguen de las transferencias a terceros. Una transferencia adicional se sujetará al consentimiento o a las excepciones legales aplicables.</p>
          </section>
          <section>
            <h2>Conservación</h2>
            <p>El formulario envía la consulta por correo; no crea un expediente en una base de datos de la aplicación. Los mensajes y adjuntos permanecen en los servicios de correo utilizados. Su conservación debe limitarse a la atención de la solicitud y a las obligaciones legales aplicables; después corresponde su bloqueo o eliminación.</p>
          </section>
          <section>
            <h2>Derechos y solicitudes</h2>
            <p>Puede solicitar acceso, rectificación, cancelación u oposición (ARCO), revocar su consentimiento o limitar el uso o divulgación escribiendo a <a href={`mailto:${site.email}`}>{site.email}</a> con asunto «Privacidad». Indique nombre, medio de respuesta, petición y datos que permitan localizar su consulta. Acredite identidad o representación; para corregir datos, aporte el cambio y su soporte.</p>
            <p className="mt-3">Las solicitudes ARCO se responden en 20 días hábiles y, si proceden, se ejecutan en los 15 siguientes; cabe una ampliación justificada por igual plazo. El acceso se facilita electrónicamente previa identificación. El trámite es gratuito, salvo costos legales de reproducción o envío. Para revocación y limitación se utilizarán el mismo canal y plazos. La revocación no es retroactiva; pueden subsistir obligaciones de conservación. Puede acudir a la Secretaría Anticorrupción y Buen Gobierno para la protección de sus derechos.</p>
          </section>
          <section>
            <h2>Cookies y cambios al aviso</h2>
            <p>La aplicación no incorpora cookies de publicidad ni herramientas de seguimiento analítico. Este aviso estará disponible en esta dirección con su fecha y versión. Los cambios de finalidad que requieran consentimiento se comunicarán antes del nuevo tratamiento.</p>
            <p className="mt-3">Marco normativo: <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" target="_blank" rel="noopener noreferrer">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</a>.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
