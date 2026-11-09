/**
 * Pagina Indice degli 8 Servizi Pilastro — idraulicotuscolana.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';
import { SERVICES_DATA } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'Servizi Idraulici Tuscolana',
  description:
    'Elenco completo degli 8 servizi idraulici e termoidraulici specialistici a Roma Tuscolana (Municipio VII). Chiama subito lo 06 8590 2169.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/servizi/`,
  },
};

export default function ServiziIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Servizi Idraulici Tuscolana"
        pageDescription="Gli 8 servizi pilastro di pronto intervento idraulico e termoidraulico a Roma Tuscolana."
        canonicalPath="/servizi/"
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Servizi Idraulici Tuscolana', url: '/servizi/' },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-10">
        <Breadcrumbs items={[{ label: 'Servizi Idraulici Tuscolana' }]} />

        <div className="card-light p-8 sm:p-12 space-y-4">
          <span className="inline-block px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
            Catalogo Tecnico Specializzato D.M. 37/2008
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Servizi Idraulici Tuscolana
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Interventi mirati per la realtà edilizia e idrogeologica del quartiere Appio-Tuscolano (Municipio VII): diagnostica non distruttiva delle perdite, stasatura elettromeccanica Root-Cutter di scarichi in gres e ghisa, manutenzione conservativa di cassette Pucci/Geberit, assistenza caldaie e regolazione pressione Acea ATO2.
          </p>
          <div className="pt-2">
            <CtaPhone label="Chiama Subito" size="md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((s) => (
            <div key={s.slug} className="card-light p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                    {s.category}
                  </span>
                  <span className="text-xs font-bold text-slate-600">
                    {s.priceFrom} · Arrivo {s.responseTime}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  <Link href={`/servizi/${s.slug}/`} className="hover:text-sky-700 transition-colors">
                    {s.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{s.heroSummary}</p>
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-800 mb-1.5">Strumentazione Principale:</div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {s.instrumentation.slice(0, 3).map((inst, i) => (
                      <li key={i}>• {inst}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/servizi/${s.slug}/`}
                  className="btn-sky-primary px-5 py-2.5 rounded-xl text-xs font-extrabold"
                >
                  Apri Scheda Tecnica →
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-xs font-extrabold text-amber-700 hover:underline"
                >
                  Chiama {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
