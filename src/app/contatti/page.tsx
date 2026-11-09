/**
 * Pagina Contatti — idraulicotuscolana.it
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
  title: 'Contatti Idraulico Tuscolana',
  description:
    'Contatta Idraulico Tuscolana Roma per pronto intervento H24 o preventivi: chiama il numero 06 8590 2169 o compila il modulo tecnico.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contatti/`,
  },
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Contatti Idraulico Tuscolana"
        pageDescription="Recapito telefonico di pronto intervento H24 06 8590 2169 e modulo contatti per Roma Tuscolana."
        canonicalPath="/contatti/"
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Contatti Idraulico Tuscolana', url: '/contatti/' },
        ]}
      />

      <div className="max-w-5xl mx-auto space-y-10">
        <Breadcrumbs items={[{ label: 'Contatti Idraulico Tuscolana' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 card-light p-8 space-y-6">
            <span className="inline-block px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
              Linea Diretta H24 · 365 Giorni
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Contatti Idraulico Tuscolana
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Per emergenze idrauliche in corso (allagamenti, perdite sottotraccia, blocco totale WC o caldaia) utilizza esclusivamente il canale telefonico diretto presidiato H24.
            </p>

            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Pronto Intervento e Preventivi Telefonici
              </div>
              <div className="text-2xl sm:text-3xl font-black">{SITE_CONFIG.phoneDisplay}</div>
              <p className="text-xs text-slate-300">
                Risposta diretta del coordinatore tecnico · Arrivo in 20-30 minuti in tutto il quartiere Tuscolano / Appio-Tuscolano.
              </p>
              <div className="pt-1">
                <CtaPhone label="Chiama Ora" size="md" />
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
              <p>
                <strong>Area Operativa Primaria:</strong> Piazza di Ponte Lungo, Stazione Tuscolana, Furio Camillo, Viale Furio Camillo, Via Assisi, Villa Lais, Colli Albani, Arco di Travertino, Via del Mandrione, Porta Furba, Quadraro Vecchio, Numidio Quadrato, Lucio Sestio, Giulio Agricola, Subaugusta, Cinecittà.
              </p>
              <p>
                <strong>CAP Coperti:</strong> 00181, 00178, 00174, 00175 Roma (Municipio VII).
              </p>
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
