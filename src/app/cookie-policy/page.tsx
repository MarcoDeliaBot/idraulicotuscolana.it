/**
 * Pagina Cookie Policy — idraulicotuscolana.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Cookie Policy Idraulico Tuscolana',
  description: `Informativa sull'utilizzo dei cookie tecnici sul portale ${SITE_CONFIG.domain}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/cookie-policy/`,
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Cookie Policy Idraulico Tuscolana"
        pageDescription="Informativa sull'utilizzo dei cookie sul portale Idraulico Tuscolana Roma."
        canonicalPath="/cookie-policy/"
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Cookie Policy Idraulico Tuscolana', url: '/cookie-policy/' },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: 'Cookie Policy Idraulico Tuscolana' }]} />

        <div className="card-light p-8 sm:p-12 space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Cookie Policy Idraulico Tuscolana
          </h1>
          <p>
            Il sito web <strong>{SITE_CONFIG.domain}</strong> utilizza esclusivamente cookie tecnici strettamente necessari al corretto funzionamento e alla sicurezza della navigazione statica su rete edge Cloudflare. Non vengono utilizzati cookie di profilazione pubblicitaria di terze parti.
          </p>
          <h2 className="text-xl font-extrabold text-slate-900">Tipologie di Cookie Utilizzati</h2>
          <p>
            I cookie tecnici impiegati garantiscono la corretta distribuzione del carico di rete, la protezione contro il traffico automatizzato malevolo e la normale fruizione delle pagine informative sugli 8 servizi e sulle 16 micro-zone di Roma Tuscolana. Per qualsiasi informazione è attivo il recapito {SITE_CONFIG.phoneDisplay}.
          </p>
        </div>
      </div>
    </main>
  );
}
