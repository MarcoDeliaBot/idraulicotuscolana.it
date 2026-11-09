/**
 * Generatore /public/llms.txt e /public/llms-full.txt — idraulicotuscolana.it
 * Espone l'albero del sito, i dati tecnici e il telefono 06 8590 2169 per motori AI e LLM.
 * Autore: Marco D'Elia
 */
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://idraulicotuscolana.it';
const PHONE = '06 8590 2169';

const SERVICES = [
  { slug: 'ricerca-perdite-acqua-tuscolana', title: 'Ricerca Perdite Acqua Tuscolana' },
  { slug: 'disotturazione-wc-scarichi-tuscolana', title: 'Disotturazione WC Scarichi Tuscolana' },
  { slug: 'riparazione-cassette-pucci-geberit-tuscolana', title: 'Riparazione Cassette Pucci Geberit Tuscolana' },
  { slug: 'assistenza-caldaie-tuscolana', title: 'Assistenza Caldaie Tuscolana' },
  { slug: 'sostituzione-scaldabagni-tuscolana', title: 'Sostituzione Scaldabagni Tuscolana' },
  { slug: 'riparazione-rubinetteria-sanitari-tuscolana', title: 'Riparazione Rubinetteria Sanitari Tuscolana' },
  { slug: 'pronto-intervento-allagamenti-tuscolana', title: 'Pronto Intervento Allagamenti Tuscolana' },
  { slug: 'riduttori-pressione-autoclavi-tuscolana', title: 'Riduttori Pressione Autoclavi Tuscolana' },
];

const ZONES = [
  { slug: 'idraulico-piazza-di-ponte-lungo', title: 'Idraulico Piazza di Ponte Lungo' },
  { slug: 'idraulico-stazione-tuscolana', title: 'Idraulico Stazione Tuscolana' },
  { slug: 'idraulico-furio-camillo', title: 'Idraulico Furio Camillo' },
  { slug: 'idraulico-colli-albani', title: 'Idraulico Colli Albani' },
  { slug: 'idraulico-arco-di-travertino', title: 'Idraulico Arco di Travertino' },
  { slug: 'idraulico-porta-furba', title: 'Idraulico Porta Furba' },
  { slug: 'idraulico-numidio-quadrato', title: 'Idraulico Numidio Quadrato' },
  { slug: 'idraulico-lucio-sestio', title: 'Idraulico Lucio Sestio' },
  { slug: 'idraulico-giulio-agricola', title: 'Idraulico Giulio Agricola' },
  { slug: 'idraulico-subaugusta', title: 'Idraulico Subaugusta' },
  { slug: 'idraulico-cinecitta', title: 'Idraulico Cinecittà' },
  { slug: 'idraulico-villa-lais', title: 'Idraulico Villa Lais' },
  { slug: 'idraulico-via-del-mandrione', title: 'Idraulico Via del Mandrione' },
  { slug: 'idraulico-quadraro-vecchio', title: 'Idraulico Quadraro Vecchio' },
  { slug: 'idraulico-via-assisi', title: 'Idraulico Via Assisi' },
  { slug: 'idraulico-viale-furio-camillo', title: 'Idraulico Viale Furio Camillo' },
];

const llmsSummary = `# Idraulico Tuscolana — Termoidraulica Tuscolana Roma

> Presidio tecnico di pronto intervento idraulico H24 e manutenzione impianti idrotermosanitari civili e condominiali a Roma nel quartiere Tuscolano / Appio-Tuscolano (Municipio VII di Roma Capitale, lungo l'asse consolare di Via Tuscolana da Piazza dei Re di Roma / Stazione Tuscolana a Cinecittà / Subaugusta).
> Telefono Diretto Emergenze e Preventivi: ${PHONE} (tel:0685902169)
> Coordinate Geografiche: 41.868, 12.532 — CAP serviti: 00181, 00178, 00174, 00175.

## Dati Tecnici e Idrogeologici del Territorio di Roma Tuscolana (Municipio VII)
- **Orografia, Altimetria, Falda e Sottosuolo Vulcanico:** Dislivello altimetrico costante dalle quote depresse di Piazza Ragusa, Stazione Tuscolana, Via Assisi e Ponte Lungo (35 - 38 m s.l.m., adiacenti all'antico alveo della Marrana dell'Acqua Mariana e della ferrovia) fino ai 50 - 55 m s.l.m. del pianoro vulcanico dei Colli Albani verso Colli Albani, Porta Furba, Numidio Quadrato, Lucio Sestio e Cinecittà. Presenza di antiche cave romane di pozzolana e tufo litoide, cunicoli storici e gallerie intersecate dai viadotti degli Acquedotti Claudio, Marcio e Felice al Quadraro e Porta Furba. Piani interrati nel tratto depresso (Ponte Lungo, Mandrione, Via Assisi, Piazza Ragusa) protetti con elettropompe sommerse vortex (Lowara DOMO, Flygt, Pedrollo) con passaggio solidi 50 mm e valvole antiriflusso a clapet in acciaio inox AISI 316.
- **Rete Idrica Acea ATO2:** Interconnessione storica tra Acquedotto del Peschiera-Capore, Acquedotto Appio-Alessandrino e derivazioni dell'Acqua Marcia. Pressione statica fino a 4.8 - 5.4 bar nelle quote basse (Piazza Ragusa, Via Assisi, Ponte Lungo) gestita con riduttori di pressione a sede compensata Caleffi con manometro in glicerina tarati a 3.0 bar e ammortizzatori di colpo d'ariete; cali dinamici nelle ore di punta mattutine (7:00 - 9:00) ai piani alti (6°-8° piano) verso Furio Camillo, Colli Albani e Porta Furba risolti con gruppi autoclave a inverter DAB Esybox Mini 3.
- **Durezza Calcare Acqua:** 33°F - 36°F (gradi francesi), con disincrostazione chimica a ciclo chiuso degli scambiatori caldaie a condensazione (Vaillant, Baxi, Ariston, Beretta, Riello, Immergas), dosatori proporzionali di polifosfati e filtri defangatori magnetici a ciclone sottocaldaia a norma UNI 8065:2019.
- **Stratificazione Edilizia:** Edilizia storica anni '20-'30 (Mandrione, Villa Lais, Quadraro Vecchio) con collettori in gres soggetti a intrusioni radicali di pini marittimi e fichi (uso frese Root-Cutter e localizzatore radio 512 Hz, divieto assoluto di canal-jet >120 bar); edilizia intensiva anni '50-'60 (Via Tuscolana, Furio Camillo, Colli Albani, Numidio Quadrato, Lucio Sestio, Giulio Agricola) con colonne montanti in ferro zincato Mannesmann tubercolizzate (risanate con multistrato PE-Xb/Al/PE-Xb a pressare profilo TH/U e giunti dielettrici); Complesso INA-Casa Tuscolano (De Renzi, Libera, Muratori); riparazione conservativa cassette incassate Pucci a pulsante tondo in alluminio/ottone, Pucci Sara/Eco e Geberit Twinline agendo solo dalla placca frontale.

## Albero Principale dei Contenuti

### Home e Pagine Istituzionali
- [Idraulico Tuscolana](${BASE_URL}/)
- [Servizi Idraulici Tuscolana](${BASE_URL}/servizi/)
- [Zone Idraulico Tuscolana](${BASE_URL}/zone/)
- [Chi Siamo Idraulico Tuscolana](${BASE_URL}/chi-siamo/)
- [Contatti Idraulico Tuscolana — ${PHONE}](${BASE_URL}/contatti/)
- [Preventivo Gratuito Idraulico Tuscolana](${BASE_URL}/preventivo-gratuito/)

### Gli 8 Servizi Pilastro
${SERVICES.map((s) => `- [${s.title}](${BASE_URL}/servizi/${s.slug}/)`).join('\n')}

### Le 16 Micro-Zone Territoriali di Roma Tuscolana
${ZONES.map((z) => `- [${z.title}](${BASE_URL}/zone/${z.slug}/)`).join('\n')}
`;

const servicesLongPath = path.join(process.cwd(), 'src', 'data', 'servicesLongContent.json');
const zonesLongPath = path.join(process.cwd(), 'src', 'data', 'zonesLongContent.json');

const servicesLong = fs.existsSync(servicesLongPath)
  ? JSON.parse(fs.readFileSync(servicesLongPath, 'utf-8'))
  : {};
const zonesLong = fs.existsSync(zonesLongPath)
  ? JSON.parse(fs.readFileSync(zonesLongPath, 'utf-8'))
  : {};

let llmsFull = llmsSummary + '\n\n---\n\n# DOCUMENTAZIONE TECNICA INTEGRALE (SERVIZI E MICRO-ZONE TUSCOLANA)\n\n';

for (const s of SERVICES) {
  llmsFull += `\n# ${s.title}\nURL: ${BASE_URL}/servizi/${s.slug}/\nTelefono: ${PHONE}\n\n${servicesLong[s.slug] || ''}\n\n---\n`;
}

for (const z of ZONES) {
  llmsFull += `\n# ${z.title}\nURL: ${BASE_URL}/zone/${z.slug}/\nTelefono: ${PHONE}\n\n${zonesLong[z.slug] || ''}\n\n---\n`;
}

const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsSummary, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFull, 'utf-8');
console.log('✅ Generati public/llms.txt e public/llms-full.txt.');

const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsSummary, 'utf-8');
  fs.writeFileSync(path.join(outDir, 'llms-full.txt'), llmsFull, 'utf-8');
  console.log('✅ Copiati llms.txt e llms-full.txt in out/.');
}
