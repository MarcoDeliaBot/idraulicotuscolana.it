/**
 * Home Page Principale — idraulicotuscolana.it
 * Regola Aurea 1:1: <title>Idraulico Tuscolana</title> === <h1>Idraulico Tuscolana</h1>
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import CtaPhone from '@/components/CtaPhone';
import ContactForm from '@/components/ContactForm';
import CostCalculator from '@/components/CostCalculator';
import JsonLd from '@/components/JsonLd';
import { SITE_CONFIG } from '@/data/siteConfig';
import { SERVICES_DATA } from '@/data/servicesData';
import { ZONES_DATA } from '@/data/zonesData';

export const metadata: Metadata = {
  title: 'Idraulico Tuscolana',
  description:
    'Idraulico Tuscolana a Roma (Quartiere Tuscolano / Appio-Tuscolano, Municipio VII): pronto intervento H24 in 20-30 minuti da Ponte Lungo e Furio Camillo a Porta Furba, Lucio Sestio e Cinecittà. Chiama 06 8590 2169.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/`,
  },
};

const HOME_FAQS = [
  {
    question: 'Qual è il tempo reale di arrivo del tecnico idraulico lungo Via Tuscolana a Roma?',
    answer:
      'Grazie ai presidi mobili posizionati strategicamente tra Piazza di Ponte Lungo / Furio Camillo e il nodo Numidio Quadrato / Lucio Sestio / Cinecittà, garantiamo l’arrivo presso qualsiasi civico del quartiere Tuscolano e Appio-Tuscolano (Municipio VII) entro 20-30 minuti dalla chiamata al numero 06 8590 2169, 24 ore su 24.',
  },
  {
    question: 'Perché tra Piazza Ragusa / Ponte Lungo e Porta Furba / Lucio Sestio la pressione dell’acqua cambia così tanto?',
    answer:
      'La direttrice della Via Tuscolana sale dalle quote depresse di Piazza Ragusa, Stazione Tuscolana, Via Assisi e Ponte Lungo (35-38 m s.l.m., lungo l’antico alveo della Marrana dell’Acqua Mariana) fino ai 50-55 m s.l.m. del pianoro vulcanico verso Colli Albani, Porta Furba, Numidio Quadrato, Lucio Sestio e Cinecittà. Nelle quote basse la pressione statica Acea ATO2 supera costantemente i 4,8 - 5,4 bar richiedendo riduttori di pressione a sede compensata Caleffi tarati a 3,0 bar, mentre ai piani alti (6°-8° piano) dei maxi-condominii verso Furio Camillo, Colli Albani e Porta Furba installiamo gruppi autoclave a inverter DAB Esybox Mini 3.',
  },
  {
    question: 'Come riparate le perdite d’acqua e le cassette Pucci/Geberit senza rompere le mattonelle storiche?',
    answer:
      'Per le perdite occulte nelle colonne montanti in ferro zincato Mannesmann dei palazzi intensivi anni ’50-’60 e nei cunicoli tecnici del Complesso INA-Casa Tuscolano utilizziamo termocamere radiometriche FLIR E8-XT, geofoni digitali Sewerin e gas tracciante Formiergas (95% Azoto, 5% Idrogeno). Per le cassette incassate Pucci a pulsante tondo in alluminio/ottone, Pucci Sara/Eco e Geberit Twinline operiamo esclusivamente dalla luce della placca frontale.',
  },
  {
    question: 'Come intervenite sugli scarichi ostruiti da radici al Mandrione, Villa Lais e Quadraro Vecchio?',
    answer:
      'Nell’edilizia storica e nei villini anni ’20-’30 tra Via del Mandrione, Villa Lais e Quadraro Vecchio i collettori orizzontali in gres e le braghe in piombo/ghisa subiscono intrusioni radicali di pini marittimi e fichi: impieghiamo esclusivamente stasatrici elettromeccaniche con frese taglia-radici (Root-Cutter) e videoispezione con localizzatore radio a 512 Hz, evitando categoricamente il canal-jet ad alta pressione (>120 bar) che lesionerebbe le tubazioni centenarie.',
  },
  {
    question: 'Rilasciate Dichiarazione di Conformità D.M. 37/2008 e perizia per l’assicurazione condominiale?',
    answer:
      'Certamente. Ogni intervento strutturale, sostituzione di tratto montante o ricerca perdita strumentale viene corredato da fattura elettronica, relazione tecnica con rilievi termografici/igrometrici per il rimborso della polizza Globale Fabbricati e Dichiarazione di Conformità ai sensi del D.M. 37/2008.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <JsonLd
        pageTitle="Idraulico Tuscolana"
        pageDescription="Pronto intervento idraulico e termoidraulico H24 a Roma Tuscolana e Quartiere Appio-Tuscolano (Municipio VII). Telefono 06 8590 2169."
        canonicalPath="/"
        faqs={HOME_FAQS}
      />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
              <span>Presidio Tecnico H24 · Quartiere Appio-Tuscolano (Municipio VII)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Idraulico Tuscolana
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Il pronto intervento idraulico e termoidraulico specializzato per i palazzi intensivi anni ’50-’60, il complesso razionalista INA-Casa, i villini storici anni ’20-’30 e i locali commerciali lungo l’asse di <strong>Via Tuscolana a Roma</strong> (da Stazione Tuscolana, Ponte Lungo e Furio Camillo a Colli Albani, Porta Furba, Lucio Sestio, Giulio Agricola, Subaugusta e Cinecittà). Interveniamo in <strong>20-30 minuti</strong> con diagnostica termografica non distruttiva, stasatrici elettromeccaniche Root-Cutter e ricambi originali Pucci, Geberit e Caleffi.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <CtaPhone label="Chiama Subito" size="lg" />
              <Link
                href="/preventivo-gratuito/"
                className="px-6 py-4 rounded-2xl border-2 border-slate-300 hover:border-sky-600 text-slate-900 hover:text-sky-700 font-bold text-sm sm:text-base text-center transition-colors bg-white"
              >
                Richiedi Preventivo Rapido
              </Link>
            </div>

            {/* 4 Indicatori Tecnici */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Arrivo Reale</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">20–30 Minuti</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Pressione Rete</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">2,6 – 5,4 bar</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Durezza Acqua</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">33°F – 36°F</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-sky-700 uppercase">Abilitazione</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">D.M. 37/2008</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* GLI 8 SERVIZI PILASTRO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="servizi">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
            8 Specializzazioni Tecniche Verticali
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Servizi di Termoidraulica e Pronto Intervento sulla Tuscolana
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Ogni intervento è progettato sulle reali condizioni idrogeologiche, altimetriche ed edilizie del Municipio VII: dalla localizzazione non distruttiva delle perdite alla manutenzione conservativa delle cassette Pucci a pulsante tondo e Geberit Twinline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div key={service.slug} className="card-light p-6 flex flex-col justify-between hover:border-sky-400 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200">
                    {service.priceFrom}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Arrivo: {service.responseTime}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  <Link href={`/servizi/${service.slug}/`} className="hover:text-sky-700 transition-colors">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.heroSummary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/servizi/${service.slug}/`}
                  className="text-xs font-extrabold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                >
                  <span>Approfondimento Tecnico</span>
                  <span>→</span>
                </Link>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors"
                >
                  Chiama
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INGEGNERIA IDRAULICA, GEOLOGIA ED EDILIZIA SPECIFICA DI ROMA TUSCOLANA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
              Dossier Ingegneristico Territoriale
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Geologia, Rete Idrica Acea ATO2 e Stratificazione Edilizia di Roma Tuscolana
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Operare come idraulico lungo la Via Tuscolana richiede la padronanza tecnica di quattro fattori strutturali che distinguono il quadrante Appio-Tuscolano dal resto della Capitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                1. Orografia, Altimetria, Falda e Sottosuolo Vulcanico
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Dalla Conca della Marrana a Ponte Lungo (35 m) al Pianoro di Cinecittà (55 m)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                La direttrice di Via Tuscolana presenta un dislivello costante che sale dalle quote depresse di <strong>Piazza Ragusa, Stazione Tuscolana, Via Assisi e Ponte Lungo (35 – 38 m s.l.m.</strong>, adiacenti all’antico alveo della Marrana dell’Acqua Mariana e del rilevato ferroviario) fino ai <strong>50 – 55 m s.l.m.</strong> del pianoro vulcanico dei Colli Albani verso <strong>Colli Albani, Porta Furba, Numidio Quadrato, Lucio Sestio e Cinecittà</strong>. Il sottosuolo è attraversato da antiche cave romane di pozzolana e tufo litoide e intersecato dai viadotti degli <strong>Acquedotti Claudio, Marcio e Felice</strong>. Nei piani interrati e corsie box di Ponte Lungo, Mandrione e Via Assisi installiamo elettropompe sommerse vortex Lowara DOMO, Flygt e Pedrollo (passaggio solidi 50 mm) con valvole antiriflusso a clapet in acciaio inox AISI 316.
              </p>
            </div>

            {/* Box 2 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                2. Rete Idrica Acea ATO2 e Dinamica delle Pressioni
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Sovrapressioni a 5,4 bar a Valle vs Cali Dinamici al 6°–8° Piano
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                L’alimentazione idrica nasce dall’interconnessione storica tra l’Acquedotto del Peschiera-Capore, l’Acquedotto Appio-Alessandrino e le derivazioni dell’Acqua Marcia. Nelle quote basse (<strong>Piazza Ragusa, Via Assisi, Ponte Lungo</strong>) la pressione statica supera costantemente i <strong>4,8 – 5,4 bar</strong>, causando colpi d’ariete, aperture delle valvole 3 bar delle caldaie e scoppi dei flessibili: qui installiamo riduttori di pressione a sede compensata Caleffi con manometro a bagno di glicerina tarati a 3,0 bar e ammortizzatori di colpo d’ariete. Nelle alture di <strong>Furio Camillo, Colli Albani e Porta Furba</strong>, per i piani alti (6°–8° piano) soggetti a cali mattutini (7:00–9:00), installiamo gruppi autoclave a inverter DAB Esybox Mini 3.
              </p>
            </div>

            {/* Box 3 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                3. Stratificazione Edilizia: Mandrione, INA-Casa e Palazzi Anni ’50–’60
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Frese Root-Cutter su Gres, Colonne Mannesmann e Cassette Pucci/Geberit
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Nei villini e case basse anni ’20–’30 di <strong>Mandrione, Villa Lais e Quadraro Vecchio</strong> i collettori in gres e le braghe in piombo/ghisa subiscono intrusioni di radici di pini marittimi e fichi: usiamo solo frese elettromeccaniche Root-Cutter e localizzatore a 512 Hz (con divieto assoluto di canal-jet &gt;120 bar). Nei maxi-condominii di 7–9 piani lungo <strong>Via Tuscolana, Numidio Quadrato, Lucio Sestio e Giulio Agricola</strong> e nel <strong>Complesso INA-Casa Tuscolano</strong> (De Renzi, Libera, Muratori) risaniamo le colonne in <strong>ferro zincato Mannesmann</strong> con multistrato PE-Xb/Al/PE-Xb a pressare (profilo TH/U) e giunti dielettrici, e ripariamo cassette <strong>Pucci a pulsante tondo</strong>, Pucci Sara/Eco e Geberit Twinline solo dalla placca frontale.
              </p>
            </div>

            {/* Box 4 */}
            <div className="card-light p-7 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                4. Chimica dell’Acqua e Durezza Calcarea (33°F – 36°F)
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Disincrostazione Chimica Scambiatori e Protezione UNI 8065:2019
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Con una durezza media dell’acqua erogata pari a <strong>33°F – 36°F (gradi francesi)</strong>, la precipitazione di carbonato di calcio intasa rapidamente gli scambiatori bitermici e secondari a piastre inox delle caldaie a condensazione (Vaillant, Baxi, Ariston, Beretta, Riello, Immergas) e le serpentine degli scaldabagni a gas. Eseguiamo lavaggi chimici a ciclo chiuso con pompe ad inversione di flusso ed acido organico tamponato, neutralizzazione alcalina, montaggio di dosatori proporzionali di polifosfati e filtri defangatori magnetici a ciclone sottocaldaia a norma <strong>UNI 8065:2019</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LE 16 MICRO-ZONE TERRITORIALI DI ROMA TUSCOLANA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="zone">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
            Copertura Capillare Toponomastica
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Le 16 Micro-Zone e Fermate Metro A Presidiate sulla Tuscolana
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Seleziona la tua micro-zona o fermata lungo l’asse Appio-Tuscolano per consultare i parametri idraulici locali (quota s.l.m., pressione statica Acea ATO2, patologie d’impianto prevalenti e casi studio documentati).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ZONES_DATA.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}/`}
              className="card-light p-5 hover:border-sky-500 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-sky-700">
                  <span>CAP {zone.cap}</span>
                  <span>Arrivo: {zone.responseTime}</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {zone.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Quota: {zone.altitude} · Pressione: {zone.pressureStatic.split('(')[0].trim()}
                </p>
                <div className="text-[11px] text-slate-600 pt-1">
                  <strong>Vie:</strong> {zone.mainStreets.slice(0, 3).join(', ')}
                </div>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 text-xs font-extrabold text-sky-700 group-hover:text-sky-900 flex items-center justify-between">
                <span>Scheda Tecnica di Zona</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TABELLA PARAMETRI TECNICI E CALCOLATORE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
                Trasparenza Tecnica ed Economica
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Prospetto Prestazioni, Strumentazione e Normative Applicate
              </h2>
              <p className="text-sm text-slate-600">
                Ogni intervento viene quotato preventivamente prima dell’inizio dei lavori, con impiego esclusivo di ricambi certificati e rilascio di garanzia di 24 mesi.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
                <thead className="bg-slate-100 text-slate-900 font-extrabold">
                  <tr>
                    <th className="px-4 py-3.5">Servizio Idraulico</th>
                    <th className="px-4 py-3.5">Strumentazione e Protocollo</th>
                    <th className="px-4 py-3.5">Normativa</th>
                    <th className="px-4 py-3.5">Tariffa Base</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Ricerca Perdite Acqua</td>
                    <td className="px-4 py-3">Termocamera FLIR E8-XT, Geofono Sewerin, Gas Tracciante H2/N2</td>
                    <td className="px-4 py-3">UNI EN 806-4</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 140</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-bold text-slate-900">Disotturazione WC e Scarichi</td>
                    <td className="px-4 py-3">Stasatrice Rothenberger R600, Fresa Root-Cutter + Sonda 512 Hz</td>
                    <td className="px-4 py-3">UNI EN 12056-2</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 85</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Riparazione Cassette Pucci / Geberit</td>
                    <td className="px-4 py-3">Sostituzione campana, sfera, sede silicone e galleggiante da placca</td>
                    <td className="px-4 py-3">UNI EN 14055</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 80</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-bold text-slate-900">Assistenza e Lavaggio Caldaie</td>
                    <td className="px-4 py-3">Pompa disincrostante a inversione, analisi fumi, defangatore</td>
                    <td className="px-4 py-3">UNI 8065:2019</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 90</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Sostituzione Scaldabagni</td>
                    <td className="px-4 py-3">Boiler elettrici Classe A/B e gas Low NOx con giunti dielettrici</td>
                    <td className="px-4 py-3">UNI 7129</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 90</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-bold text-slate-900">Riparazione Rubinetteria e Sanitari</td>
                    <td className="px-4 py-3">Rettifica passi rapidi, cartucce ceramiche, estrattori filetti</td>
                    <td className="px-4 py-3">UNI EN 817</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 75</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Pronto Intervento Allagamenti</td>
                    <td className="px-4 py-3">Pompe vortex Lowara DOMO / Flygt / Pedrollo, clapet AISI 316</td>
                    <td className="px-4 py-3">UNI EN 13564</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 95</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-bold text-slate-900">Riduttori Pressione e Autoclavi</td>
                    <td className="px-4 py-3">Riduttori Caleffi a sede compensata e inverter DAB Esybox Mini 3</td>
                    <td className="px-4 py-3">UNI EN 1567</td>
                    <td className="px-4 py-3 font-extrabold text-sky-700">Da € 120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-2 mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700">
            Risposte Tecniche Dirette
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Domande Frequenti su Idraulico Tuscolana Roma
          </h2>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((faq, idx) => (
            <div key={idx} className="card-light p-6 space-y-2">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                {faq.question}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Banner CTA Scuro ad Alto Contrasto */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-900/80 text-sky-300 border border-sky-700 text-xs font-extrabold uppercase tracking-wider">
            Centrale Operativa Roma Tuscolana H24
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Emergenza Idraulica in Corso sulla Tuscolana?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Parla direttamente con il tecnico abilitato di turno nel quadrante Appio-Tuscolano (Municipio VII). Arrivo garantito in 20-30 minuti da Ponte Lungo a Cinecittà con officina mobile attrezzata.
          </p>
          <div className="pt-2">
            <CtaPhone label="Chiama Subito" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
