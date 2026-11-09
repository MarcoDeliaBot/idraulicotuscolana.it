/**
 * Pagina Conferma Invio Modulo (/grazie/) — idraulicotuscolana.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Richiesta Ricevuta Idraulico Tuscolana',
  description: `La tua richiesta è stata registrata dal presidio ${SITE_CONFIG.name}. Per emergenze chiama subito lo ${SITE_CONFIG.phoneDisplay}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/grazie/`,
  },
};

export default function GraziePage() {
  return (
    <main className="min-h-[70vh] bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <JsonLd
        pageTitle="Richiesta Ricevuta Idraulico Tuscolana"
        pageDescription="Conferma ricezione richiesta di assistenza idraulica a Roma Tuscolana."
        canonicalPath="/grazie/"
      />
      <div className="max-w-2xl mx-auto card-light p-8 sm:p-12 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Richiesta Ricevuta Idraulico Tuscolana
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          La tua segnalazione tecnica è stata presa in carico dal coordinamento operativo di Roma Tuscolana. Se si tratta di un’urgenza con perdita d’acqua o blocco scarichi in corso, ti invitiamo a chiamare direttamente il numero attivo H24 per l’invio immediato del furgone officina.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <CtaPhone label="Chiama Subito" size="md" />
          <Link
            href="/"
            className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            Torna alla Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
