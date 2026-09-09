import Link from "next/link";
import { site } from "@/lib/site";
import { privacyPath, privacyVersion } from "@/lib/privacy";

export default function PrivacySummary() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-white/70">
      <p>
        {site.lawyer}, quien opera como {site.name}, con domicilio en {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}, C.P. {site.address.postalCode}, México, es responsable de sus datos.
        Usaremos su nombre, correo, asunto, mensaje y el archivo que decida adjuntar para atender su solicitud, responderle y coordinar una consulta. No se usarán para publicidad.
      </p>
      <p>
        Puede limitar su uso o divulgación y ejercer sus derechos de privacidad escribiendo a <a className="text-gold-400 underline break-all" href={`mailto:${site.email}`}>{site.email}</a>.
        Consulte el <Link className="text-gold-400 underline" href={privacyPath} target="_blank" rel="noopener noreferrer">aviso de privacidad integral.</Link>.
      </p>
      <p id="contact-data-guidance">
        Envíe solo una descripción general. No incluya datos de salud, vida sexual, información financiera, identificaciones ni datos de otras personas en el mensaje o los archivos. Si su caso requiere información sensible, acordaremos un canal y el consentimiento correspondiente durante la consulta.
      </p>
      <label className="flex items-start gap-3 cursor-pointer">
        <input className="mt-1 h-5 w-5 shrink-0 accent-gold-500" type="checkbox" name="privacyConsent" value={privacyVersion} required />
        <span>He leído el aviso de privacidad y consiento el tratamiento de mis datos para atender esta solicitud.</span>
      </label>
    </div>
  );
}
