'use client';

/**
 * Header Sticky Light Theme con effetto blur — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 shadow-sm"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.94)', backdropFilter: 'blur(12px)' }}
    >
      {/* Top Info Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">
              Pronto Intervento Idraulico Roma Tuscolana — Quartiere Appio-Tuscolano (Municipio VII)
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span>Arrivo in 20-30 min</span>
            <span className="hidden sm:inline">·</span>
            <a
              href={SITE_CONFIG.phoneHref}
              className="text-amber-400 hover:text-amber-300 font-bold"
            >
              Tel: {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-sm group-hover:bg-sky-700 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                IDRAULICO TUSCOLANA
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                Termoidraulica Roma · Municipio VII
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-sky-600 transition-colors py-2">
              Home
            </Link>
            <Link href="/servizi/" className="hover:text-sky-600 transition-colors py-2">
              8 Servizi
            </Link>
            <Link href="/zone/" className="hover:text-sky-600 transition-colors py-2">
              16 Zone Tuscolana
            </Link>
            <Link href="/chi-siamo/" className="hover:text-sky-600 transition-colors py-2">
              Chi Siamo
            </Link>
            <Link href="/preventivo-gratuito/" className="hover:text-sky-600 transition-colors py-2">
              Preventivo
            </Link>
            <Link href="/contatti/" className="hover:text-sky-600 transition-colors py-2">
              Contatti
            </Link>
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneHref}
              className="btn-emergency-amber px-5 py-2.5 rounded-xl text-sm font-extrabold flex items-center gap-2"
            >
              <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.054 15.054 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
              </svg>
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Apri menu di navigazione"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
          >
            Home — Idraulico Tuscolana
          </Link>
          <Link
            href="/servizi/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
          >
            Gli 8 Servizi Idraulici
          </Link>
          <Link
            href="/zone/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
          >
            Le 16 Micro-Zone Tuscolana
          </Link>
          <Link
            href="/chi-siamo/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
          >
            Chi Siamo
          </Link>
          <Link
            href="/preventivo-gratuito/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
          >
            Preventivo Gratuito
          </Link>
          <Link
            href="/contatti/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
          >
            Contatti
          </Link>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.phoneHref}
              className="btn-emergency-amber w-full py-3 rounded-xl text-center font-extrabold text-base flex items-center justify-center gap-2"
            >
              <span>Chiama Subito {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
