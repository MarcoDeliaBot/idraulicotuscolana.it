/**
 * Catalogo delle 16 Micro-Zone Territoriali di Roma Tuscolana — idraulicotuscolana.it
 * Regola Aurea 1:1: title === h1
 * Autore: Marco D'Elia
 */

export interface ZoneTechRow {
  parameter: string;
  value: string;
  note: string;
}

export interface ZoneCaseStudy {
  title: string;
  street: string;
  description: string;
  outcome: string;
}

export interface ZoneFaqItem {
  question: string;
  answer: string;
}

export interface ZoneItem {
  id: number;
  slug: string;
  title: string;
  h1: string;
  shortName: string;
  quadrant: string;
  cap: string;
  altitude: string;
  pressureStatic: string;
  waterHardness: string;
  groundwaterRisk: string;
  dominantBuildingEra: string;
  responseTime: string;
  mainStreets: string[];
  landmarks: string[];
  metaDescription: string;
  heroSummary: string;
  techTable: ZoneTechRow[];
  caseStudies: ZoneCaseStudy[];
  faqs: ZoneFaqItem[];
}

export const ZONES_DATA: ZoneItem[] = [
  {
    id: 1,
    slug: 'idraulico-piazza-di-ponte-lungo',
    title: 'Idraulico Piazza di Ponte Lungo',
    h1: 'Idraulico Piazza di Ponte Lungo',
    shortName: 'Piazza di Ponte Lungo',
    quadrant: 'Snodo Iniziale Via Tuscolana e Conca Marrana Acqua Mariana — Metro A Ponte Lungo',
    cap: '00181 / 00182',
    altitude: '36 – 38 m s.l.m.',
    pressureStatic: '4,9 – 5,4 bar al piano strada (sovrapressioni notturne critiche)',
    waterHardness: '34 °F (gradi francesi)',
    groundwaterRisk: 'Elevato — Antico alveo della Marrana dell’Acqua Mariana e trincea ferroviaria',
    dominantBuildingEra: 'Palazzi umbertino-razionalisti anni ’30–’50 e condomini intensivi anni ’60 (7–8 piani)',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazza di Ponte Lungo',
      'Via Tuscolana (tratto Re di Roma – Ponte Lungo)',
      'Via Albenga',
      'Via Gela',
      'Via Albalonga',
      'Via Modica',
      'Via Orvieto',
      'Via Acqui',
    ],
    landmarks: [
      'Stazione Metro A Ponte Lungo',
      'Ponte storico sulla ferrovia Roma-Pisa / Stazione Tuscolana',
      'Asse commerciale di Via Albenga e Via Gela',
      'Antico tracciato ipogeo della Marrana dell’Acqua Mariana',
    ],
    metaDescription:
      'Idraulico Piazza di Ponte Lungo a Roma Tuscolana: pronto intervento H24 in 15-20 minuti per perdite acqua, riduttori pressione Caleffi, pompe anti-allagamento e Pucci/Geberit. Tel: 06 8590 2169.',
    heroSummary:
      'Presidio termoidraulico immediato su Piazza di Ponte Lungo, Via Albenga e Via Gela. Specializzati nella gestione delle sovrapressioni idriche Acea (fino a 5,4 bar nella conca di Ponte Lungo), installazione di riduttori Caleffi, pompe sommerse vortex per cantine/box soggetti a riflusso della Marrana e riparazione conservativa di cassette Pucci e batterie Catis.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Piazza di Ponte Lungo',
        value: '36,5 metri s.l.m. (depressione storica della Marrana dell’Acqua Mariana)',
        note: 'Accumulo idrostatico con pressione di rete fino a 5,4 bar ai piani bassi',
      },
      {
        parameter: 'Pressione Statica Notturna Acea ATO2',
        value: '5,1 – 5,4 bar tra le ore 01:00 e le 05:30',
        note: 'Obbligatorio riduttore di pressione a sede compensata Caleffi tarato a 3,0 bar',
      },
      {
        parameter: 'Rischio Rigurgito Fognario Interrati',
        value: 'Critico durante bombe d’acqua su Via Gela, Via Albenga e Via Tuscolana',
        note: 'Presidio con valvole antiriflusso a clapet inox AISI 316 e pompe Lowara DOMO',
      },
      {
        parameter: 'Colonne Idriche Condominiali Prevalenti',
        value: 'Ferro zincato Mannesmann Ø 1"1/4 e braghe di scarico in piombo/ghisa',
        note: 'Sezionamento a freddo e innesto multistrato PE-Xb/Al/PE-Xb con giunti dielettrici',
      },
      {
        parameter: 'Interferenza Vibrazionale Sottosuolo',
        value: 'Doppia sollecitazione: galleria Metro A + passante ferroviario FL1/FL3/FL5',
        note: 'Ricerca perdite con geofono digitale Sewerin filtrato DSP e gas tracciante H2/N2',
      },
    ],
    caseStudies: [
      {
        title: 'Installazione riduttore di pressione Caleffi e riparazione perdita su colonna in Via Albenga',
        street: 'Via Albenga (adiacenze Piazza di Ponte Lungo)',
        description:
          'Al primo piano di uno stabile del 1954 la pressione notturna a 5,3 bar aveva provocato il cedimento di un raccordo filettato in ferro Mannesmann sottotraccia. Localizzato il punto con termocamera FLIR sotto una sola mattonella, sostituito il nodo con multistrato a pressare e installato un riduttore Caleffi a sede compensata tarato a 3,0 bar.',
        outcome: 'Infiltrazione bloccata in 2 ore e impianto stabilizzato a 3,0 bar costanti.',
      },
      {
        title: 'Posa valvola antiriflusso inox AISI 316 in magazzino commerciale su Piazza di Ponte Lungo',
        street: 'Piazza di Ponte Lungo',
        description:
          'Un negozio con deposito interrato subiva periodiche risalite di acque nere dalla piletta e dal WC di servizio durante gli acquazzoni estivi. Installata nel pozzetto d’ispezione una valvola antiriflusso a clapet in acciaio inox AISI 316 con leva di chiusura d’emergenza.',
        outcome: 'Azzeramento totale dei rigurgiti fognari durante i successivi eventi meteorici estremi.',
      },
    ],
    faqs: [
      {
        question: 'Perché a Piazza di Ponte Lungo scoppiano spesso i flessibili e gocciolano gli scaldabagni?',
        answer:
          'Piazza di Ponte Lungo si trova a soli 36 metri s.l.m., nel punto più depresso dell’asse Tuscolano dove passava la Marrana dell’Acqua Mariana. Per gravità idrostatica la rete Acea raggiunge i 5,0 - 5,4 bar: senza un riduttore di pressione Caleffi a sede compensata tarato a 3,0 bar, i flessibili si snervano e le valvole di sicurezza di caldaie e boiler aprono continuamente.',
      },
      {
        question: 'In quanto tempo arrivate per un’emergenza a Ponte Lungo, Via Albenga o Via Gela?',
        answer:
          'Il nostro presidio mobile staziona stabilmente lungo l’asse Ponte Lungo – Furio Camillo: raggiungiamo qualsiasi civico di Piazza di Ponte Lungo, Via Gela, Via Albenga e Via Albalonga in 15-20 minuti dalla chiamata allo 06 8590 2169.',
      },
      {
        question: 'Riparate le vecchie cassette Pucci e le batterie Catis nei palazzi storici di Ponte Lungo?',
        answer:
          'Sì. Disponiamo a bordo furgone di tutti i ricambi originali per cassette incassate Pucci (anche i modelli storici a pulsante tondo a vite) e per le cassette alte in ceramica con batteria Catis tipiche dei palazzi anni ’30-’50 attorno a Via Orvieto e Via Modica.',
      },
      {
        question: 'Come localizzate le perdite d’acqua se sotto Piazza di Ponte Lungo passano sia la Metro A sia i treni?',
        answer:
          'Le vibrazioni combinate della Metro A e del ponte ferroviario disturbano i vecchi geofoni analogici; noi utilizziamo geofoni digitali Sewerin con filtri DSP passa-banda abbinati all’iniezione di gas tracciante Formiergas (Azoto + Idrogeno), che individua la perdita chimicamente senza alcun errore acustico.',
      },
    ],
  },
  {
    id: 2,
    slug: 'idraulico-stazione-tuscolana',
    title: 'Idraulico Stazione Tuscolana',
    h1: 'Idraulico Stazione Tuscolana',
    shortName: 'Stazione Tuscolana',
    quadrant: 'Quadrante Ferroviario Piazza Ragusa / Via Monselice — Depressione Orografica Nord-Ovest',
    cap: '00181 / 00182',
    altitude: '35 – 37 m s.l.m.',
    pressureStatic: '4,8 – 5,4 bar costanti (massimo carico piezometrico del comparto)',
    waterHardness: '34 °F (gradi francesi)',
    groundwaterRisk: 'Elevato — Rilevato ferroviario Stazione Tuscolana e conca di Piazza Ragusa',
    dominantBuildingEra: 'Edilizia intensiva anni ’30–’50 (6–8 piani) ed ex opifici riconvertiti',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazzale della Stazione Tuscolana',
      'Piazza Ragusa',
      'Via Monselice',
      'Via Tuscolana (tratto iniziale civici 1–120)',
      'Via Mestre',
      'Via Adria',
      'Via Pordenone',
      'Via Belluno',
    ],
    landmarks: [
      'Stazione Ferroviaria di Roma Tuscolana (FL1, FL3, FL5)',
      'Piazza Ragusa e rimessa storica ATAC',
      'Via Monselice e collegamento pedonale con Metro Ponte Lungo',
      'Comparto residenziale storico tra Via Adria e Via Mestre',
    ],
    metaDescription:
      'Idraulico Stazione Tuscolana e Piazza Ragusa a Roma: pronto intervento H24 in 15-20 minuti per allagamenti, perdite acqua, scarichi e caldaie. Chiama 06 8590 2169.',
    heroSummary:
      'Intervento idraulico rapido H24 su Piazzale della Stazione Tuscolana, Piazza Ragusa, Via Monselice e Via Adria. Risoluzione di perdite occulte sollecitate dalle vibrazioni ferroviarie, taratura pressione idrica oltre 5 bar, disotturazione colonne in ghisa e manutenzione caldaie e scaldabagni.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Stazione Tuscolana / Piazza Ragusa',
        value: '35,4 metri s.l.m. (quota più bassa dell’intero quadrante Tuscolano)',
        note: 'Pressione statica Acea ATO2 costantemente compresa tra 4,8 e 5,4 bar',
      },
      {
        parameter: 'Sollecitazioni Meccaniche sulle Tubazioni',
        value: 'Vibrazioni a bassa frequenza (15–60 Hz) da convogli ferroviari merci e passeggeri',
        note: 'Allentamento giunti filettati a canapa; risanamento con raccordi elastici e multistrato',
      },
      {
        parameter: 'Impianti di Scarico Condominiali',
        value: 'Calate verticali in ghisa sferoidale/lamellare e braghe in piombo anni ’30–’50',
        note: 'Pulizia elettromeccanica a spirale controllata senza mai superare i 120 bar',
      },
      {
        parameter: 'Protezione Locali Seminterrati e Box',
        value: 'Stazioni di sollevamento con pompe sommerse Vortex (passaggio solidi 50 mm)',
        note: 'Prevenzione allagamenti nei sottopassi e nelle corsie box di Via Adria e Via Mestre',
      },
      {
        parameter: 'Trattamento Durezza Acqua (34 °F)',
        value: 'Dosatori proporzionali di polifosfati e defangatori magnetici ciclonici',
        note: 'Conformità obbligatoria alla norma tecnica UNI 8065:2019',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione perdita occulta causata da vibrazioni ferroviarie in Via Monselice',
        street: 'Via Monselice (fronte Stazione Tuscolana)',
        description:
          'In un appartamento al 3° piano le micro-vibrazioni del vicino fascio binari avevano criccato una saldatura a stagno sulla derivazione del bagno. Individuata con gas tracciante H2/N2 e riparata mediante raccordo a pressare e manicotto antivibrante.',
        outcome: 'Ripristino tenuta certificata a 6 bar di collaudo e perizia consegnata all’amministratore.',
      },
      {
        title: 'Sostituzione scaldabagno elettrico e installazione riduttore di pressione in Piazza Ragusa',
        street: 'Piazza Ragusa / Via Mestre',
        description:
          'Lo scaldabagno da 80 litri era andato in corto circuito e perdeva dalla flangia per la combinazione di pressione a 5,2 bar e assenza di giunti dielettrici. Installato nuovo boiler Classe B con giunti dielettrici e riduttore Caleffi a monte.',
        outcome: 'Acqua calda ripristinata in 90 minuti e pressione domestica stabilizzata a 3,0 bar.',
      },
    ],
    faqs: [
      {
        question: 'Le vibrazioni dei treni alla Stazione Tuscolana possono causare perdite nei tubi vecchi?',
        answer:
          'Sì. Negli stabili di Via Monselice, Piazzale della Stazione Tuscolana, Via Mestre e Via Adria le vibrazioni cicliche del traffico ferroviario accelerano l’affaticamento delle vecchie saldature in piombo e delle filettature in ferro zincato Mannesmann corrose. Per questo sostituiamo i tratti rigidi ammalorati con tubazioni multistrato PE-Xb/Al/PE-Xb che assorbono elasticamente le micro-vibrazioni.',
      },
      {
        question: 'Perché nei palazzi di Piazza Ragusa e Stazione Tuscolana si sentono forti colpi nei tubi?',
        answer:
          'Troviamo regolarmente pressioni statiche tra 4,8 e 5,4 bar perché l’area si trova a quota 35 m s.l.m.: quando l’elettrovalvola della lavatrice o un miscelatore a leva chiude di colpo il flusso, l’onda d’urto genera un violento colpo d’ariete. Risolviamo installando riduttori Caleffi a sede compensata e ammortizzatori a membrana.',
      },
      {
        question: 'Quanto tempo impiegate ad arrivare in zona Stazione Tuscolana / Piazza Ragusa?',
        answer:
          'Siamo operativi a pochi isolati di distanza e interveniamo in 15-20 minuti reali su Piazzale della Stazione Tuscolana, Piazza Ragusa, Via Monselice, Via Pordenone e Via Adria.',
      },
      {
        question: 'Eseguite disotturazioni urgenti per bar e attività commerciali attorno alla stazione?',
        answer:
          'Certamente. Interveniamo H24 con stasatrici elettromeccaniche compatte e silenziose per sbloccare bagni clienti, pozzetti degrassatori e linee lavaggio di bar, tavole calde e negozi senza interrompere l’attività.',
      },
    ],
  },
  {
    id: 3,
    slug: 'idraulico-furio-camillo',
    title: 'Idraulico Furio Camillo',
    h1: 'Idraulico Furio Camillo',
    shortName: 'Furio Camillo',
    quadrant: 'Cuore Residenziale Appio-Tuscolano e Nodo Metro A Furio Camillo',
    cap: '00181',
    altitude: '41 – 44 m s.l.m.',
    pressureStatic: '3,8 – 4,3 bar al piano strada (cali dinamici ai piani 6°–8°)',
    waterHardness: '35 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Transizione altimetrica tra conca della Marrana e pianoro tufaceo',
    dominantBuildingEra: 'Grandi condomini signorili e intensivi anni ’50–’60 (7–9 piani) in cemento armato',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Tuscolana (tratto Furio Camillo)',
      'Via Cesare Baronio',
      'Via Camilla',
      'Via Muzio Scevola',
      'Via Enea',
      'Via Eurialo',
      'Via Niso',
      'Via Clelia',
    ],
    landmarks: [
      'Stazione Metro A Furio Camillo',
      'Galleria Commerciale Appia / Via Cesare Baronio',
      'Parco di Villa Lais (versante Via Cesare Baronio)',
      'Parrocchia di Santa Maria Ausiliatrice in Via Tuscolana',
    ],
    metaDescription:
      'Idraulico Furio Camillo a Roma Tuscolana: pronto intervento H24 in 15-20 minuti per cassette Pucci/Geberit, perdite acqua, caldaie, scaldabagni e scarichi. Tel: 06 8590 2169.',
    heroSummary:
      'Assistenza idraulica e termoidraulica specializzata nel quadrante Furio Camillo (Via Cesare Baronio, Via Camilla, Via Clelia, Via Eurialo). Esperti nel risanamento delle colonne montanti in ferro zincato Mannesmann dei palazzi di 8 piani, riparazione conservativa di cassette Pucci a pulsante tondo e Geberit e sblocco scarichi e caldaie.',
    techTable: [
      {
        parameter: 'Quota Media Quadrante Furio Camillo',
        value: '42,5 metri s.l.m. (gradiente intermedio in salita verso Colli Albani)',
        note: 'Pressione equilibrata ai piani medi; cali mattutini ai piani 6°–8° ed attici',
      },
      {
        parameter: 'Tipologia Impianti Idrici Condominiali',
        value: 'Colonne montanti in ferro zincato Mannesmann (1952–1965) incassate nei cavedi',
        note: 'Frequente fenomeno dell’acqua rossa e restringimento lume interno per tubercolizzazione',
      },
      {
        parameter: 'Cassette di Scarico Incassate Storiche',
        value: 'Altissima densità di Pucci pulsante tondo in ottone/alluminio e Pucci Sara/Eco',
        note: 'Sostituzione sfere, sedi in silicone e galleggianti senza rompere le maioliche',
      },
      {
        parameter: 'Impianti Termici Prevalenti',
        value: 'Centralizzati con contabilizzazione + scaldabagno ACS o termoautonomi a condensazione',
        note: 'Lavaggio chimico scambiatori (durezza 35 °F) e posa giunti dielettrici su boiler',
      },
      {
        parameter: 'Diagnostica Perdite Sottotraccia',
        value: 'Termografia FLIR E8-XT + Gas Tracciante H2/N2 sotto marmette e parquet',
        note: 'Rilascio perizia tecnica certificata per rimborso polizza Globale Fabbricati',
      },
    ],
    caseStudies: [
      {
        title: 'Ricerca perdita non distruttiva sotto pavimento in marmo in Via Cesare Baronio',
        street: 'Via Cesare Baronio (zona Metro Furio Camillo)',
        description:
          'Un appartamento signorile al 5° piano causava infiltrazioni al piano sottostante senza segni di umidità visibili in superficie. Tramite termocamera FLIR E8-XT e geofono digitale abbiamo individuato una micro-perdita sul T di derivazione dell’acqua calda sotto una lastra di marmo nel disimpegno.',
        outcome: 'Rimozione conservativa di un singolo elemento, riparazione a pressare e marmo ricollocato intatto.',
      },
      {
        title: 'Riparazione cassetta Pucci a pulsante tondo e sostituzione passo rapido in Via Clelia',
        street: 'Via Clelia / Via Camilla',
        description:
          'Nel bagno originale anni ’60 la cassetta Pucci perdeva ininterrottamente nella tazza e il passo rapido generale girava a vuoto. Sostituita la sede interna in silicone, la sfera e il galleggiante dalla placca e rettificata la sede del passo rapido con fresa al tungsteno.',
        outcome: 'Arresto immediato dello spreco idrico e ripristino chiusura generale senza rompere una piastrella.',
      },
    ],
    faqs: [
      {
        question: 'Perché nei palazzi anni ’50-’60 di Furio Camillo dai rubinetti esce poca acqua calda o acqua rossastra?',
        answer:
          'Negli stabili storici di Via Cesare Baronio, Via Camilla, Via Clelia e Via Eurialo le tubazioni originarie in ferro zincato Mannesmann subiscono dopo 60 anni una forte ossidazione interna mista a calcare (tubercolizzazione), che riduce il passaggio dell’acqua a pochi millimetri. Eseguiamo il lavaggio o la sostituzione mirata del collettore con multistrato PE-Xb/Al/PE-Xb.',
      },
      {
        question: 'Potete riparare una cassetta Pucci vecchia senza rompere il rivestimento del bagno?',
        answer:
          'Assolutamente sì. Lavoriamo ogni giorno sulle cassette Pucci storiche a pulsante tondo e sulle Pucci Sara/Eco tipiche degli appartamenti di Furio Camillo, sostituendo guarnizione di sede, sfera e galleggiante silenzioso solo attraverso l’apertura frontale.',
      },
      {
        question: 'Cosa fate se al 7° o 8° piano a Furio Camillo la doccia si spegne al mattino per poca pressione?',
        answer:
          'Nelle ore di punta (7:00-9:00) l’assorbimento simultaneo dei primi 5 piani abbatte la pressione dinamica agli ultimi piani sotto 1 bar. Installiamo in balcone o ripostiglio un gruppo elettronico a inverter ultra-silenzioso DAB Esybox Mini 3 (43 dB) che garantisce 3,2 bar costanti.',
      },
      {
        question: 'In quanto tempo arrivate a Furio Camillo in caso di tubo rotto o WC bloccato?',
        answer:
          'Garantiamo l’arrivo in 15-20 minuti su tutta l’area di Furio Camillo, Piazza Santa Maria Ausiliatrice, Via Cesare Baronio, Via Muzio Scevola e Via Enea chiamando lo 06 8590 2169.',
      },
    ],
  },
  {
    id: 4,
    slug: 'idraulico-colli-albani',
    title: 'Idraulico Colli Albani',
    h1: 'Idraulico Colli Albani',
    shortName: 'Colli Albani',
    quadrant: 'Snodo Largo dei Colli Albani / Via Appia Nuova / Via Tuscolana — Metro A Colli Albani',
    cap: '00179 / 00181',
    altitude: '46 – 50 m s.l.m.',
    pressureStatic: '3,2 – 3,9 bar al piano strada (cali dinamici marcati ai piani 6°–9°)',
    waterHardness: '35 °F (gradi francesi)',
    groundwaterRisk: 'Basso-Moderato — Pianoro piroclastico ai margini del Parco della Caffarella',
    dominantBuildingEra: 'Maxi-condominii intensivi anni ’50–’60 (8–9 piani) ad altissima densità abitativa',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Largo dei Colli Albani',
      'Via Mario Menghini',
      'Via Arrigo Davila',
      'Via delle Cave',
      'Via Genzano',
      'Via Ariccia',
      'Via Albano',
      'Via Rocca di Papa',
    ],
    landmarks: [
      'Stazione Metro A Colli Albani',
      'Largo dei Colli Albani e Parco dedicato a Remootti',
      'Asse di collegamento Via delle Cave tra Via Appia Nuova e Via Tuscolana',
      'Accesso nord-orientale alla Valle della Caffarella',
    ],
    metaDescription:
      'Idraulico Colli Albani a Roma: pronto intervento H24 in 15-20 minuti in Largo dei Colli Albani, Via delle Cave e Via Mario Menghini. Chiama lo 06 8590 2169.',
    heroSummary:
      'Pronto intervento idraulico H24 per i grandi condomini intensivi di Largo dei Colli Albani, Via delle Cave, Via Mario Menghini e Via Arrigo Davila. Specialisti in autoclavi a inverter per piani alti, ricerca perdite non distruttiva su colonne condominiali, disotturazione scarichi e assistenza caldaie e scaldabagni.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Largo dei Colli Albani',
        value: '48,2 metri s.l.m. (salita sul banco vulcanico verso i Castelli Romani)',
        note: 'Cali di portata dinamica nelle ore di punta tra il 6° e il 9° piano',
      },
      {
        parameter: 'Tipologia Fabbricati Prevalente',
        value: 'Maxi-condominii da 30 a 70 appartamenti per scala (costruzione 1955–1968)',
        note: 'Colonne fecali in ghisa/eternit e montanti idrici in ferro zincato Mannesmann',
      },
      {
        parameter: 'Durezza Calcarea Acqua Potabile',
        value: '35 °F — Forte incrostazione su scaldabagni elettrici e scambiatori caldaie',
        note: 'Lavaggio chimico a inversione di flusso e posa dosatori polifosfati UNI 8065',
      },
      {
        parameter: 'Soluzione Cali Pressione Piani Alti',
        value: 'Gruppi autoclave autonomi a inverter DAB Esybox Mini 3 o revisione centrale condominiale',
        note: 'Ripristino portata costante a 3,2 bar senza rumorosità (43 dB)',
      },
      {
        parameter: 'Strumentazione Ricerca Guasti Condominiali',
        value: 'Termocamera FLIR + Geofono Sewerin + Endoscopio per cavedi verticali',
        note: 'Documentazione fotografica e peritale per amministratori di condominio',
      },
    ],
    caseStudies: [
      {
        title: 'Individuazione perdita nel cavedio condominiale tra 5° e 6° piano in Via delle Cave',
        street: 'Via delle Cave (tratto Largo dei Colli Albani – Via Tuscolana)',
        description:
          'Una perdita occulta bagnava tre appartamenti sovrapposti. Attraverso il foro della cassetta d’ispezione abbiamo introdotto il videoendoscopio Full HD e la sonda termografica, individuando la fessurazione sulla braga della colonna montante al 6° piano.',
        outcome: 'Apertura muraria di soli 30x30 cm, riparazione definitiva e relazione tecnica per l’assicurazione.',
      },
      {
        title: 'Disotturazione colonna scarico cucine e lavaggio caldaia in Via Arrigo Davila',
        street: 'Via Arrigo Davila (Colli Albani)',
        description:
          'Blocco totale dello scarico cucina al 3° piano per tappo di grassi e calcare, unito a caldaia in blocco per scambiatore secondario intasato. Eseguita fresatura elettromeccanica della tubazione e disincrostazione chimica dello scambiatore.',
        outcome: 'Scarico libero al 100% e acqua calda sanitaria riportata a piena portata in un unico intervento.',
      },
    ],
    faqs: [
      {
        question: 'Perché nei palazzi alti di Largo dei Colli Albani e Via Mario Menghini manca pressione al mattino?',
        answer:
          'A Colli Albani la quota sale a quasi 50 metri s.l.m. e gli edifici raggiungono gli 8-9 piani con decine di famiglie per scala. Tra le 7:00 e le 9:00 il prelievo simultaneo abbatte la pressione ai piani alti: risolviamo installando gruppi autoclave silenziosi a inverter DAB Esybox Mini 3 o revisionando le autoclavi condominiali.',
      },
      {
        question: 'Collaborate con gli amministratori di condominio della zona Colli Albani / Via delle Cave?',
        answer:
          'Sì, forniamo supporto tecnico continuativo agli studi di amministrazione condominiale per ricerche perdite certificate, riparazione colonne montanti, videoispezioni fognarie e manutenzione centrali idriche.',
      },
      {
        question: 'Sostituite gli scaldabagni elettrici nei palazzi con riscaldamento centralizzato di Colli Albani?',
        answer:
          'Certamente. La maggioranza dei grandi stabili di Via Albano, Via Genzano, Via Ariccia e Via Mario Menghini ha il riscaldamento centralizzato e utilizza boiler elettrici o a gas per l’acqua calda: li ripariamo o sostituiamo in giornata montando sempre i giunti dielettrici.',
      },
      {
        question: 'In quanto tempo arrivate a Colli Albani chiamando lo 06 8590 2169?',
        answer:
          'Arriviamo in 15-20 minuti su Largo dei Colli Albani, Via delle Cave, Via Mario Menghini, Via Arrigo Davila e tutte le traverse intitolate ai Castelli Romani.',
      },
    ],
  },
  {
    id: 5,
    slug: 'idraulico-arco-di-travertino',
    title: 'Idraulico Arco di Travertino',
    h1: 'Idraulico Arco di Travertino',
    shortName: 'Arco di Travertino',
    quadrant: 'Cerniera Via Tuscolana / Via dell’Arco di Travertino / Parco Archeologico Tombe Latine',
    cap: '00178 / 00181',
    altitude: '47 – 51 m s.l.m.',
    pressureStatic: '3,3 – 4,0 bar (escursioni pressorie tra palazzine basse e condomini)',
    waterHardness: '35 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Sottosuolo di tufo e pozzolana con antiche cavità estrattive romane',
    dominantBuildingEra: 'Misto: palazzine anni ’50–’60, villini con giardino e complessi residenziali anni ’70',
    responseTime: '20 minuti',
    mainStreets: [
      'Via dell’Arco di Travertino',
      'Via Tuscolana (innesto Arco di Travertino)',
      'Via Carroceto',
      'Via Grottaferrata',
      'Via Frascati',
      'Via Demetriade',
      'Via del Quadraro (tratto iniziale)',
      'Via Passo Corese',
    ],
    landmarks: [
      'Stazione Metro A Arco di Travertino e Capolinea ATAC',
      'Parco Archeologico delle Tombe di Via Latina',
      'Snodo viario tra Via Tuscolana, Via delle Cave e Via Appia Nuova',
      'Complesso residenziale di Via Carroceto e Via Demetriade',
    ],
    metaDescription:
      'Idraulico Arco di Travertino a Roma Tuscolana: pronto intervento H24 in 20 minuti per disotturazioni Root-Cutter, ricerca perdite, caldaie e cassette Pucci/Geberit. Tel: 06 8590 2169.',
    heroSummary:
      'Servizio idraulico H24 nel quadrante Arco di Travertino (Via dell’Arco di Travertino, Via Carroceto, Via Demetriade, Via Grottaferrata). Interventi con frese taglia-radici sui collettori in gres vicino al Parco delle Tombe Latine, ricerca perdite con gas tracciante su terreni tufacei e assistenza caldaie, Pucci e Geberit.',
    techTable: [
      {
        parameter: 'Morfologia Geologica Sottosuolo',
        value: 'Banco di Tufo Lionato e pozzolane rosse con cavità archeologiche/estrattive',
        note: 'Possibili assestamenti differenziali sui collettori fognari interrati',
      },
      {
        parameter: 'Patologia Scarichi Fognari Orizzontali',
        value: 'Intrusione radicale da alberature ad alto fusto (pini e cipressi area Tombe Latine)',
        note: 'Impiego esclusivo di stasatrice Rothenberger R600 con fresa Root-Cutter e sonda 512 Hz',
      },
      {
        parameter: 'Ricerca Perdite Reti Esterne e Giardini',
        value: 'Pressurizzazione con gas tracciante Formiergas (95% N2 + 5% H2)',
        note: 'Individuazione fughe idriche che drenano nelle pozzolane senza affiorare',
      },
      {
        parameter: 'Pressione Idrica Media Acea ATO2',
        value: '3,3 – 4,0 bar a livello stradale (quota 49 m s.l.m.)',
        note: 'Installazione riduttori Caleffi nei seminterrati e autoclavi DAB agli attici',
      },
      {
        parameter: 'Trattamento Calcare Impianti Termici',
        value: 'Durezza 35 °F — Disincrostazione chimica e posa defangatori magnetici',
        note: 'Adeguamento impianti termici alla norma UNI 8065:2019',
      },
    ],
    caseStudies: [
      {
        title: 'Rimozione radici da collettore fognario e mappatura pozzetto in Via Demetriade',
        street: 'Via Demetriade / Via dell’Arco di Travertino',
        description:
          'Una palazzina adiacente all’area verde delle Tombe Latine presentava rigurgiti fognari al piano terra. La videoispezione ha rilevato radici di pino penetrate in un giunto del tubo in gres a 7 metri dall’edificio. Fresate le radici con testina Root-Cutter e localizzato il pozzetto sepolto con sonda a 512 Hz.',
        outcome: 'Deflusso ripristinato al 100% senza scavi distruttivi nel cortile condominiale.',
      },
      {
        title: 'Lavaggio chimico caldaia a condensazione e riparazione Geberit in Via Carroceto',
        street: 'Via Carroceto (Arco di Travertino)',
        description:
          'Intervento combinato per caldaia Beretta che andava in blocco sanitario (errore sovratemperatura per calcare 35°F) e cassetta Geberit incassata rumorosa. Eseguito lavaggio acido tamponato dello scambiatore e sostituita la valvola a galleggiante Geberit Tipo 380.',
        outcome: 'Acqua calda subito stabile e ricarica WC silenziosa (< 12 dB).',
      },
    ],
    faqs: [
      {
        question: 'Perché nei pressi di Arco di Travertino e delle Tombe Latine si otturano spesso le fognature condominiali?',
        answer:
          'La ricchezza di pini marittimi, cipressi e alberature storiche tra Via dell’Arco di Travertino, Via Demetriade e Via Passo Corese spinge gli apparati radicali a cercare umidità nei giunti dei vecchi collettori in gres, mentre i cedimenti del terreno pozzolanico creano leggere contropendenze. Noi fresiamo le radici meccanicamente con testine Root-Cutter e mappiamo la linea con telecamera a 512 Hz.',
      },
      {
        question: 'Come trovate una perdita d’acqua in un cortile o giardino ad Arco di Travertino se il terreno assorbe tutto?',
        answer:
          'Il sottosuolo pozzolanico drena l’acqua verso il basso impedendo la formazione di pozzanghere in superficie. Svuotiamo la tubazione e iniettiamo gas tracciante ecologico (Azoto + Idrogeno): l’idrogeno attraversa pozzolana, tufo e asfalto ed emerge esattamente sopra il punto di rottura.',
      },
      {
        question: 'In quanto tempo raggiungete Via dell’Arco di Travertino, Via Carroceto e Via Grottaferrata?',
        answer:
          'Grazie alla vicinanza immediata con lo snodo di Via Tuscolana e Via delle Cave, arriviamo in 20 minuti dalla chiamata al numero 06 8590 2169.',
      },
      {
        question: 'Riparate sia cassette Pucci sia cassette Geberit nei condomini di Arco di Travertino?',
        answer:
          'Sì, abbiamo a bordo tutti i ricambi originali per Pucci (pulsante tondo storico, Sara, Eco) e Geberit (Twinline, Sigma, Unica), operando sempre senza rompere le piastrelle.',
      },
    ],
  },
  {
    id: 6,
    slug: 'idraulico-porta-furba',
    title: 'Idraulico Porta Furba',
    h1: 'Idraulico Porta Furba',
    shortName: 'Porta Furba',
    quadrant: 'Snodo Storico Acquedotto Felice / Via Tuscolana / Quadraro — Metro A Porta Furba',
    cap: '00174 / 00175',
    altitude: '48 – 52 m s.l.m.',
    pressureStatic: '3,1 – 3,8 bar (cali dinamici mattutini ai piani alti 6°–8°)',
    waterHardness: '35 – 36 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Intersezione viadotti Acquedotti Felice, Marcio e Claudio e cavità tufacee',
    dominantBuildingEra: 'Edilizia mista: fabbricati storici anni ’20–’40, palazzi intensivi anni ’50–’60 e villini',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Tuscolana (tratto Porta Furba – Acquedotto Felice)',
      'Piazza di Porta Furba',
      'Via degli Angeli',
      'Via dei Lentuli',
      'Via dei Fulvi',
      'Via Filippo Re',
      'Via Sestio Menas',
      'Via Monte del Grano',
    ],
    landmarks: [
      'Arco di Porta Furba (Acquedotto Felice di Papa Sisto V e Fontana di Clemente XII)',
      'Stazione Metro A Porta Furba – Quadraro',
      'Mausoleo di Monte del Grano e Parco di Tor Fiscale',
      'Incrocio storico tra Via Tuscolana, Via del Mandrione e Via degli Angeli',
    ],
    metaDescription:
      'Idraulico Porta Furba Quadraro a Roma Tuscolana: pronto intervento H24 in 15-20 minuti per perdite acqua, scarichi, cassette Pucci/Geberit, caldaie e autoclavi. Tel: 06 8590 2169.',
    heroSummary:
      'Presidio termoidraulico H24 a Porta Furba – Quadraro (Piazza di Porta Furba, Via degli Angeli, Via dei Lentuli, Via dei Fulvi). Specializzati nel risanamento di impianti storici adiacenti agli Acquedotti Felice e Claudio, ricerca perdite non distruttiva, sblocco scarichi con frese Root-Cutter e installazione autoclavi DAB Esybox.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Soglia di Porta Furba',
        value: '49,5 metri s.l.m. (varco storico dell’Acquedotto Felice sul pianoro tufaceo)',
        note: 'Transizione idraulica tra il settore medio e l’altopiano di Numidio Quadrato / Cinecittà',
      },
      {
        parameter: 'Durezza Acqua Rete Locale',
        value: '35 – 36 °F (elevata concentrazione di bicarbonati di calcio)',
        note: 'Forte calcificazione di serpentine scaldabagni, soffioni doccia e valvole Pucci/Geberit',
      },
      {
        parameter: 'Coesistenza Edilizia Storica e Intensiva',
        value: 'Palazzi di 7–8 piani su Via Tuscolana + case basse anni ’30 su Via degli Angeli / Via dei Lentuli',
        note: 'Doppio protocollo: multistrato su colonne Mannesmann e Root-Cutter su collettori in gres',
      },
      {
        parameter: 'Vibrazioni Galleria Metro A Porta Furba',
        value: 'Passaggio superficiale convogli Metro A sotto l’asse di Via Tuscolana',
        note: 'Impiego di geofoni digitali Sewerin con filtro antirumore e raccordi antivibranti',
      },
      {
        parameter: 'Surpressione Idrica Piani Alti (6°–8°)',
        value: 'Gruppi elettronici a inverter DAB Esybox Mini 3 installati in nicchia balcone',
        note: 'Eliminazione cali di portata mattutini senza disturbare i condomini (43 dB)',
      },
    ],
    caseStudies: [
      {
        title: 'Sblocco scarico fognario e riparazione braga in piombo in Via dei Lentuli a Porta Furba',
        street: 'Via dei Lentuli (adiacenze Metro Porta Furba)',
        description:
          'In una palazzina d’epoca una perdita dalla braga in piombo del WC al 1° piano si accompagnava a un’ostruzione parziale della colonna. Eseguita disostruzione delicata con spirale elettromeccanica a frizione e sostituzione della braga corrosa con raccordo tecnico in PEAD ad alta densità.',
        outcome: 'Eliminazione definitiva dell’infiltrazione sul soffitto del piano terra e scarico perfetto.',
      },
      {
        title: 'Manutenzione straordinaria cassetta Pucci Sara e decalcificazione caldaia in Via dei Fulvi',
        street: 'Via dei Fulvi (Porta Furba – Quadraro)',
        description:
          'L’acqua particolarmente calcarea (36°F) aveva bloccato il galleggiante della cassetta Pucci Sara e ridotto a un filo l’acqua calda della caldaia Ariston. Sostituito il gruppo batteria e galleggiante Pucci da placca ed eseguito lavaggio chimico dello scambiatore con posa di dosatore polifosfati.',
        outcome: 'Impianto sanitario e termico rimesso a nuovo in meno di 2 ore.',
      },
    ],
    faqs: [
      {
        question: 'In quanto tempo arrivate a Porta Furba, Via degli Angeli e Via dei Lentuli?',
        answer:
          'Stazionando stabilmente lungo l’asse di Via Tuscolana tra Porta Furba e Numidio Quadrato, raggiungiamo Piazza di Porta Furba, Via degli Angeli, Via dei Lentuli, Via dei Fulvi e Via Monte del Grano in 15-20 minuti dalla chiamata allo 06 8590 2169.',
      },
      {
        question: 'Perché a Porta Furba il calcare intasa così velocemente caldaie, scaldabagni e cassette WC?',
        answer:
          'Nel quadrante di Porta Furba la durezza dell’acqua tocca i 35-36°F. A questa concentrazione, appena l’acqua supera i 50°C dentro caldaie e scaldabagni il carbonato di calcio precipita in scaglie solide. Risolviamo con lavaggi chimici a ciclo chiuso e l’installazione di dosatori proporzionali di polifosfati a norma UNI 8065:2019.',
      },
      {
        question: 'Come intervenite sulle vecchie tubazioni delle case storiche vicino all’Acquedotto Felice?',
        answer:
          'Operiamo con estrema cautela: per gli scarichi in gres o piombo vietiamo il canal-jet ad alta pressione e usiamo solo stasatrici elettromeccaniche a frizione controllata; per le perdite usiamo termocamera FLIR e gas tracciante aprendo solo il punto esatto del guasto.',
      },
      {
        question: 'Potete aumentare la pressione dell’acqua negli attici dei palazzi alti su Via Tuscolana a Porta Furba?',
        answer:
          'Sì, installiamo il gruppo autoclave compatto a inverter DAB Esybox Mini 3, che stabilizza la pressione a oltre 3 bar anche quando tutto il palazzo preleva acqua contemporaneamente.',
      },
    ],
  },
  {
    id: 7,
    slug: 'idraulico-numidio-quadrato',
    title: 'Idraulico Numidio Quadrato',
    h1: 'Idraulico Numidio Quadrato',
    shortName: 'Numidio Quadrato',
    quadrant: 'Dorsale Commerciale e Intensiva Via Tuscolana / Viale Spartaco — Metro A Numidio Quadrato',
    cap: '00174 / 00175',
    altitude: '50 – 53 m s.l.m.',
    pressureStatic: '3,0 – 3,7 bar al piano strada (cali dinamici ai piani 6°–8°)',
    waterHardness: '35 °F (gradi francesi)',
    groundwaterRisk: 'Basso-Moderato — Pianoro vulcanico con cunicoli tecnici INA-Casa sul versante est',
    dominantBuildingEra: 'Palazzi intensivi anni ’50–’60 (7–9 piani) su Via Tuscolana e Complesso INA-Casa',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Tuscolana (tratto Metro Numidio Quadrato)',
      'Via Scribonio Curione',
      'Viale Spartaco (tratto iniziale)',
      'Via Selinunte',
      'Via Cartagine',
      'Via dei Consoli',
      'Via Licinio Murena',
      'Via Cincinnato',
    ],
    landmarks: [
      'Stazione Metro A Numidio Quadrato',
      'Complesso architettonico razionalista INA-Casa Tuscolano (Largo Spartaco / Via Selinunte)',
      'Asse commerciale ad alta densità di Via Tuscolana e Via Scribonio Curione',
      'Viale dei Consoli e collegamento con Parco degli Acquedotti',
    ],
    metaDescription:
      'Idraulico Numidio Quadrato a Roma Tuscolana: pronto intervento H24 in 15-20 minuti in Via Scribonio Curione, Via dei Consoli e INA-Casa. Chiama lo 06 8590 2169.',
    heroSummary:
      'Pronto intervento idraulico e termoidraulico H24 a Numidio Quadrato (Via Scribonio Curione, Via dei Consoli, Via Selinunte, Viale Spartaco). Specialisti sia nei maxi-condominii intensivi anni ’50-’60 sia nelle reti interrate e cunicoli tecnici del Complesso INA-Casa Tuscolano.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Numidio Quadrato',
        value: '51,5 metri s.l.m. (altopiano vulcanico consolidato)',
        note: 'Cali di pressione dinamica mattutina tra il 6° e l’8° piano dei palazzi su Via Tuscolana',
      },
      {
        parameter: 'Specificità Complesso INA-Casa Tuscolano',
        value: 'Reti idriche e fognarie orizzontali in cunicoli tecnici e cortili alberati (progetto anni ’50)',
        note: 'Bonifica e localizzazione perdite con gas tracciante H2/N2 e sonda radio a 512 Hz',
      },
      {
        parameter: 'Colonne Montanti Condomini Intensivi',
        value: 'Ferro zincato Mannesmann Ø 1/2" – 1"1/4 fortemente soggetto a corrosione galvanica',
        note: 'Sostituzione tratti con multistrato PE-Xb/Al/PE-Xb profilo TH/U e giunti dielettrici',
      },
      {
        parameter: 'Cassette Incassate nei Bagni Storici',
        value: 'Pucci pulsante tondo in alluminio/ottone, Pucci Sara/Eco e Geberit Twinline',
        note: 'Riparazione integrale dalla finestra della placca senza rompere le mattonelle',
      },
      {
        parameter: 'Durezza Calcare Acqua Erogata',
        value: '35 °F — Precipitazione accelerata di CaCO3 negli scambiatori a piastre',
        note: 'Disincrostazione chimica caldaie e installazione filtri defangatori UNI 8065:2019',
      },
    ],
    caseStudies: [
      {
        title: 'Risanamento perdita su collettore bagno in ferro Mannesmann in Via Scribonio Curione',
        street: 'Via Scribonio Curione (Numidio Quadrato)',
        description:
          'Al 4° piano di un palazzo del 1959 la tubazione dell’acqua calda perdeva sotto il pavimento in graniglia. Individuate le coordinate esatte con termocamera FLIR E8-XT, rimossa una sola marmetta e sostituito il nodo corroso con raccordo multistrato a pressare.',
        outcome: 'Riparazione eseguita in 3 ore senza demolire il bagno e con perizia per il condominio.',
      },
      {
        title: 'Videoispezione e disotturazione fognaria nel comparto INA-Casa tra Via Selinunte e Viale Spartaco',
        street: 'Via Selinunte / Viale Spartaco',
        description:
          'Ostruzione ricorrente del collettore orizzontale condominiale per sedimento calcareo e radici superficiali. Eseguita stasatura meccanica con fresa Root-Cutter da 22 mm e mappatura del tracciato fognario con telecamera a 512 Hz.',
        outcome: 'Condotta completamente bonificata e tracciato dei pozzetti consegnato al condominio.',
      },
    ],
    faqs: [
      {
        question: 'Conoscete la struttura degli impianti del Complesso INA-Casa Tuscolano a Numidio Quadrato?',
        answer:
          'Sì, perfettamente. Il celebre quartiere INA-Casa progettato negli anni ’50 da De Renzi, Libera e Muratori tra Viale Spartaco, Via Selinunte e Largo Spartaco presenta reti di distribuzione orizzontali in cunicoli tecnici e scarichi condominiali con geometrie specifiche: interveniamo con videoispezione a 512 Hz, gas tracciante e risanamento conservativo.',
      },
      {
        question: 'In quanto tempo arrivate a Numidio Quadrato, Via Scribonio Curione e Via dei Consoli?',
        answer:
          'Il nostro furgone officina presidia direttamente il nodo Numidio Quadrato – Lucio Sestio e arriva in 15-20 minuti dalla chiamata al numero 06 8590 2169.',
      },
      {
        question: 'Cosa fate se si spezza un rubinetto o un eccentrico doccia dentro il muro in un palazzo anni ’60?',
        answer:
          'Nei palazzi di Via Scribonio Curione e Via Licinio Murena i raccordi in ottone avvitati nelle vecchie curve in ferro Mannesmann spesso si spezzano a filo piastrella: usiamo estrattori conici sinistrorsi e maschiatori BSP per rimuovere il moncone e rifilettare la sede senza rompere le mattonelle.',
      },
      {
        question: 'Riparate in giornata anche caldaie e scaldabagni in blocco a Numidio Quadrato?',
        answer:
          'Certamente. Interveniamo in giornata per lavaggi chimici anticalcare degli scambiatori, sostituzione sonde/valvole e installazione di nuovi scaldabagni elettrici o a gas Low NOx.',
      },
    ],
  },
  {
    id: 8,
    slug: 'idraulico-lucio-sestio',
    title: 'Idraulico Lucio Sestio',
    h1: 'Idraulico Lucio Sestio',
    shortName: 'Lucio Sestio',
    quadrant: 'Fulcro Commerciale e Residenziale Intensivo — Metro A Lucio Sestio',
    cap: '00174 / 00175',
    altitude: '51 – 54 m s.l.m.',
    pressureStatic: '2,9 – 3,6 bar al piano strada (cali dinamici marcati ai piani 6°–9°)',
    waterHardness: '35 – 36 °F (gradi francesi)',
    groundwaterRisk: 'Basso — Pianoro tufaceo-pozzolanico dei Colli Albani, galleria Metro A superficiale',
    dominantBuildingEra: 'Grandi condomini intensivi anni ’50–’60 (8–9 piani) con gallerie commerciali C/1',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Lucio Sestio',
      'Piazza dei Consoli',
      'Via Tuscolana (tratto Metro Lucio Sestio)',
      'Via Calpurnio Fiamma',
      'Via Ponzio Cominio',
      'Via Quinto Publicio',
      'Via Flavio Stilicone (tratto nord)',
      'Viale San Giovanni Bosco (innesto)',
    ],
    landmarks: [
      'Stazione Metro A Lucio Sestio',
      'Piazza dei Consoli e mercato rionale coperto',
      'Asse commerciale ad altissima densità di Via Lucio Sestio e Via Calpurnio Fiamma',
      'Accesso verso il Parco degli Acquedotti (Acquedotto Claudio e Felice)',
    ],
    metaDescription:
      'Idraulico Lucio Sestio a Roma Tuscolana: pronto intervento H24 in 15-20 minuti in Via Lucio Sestio, Piazza dei Consoli e Via Calpurnio Fiamma. Tel: 06 8590 2169.',
    heroSummary:
      'Presidio termoidraulico stanziale H24 a Lucio Sestio e Piazza dei Consoli. Interventi rapidi in 15-20 minuti per perdite occulte nei grandi condomini di 8-9 piani, riparazione conservativa di cassette Pucci e Geberit, disotturazione scarichi per abitazioni e negozi, assistenza caldaie e autoclavi DAB Esybox.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Nodo Lucio Sestio',
        value: '52,8 metri s.l.m. (dorsale alta del quartiere Tuscolano)',
        note: 'Frequenti cali di pressione tra 07:00 e 09:00 ai piani 6°–9° privi di inverter',
      },
      {
        parameter: 'Tipologia Edilizia e Impianti',
        value: 'Fabbricati intensivi multipiano anni ’50–’60 con colonne Mannesmann e scarichi in ghisa',
        note: 'Risanamento colonne con multistrato PE-Xb/Al/PE-Xb e stasatura meccanica a frizione',
      },
      {
        parameter: 'Densità Cassette WC Incassate',
        value: 'Pucci pulsante tondo storico, Pucci Sara/Eco e Geberit Twinline/Sigma',
        note: 'Ricambi originali sempre disponibili sul furgone per riparazione senza opere murarie',
      },
      {
        parameter: 'Durezza Acqua Rete Acea ATO2',
        value: '35 – 36 °F (elevata incrostazione calcarea su scambiatori e gruppi doccia)',
        note: 'Lavaggio chimico a ciclo chiuso e installazione dosatori polifosfati UNI 8065',
      },
      {
        parameter: 'Assistenza Locali Commerciali (Negozi/Bar)',
        value: 'Intervento prioritario H24 su Via Tuscolana, Via Lucio Sestio e Piazza dei Consoli',
        note: 'Disotturazione rapida linee scarico, pozzetti degrassatori e bagni a norma',
      },
    ],
    caseStudies: [
      {
        title: 'Riparazione perdita sottotraccia e sostituzione passo rapido in Piazza dei Consoli',
        street: 'Piazza dei Consoli (Lucio Sestio)',
        description:
          'Un’infiltrazione dal 6° al 5° piano era causata dal trafilamento interno del vecchio passo rapido e da una micro-lesione sulla curva in ferro zincato. Individuato il punto con termocamera FLIR, sostituito il tratto con multistrato a pressare e installato nuovo rubinetto d’arresto.',
        outcome: 'Lavoro concluso in mattinata salvando le piastrelle di scorta del proprietario.',
      },
      {
        title: 'Installazione autoclave silenziosa DAB Esybox Mini 3 al 7° piano in Via Ponzio Cominio',
        street: 'Via Ponzio Cominio (zona Metro Lucio Sestio)',
        description:
          'Al settimo piano la pressione dinamica scendeva a 0,7 bar nelle ore mattutine e serali, bloccando la caldaia a condensazione. Installato in nicchia sul balcone di servizio un sistema a inverter DAB Esybox Mini 3 ultra-silenzioso.',
        outcome: 'Portata d’acqua triplicata e pressione costante a 3,2 bar su doccia e cucina.',
      },
    ],
    faqs: [
      {
        question: 'Qual è il tempo di arrivo di un idraulico a Lucio Sestio e Piazza dei Consoli?',
        answer:
          'Grazie alla nostra unità mobile posizionata stabilmente sul nodo Lucio Sestio – Numidio Quadrato, interveniamo in 15-20 minuti in Via Lucio Sestio, Piazza dei Consoli, Via Calpurnio Fiamma, Via Ponzio Cominio e Via Quinto Publicio.',
      },
      {
        question: 'Perché nei palazzi di 8 piani a Lucio Sestio l’acqua calda ha poca pressione ai piani alti?',
        answer:
          'Con una quota stradale di 53 metri s.l.m., per salire fino al 7° o 8° piano l’acqua perde oltre 2,2 bar di carico idrostatico, a cui si sommano le perdite di carico delle vecchie tubazioni Mannesmann incrostate dal calcare (36°F). Disincrostiamo lo scambiatore della caldaia e, se necessario, installiamo un’autoclave compatta a inverter DAB Esybox Mini 3.',
      },
      {
        question: 'Riparate le cassette Pucci e Geberit senza spaccare le mattonelle a Lucio Sestio?',
        answer:
          'Sì, il 100% delle nostre riparazioni su cassette incassate Pucci (pulsante tondo a vite, Sara, Eco) e Geberit (Twinline, Sigma, Omega) avviene attraverso la finestra della placca di comando.',
      },
      {
        question: 'Rilasciate la perizia tecnica per l’assicurazione del condominio in caso di perdita occulta?',
        answer:
          'Certamente. Forniamo relazione tecnica firmata con rilievi termografici FLIR e igrometrici Tramex pronta per essere inoltrata all’amministratore di condominio e al perito assicurativo.',
      },
    ],
  },
  {
    id: 9,
    slug: 'idraulico-giulio-agricola',
    title: 'Idraulico Giulio Agricola',
    h1: 'Idraulico Giulio Agricola',
    shortName: 'Giulio Agricola',
    quadrant: 'Quadrante Viale Giulio Agricola / Parco degli Acquedotti — Metro A Giulio Agricola',
    cap: '00174',
    altitude: '52 – 55 m s.l.m.',
    pressureStatic: '2,9 – 3,5 bar al piano strada (necessità autoclavi ai piani 6°–8°)',
    waterHardness: '36 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Dorsale tufacea verso Parco degli Acquedotti e Fosso dell’Acqua Mariana',
    dominantBuildingEra: 'Condomini residenziali anni ’50–’70 (7–8 piani) tra Via Tuscolana e Via Lemonia',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Viale Giulio Agricola',
      'Via Tuscolana (tratto Metro Giulio Agricola)',
      'Piazza Giulio Agricola',
      'Via Marco Valerio Corvo',
      'Via Lemonia',
      'Viale San Giovanni Bosco',
      'Via Publio Valerio',
      'Via Appio Claudio',
    ],
    landmarks: [
      'Stazione Metro A Giulio Agricola',
      'Basilica di San Giovanni Bosco (capolavoro monumentale anni ’50)',
      'Parco degli Acquedotti (Acquedotto Claudio e Acquedotto Felice su Via Lemonia)',
      'Asse alberato di Viale Giulio Agricola e Via Marco Valerio Corvo',
    ],
    metaDescription:
      'Idraulico Giulio Agricola a Roma Tuscolana: pronto intervento H24 in 15-20 minuti in Viale Giulio Agricola, San Giovanni Bosco e Via Lemonia. Tel: 06 8590 2169.',
    heroSummary:
      'Assistenza idraulica H24 a Giulio Agricola, Piazza San Giovanni Bosco, Via Marco Valerio Corvo e Via Lemonia. Specializzati in ricerca perdite non distruttiva, sblocco scarichi invasi da radici sul fronte Parco degli Acquedotti, riparazione cassette Pucci/Geberit e lavaggio chimico caldaie.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Viale Giulio Agricola',
        value: '53,5 metri s.l.m. (pianoro alto adiacente a Piazza San Giovanni Bosco)',
        note: 'Pressione dinamica ridotta agli ultimi piani; posa autoclavi inverter DAB Esybox',
      },
      {
        parameter: 'Scarichi Condominiali Versante Via Lemonia',
        value: 'Collettori in gres e PVC soggetti a radici di pini marittimi del Parco degli Acquedotti',
        note: 'Fresatura elettromeccanica Root-Cutter + videoispezione con sonda a 512 Hz',
      },
      {
        parameter: 'Durezza Calcarea Acqua Erogata',
        value: '36 °F (massima durezza registrata sul ramo sud-est Tuscolano)',
        note: 'Obbligatori dosatore polifosfati e defangatore magnetico UNI 8065:2019',
      },
      {
        parameter: 'Tubazioni Idriche Orizzontali e Verticali',
        value: 'Ferro zincato Mannesmann (impianti 1956–1968) e rame ricotto (anni ’70)',
        note: 'Localizzazione perdite con termocamera FLIR E8-XT e gas tracciante H2/N2',
      },
      {
        parameter: 'Cassette WC Incassate Prevalenti',
        value: 'Pucci Sara/Eco, Pucci pulsante tondo e Geberit Twinline/Sigma',
        note: 'Manutenzione 100% conservativa dalla placca frontale senza rompere maioliche',
      },
    ],
    caseStudies: [
      {
        title: 'Fresatura radici di pino in collettore condominiale su Via Lemonia (Parco degli Acquedotti)',
        street: 'Via Lemonia / Viale Giulio Agricola',
        description:
          'I pini secolari al confine col Parco degli Acquedotti avevano invaso il collettore fognario di una palazzina signorile bloccando gli scarichi del 1° piano. Intervento con stasatrice Rothenberger R600 e fresa Root-Cutter da 100 mm.',
        outcome: 'Rimozione totale delle radici e mappatura del pozzetto interrato con localizzatore a 512 Hz.',
      },
      {
        title: 'Sostituzione scaldabagno elettrico e riparazione cassetta Pucci in Via Marco Valerio Corvo',
        street: 'Via Marco Valerio Corvo (Giulio Agricola)',
        description:
          'Doppio intervento in giornata per boiler da 80 litri bucato dalla corrosione galvanica e cassetta Pucci Eco con tasto bloccato dal calcare (36°F). Installato nuovo scaldabagno Ariston con giunti dielettrici e revisionata la batteria Pucci.',
        outcome: 'Entrambi i guasti risolti in 2 ore con garanzia di 24 mesi.',
      },
    ],
    faqs: [
      {
        question: 'Perché nelle vie vicine al Parco degli Acquedotti (Via Lemonia, Giulio Agricola) si intasano le fognature?',
        answer:
          'La presenza dei grandi pini marittimi lungo Viale Giulio Agricola, Via Lemonia e Viale San Giovanni Bosco favorisce l’ingresso delle radici nei giunti dei collettori condominiali in gres. Noi tagliamo ed estraiamo le radici con frese meccaniche Root-Cutter senza scavare e senza usare canal-jet distruttivi.',
      },
      {
        question: 'In quanto tempo arrivate a Giulio Agricola e Piazza San Giovanni Bosco?',
        answer:
          'Raggiungiamo Viale Giulio Agricola, Piazza San Giovanni Bosco, Via Marco Valerio Corvo e Via Publio Valerio in 15-20 minuti dalla chiamata allo 06 8590 2169.',
      },
      {
        question: 'Come risolvete il problema del calcare (36°F) nelle caldaie e negli scaldabagni a Giulio Agricola?',
        answer:
          'Eseguiamo il lavaggio chimico a ciclo chiuso dello scambiatore con acidi organici tamponati che riportano la portata d’acqua calda al 100%, e installiamo a monte un dosatore proporzionale di polifosfati alimentari.',
      },
      {
        question: 'Riparate anche perdite d’acqua occulte sotto i pavimenti in graniglia o parquet?',
        answer:
          'Sì, utilizziamo termocamera radiometrica FLIR, geofono Sewerin e gas tracciante Formiergas per individuare il punto esatto della perdita sotto una singola mattonella o listello.',
      },
    ],
  },
  {
    id: 10,
    slug: 'idraulico-subaugusta',
    title: 'Idraulico Subaugusta',
    h1: 'Idraulico Subaugusta',
    shortName: 'Subaugusta',
    quadrant: 'Snodo Piazza Cinecittà / Viale Palmiro Togliatti / Via Tuscolana — Metro A Subaugusta',
    cap: '00173 / 00174 / 00175',
    altitude: '53 – 55 m s.l.m.',
    pressureStatic: '2,8 – 3,5 bar (importanti oscillazioni nei super-condomini di 8–9 piani)',
    waterHardness: '36 °F (gradi francesi)',
    groundwaterRisk: 'Basso — Altopiano vulcanico di Tufo Lionato e pozzolane',
    dominantBuildingEra: 'Grandi complessi condominiali anni ’60–’70 (7–9 piani) e centri direzionali/commerciali',
    responseTime: '20 minuti',
    mainStreets: [
      'Piazza di Cinecittà (nodo Metro Subaugusta)',
      'Viale Palmiro Togliatti (tratto Tuscolana – Subaugusta)',
      'Via Tuscolana (tratto Subaugusta)',
      'Via Tito Labieno',
      'Via Orazio Pulvillo',
      'Via Flavio Stilicone',
      'Via Lucio Papirio',
      'Via Quinto Pedio',
    ],
    landmarks: [
      'Stazione Metro A Subaugusta e Capolinea Bus di Piazza di Cinecittà',
      'Incrocio strategico tra Via Tuscolana e Viale Palmiro Togliatti',
      'Centro Commerciale CinecittàDue (confine Subaugusta / Cinecittà)',
      'Grandi complessi residenziali di Via Tito Labieno e Via Orazio Pulvillo',
    ],
    metaDescription:
      'Idraulico Subaugusta a Roma Tuscolana: pronto intervento H24 in 20 minuti in Piazza di Cinecittà, Via Tito Labieno e Viale Togliatti. Chiama lo 06 8590 2169.',
    heroSummary:
      'Pronto intervento idraulico e termoidraulico H24 a Subaugusta (Piazza di Cinecittà, Via Tito Labieno, Via Orazio Pulvillo, Via Flavio Stilicone). Specializzati in gruppi autoclave condominiali e autonomi a inverter, ricerca perdite con gas tracciante, cassette Pucci/Geberit e sblocco scarichi.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Nodo Subaugusta',
        value: '54,2 metri s.l.m. (altopiano sud-orientale di Via Tuscolana)',
        note: 'Necessità di gruppi di spinta inverter DAB Esybox per i piani 6°–9°',
      },
      {
        parameter: 'Tipologia Impianti Super-Condomini',
        value: 'Centrali idriche condominiali e lunghe dorsali orizzontali nelle cantine/pilotis',
        note: 'Sezionamento guasti, sostituzione valvole di arresto e raccordi multistrato',
      },
      {
        parameter: 'Cassette di Scarico Prevalenti',
        value: 'Pucci Sara/Eco, Geberit Twinline e Geberit Sigma (ristrutturazioni anni ’90–2010)',
        note: 'Revisione completa dalla placca con ricambi originali certificati',
      },
      {
        parameter: 'Durezza Acqua Rete Acea ATO2',
        value: '36 °F — Elevato deposito calcareo su valvole miscelatrici e caldaie',
        note: 'Lavaggio chimico scambiatori e posa filtri defangatori magnetici UNI 8065',
      },
      {
        parameter: 'Diagnostica Strumentale Infiltrazioni',
        value: 'Termografia IR + Igrometria dielettrica Tramex + Endoscopia cavedi',
        note: 'Perizie tecniche asseverate per amministratori e assicurazioni',
      },
    ],
    caseStudies: [
      {
        title: 'Ricerca perdita su dorsale acqua calda in controsoffitto condominiale in Via Tito Labieno',
        street: 'Via Tito Labieno (Subaugusta)',
        description:
          'Gocciolamento nell’androne condominiale proveniente dal fascio tubazioni del riscaldamento e acqua sanitaria. Individuato con termocamera FLIR il manicotto corroso sulla linea ACS da 1"1/2 e sostituito il tratto senza chiudere l’acqua all’intero edificio grazie a congelatore criogenico.',
        outcome: 'Riparazione eseguita in 2 ore senza disservizio per i 45 appartamenti della scala.',
      },
      {
        title: 'Riparazione Geberit Sigma incassata e disotturazione doccia in Via Orazio Pulvillo',
        street: 'Via Orazio Pulvillo (zona Metro Subaugusta)',
        description:
          'La cassetta Geberit Sigma continuava a caricare acqua per rottura della membrana del galleggiante Unifill e lo scarico doccia era bloccato da calcare e residui saponosi. Sostituito il galleggiante Geberit Tipo 380 e sbloccato il sifone con pompa idropneumatica.',
        outcome: 'Bagno perfettamente funzionante in 60 minuti.',
      },
    ],
    faqs: [
      {
        question: 'In quanto tempo arrivate a Subaugusta, Via Tito Labieno e Piazza di Cinecittà?',
        answer:
          'Il nostro presidio mobile copre costantemente lo snodo tra Via Tuscolana e Viale Palmiro Togliatti, garantendo l’arrivo a Subaugusta, Via Tito Labieno, Via Orazio Pulvillo e Via Lucio Papirio in 20 minuti dalla chiamata allo 06 8590 2169.',
      },
      {
        question: 'Potete bloccare una perdita su un tubo condominiale a Subaugusta senza trovare la chiave generale?',
        answer:
          'Sì! Quando le vecchie valvole a saracinesca nelle cantine dei grandi condomini di Subaugusta sono bloccate dal calcare, utilizziamo un congelatore criogenico elettrico che crea un tappo di ghiaccio a -30°C dentro il tubo in 10 minuti, permettendoci di tagliare il tratto rotto e montare una valvola a sfera nuova.',
      },
      {
        question: 'Riparate anche i gruppi autoclave condominiali o singoli negli attici di Subaugusta?',
        answer:
          'Certamente. A 54 metri s.l.m. gli ultimi piani soffrono spesso di bassa pressione: installiamo autoclavi silenziose a inverter DAB Esybox Mini 3 per singoli appartamenti e ripariamo centrali di spinta condominiali.',
      },
      {
        question: 'Eseguite lavaggi chimici alle caldaie intasate dal calcare a Subaugusta?',
        answer:
          'Sì, con una durezza di 36°F il lavaggio chimico a ciclo chiuso dello scambiatore secondario è l’intervento più efficace per restituire subito pressione e temperatura all’acqua calda sotto la doccia.',
      },
    ],
  },
  {
    id: 11,
    slug: 'idraulico-cinecitta',
    title: 'Idraulico Cinecittà',
    h1: 'Idraulico Cinecittà',
    shortName: 'Cinecittà',
    quadrant: 'Polo Orientale Via Tuscolana / Studi di Cinecittà / Don Bosco — Metro A Cinecittà',
    cap: '00173 / 00174',
    altitude: '54 – 56 m s.l.m.',
    pressureStatic: '2,7 – 3,4 bar (quota massima del tratto urbano di Via Tuscolana)',
    waterHardness: '36 °F (gradi francesi)',
    groundwaterRisk: 'Basso — Pianoro vulcanico dei Colli Albani verso Torre Spaccata e Capannelle',
    dominantBuildingEra: 'Complessi residenziali anni ’60–’80, grandi corti condominiali con parchi interni e uffici',
    responseTime: '20-25 minuti',
    mainStreets: [
      'Via Tuscolana (tratto Studi di Cinecittà – Capannelle)',
      'Viale Bruno Pelizzi',
      'Viale Antonio Ciamarra',
      'Via Carlo Calisse',
      'Via Pietro Marchisio',
      'Via Stefano Oberto',
      'Via Vincenzo Lamaro',
      'Viale Rolando Vignali',
    ],
    landmarks: [
      'Stazione Metro A Cinecittà e Studi Cinematografici di Cinecittà',
      'Centro Commerciale CinecittàDue e Piazza San Giovanni Bosco (confine ovest)',
      'Comprensori residenziali alberati di Viale Bruno Pelizzi e Via Carlo Calisse',
      'Direttrice sud-est verso Cinecittà Est e Viale Antonio Ciamarra',
    ],
    metaDescription:
      'Idraulico Cinecittà a Roma Tuscolana: pronto intervento H24 in 20-25 minuti per perdite acqua, autoclavi, caldaie, cassette Pucci/Geberit e scarichi. Tel: 06 8590 2169.',
    heroSummary:
      'Assistenza idraulica e termoidraulica H24 a Cinecittà e Cinecittà Est (Via Tuscolana, Viale Bruno Pelizzi, Via Carlo Calisse, Viale Antonio Ciamarra). Specializzati in ricerca perdite non distruttiva nei grandi comprensori con giardini, autoclavi a inverter per la quota alta (55 m s.l.m.), sblocco scarichi e assistenza caldaie.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Polo di Cinecittà',
        value: '55,0 metri s.l.m. (culmine altimetrico della direttrice Via Tuscolana)',
        note: 'Forte richiesta di sistemi di pressurizzazione a inverter DAB Esybox ai piani alti',
      },
      {
        parameter: 'Reti Idriche e Fognarie Comprensoriali',
        value: 'Lunghe condotte interrate sotto giardini condominiali e vialetti carrabili',
        note: 'Ricerca perdite con gas tracciante H2/N2 e stasatura radici con fresa Root-Cutter',
      },
      {
        parameter: 'Durezza Acqua Potabile (Acea ATO2)',
        value: '36 °F — Precipitazione calcarea critica su caldaie e bollitori ACS',
        note: 'Decalcificazione chimica scambiatori e posa dosatori polifosfati UNI 8065:2019',
      },
      {
        parameter: 'Cassette di Scarico Incassate',
        value: 'Pucci Sara/Eco, Geberit Twinline, Geberit Sigma e Grohe Dal',
        note: 'Riparazione conservativa dalla placca frontale con ricambi originali',
      },
      {
        parameter: 'Servizio per Uffici, Studi e Negozi',
        value: 'Manutenzione programmata e pronto intervento H24 su Via Tuscolana / Lamaro',
        note: 'Fatturazione elettronica e Dichiarazione di Conformità D.M. 37/2008',
      },
    ],
    caseStudies: [
      {
        title: 'Localizzazione perdita su anello idrico interrato in comprensorio di Viale Bruno Pelizzi',
        street: 'Viale Bruno Pelizzi (Cinecittà)',
        description:
          'Un grande comprensorio con parco privato registrava una perdita occulta di 25 metri cubi al giorno sulla rete idrica interrata. Svuotato il ramo e iniettato gas tracciante Formiergas (H2/N2), abbiamo individuato la rottura a 1,40 m di profondità sotto il vialetto pedonale.',
        outcome: 'Scavo mirato di soli 80x80 cm, giunzione riparata con manicotto elettrosaldabile PE100 e risparmio di migliaia di euro.',
      },
      {
        title: 'Lavaggio chimico caldaia Vaillant e posa defangatore magnetico in Via Carlo Calisse',
        street: 'Via Carlo Calisse (Cinecittà)',
        description:
          'La caldaia a condensazione andava in blocco F.28/sovratemperatura e i termosifoni scaldavano solo a metà. Eseguito lavaggio chimico dello scambiatore secondario dal calcare (36°F), pulizia fanghi del circuito e montaggio defangatore magnetico Caleffi.',
        outcome: 'Caldaia silenziosa, acqua calda immediata e riscaldamento uniforme su tutti i radiatori.',
      },
    ],
    faqs: [
      {
        question: 'Coprite sia la zona Metro Cinecittà su Via Tuscolana sia i comprensori di Viale Bruno Pelizzi e Cinecittà Est?',
        answer:
          'Sì, presidiamo l’intero quadrante di Cinecittà, da Piazza di Cinecittà e Viale Bruno Pelizzi fino a Via Carlo Calisse, Via Vincenzo Lamaro e Viale Antonio Ciamarra, con arrivo in 20-25 minuti chiamando lo 06 8590 2169.',
      },
      {
        question: 'Perché nei palazzi di Cinecittà la pressione dell’acqua è spesso bassa ai piani superiori?',
        answer:
          'Cinecittà si trova a 55 metri s.l.m., quasi 20 metri più in alto rispetto a Ponte Lungo e Stazione Tuscolana. Di conseguenza la pressione statica di rete parte già più bassa (2,7-3,4 bar): per garantire docce confortevoli e il corretto avvio delle caldaie dal 5° piano in su installiamo autoclavi silenziose a inverter DAB Esybox Mini 3.',
      },
      {
        question: 'Come individuate le perdite nei lunghi tubi interrati sotto i giardini condominiali di Cinecittà?',
        answer:
          'Non scaviamo mai alla cieca: pressurizziamo la linea con gas tracciante ecologico (95% Azoto, 5% Idrogeno) e utilizziamo il cercafughe elettronico insieme al geofono digitale Sewerin per segnare a terra il punto esatto di rottura.',
      },
      {
        question: 'Riparate anche cassette Geberit, Pucci e Grohe incassate nei bagni di Cinecittà?',
        answer:
          'Certamente. Interveniamo su tutte le cassette a incasso (Pucci, Geberit, Grohe, Valsir) sostituendo campane, galleggianti e guarnizioni solo dal vano della placca.',
      },
    ],
  },
  {
    id: 12,
    slug: 'idraulico-villa-lais',
    title: 'Idraulico Villa Lais',
    h1: 'Idraulico Villa Lais',
    shortName: 'Villa Lais',
    quadrant: 'Quadrante Signorile e Storico Piazza Cagliero / Parco di Villa Lais (Tuscolano – Appio)',
    cap: '00181',
    altitude: '42 – 46 m s.l.m.',
    pressureStatic: '3,6 – 4,2 bar (ottimale ai piani medi, picchi notturni ai piani terra)',
    waterHardness: '34 – 35 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Pendio tufaceo storico con giardini pensili e cavità pozzolaniche',
    dominantBuildingEra: 'Villini d’epoca anni ’20–’30 e palazzine signorili in cortina anni ’50–’60',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Piazza Giovanni Cagliero',
      'Via Nocera Umbra',
      'Via Todi',
      'Via Deruta',
      'Via Amelia',
      'Via Lugnano in Teverina',
      'Via Gualdo Tadino',
      'Via Bevagna',
    ],
    landmarks: [
      'Parco Storico e Ninfeo di Villa Lais',
      'Piazza Giovanni Cagliero e Parrocchia di Santa Maria Immacolata e San Giovanni Berchmans',
      'Quadrante residenziale delle vie umbre (Via Nocera Umbra, Via Todi, Via Deruta)',
      'Cerniera residenziale tra Via Tuscolana, Via Assisi e Via Appia Nuova',
    ],
    metaDescription:
      'Idraulico Villa Lais e Piazza Cagliero a Roma Tuscolana: pronto intervento H24 in 15-20 minuti in Via Nocera Umbra, Via Todi e Via Amelia. Tel: 06 8590 2169.',
    heroSummary:
      'Servizio idraulico di alta precisione per le palazzine signorili e i villini storici di Villa Lais e Piazza Cagliero (Via Nocera Umbra, Via Todi, Via Deruta, Via Amelia). Specializzati in ricerca perdite zero-demolizioni sotto parquet e marmi pregiati, fresatura radici in gres con Root-Cutter e riparazione conservativa di cassette Pucci e Geberit.',
    techTable: [
      {
        parameter: 'Tipologia Pavimentazioni Pregiate',
        value: 'Parquet inchiodato/incollato, marmi policromi e maioliche d’autore anni ’30–’60',
        note: 'Diagnostica non distruttiva con termocamera FLIR E8-XT e gas tracciante H2/N2',
      },
      {
        parameter: 'Scarichi Fognari Giardini e Villini',
        value: 'Collettori in gres ceramico esposti alle radici delle alberature di Villa Lais',
        note: 'Stasatura elettromeccanica Root-Cutter + localizzazione pozzetti a 512 Hz',
      },
      {
        parameter: 'Cassette di Scarico nei Bagni Signorili',
        value: 'Pucci in rame/polietilene a pulsante tondo, Pucci Sara/Eco e Geberit Sigma',
        note: 'Sostituzione componenti interni esclusivamente dalla placca frontale',
      },
      {
        parameter: 'Pressione Idrica Rete Acea ATO2',
        value: '3,6 – 4,2 bar (con picchi fino a 4,7 bar verso Via Assisi e Via Amelia)',
        note: 'Taratura a 3,0 bar mediante riduttori di pressione Caleffi a sede compensata',
      },
      {
        parameter: 'Protezione Impianti Termici Signorili',
        value: 'Lavaggio chimico scambiatori e posa defangatori magnetici compatti sottocaldaia',
        note: 'Piena conformità alla normativa UNI 8065:2019 contro acqua a 35 °F',
      },
    ],
    caseStudies: [
      {
        title: 'Ricerca perdita occulta sotto parquet in rovere senza demolizioni in Via Nocera Umbra',
        street: 'Via Nocera Umbra (fronte Parco di Villa Lais)',
        description:
          'In un appartamento ristrutturato al 3° piano il parquet del corridoio presentava un rigonfiamento anomalo. Mediante termografia infrarossa FLIR e igrometro dielettrico Tramex abbiamo localizzato il trafilamento su un manicotto del riscaldamento, intervenendo dal tramezzo del ripostiglio adiacente senza toccare un solo listello di parquet.',
        outcome: 'Perdita riparata dal retro parete e pavimentazione in legno preservata al 100%.',
      },
      {
        title: 'Disotturazione fognaria da radici con fresa Root-Cutter in villino di Via Todi',
        street: 'Via Todi / Piazza Giovanni Cagliero',
        description:
          'Il collettore di scarico in gres nel giardino privato era ostruito per l’85% da radici capillari penetrate in un giunto. Eseguito taglio meccanico con fresa dentata Root-Cutter su spirale da 22 mm e verifica finale con telecamera HD.',
        outcome: 'Scarico riportato a diametro pieno senza scavi nel giardino storico.',
      },
    ],
    faqs: [
      {
        question: 'Potete trovare una perdita d’acqua in un appartamento a Villa Lais senza rovinare il parquet o il marmo?',
        answer:
          'È la nostra specializzazione primaria. Nelle abitazioni signorili di Piazza Cagliero, Via Nocera Umbra, Via Todi e Via Deruta utilizziamo termocamere radiometriche FLIR, geofoni digitali e gas tracciante per individuare il punto millimetrico del guasto, operando spesso dalla parete opposta (es. ripostiglio o cavedio) per non intaccare parquet o marmi.',
      },
      {
        question: 'Come liberate gli scarichi invasi dalle radici degli alberi vicino al Parco di Villa Lais?',
        answer:
          'Utilizziamo stasatrici elettromeccaniche dotate di testine taglia-radici (Root-Cutter) che recidono ed estraggono le radici dal collettore in gres senza usare getti ad alta pressione che spaccherebbero le tubazioni storiche.',
      },
      {
        question: 'In quanto tempo arrivate a Piazza Cagliero, Via Nocera Umbra e Via Amelia?',
        answer:
          'Siamo operativi a 5 minuti di distanza tra Ponte Lungo e Furio Camillo e arriviamo in tutta la zona di Villa Lais in 15-20 minuti dalla chiamata allo 06 8590 2169.',
      },
      {
        question: 'Riparate anche rubinetteria d’epoca, passi rapidi e cassette Pucci a pulsante tondo?',
        answer:
          'Sì, rettifichiamo con fresa al tungsteno le sedi dei passi rapidi incassati e revisioniamo le cassette Pucci storiche e moderne senza toccare le piastrelle.',
      },
    ],
  },
  {
    id: 13,
    slug: 'idraulico-via-del-mandrione',
    title: 'Idraulico Via del Mandrione',
    h1: 'Idraulico Via del Mandrione',
    shortName: 'Via del Mandrione',
    quadrant: 'Corridoio Storico Acquedotto Felice / Casilina Vecchia / Tuscolana',
    cap: '00181 / 00182 / 00178',
    altitude: '37 – 44 m s.l.m.',
    pressureStatic: '4,2 – 5,1 bar (elevata pressione idrostatica nel tratto nord depresso)',
    waterHardness: '35 °F (gradi francesi)',
    groundwaterRisk: 'Elevato — Sottosuolo di tufo e pozzolana solcato da acquedotti romani e linea ferroviaria',
    dominantBuildingEra: 'Villini e case basse anni ’20–’40, loft artigianali riconvertiti e palazzine d’epoca',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via del Mandrione',
      'Via Casilina Vecchia',
      'Via degli Angeli (innesto sud Mandrione)',
      'Via di Porta Furba',
      'Vicolo del Mandrione',
      'Via della Marrana',
      'Via Norcia',
      'Via Spello',
    ],
    landmarks: [
      'Arcate monumentali dell’Acquedotto Felice e dell’Acquedotto Claudio lungo Via del Mandrione',
      'Fornaci storiche, villini anni ’20 e loft di design di Via del Mandrione',
      'Incrocio nord con Via Casilina Vecchia e Ponte Lungo / Via Assisi',
      'Sbocco sud su Porta Furba e Via Tuscolana',
    ],
    metaDescription:
      'Idraulico Via del Mandrione a Roma Tuscolana: pronto intervento H24 in 15-20 minuti per disotturazione radici Root-Cutter, pompe anti-allagamento, perdite e caldaie. Tel: 06 8590 2169.',
    heroSummary:
      'Presidio tecnico specializzato lungo tutta Via del Mandrione, Via Casilina Vecchia e Via della Marrana. Esperti nelle criticità tipiche dei villini storici e dei loft: disotturazione collettori in gres da radici di pini e fichi selvatici con fresa Root-Cutter, ricerca perdite con gas tracciante su terreno tufaceo, pompe sommerse anti-allagamento e riduttori di pressione Caleffi.',
    techTable: [
      {
        parameter: 'Tipologia Edilizia e Sottosuolo Mandrione',
        value: 'Muratura portante in tufo anni ’20–’40 a ridosso dell’Acquedotto Felice e ferrovia',
        note: 'Divieto assoluto di canal-jet > 120 bar; uso esclusivo di stasatrici elettromeccaniche',
      },
      {
        parameter: 'Patologia Fognaria Dominante',
        value: 'Intrusione massiva di radici di fico, pino e ailanto nei collettori in gres e pozzetti ciechi',
        note: 'Fresatura meccanica Root-Cutter + localizzazione radiometrica pozzetti a 512 Hz',
      },
      {
        parameter: 'Rischio Allagamento Quote Basse e Loft',
        value: 'Riflusso fognario e ristagno meteorico tra Via della Marrana e il rilevato ferroviario',
        note: 'Installazione elettropompe Vortex Lowara DOMO e valvole clapet in acciaio inox AISI 316',
      },
      {
        parameter: 'Pressione Statica Rete Idrica Acea',
        value: '4,2 – 5,1 bar (con forti sbalzi notturni che sollecitano le condotte interrate)',
        note: 'Posa riduttori di pressione a sede compensata Caleffi tarati a 3,0 bar',
      },
      {
        parameter: 'Ricerca Perdite in Giardini e Cortili',
        value: 'Iniezione gas tracciante Formiergas (95% N2 + 5% H2) + Geofono digitale filtrato',
        note: 'Individuazione millimetrica delle perdite assorbite dal banco di pozzolana',
      },
    ],
    caseStudies: [
      {
        title: 'Taglio radici di fico e localizzazione pozzetto sepolto a 512 Hz in Via del Mandrione',
        street: 'Via del Mandrione (tratto centrale Acquedotto Felice)',
        description:
          'Un villino indipendente ristrutturato a loft presentava il blocco totale degli scarichi del piano terra. La videoispezione ha mostrato radici di fico selvatico entrate in un pozzetto interrato di cui si era persa traccia. Localizzato il chiusino sotto il cortile con sonda a 512 Hz e fresate le radici con testina Root-Cutter.',
        outcome: 'Pozzetto reso ispezionabile e linea fognaria in gres liberata al 100% senza rompere il tubo.',
      },
      {
        title: 'Installazione pompa sommersa Vortex e valvola antiriflusso inox in Via della Marrana',
        street: 'Via della Marrana / Via del Mandrione',
        description:
          'Un laboratorio seminterrato subiva allagamenti ad ogni temporale intenso. Installata nel pozzetto di raccolta un’elettropompa Lowara DOMO 10 Vortex con galleggiante magnetico verticale e una valvola antiriflusso a clapet in acciaio inox AISI 316.',
        outcome: 'Messa in sicurezza definitiva del locale seminterrato contro bombe d’acqua e roditori.',
      },
    ],
    faqs: [
      {
        question: 'Perché nei villini e case basse di Via del Mandrione gli scarichi si bloccano così spesso per le radici?',
        answer:
          'Lungo Via del Mandrione i collettori fognari originari in gres ceramico corrono a bassa profondità nel terreno tufaceo a ridosso di fichi selvatici, pini e vegetazione spontanea lungo le arcate dell’Acquedotto Felice. Le radici entrano nei giunti cercando acqua: noi le tagliamo con frese elettromeccaniche Root-Cutter senza danneggiare il gres.',
      },
      {
        question: 'Come trovate una perdita d’acqua esterna in Via del Mandrione se l’acqua sparisce nel tufo?',
        answer:
          'Il sottosuolo di Via del Mandrione è ricco di pozzolana permeabile e micro-cavità che assorbono migliaia di litri senza bagnare la superficie. Pressurizziamo la tubazione con gas tracciante (Azoto/Idrogeno) e rileviamo il punto esatto di risalita del gas con sensore elettronico.',
      },
      {
        question: 'Proteggete anche i piani bassi e i loft di Via del Mandrione dai rigurgiti fognari e dai ratti?',
        answer:
          'Sì, installiamo valvole antiriflusso fognario certificate UNI EN 13564 con clapet interno in acciaio inox AISI 316, che bloccano sia il ritorno delle acque nere durante i temporali sia l’intrusione dei roditori.',
      },
      {
        question: 'In quanto tempo arrivate su Via del Mandrione e Via Casilina Vecchia?',
        answer:
          'Arriviamo in 15-20 minuti su qualsiasi civico di Via del Mandrione, da Porta Furba fino a Casilina Vecchia e Ponte Lungo, chiamando lo 06 8590 2169.',
      },
    ],
  },
  {
    id: 14,
    slug: 'idraulico-quadraro-vecchio',
    title: 'Idraulico Quadraro Vecchio',
    h1: 'Idraulico Quadraro Vecchio',
    shortName: 'Quadraro Vecchio',
    quadrant: 'Nucleo Storico Quadraro Vecchio (Tra Via Tuscolana, Via degli Angeli e Via Casilina)',
    cap: '00174 / 00175',
    altitude: '46 – 50 m s.l.m.',
    pressureStatic: '3,4 – 4,1 bar (stabile, con sbalzi notturni nelle case basse)',
    waterHardness: '35 – 36 °F (gradi francesi)',
    groundwaterRisk: 'Moderato-Alto — Reticolo storico di cave romane di pozzolana e gallerie ipogee',
    dominantBuildingEra: 'Villini storici, casette indipendenti anni ’20–’30 e piccole palazzine in tufo',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via dei Lentuli (tratto storico)',
      'Via degli Angeli',
      'Via dei Corneli',
      'Via dei Pisoni',
      'Via degli Ottavi',
      'Via dei Quintili',
      'Largo dei Quintili',
      'Via Monte del Grano',
    ],
    landmarks: [
      'Borgo storico del Quadraro Vecchio ("Nido di Vespe" e Museo MURO di Street Art)',
      'Mausoleo imperiale di Monte del Grano e Parco XVII Aprile 1944',
      'Asse storico di Via dei Lentuli, Via dei Corneli e Via dei Quintili',
      'Connessione diretta con Porta Furba e Via Tuscolana',
    ],
    metaDescription:
      'Idraulico Quadraro Vecchio a Roma Tuscolana: pronto intervento H24 in 15-20 minuti in Via dei Lentuli, Via dei Corneli e Via dei Quintili. Tel: 06 8590 2169.',
    heroSummary:
      'Pronto intervento idraulico specializzato nel borgo storico del Quadraro Vecchio (Via dei Lentuli, Via dei Corneli, Via dei Quintili, Via dei Pisoni). Esperti nella diagnostica di collettori fognari in gres posati sopra antiche cave di pozzolana, rimozione radici con frese Root-Cutter, ricerca perdite con gas tracciante e riparazione caldaie, Pucci e batterie Catis.',
    techTable: [
      {
        parameter: 'Sottosuolo Quadraro Vecchio',
        value: 'Tufo litoide e pozzolane attraversate da antiche cave estrattive e cunicoli storici',
        note: 'Monitoraggio contropendenze fognarie con videoispezione HD e sonda a 512 Hz',
      },
      {
        parameter: 'Impianti di Scarico Villini Anni ’20–’30',
        value: 'Collettori in gres ceramico, braghe in piombo e sifoni Firenze in ghisa/cemento',
        note: 'Pulizia elettromeccanica Root-Cutter a bassa velocità (divieto canal-jet > 120 bar)',
      },
      {
        parameter: 'Ricerca Perdite in Cortili e Murature in Tufo',
        value: 'Igrometro dielettrico Tramex + Termocamera FLIR + Gas Tracciante H2/N2',
        note: 'Distinzione immediata tra umidità di risalita capillare del tufo e perdita idrica attiva',
      },
      {
        parameter: 'Sistemi di Scarico WC Storici e Moderni',
        value: 'Batterie esterne Catis su cassette alte + Cassette incassate Pucci e Geberit',
        note: 'Ricambistica completa a bordo per riparazioni conservative in giornata',
      },
      {
        parameter: 'Durezza Calcare Acqua (35–36 °F)',
        value: 'Lavaggio chimico scambiatori caldaie autonome e posa dosatori polifosfati',
        note: 'Protezione impianti termoautonomi dei villini a norma UNI 8065:2019',
      },
    ],
    caseStudies: [
      {
        title: 'Diagnosi differenziale tra umidità di risalita nel tufo e perdita occulta in Via dei Corneli',
        street: 'Via dei Corneli (Quadraro Vecchio)',
        description:
          'Al piano terra di un villino del 1928 la parete in muratura di tufo mostrava forti efflorescenze saline. Con prova manometrica, termocamera FLIR e gas tracciante abbiamo individuato una micro-foratura sul tubo di adduzione in ferro sotto la soglia del bagno.',
        outcome: 'Riparazione puntuale su 40 cm di tubo e asciugatura progressiva della muratura in tufo.',
      },
      {
        title: 'Sblocco collettore in gres con contropendenza e taglio radici in Via dei Quintili',
        street: 'Via dei Quintili / Largo dei Quintili',
        description:
          'Uno scarico fognario esterno si intasava ogni mese. La videoispezione a 512 Hz ha rivelato radici di oleandro e fico combinate con un leggero avvallamento del terreno sopra una cavità pozzolanica. Eseguita fresatura completa con Root-Cutter e installazione di un pozzetto d’ispezione sifonato.',
        outcome: 'Eliminazione definitiva dei blocchi fognari e piena ispezionabilità futura.',
      },
    ],
    faqs: [
      {
        question: 'Come capite se il muro bagnato in una casa del Quadraro Vecchio dipende dal tufo o da un tubo rotto?',
        answer:
          'Le murature in tufo dei villini di Via dei Corneli, Via dei Pisoni e Via dei Quintili assorbono l’acqua per capillarità rendendo difficile capire a occhio nudo dove nasce il guasto. Noi mettiamo in pressione i circuiti idrici e usiamo termocamera FLIR, igrometro dielettrico Tramex e gas tracciante per distinguere con certezza assoluta una perdita tubazione dall’umidità di risalita del terreno.',
      },
      {
        question: 'Perché le fognature delle casette del Quadraro Vecchio soffrono di contropendenze e radici?',
        answer:
          'Il sottosuolo del Quadraro Vecchio nasconde un fitto reticolo di antiche cave di pozzolana: i micro-assestamenti del terreno nel corso dei decenni creano piccoli avvallamenti nei tubi in gres dove ristagna l’acqua e dove penetrano le radici dei giardini. Interveniamo con frese Root-Cutter e telecamera localizzatrice a 512 Hz.',
      },
      {
        question: 'Riparate anche le vecchie batterie Catis e le cassette Pucci nelle case storiche del Quadraro?',
        answer:
          'Certamente, revisioniamo e sostituiamo in giornata sia le batterie Catis esterne sia tutte le cassette a incasso Pucci e Geberit senza toccare le mattonelle.',
      },
      {
        question: 'In quanto tempo arrivate al Quadraro Vecchio chiamando lo 06 8590 2169?',
        answer:
          'Arriviamo in 15-20 minuti in tutte le vie del Quadraro Vecchio (Via dei Lentuli, Via degli Angeli, Via dei Quintili, Via dei Corneli, Via degli Ottavi).',
      },
    ],
  },
  {
    id: 15,
    slug: 'idraulico-via-assisi',
    title: 'Idraulico Via Assisi',
    h1: 'Idraulico Via Assisi',
    shortName: 'Via Assisi',
    quadrant: 'Asse Depresso Via Assisi / Stazione Tuscolana / Villa Lais — Bacino Marrana Mariana',
    cap: '00181',
    altitude: '35 – 38 m s.l.m.',
    pressureStatic: '4,8 – 5,4 bar (sovrapressione idrica critica ai piani bassi e medi)',
    waterHardness: '34 – 35 °F (gradi francesi)',
    groundwaterRisk: 'Molto Elevato — Conca dell’antico alveo della Marrana dell’Acqua Mariana e trincea ferroviaria',
    dominantBuildingEra: 'Condomini intensivi anni ’50–’60 (6–8 piani), complessi ex-industriali e autorimesse interrate',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Via Assisi',
      'Via Gubbio',
      'Via Spoleto',
      'Via Foligno',
      'Via Orvieto (innesto Via Assisi)',
      'Via Tuscolana (sottopasso e raccordo Via Assisi)',
      'Via Nocera Umbra (tratto basso)',
      'Via Casilina Vecchia (confine est)',
    ],
    landmarks: [
      'Asse viario di Via Assisi lungo il rilevato ferroviario di Stazione Tuscolana',
      'Antico solco idrografico della Marrana dell’Acqua Mariana',
      'Complessi residenziali e commerciali tra Via Gubbio, Via Spoleto e Via Foligno',
      'Collegamento diretto con Piazza di Ponte Lungo e Villa Lais',
    ],
    metaDescription:
      'Idraulico Via Assisi a Roma Tuscolana: pronto intervento H24 in 15-20 minuti per allagamenti, pompe sommerse Vortex, riduttori pressione Caleffi e perdite. Tel: 06 8590 2169.',
    heroSummary:
      'Presidio d’emergenza idraulica H24 su Via Assisi, Via Gubbio, Via Spoleto e Via Foligno. Specializzati nella protezione anti-allagamento dei locali interrati nella conca della Marrana (35 m s.l.m.) con elettropompe sommerse Vortex e valvole antiriflusso AISI 316, installazione di riduttori di pressione Caleffi contro i 5,4 bar di rete e ricerca perdite non distruttiva.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Asse di Via Assisi',
        value: '35,8 metri s.l.m. (depressione idrografica lungo il rilevato ferroviario)',
        note: 'Massima vulnerabilità ai rigurgiti fognari durante i nubifragi intensi',
      },
      {
        parameter: 'Pressione Statica Rete Idrica Acea ATO2',
        value: '4,8 – 5,4 bar con violenti colpi d’ariete notturni nelle colonne montanti',
        note: 'Installazione riduttori di pressione a sede compensata Caleffi tarati a 3,0 bar',
      },
      {
        parameter: 'Presidio Pompe Sommerse Autorimesse e Cantine',
        value: 'Elettropompe Lowara DOMO / Flygt / Pedrollo Vortex con passaggio solidi 50 mm',
        note: 'Quadri di scambio automatico per doppia pompa e allarme acustico',
      },
      {
        parameter: 'Barriera Antiriflusso Fognario e Anti-Ratti',
        value: 'Valvole a clapet in acciaio inox AISI 316 certificate UNI EN 13564',
        note: 'Protezione meccanica totale per bagni al piano terra, taverne e magazzini',
      },
      {
        parameter: 'Risanamento Colonne Montanti Anni ’50–’60',
        value: 'Sezionamento tubi in ferro Mannesmann e innesto multistrato PE-Xb/Al/PE-Xb',
        note: 'Ricerca perdite sottotraccia con termocamera FLIR E8-XT e gas tracciante H2/N2',
      },
    ],
    caseStudies: [
      {
        title: 'Sostituzione urgente pompa sommersa bruciata in rampa box di Via Assisi',
        street: 'Via Assisi (tratto Via Gubbio – Stazione Tuscolana)',
        description:
          'La pompa di sollevamento della corsia box interrata si era bloccata per l’ingresso di detriti pozzolanici durante un temporale. Svuotato il pozzetto, rimossa la pompa guasta e installata una nuova elettropompa Lowara DOMO 15 Vortex in acciaio inox con passaggio solidi 50 mm e valvola di ritegno a palla.',
        outcome: 'Impianto di sollevamento riattivato in 90 minuti e rampa box messa in totale sicurezza.',
      },
      {
        title: 'Arresto colpo d’ariete e riparazione cassetta Pucci in Via Spoleto (zona Via Assisi)',
        street: 'Via Spoleto / Via Assisi',
        description:
          'Al 2° piano una pressione di rete di 5,2 bar faceva trafilare il galleggiante della cassetta Pucci e generava forti vibrazioni nei tubi. Installato un riduttore di pressione Caleffi con manometro in glicerina tarato a 3,0 bar e revisionata la cassetta Pucci dalla placca.',
        outcome: 'Scomparsa immediata dei rumori nelle tubazioni e chiusura perfetta dello scarico WC.',
      },
    ],
    faqs: [
      {
        question: 'Perché Via Assisi, Via Gubbio e Via Spoleto sono così esposte agli allagamenti dei box e delle cantine?',
        answer:
          'Via Assisi corre a quota 35-37 metri s.l.m. lungo l’antico alveo naturale della Marrana dell’Acqua Mariana e a ridosso del terrapieno ferroviario che fa da barriera al deflusso superficiale. Quando piove intensamente le fognature vanno in carico: per proteggere cantine, negozi e garage installiamo pompe sommerse Vortex con passaggio solidi 50 mm e valvole antiriflusso in acciaio inox AISI 316.',
      },
      {
        question: 'Perché in Via Assisi si rompono spesso i flessibili e gocciola la valvola della caldaia?',
        answer:
          'Essendo nella quota più bassa del quartiere, l’acqua dell’acquedotto Acea arriva con una pressione statica di 4,8 - 5,4 bar. Questa sovrapressione forza i rubinetti di carico delle caldaie e gonfia i flessibili: la soluzione definitiva è installare un riduttore di pressione Caleffi a sede compensata tarato a 3,0 bar.',
      },
      {
        question: 'In quanto tempo intervenite per un allagamento o una perdita in Via Assisi?',
        answer:
          'Garantiamo priorità d’emergenza rossa con arrivo in 15-20 minuti su tutta Via Assisi, Via Gubbio, Via Spoleto e Via Foligno chiamando lo 06 8590 2169.',
      },
      {
        question: 'Rilasciate perizia tecnica per i danni da infiltrazione nei condomini di Via Assisi?',
        answer:
          'Certamente. Eseguiamo la ricerca perdita con termocamera FLIR e igrometro Tramex e consegniamo la perizia strumentale completa per l’assicurazione del fabbricato.',
      },
    ],
  },
  {
    id: 16,
    slug: 'idraulico-viale-furio-camillo',
    title: 'Idraulico Viale Furio Camillo',
    h1: 'Idraulico Viale Furio Camillo',
    shortName: 'Viale Furio Camillo',
    quadrant: 'Dorsale Monumentale Viale Furio Camillo (Tra Via Appia Nuova, Via Tuscolana e Villa Lais)',
    cap: '00181',
    altitude: '40 – 44 m s.l.m.',
    pressureStatic: '3,9 – 4,5 bar al piano strada (cali dinamici agli attici 7°–8° piano)',
    waterHardness: '34 – 35 °F (gradi francesi)',
    groundwaterRisk: 'Moderato — Connessione trasversale tra il bacino Appio e la conca Tuscolana',
    dominantBuildingEra: 'Palazzi signorili e intensivi anni ’40–’60 (7–8 piani) con ampi androni e negozi storici',
    responseTime: '15-20 minuti',
    mainStreets: [
      'Viale Furio Camillo',
      'Via Cesare Baronio (incrocio Viale Furio Camillo)',
      'Via Tuscolana (nodo Viale Furio Camillo)',
      'Via Appia Nuova (sbocco Viale Furio Camillo)',
      'Via Muzio Scevola',
      'Via Statilio Tauro',
      'Via Tarquinio Prisco',
      'Via Lucio Anneo Seneca',
    ],
    landmarks: [
      'Grande viale alberato di Viale Furio Camillo tra Via Appia Nuova e Via Tuscolana',
      'Stazione Metro A Furio Camillo (sbocco su Viale Furio Camillo)',
      'Istituto Tecnico e poli scolastici/commerciali dell’Appio-Tuscolano',
      'Accesso diretto verso Piazza Cagliero e il Parco di Villa Lais',
    ],
    metaDescription:
      'Idraulico Viale Furio Camillo a Roma Tuscolana: pronto intervento H24 in 15-20 minuti per cassette Pucci/Geberit, perdite acqua, scarichi e caldaie. Tel: 06 8590 2169.',
    heroSummary:
      'Presidio termoidraulico dedicato lungo l’intero asse di Viale Furio Camillo e le sue traverse (Via Statilio Tauro, Via Tarquinio Prisco, Via Muzio Scevola). Interventi rapidi in 15-20 minuti su colonne montanti in ferro zincato Mannesmann, cassette incassate Pucci a pulsante tondo e Geberit, disotturazione colonne in ghisa e assistenza caldaie e scaldabagni.',
    techTable: [
      {
        parameter: 'Quota Altimetrica Viale Furio Camillo',
        value: '41,8 metri s.l.m. (dorsale trasversale Appio-Tuscolana)',
        note: 'Pressione statica 3,9–4,5 bar; picchi notturni ai primi piani e cali agli attici',
      },
      {
        parameter: 'Colonne Idriche e Scarichi Condominiali',
        value: 'Montanti in ferro zincato Mannesmann e colonne fecali in ghisa con braghe in piombo',
        note: 'Ricerca perdite termografica FLIR e stasatura elettromeccanica salva-tubo',
      },
      {
        parameter: 'Cassette WC Incassate nei Palazzi Storici',
        value: 'Pucci pulsante tondo in ottone/alluminio, Pucci Sara/Eco, Geberit e batterie Catis',
        note: 'Riparazione conservativa al 100% senza rompere le maioliche originali',
      },
      {
        parameter: 'Trattamento Acqua Calda e Caldaie (35 °F)',
        value: 'Lavaggio chimico scambiatori a piastre + defangatori magnetici UNI 8065:2019',
        note: 'Protezione caldaie a condensazione dai fanghi di magnetite dei termosifoni in ghisa',
      },
      {
        parameter: 'Estrazione Filetti e Rettifica Passi Rapidi',
        value: 'Fresa al carburo di tungsteno per passi rapidi e maschiatori BSP da 1/2" e 3/4"',
        note: 'Ripristino chiusure d’arresto bloccate dal calcare senza opere murarie',
      },
    ],
    caseStudies: [
      {
        title: 'Revisione cassetta Pucci storica ed estrazione rubinetto spezzato in Viale Furio Camillo',
        street: 'Viale Furio Camillo (tratto Via Tuscolana – Via Cesare Baronio)',
        description:
          'In un appartamento al 4° piano la chiave d’arresto del lavabo si era spezzata nella curva a muro e la cassetta Pucci a pulsante tondo perdeva acqua. Estratto il moncone filettato con estrattore sinistrorso, ripassato il filetto da 1/2" e sostituita sede e sfera Pucci dalla placca.',
        outcome: 'Entrambi i lavori completati in 90 minuti senza rompere una sola mattonella.',
      },
      {
        title: 'Lavaggio chimico impianto e installazione defangatore magnetico in Via Tarquinio Prisco',
        street: 'Via Tarquinio Prisco (adiacenze Viale Furio Camillo)',
        description:
          'Una caldaia Vaillant installata su un vecchio impianto con termosifoni in ghisa andava in blocco per circolazione insufficiente causata dai fanghi di magnetite. Eseguito lavaggio idropneumatico, decalcificazione dello scambiatore e posa di defangatore magnetico Caleffi.',
        outcome: 'Circolazione ripristinata al 100% e radiatori caldi uniformemente in tutto l’appartamento.',
      },
    ],
    faqs: [
      {
        question: 'Qual è la differenza di intervento nei grandi palazzi di Viale Furio Camillo rispetto agli edifici moderni?',
        answer:
          'I palazzi signorili di Viale Furio Camillo, Via Tarquinio Prisco e Via Statilio Tauro (costruiti tra il 1948 e il 1962) possiedono colonne montanti in ferro zincato Mannesmann, braghe WC in piombo saldato a stagno e radiatori in ghisa: richiedono attrezzature non invasive come frese per passi rapidi, stasatrici a frizione controllata, giunti dielettrici e defangatori magnetici.',
      },
      {
        question: 'Potete riparare un passo rapido che non chiude più l’acqua in Viale Furio Camillo senza spaccare il muro?',
        answer:
          'Sì. Smontiamo il cappuccio cromato e il vitone incrostato dal calcare (35°F), rettifichiamo la sede interna in ottone con una fresa speciale al tungsteno e montiamo un vitone nuovo con guarnizione ad alta tenuta, senza toccare le piastrelle.',
      },
      {
        question: 'In quanto tempo arrivate su Viale Furio Camillo per un’urgenza idraulica?',
        answer:
          'Siamo stanziali sul nodo Furio Camillo – Ponte Lungo e arriviamo in qualsiasi civico di Viale Furio Camillo in 15-20 minuti dalla chiamata allo 06 8590 2169.',
      },
      {
        question: 'Intervenite anche per i negozi e gli studi professionali lungo Viale Furio Camillo?',
        answer:
          'Certamente, garantiamo pronto intervento H24 per disotturazioni, perdite d’acqua, sostituzione scaldabagni e messa a norma bagni per tutte le attività commerciali e gli studi medici/professionali del viale.',
      },
    ],
  },
];

