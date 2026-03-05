import Link from "next/link";
import { SITE, SERVICES, STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import CameraAnimation from "@/components/CameraAnimation";
import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  {
    text: "Équipe réactive et professionnelle. Notre site est surveillé 24h/24 en toute sérénité.",
    author: "Direction d'entreprise, Bamako",
  },
  {
    text: "Installation de caméras soignée et devis honnête. Je recommande Golden Sécurité.",
    author: "Particulier, Djélibougou",
  },
  {
    text: "Agents formés et respectueux. Un partenaire de confiance pour notre sécurité.",
    author: "Responsable logistique",
  },
];

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "user-shield": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  "building-shield": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  camera: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
    </svg>
  ),
  video: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  "shopping-cart": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] via-[#0a0e17] to-[#061018]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a227\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a227]/10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            GOLDEN <span className="text-[#c9a227]">SECURITE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">{SITE.slogan}</p>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
            Votre partenaire de confiance à Bamako pour le gardiennage, la sécurité privée, la vidéosurveillance et la protection des biens et des personnes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#devis"
              className="bg-[#c9a227] text-[#0a0e17] px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c76b] transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/services"
              className="border border-[#c9a227] text-[#c9a227] px-8 py-3 rounded-lg font-semibold hover:bg-[#c9a227]/10 transition-colors"
            >
              Nos services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <CameraAnimation />
        </div>
      </section>

      {/* Présentation rapide */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Une agence de sécurité de confiance au Mali
              </h2>
              <p className="text-gray-400 mb-4">
                <strong className="text-[#c9a227]">Golden Sécurité</strong> assure la protection des biens et des personnes à Bamako et environs. Gardiennage, sécurité privée, vidéosurveillance et vente de matériels : nous proposons des solutions sur mesure pour les entreprises et les particuliers.
              </p>
              <p className="text-gray-400 mb-6">
                Notre équipe d&apos;agents formés et nos systèmes techniques vous garantissent une surveillance fiable et réactive, 24h/24 et 7j/7.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center text-[#c9a227] font-semibold hover:underline"
              >
                En savoir plus sur nous
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-2xl bg-[#061018] border border-[#c9a227]/30 flex items-center justify-center">
                <CameraAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Services principaux */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nos services
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Gardiennage, sécurité privée, vidéosurveillance et matériels : des solutions adaptées à vos besoins.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="rounded-xl bg-[#0d1b2a] border border-[#c9a227]/20 p-6 hover:border-[#c9a227]/50 transition-colors"
              >
                <div className="text-[#c9a227] mb-4">{icons[s.icon] ?? icons.shield}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{s.description}</p>
                <Link
                  href="/contact#devis"
                  className="text-[#c9a227] text-sm font-medium hover:underline"
                >
                  Demander un devis →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-[#c9a227] text-[#0a0e17] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5c76b] transition-colors"
            >
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Pourquoi nous choisir + Stats */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pourquoi choisir Golden Sécurité ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {STATS.map((stat, i) => (
              <AnimatedCounter
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[#061018] border border-[#c9a227]/20">
              <div className="w-14 h-14 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4 text-[#c9a227]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Professionnalisme</h3>
              <p className="text-gray-500 text-sm">Agents formés, habilités et équipés selon les normes.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#061018] border border-[#c9a227]/20">
              <div className="w-14 h-14 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4 text-[#c9a227]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Fiabilité</h3>
              <p className="text-gray-500 text-sm">Surveillance continue et réactivité garanties.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#061018] border border-[#c9a227]/20">
              <div className="w-14 h-14 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4 text-[#c9a227]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Protection</h3>
              <p className="text-gray-500 text-sm">Vos biens et vos équipes en sécurité.</p>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Témoignages */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Ils nous font confiance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-xl bg-[#0d1b2a] border border-[#c9a227]/20 p-6"
              >
                <p className="text-gray-400 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <footer className="text-[#c9a227] text-sm font-medium">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Contact rapide */}
      <section className="py-16 md:py-24 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un projet de sécurité ?
          </h2>
          <p className="text-gray-500 mb-8">
            Demandez un devis gratuit et sans engagement. Notre équipe vous recontacte sous 48 h.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {SITE.email}
            </a>
          </div>
          <Link
            href="/contact#devis"
            className="bg-[#c9a227] text-[#0a0e17] px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c76b] transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
