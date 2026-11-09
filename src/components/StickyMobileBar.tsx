'use client';

/**
 * Barra Mobile Sticky Inferiore Persistente — idraulicotuscolana.it
 * Pulsante diretto "Chiama Subito 06 8590 2169" con icona cornetta pulsante.
 * Autore: Marco D'Elia
 */
import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 px-3 py-2.5 shadow-2xl"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-lg mx-auto flex items-center gap-2">
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex-1 btn-emergency-amber py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2.5"
          aria-label={`Chiama Subito ${SITE_CONFIG.phoneDisplay}`}
        >
          <svg
            className="w-5 h-5 text-white animate-pulse shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.054 15.054 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
          </svg>
          <span>Chiama Subito {SITE_CONFIG.phoneDisplay}</span>
        </a>
        <Link
          href="/preventivo-gratuito/"
          className="btn-sky-primary py-3 px-3.5 rounded-xl font-bold text-xs flex items-center justify-center whitespace-nowrap"
        >
          Preventivo
        </Link>
      </div>
    </div>
  );
}
