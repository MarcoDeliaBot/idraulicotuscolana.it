/**
 * Footer Istituzionale con link diretti agli 8 Servizi e 16 Micro-Zone — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/siteConfig';
import { SERVICES_DATA } from '@/data/servicesData';
import { ZONES_DATA } from '@/data/zonesData';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-sky-600 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Colonna 1: Identità Istituzionale */}
          <div className="space-y-4">
            <div className="text-xl font-black text-white tracking-tight">
              IDRAULICO TUSCOLANA ROMA
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Presidio tecnico di pronto intervento idraulico e termoidraulico nel quartiere Tuscolano / Appio-Tuscolano (Municipio VII di Roma Capitale). Tecnici abilitati D.M. 37/2008 operativi H24 da Ponte Lungo e Stazione Tuscolana a Porta Furba, Lucio Sestio e Cinecittà.
            </p>
            <div className="pt-1">
              <a
                href={SITE_CONFIG.phoneHref}
                className="btn-emergency-amber inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-extrabold text-base text-white"
              >
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.054 15.054 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
                </svg>
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>Presidio operativo: Via Tuscolana (Ponte Lungo – Numidio Quadrato – Cinecittà)</p>
              <p>CAP coperti: 00181, 00178, 00174, 00175 Roma · Reperibilità H24 / 365 gg</p>
            </div>
          </div>

          {/* Colonna 2: Gli 8 Servizi Pilastro */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4">
              Gli 8 Servizi Pilastro
            </div>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servizi/${service.slug}/`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    • {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3: Micro-Zone 1-8 */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4">
              Micro-Zone Tuscolana (1-8)
            </div>
            <ul className="space-y-2 text-xs">
              {ZONES_DATA.slice(0, 8).map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/zone/${zone.slug}/`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    • {zone.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 4: Micro-Zone 9-16 */}
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4">
              Micro-Zone Tuscolana (9-16)
            </div>
            <ul className="space-y-2 text-xs">
              {ZONES_DATA.slice(8, 16).map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/zone/${zone.slug}/`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    • {zone.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName} — Tutti i diritti riservati.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/chi-siamo/" className="hover:text-white transition-colors">
              Chi Siamo
            </Link>
            <Link href="/preventivo-gratuito/" className="hover:text-white transition-colors">
              Preventivo Gratuito
            </Link>
            <Link href="/contatti/" className="hover:text-white transition-colors">
              Contatti
            </Link>
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy/" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div className="text-[11px] text-slate-500">
            v{SITE_CONFIG.version} · Architettura e Sviluppo: {SITE_CONFIG.author}
          </div>
        </div>
      </div>
    </footer>
  );
}
