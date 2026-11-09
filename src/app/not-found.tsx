/**
 * Pagina 404 Non Trovata — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Pagina Non Trovata Idraulico Tuscolana',
  description: `Risorsa non trovata sul portale ${SITE_CONFIG.name}. Per pronto intervento idraulico chiama subito lo ${SITE_CONFIG.phoneDisplay}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/404/`,
  },
};

export default function NotFoundPage() {
  return (
    <main className="min-h-[70vh] bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <JsonLd
        pageTitle="Pagina Non Trovata Idraulico Tuscolana"
        pageDescription="Pagina non trovata sul portale Idraulico Tuscolana Roma."
        canonicalPath="/404/"
      />
      <div className="max-w-2xl mx-auto card-light p-8 sm:p-12 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
          Errore 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Pagina Non Trovata Idraulico Tuscolana
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          L’indirizzo cercato non è disponibile. Se hai un’emergenza idraulica in corso lungo Via Tuscolana o nel quartiere Appio-Tuscolano, contatta immediatamente la centrale operativa telefonica.
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
