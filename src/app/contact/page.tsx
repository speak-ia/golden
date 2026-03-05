import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Golden Sécurité à Bamako pour un devis : gardiennage, vidéosurveillance, sécurité privée. Téléphone, email, adresse.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  const showSuccess = params?.success === "1";

  return (
    <>
      {showSuccess && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28">
          <div className="bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg p-4 text-center">
            Votre message a bien été envoyé. Nous vous recontactons sous 48 h.
          </div>
        </div>
      )}
      <section className="pt-32 pb-16 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-400">
            Demandez un devis ou posez-nous vos questions. Nous vous recontactons sous 48 h.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0a0e17]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 id="devis" className="text-2xl font-bold text-white mb-6">
                Demander un devis
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6 text-gray-400">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Adresse</p>
                    <p>{SITE.address}</p>
                    <p>{SITE.addressFull}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Téléphone</p>
                    <a href={`tel:${SITE.phone}`} className="hover:text-[#c9a227] transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Email</p>
                    <a href={`mailto:${SITE.email}`} className="hover:text-[#c9a227] transition-colors break-all">
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-white font-semibold mb-4">Nous trouver</h3>
                <div className="rounded-xl overflow-hidden border border-[#c9a227]/20 h-64 bg-[#0d1b2a]">
                  <iframe
                    title="Carte Bamako"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124378.529!2d-8.0089!3d12.6392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM4JzIxLjEiTiA4wrAwMCczMi4wIlc!5e0!3m2!1sfr!2sml!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Djélibougou Extension, Bamako – Mali
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
