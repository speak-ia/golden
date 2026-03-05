"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#061018]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Golden Sécurité"
            width={56}
            height={56}
            className="rounded-lg object-contain"
          />
          <span className="text-xl font-bold tracking-wider text-white">
            GOLDEN <span className="text-[#c9a227]">SECURITE</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c9a227] ${
                pathname === link.href ? "text-[#c9a227]" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#devis"
            className="bg-[#c9a227] text-[#0a0e17] px-5 py-2 rounded font-semibold hover:bg-[#e5c76b] transition-colors"
          >
            Demander un devis
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1b2a] border-t border-[#c9a227]/30 shadow-xl">
          <nav className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-lg font-medium ${
                  pathname === link.href ? "text-[#c9a227] bg-[#c9a227]/10" : "text-gray-300 hover:bg-white/5"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#devis"
              className="mt-2 bg-[#c9a227] text-[#0a0e17] py-3 px-4 rounded-lg font-semibold text-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
