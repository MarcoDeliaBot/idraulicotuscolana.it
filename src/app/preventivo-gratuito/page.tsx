/**
 * Pagina Preventivo Gratuito — idraulicotuscolana.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Preventivo Gratuito Idraulico Tuscolana',
  description:
    'Richiedi un preventivo gratuito e trasparente per lavori idraulici e termoidraulici a Roma Tuscolana. Chiama lo 06 8590 2169 o invia la richiesta online.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/preventivo-gratuito/`,
  },
};

export default function PreventivoGratuitoPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Preventivo Gratuito Idraulico Tuscolana"
        pageDescription="Richiesta preventivo idraulico e termoidraulico per appartamenti, condomini e negozi a Roma Tuscolana."
        canonicalPath="/preventivo-gratuito/"
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Preventivo Gratuito Idraulico Tuscolana', url: '/preventivo-gratuito/' },
        ]}
      />

      <div className="max-w-5xl mx-auto space-y-10">
        <Breadcrumbs items={[{ label: 'Preventivo Gratuito Idraulico Tuscolana' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 card-light p-8 space-y-5">
            <span className="inline-block px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
              Costi Chiari Prima di Iniziare
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Preventivo Gratuito Idraulico Tuscolana
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Compila il modulo per programmare una sostituzione scaldabagno, un lavaggio chimico caldaia, l’installazione di un riduttore di pressione Caleffi, la revisione di una cassetta Pucci/Geberit o una ricerca perdita strumentale lungo Via Tuscolana.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li>✓ Preventivo dettagliato comunicato prima di ogni lavorazione</li>
              <li>✓ Ricambi originali certificati con garanzia 24 mesi</li>
              <li>✓ Rilascio Dichiarazione di Conformità D.M. 37/2008 e fattura per detrazioni fiscali o rimborsi assicurativi</li>
            </ul>
            <div className="pt-2">
              <CtaPhone label="Preferisci Parlare col Tecnico?" size="md" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
