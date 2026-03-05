import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions de sécurité",
  description:
    "Systèmes de vidéosurveillance, caméras, alarmes, surveillance d'entreprise et sécurité d'événements à Bamako – Golden Sécurité.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions de sécurité
          </h1>
          <p className="text-xl text-gray-400">
            Des équipements et systèmes adaptés à tous les besoins de surveillance et de protection.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0a0e17]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {SOLUTIONS.map((sol, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0d1b2a] border border-[#c9a227]/20 p-8 hover:border-[#c9a227]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">{sol.title}</h2>
                  <p className="text-gray-500">{sol.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 mb-8">
            Besoin d&apos;un devis pour une solution sur mesure ?
          </p>
          <Link
            href="/contact#devis"
            className="inline-block bg-[#c9a227] text-[#0a0e17] px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c76b] transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
