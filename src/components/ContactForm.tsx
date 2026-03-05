"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";

const SERVICE_OPTIONS = SERVICES.map((s) => ({ value: s.id, label: s.title }));

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <form
      action="https://formsubmit.co/goldensecurite@yahoo.com"
      method="POST"
      className="space-y-5"
      onSubmit={() => setStatus("sending")}
    >
      <input
        type="hidden"
        name="_subject"
        value="Nouvelle demande de devis - Site Golden Sécurité"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_SITE_URL || ""}/contact?success=1`} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-[#0d1b2a] border border-[#c9a227]/30 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
          placeholder="Votre nom ou société"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-[#0d1b2a] border border-[#c9a227]/30 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg bg-[#0d1b2a] border border-[#c9a227]/30 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
          placeholder="+223 XX XX XX XX"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1">
          Service demandé
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg bg-[#0d1b2a] border border-[#c9a227]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
        >
          <option value="">Sélectionnez un service</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-[#0d1b2a] border border-[#c9a227]/30 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] resize-none"
          placeholder="Décrivez votre besoin (site à sécuriser, type de surveillance, etc.)"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#c9a227] text-[#0a0e17] py-3 rounded-lg font-semibold hover:bg-[#e5c76b] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-sm text-center">
          Message envoyé. Nous vous recontactons rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Une erreur est survenue. Vous pouvez nous appeler au +223 74 60 18 98.
        </p>
      )}
    </form>
  );
}
