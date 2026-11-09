/**
 * Pagina Privacy Policy GDPR — idraulicotuscolana.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy Idraulico Tuscolana',
  description: `Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per il portale ${SITE_CONFIG.domain}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Privacy Policy Idraulico Tuscolana"
        pageDescription="Informativa sul trattamento dei dati personali GDPR per Idraulico Tuscolana Roma."
        canonicalPath="/privacy-policy/"
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Privacy Policy Idraulico Tuscolana', url: '/privacy-policy/' },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy Idraulico Tuscolana' }]} />

        <div className="card-light p-8 sm:p-12 space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy Idraulico Tuscolana
          </h1>
          <p>
            La presente informativa descrive le modalità di gestione del portale web <strong>{SITE_CONFIG.domain}</strong> in riferimento al trattamento dei dati personali degli utenti che lo consultano o che richiedono assistenza tecnica telefonica al numero <strong>{SITE_CONFIG.phoneDisplay}</strong> o tramite modulo contatti, ai sensi dell’art. 13 del Regolamento UE 2016/679 (GDPR).
          </p>

          <h2 className="text-xl font-extrabold text-slate-900">1. Titolare e Finalità del Trattamento</h2>
          <p>
            I dati forniti volontariamente dall’utente (nome, recapito telefonico, indirizzo dell’intervento nel quartiere Appio-Tuscolano / Municipio VII e descrizione del guasto idraulico) sono trattati esclusivamente per ricontattare l’utente, formulare il preventivo richiesto ed eseguire l’intervento tecnico a domicilio, nonché per adempiere agli obblighi fiscali e di certificazione impiantistica D.M. 37/2008.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900">2. Base Giuridica e Conservazione</h2>
          <p>
            La base giuridica del trattamento è l’esecuzione di misure precontrattuali e contrattuali richieste dall’interessato (art. 6, par. 1, lett. b GDPR). I dati sono conservati per il solo tempo necessario all’erogazione del servizio e all’assolvimento degli obblighi di legge.
          </p>

          <h2 className="text-xl font-extrabold text-slate-900">3. Diritti dell’Interessato</h2>
          <p>
            Ai sensi degli artt. 15–22 del GDPR, l’interessato può esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione, limitazione od opposizione scrivendo a {SITE_CONFIG.email} o contattando il numero {SITE_CONFIG.phoneDisplay}.
          </p>
        </div>
      </div>
    </main>
  );
}
