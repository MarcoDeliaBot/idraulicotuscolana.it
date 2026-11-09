/**
 * Pagina Chi Siamo Istituzionale — idraulicotuscolana.it
 * Regola Aurea 1:1: <title> === <h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaPhone from '@/components/CtaPhone';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Chi Siamo Idraulico Tuscolana',
  description:
    'Presidio tecnico Termoidraulica Tuscolana Roma: tecnici abilitati D.M. 37/2008 specializzati negli impianti civili e condominiali del quartiere Appio-Tuscolano (Municipio VII). Tel: 06 8590 2169.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/chi-siamo/`,
  },
};

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <JsonLd
        pageTitle="Chi Siamo Idraulico Tuscolana"
        pageDescription="Struttura tecnica, strumentazione e abilitazioni normative di Idraulico Tuscolana Roma."
        canonicalPath="/chi-siamo/"
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Chi Siamo Idraulico Tuscolana', url: '/chi-siamo/' },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: 'Chi Siamo Idraulico Tuscolana' }]} />

        <div className="card-light p-8 sm:p-12 space-y-6">
          <span className="inline-block px-3 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-extrabold uppercase tracking-wider">
            Presidio Istituzionale D.M. 37/2008 · Roma Municipio VII
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Chi Siamo Idraulico Tuscolana
          </h1>
          <p className="text-base text-slate-700 leading-relaxed">
            <strong>Idraulico Tuscolana Roma</strong> (divisione operativa di <em>Termoidraulica Tuscolana</em>) è il presidio tecnico specializzato nella diagnostica strumentale, nella manutenzione conservativa e nel pronto intervento idraulico per i palazzi intensivi anni ’50-’60, il complesso razionalista INA-Casa Tuscolano, i villini storici anni ’20-’30 e i locali commerciali lungo l’intero asse di Via Tuscolana.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 pt-2">
            Approccio Ingegneristico al Patrimonio Edilizio del Tuscolano
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A differenza dei servizi generici privi di radicamento territoriale, il nostro protocollo operativo nasce dallo studio diretto della stratificazione edilizia e geologica tra Stazione Tuscolana, Via Assisi, Piazza di Ponte Lungo, Furio Camillo, Colli Albani, Porta Furba, Numidio Quadrato, Lucio Sestio, Giulio Agricola, Subaugusta e Cinecittà. Operiamo quotidianamente sulle colonne montanti in ferro zincato Mannesmann dei grandi fabbricati in cemento armato e sui collettori fognari in gres dei villini di Via del Mandrione, Villa Lais e Quadraro Vecchio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-extrabold text-slate-900">
                Diagnostica Zero-Demolizioni
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dotazione completa con termocamere radiometriche FLIR a microbolometro, geofoni digitali Sewerin e cercafughe a gas tracciante Formiergas (H2/N2) per localizzare perdite occulte sotto graniglie, marmette e gres senza demolizioni esplorative.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-base font-extrabold text-slate-900">
                Conformità Normativa e Perizie
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Abilitazione completa ai sensi del D.M. 37/2008 (Lettere C, D, E) e applicazione rigorosa delle norme UNI EN 806, UNI 7129, UNI 8065:2019 e UNI EN 12056, con redazione di perizie tecniche valide per i sinistri assicurativi condominiali.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <CtaPhone label="Chiama il Presidio Tecnico" size="lg" />
          </div>
        </div>
      </div>
    </main>
  );
}
