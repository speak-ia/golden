import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Golden Sécurité, société de sécurité à Bamako : mission, vision et valeurs. Professionnalisme, fiabilité et protection des biens et des personnes.",
};

export default function AProposPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de Golden Sécurité
          </h1>
          <p className="text-xl text-gray-400">
            Votre partenaire de confiance pour la sécurité des biens et des personnes à Bamako et au Mali.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0a0e17]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-[#c9a227] mb-4">Notre mission</h2>
            <p className="text-gray-400 leading-relaxed">
              Assurer la protection des biens et des personnes par des services de gardiennage, de sécurité privée et de vidéosurveillance de qualité. Nous nous engageons à offrir des solutions adaptées à chaque client, entreprises et particuliers, avec professionnalisme et réactivité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#c9a227] mb-4">Notre vision</h2>
            <p className="text-gray-400 leading-relaxed">
              Devenir la référence de la sécurité privée au Mali en combinant présence humaine qualifiée et technologies de surveillance. Nous visons une sécurité accessible, fiable et conforme aux normes, pour un environnement plus sûr.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#c9a227] mb-4">Nos valeurs</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-semibold shrink-0">Professionnalisme</span>
                <span>— Formation continue, habilitations et équipements conformes pour des interventions de qualité.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-semibold shrink-0">Fiabilité</span>
                <span>— Respect des engagements, disponibilité et réactivité pour inspirer confiance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-semibold shrink-0">Protection</span>
                <span>— Priorité à la sécurité des personnes et des biens, dans le respect de la loi.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-semibold shrink-0">Proximité</span>
                <span>— Écoute du client, devis personnalisés et suivi pour une relation durable.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#c9a227] mb-4">Notre expérience</h2>
            <p className="text-gray-400 leading-relaxed">
              Forte de plusieurs années d&apos;expérience dans la sécurité privée à Bamako, Golden Sécurité accompagne entreprises, chantiers, commerces et particuliers. Nos agents sont formés et habilités, et nos solutions techniques (vidéosurveillance, alarmes, contrôles d&apos;accès) sont déployées avec soin pour une surveillance efficace 24h/24.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 mb-8">
            Vous avez un besoin de gardiennage, de vidéosurveillance ou de matériel de sécurité ?
          </p>
          <a
            href="/contact#devis"
            className="inline-block bg-[#c9a227] text-[#0a0e17] px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c76b] transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </>
  );
}
