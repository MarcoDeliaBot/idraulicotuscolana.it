/**
 * Catalogo degli 8 Servizi Pilastro — idraulicotuscolana.it
 * Regola Aurea 1:1: title === h1
 * Autore: Marco D'Elia
 */

export interface ServiceParameterRow {
  parameter: string;
  value: string;
  normative: string;
}

export interface ServiceCaseStudy {
  title: string;
  street: string;
  buildingType: string;
  problem: string;
  solution: string;
  result: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  h1: string;
  shortName: string;
  category: string;
  metaDescription: string;
  heroSummary: string;
  responseTime: string;
  priceFrom: string;
  instrumentation: string[];
  normativeRefs: string[];
  techTable: ServiceParameterRow[];
  caseStudies: ServiceCaseStudy[];
  faqs: ServiceFaqItem[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    slug: 'ricerca-perdite-acqua-tuscolana',
    title: 'Ricerca Perdite Acqua Tuscolana',
    h1: 'Ricerca Perdite Acqua Tuscolana',
    shortName: 'Ricerca Perdite Acqua',
    category: 'Diagnostica Strumentale Non Distruttiva',
    metaDescription:
      'Ricerca perdite acqua occulte a Roma Tuscolana con termocamera FLIR, geofono Sewerin e gas tracciante Formiergas. Interventi senza demolizioni. Tel: 06 8590 2169.',
    heroSummary:
      'Localizzazione millimetrica e non invasiva di infiltrazioni idriche sottotraccia nelle colonne montanti in ferro zincato Mannesmann dei palazzi intensivi anni ’50-’60 di Furio Camillo, Colli Albani, Numidio Quadrato, Lucio Sestio e Giulio Agricola, nei cunicoli del Complesso INA-Casa Tuscolano e nelle condotte interrate su tufo e pozzolana dei villini di Villa Lais, Mandrione e Quadraro Vecchio.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 140',
    instrumentation: [
      'Termocamera radiometrica FLIR E8-XT a microbolometro non raffreddato (sensibilità termica NETD < 0,05°C)',
      'Geofono elettroacustico digitale Sewerin Aquaphon A200 con filtri DSP passa-banda antirumore Metro A e ferrovia',
      'Generatore e cercafughe per gas tracciante ecologico Formiergas (95% Azoto N2 + 5% Idrogeno H2)',
      'Igrometro capacitivo dielettrico ad alta frequenza Tramex per mappatura umidità su tufo litoide e massetti in pozzolana',
      'Videoendoscopio industriale articolato Full HD con sonda da 5,5 mm per cavedi tecnici e intercapedini murarie',
    ],
    normativeRefs: [
      'UNI EN 806-4 (Installazione e collaudo idrostatico degli impianti idrici sanitari interni)',
      'UNI 10824-1 (Sistemi di tubazioni multistrato PE-Xb/Al/PE-Xb per adduzione idrica)',
      'D.M. 37/2008 art. 7 (Dichiarazione di conformità per rifacimento parziale tratti idrici sottotraccia)',
      'Linee Guida ANIA per perizie tecniche strumentali su polizze condominiali Globale Fabbricati',
    ],
    techTable: [
      {
        parameter: 'Risoluzione Termica Sensore IR',
        value: '320 × 240 pixel (MSX) con sensibilità termica < 50 mK (0,05 °C)',
        normative: 'UNI EN 13187 / ISO 6781',
      },
      {
        parameter: 'Range Frequenze Geofono Acustico',
        value: 'da 30 Hz a 4.000 Hz con soppressione vibrazioni galleria Metro A Tuscolana',
        normative: 'Standard Sewerin Water Leak Detection',
      },
      {
        parameter: 'Miscela Gas Tracciante in Pressione',
        value: '95% Azoto (N2) + 5% Idrogeno (H2) inerte, atossico e non infiammabile',
        normative: 'ISO 10156 / UNI EN 1779',
      },
      {
        parameter: 'Pressione di Collaudo Idrostatico',
        value: '1,5 volte la pressione d’esercizio (fino a 7,5 bar nei tratti sezionati)',
        normative: 'UNI EN 806-4 par. 6.1',
      },
      {
        parameter: 'Profondità Massima Rilevazione Sottotraccia',
        value: 'Fino a 180 cm sotto massetti in pozzolana, marmette di graniglia e cortili tufacei',
        normative: 'Protocollo Diagnostico Non Distruttivo',
      },
    ],
    caseStudies: [
      {
        title: 'Perdita occulta su montante in ferro zincato Mannesmann sotto graniglia anni ’50',
        street: 'Via Tuscolana (altezza Metro Numidio Quadrato)',
        buildingType: 'Palazzo intensivo di 8 piani del 1958 in cemento armato con pavimenti in marmette di graniglia',
        problem:
          'Macchia di umidità progressiva sul soffitto del quinto piano e calo di pressione sulla linea acqua fredda senza alcuna traccia visibile sulle pareti del sesto piano.',
        solution:
          'Indagine combinata con geofono Sewerin Aquaphon A200 filtrato dalle vibrazioni della Metro A e iniezione di gas tracciante H2/N2 nella diramazione idrica. Individuata micro-fessurazione per corrosione galvanica su gomito in ferro Mannesmann da 3/4" sotto una singola marmetta in corridoio.',
        result:
          'Rimozione conservativa di una sola mattonella 25x25 cm, innesto di tratto in multistrato PE-Xb/Al/PE-Xb a pressare con profilo TH, giunto dielettrico e consegna di perizia termografica certificata per rimborso assicurativo condominiale.',
      },
      {
        title: 'Dispersione idrica nel cunicolo orizzontale interrato del comprensorio INA-Casa',
        street: 'Largo Spartaco / Via Selinunte (Quadraro – INA-Casa Tuscolano)',
        buildingType: 'Fabbricato razionalista INA-Casa anni ’50 con rete di adduzione in cunicolo tecnico su banco di pozzolana',
        problem:
          'Consumo anomalo registrato dal contatore divisionale (+18 metri cubi a settimana) senza affioramento d’acqua superficiale poiché il liquido drenava nella pozzolana vulcanica sottostante.',
        solution:
          'Sezionamento della dorsale, svuotamento pneumatico e pressurizzazione a 3,5 bar con miscela Formiergas (Azoto/Idrogeno). Localizzazione del picco di idrogeno a 1,25 metri di profondità in corrispondenza del raccordo d’ingresso scala.',
        result:
          'Apertura di un saggio puntuale di 50x50 cm, sostituzione del tratto corroso con polietilene ad alta densità PE100 PN16 e ripristino immediato della pavimentazione condominiale.',
      },
    ],
    faqs: [
      {
        question: 'La ricerca perdite con termocamera e gas tracciante evita davvero di demolire il bagno?',
        answer:
          'Assolutamente sì. Incrociando termografia infrarossa FLIR, ascolto geofonico filtrato dalle vibrazioni della Metro A e gas tracciante Formiergas (H2/N2), circoscriviamo il punto esatto di rottura in un raggio di 10-15 centimetri, intervenendo su una singola mattonella anziché smantellare l’intero pavimento.',
      },
      {
        question: 'La vostra relazione tecnica è valida per il rimborso della polizza assicurativa condominiale?',
        answer:
          'Sì. Rilasciamo un dossier peritale completo di fotogrammi radiometrici ( spettro visibile + termogramma MSX), valori di umidità dielettrica Tramex, esito delle prove manometriche UNI EN 806-4 e fattura dettagliata per la voce “Ricerca e Riparazione Guasti” delle polizze Globale Fabbricati.',
      },
      {
        question: 'Perché nei palazzi tra Ponte Lungo e Via Assisi si verificano così tante perdite improvvise?',
        answer:
          'Nella conca depressa tra Piazza di Ponte Lungo, Stazione Tuscolana e Via Assisi (35-38 m s.l.m.) la pressione statica di rete Acea ATO2 tocca regolarmente i 4,8 - 5,4 bar, sollecitando oltre limite le vecchie giunzioni filettate a canapa delle tubazioni in ferro zincato Mannesmann.',
      },
      {
        question: 'Individuate anche infiltrazioni provenienti da scarichi e braghe WC senza pressione?',
        answer:
          'Certamente. Quando la perdita riguarda colonne di scarico in ghisa, braghe in piombo o pilette doccia prive di pressione idrostatica, utilizziamo coloranti traccianti fluorescenti (fluoresceina sodica con lampada UV), palloni otturatori di tenuta e videoendoscopia ad alta definizione.',
      },
    ],
  },
  {
    id: 2,
    slug: 'disotturazione-wc-scarichi-tuscolana',
    title: 'Disotturazione WC Scarichi Tuscolana',
    h1: 'Disotturazione WC Scarichi Tuscolana',
    shortName: 'Disotturazione WC e Scarichi',
    category: 'Disostruzione Elettromeccanica e Videoispezione',
    metaDescription:
      'Disotturazione WC, colonne di scarico, lavandini e fognature a Roma Tuscolana con stasatrici elettromeccaniche Root-Cutter e sonda 512 Hz. Chiama 06 8590 2169.',
    heroSummary:
      'Sblocco rapido H24 di WC intasati, braghe in piombo o ghisa, colonne fecali condominiali e collettori fognari in gres invasi da radici di pini marittimi e fichi nei villini di Mandrione, Villa Lais e Quadraro Vecchio e nei palazzi intensivi lungo Via Tuscolana.',
    responseTime: '20-25 minuti',
    priceFrom: 'Da € 85',
    instrumentation: [
      'Stasatrice elettromeccanica professionale Rothenberger R600 con spirali in acciaio armonico da 16 mm e 22 mm',
      'Testine intercambiabili: fresa taglia-radici dentata (Root-Cutter), fresa a croce per calcare e bulbo estrattore',
      'Pompa disostruente idropneumatica a onda d’urto controllata per sifoni lavabo, bidet, docce e pilette a pavimento',
      'Telecamera di videoispezione fognaria autolivellante HD con trasmettitore radio integrato a 512 Hz',
      'Localizzatore radiometrico digitale di superficie per tracciamento pozzetti ciechi sotto cortili e cantine',
    ],
    normativeRefs: [
      'UNI EN 12056-2 (Sistemi di scarico delle acque reflue all’interno degli edifici — Progettazione e calcolo)',
      'UNI EN 13508-2 (Condizioni degli impianti di scarico esterni mediante esame visivo televisivo)',
      'Regolamento Fognario Acea ATO2 per allacciamenti e sifoni Firenze ispezionabili',
      'D.M. 37/2008 (Manutenzione straordinaria e ripristino tenuta idraulica reti di scarico)',
    ],
    techTable: [
      {
        parameter: 'Regime Rotazione Fresa Elettromeccanica',
        value: '460 – 720 giri/min con frizione di sicurezza salva-tubo su piombo, gres e PVC',
        normative: 'Protocollo Meccanico Non Distruttivo',
      },
      {
        parameter: 'Divieto Tassativo Canal-Jet Alta Pressione',
        value: 'Vietato oltre 120 bar su calate in ghisa/piombo e collettori in gres anni ’20–’60',
        normative: 'Tutela Integrità Condotte Storiche',
      },
      {
        parameter: 'Diametri Tubazioni Trattabili',
        value: 'Da Ø 32 mm (scarichi lavabo/cucina) a Ø 250 mm (collettori condominiali in gres)',
        normative: 'UNI EN 12056-2',
      },
      {
        parameter: 'Frequenza Sonda Localizzazione Pozzetti',
        value: '512 Hz continua con precisione planimetrica e di profondità ± 5 cm',
        normative: 'UNI EN 13508-2',
      },
      {
        parameter: 'Lunghezza Massima Spirale Acciaio',
        value: 'Fino a 45 metri lineari con giunzioni rapide a innesto T-nut',
        normative: 'Standard Rothenberger / Ridgid',
      },
    ],
    caseStudies: [
      {
        title: 'Fresatura radici di pino e fico in collettore fognario in gres del 1929',
        street: 'Via del Mandrione / Via Casilina Vecchia',
        buildingType: 'Villino storico in muratura di tufo a due livelli con giardino privato alberato',
        problem:
          'Blocchi ricorrenti del WC al piano terra e risalita di liquami dal piatto doccia causati dall’intrusione di un denso apparato radicale attraverso i giunti in malta del collettore orizzontale in gres ceramico.',
        solution:
          'Introduzione della stasatrice elettromeccanica Rothenberger R600 armata con fresa taglia-radici a lame d’acciaio temprato (Root-Cutter) da 100 mm, seguita da videoispezione a colori e mappatura del pozzetto cieco con sonda a 512 Hz.',
        result:
          'Rimozione integrale del groviglio radicale lungo 9 metri senza danneggiare il tubo in gres centenario e ripristino dell’ispezionabilità del pozzetto interrato.',
      },
      {
        title: 'Disostruzione meccanica colonna cucina incrostata da saponi e calcare 35°F',
        street: 'Viale Giulio Agricola (tratto Via Tuscolana)',
        buildingType: 'Condominio intensivo di 7 piani del 1963 con colonne di scarico in ghisa e diramazioni in piombo',
        problem:
          'Rigurgito d’acqua saponosa nel lavello cucina del secondo piano ogni volta che scaricavano gli appartamenti sovrastanti, dovuto a un tappo pietrificato di grassi saponificati e carbonato di calcio.',
        solution:
          'Stasatura elettromeccanica con spirale flessibile da 16 mm dotata di testina a catenaria rotante morbida, calibrata per disgregare il blocco calcareo preservando la braga d’innesto in piombo.',
        result:
          'Riapertura al 100% del diametro nominale della colonna e test di deflusso simultaneo dal settimo al primo piano superato con successo.',
      },
    ],
    faqs: [
      {
        question: 'Perché vietate l’uso del canal-jet ad alta pressione nei palazzi storici della Tuscolana?',
        answer:
          'Nei fabbricati anni ’20-’60 di Mandrione, Villa Lais, Quadraro Vecchio, Furio Camillo e Lucio Sestio gli scarichi presentano braghe in piombo saldate a stagno, calate in ghisa con giunti a corda catramata o tubi in gres: un getto idrodinamico oltre 120 bar perforerebbe il piombo o spingerebbe l’acqua nei solai. Le nostre stasatrici elettromeccaniche a frizione controllata fresano solo l’ostruzione senza stressare le pareti del tubo.',
      },
      {
        question: 'Riuscite a sbloccare il WC senza dover smontare il sanitario dal pavimento?',
        answer:
          'Nella quasi totalità dei casi operiamo attraverso il sifone del vaso utilizzando sonde guidate rivestite in gomma anti-graffio che non segnano la ceramica. Smontiamo il WC solo qualora la videoispezione rilevi un oggetto rigido incastrato nella curva tecnica o nella braga.',
      },
      {
        question: 'Come trovate un pozzetto fognario o un sifone Firenze coperto dal pavimento?',
        answer:
          'Inseriamo nello scarico la telecamera dotata di trasmettitore radio a 512 Hz e la seguiamo in superficie con il ricevitore digitale, individuando al centimetro la posizione e la profondità del chiusino occultato sotto asfalto, cantina o piastrelle.',
      },
      {
        question: 'Intervenite anche in urgenza per bar, ristoranti e negozi su Via Tuscolana?',
        answer:
          'Sì, garantiamo priorità assoluta alle attività commerciali e di ristorazione lungo Via Tuscolana, Piazza di Ponte Lungo, Viale Giulio Agricola e Piazza Cinecittà, anche in orario notturno o pre-apertura.',
      },
    ],
  },
  {
    id: 3,
    slug: 'riparazione-cassette-pucci-geberit-tuscolana',
    title: 'Riparazione Cassette Pucci Geberit Tuscolana',
    h1: 'Riparazione Cassette Pucci Geberit Tuscolana',
    shortName: 'Riparazione Cassette Pucci e Geberit',
    category: 'Manutenzione Conservativa Cassette Incassate',
    metaDescription:
      'Riparazione cassette WC incassate Pucci (pulsante tondo storico, Sara, Eco) e Geberit a Roma Tuscolana senza rompere le piastrelle. Chiama 06 8590 2169.',
    heroSummary:
      'Assistenza tecnica conservativa su cassette di scarico incassate Pucci (modelli storici in rame/polietilene a pulsante tondo in alluminio/ottone, Pucci Sara e Pucci Eco), Geberit (Twinline, Sigma, Omega, Unica) e batterie esterne Catis nei bagni del quartiere Tuscolano, operando esclusivamente dalla finestra della placca frontale senza rompere alcuna piastrella.',
    responseTime: '20-30 minuti',
    priceFrom: 'Da € 80',
    instrumentation: [
      'Estrattori calibrati per sedi valvola e boccole interne di cassette Pucci storiche e Pucci Sara/Eco',
      'Ricambi originali certificati Pucci (sfere in gomma morbida, guarnizioni sede in silicone, gruppi batteria completi, galleggianti silenziosi)',
      'Ricambi originali Geberit (campane di scarico Twinline e Sigma, guarnizioni di fondo in EPDM, valvole di riempimento Tipo 380)',
      'Soluzioni disincrostanti tamponate ad azione rapida per sciogliere il calcare (33–36°F) dal fondo vasca in polietilene o rame',
      'Manometro digitale al rubinetto d’arresto per controllo sovrapressione statica di rete (> 4,8 bar)',
    ],
    normativeRefs: [
      'UNI EN 14055 (Cassette di scarico per vasi WC e orinatoi — Requisiti prestazionali e tenuta idraulica)',
      'UNI EN 1717 (Protezione contro l’inquinamento dell’acqua potabile negli impianti idrici sanitari)',
      'UNI EN 806-2 (Regolazione pressione massima d’esercizio a monte delle valvole a galleggiante)',
      'Specifiche Tecniche Costruttori Pucciplast S.p.A. e Geberit International AG',
    ],
    techTable: [
      {
        parameter: 'Modalità d’Intervento Murario',
        value: '100% conservativa attraverso il vano di ispezione della placca (Zero demolizioni)',
        normative: 'Tutela Rivestimenti Ceramici Storici',
      },
      {
        parameter: 'Modelli Pucci Revisionabili in Giornata',
        value: 'Pucci Rame pulsante tondo a vite, Pucci Sara (1 tasto) e Pucci Eco (2 tasti)',
        normative: 'Ricambistica Originale Pucciplast',
      },
      {
        parameter: 'Modelli Geberit Supportati',
        value: 'Geberit Twinline (1988–2005), Unica, Sigma (UP300/UP320/UP720), Omega e Combifix',
        normative: 'Ricambistica Originale Geberit',
      },
      {
        parameter: 'Rumorosità Galleggiante Tipo 380 / Pucci',
        value: '< 12 dB(A) a 3 bar di pressione (Classe Acustica I contro sibili notturni)',
        normative: 'UNI EN ISO 3822',
      },
      {
        parameter: 'Resistenza Pressione Massima Galleggiante',
        value: 'Collaudato fino a 10 bar statici (essenziale nelle quote basse di Ponte Lungo e Via Assisi)',
        normative: 'UNI EN 14055',
      },
    ],
    caseStudies: [
      {
        title: 'Revisione integrale cassetta Pucci storica a pulsante tondo senza toccare le maioliche anni ’60',
        street: 'Via Tuscolana (altezza Furio Camillo / Via Cesare Baronio)',
        buildingType: 'Appartamento al 4° piano in palazzo del 1961 con bagno rivestito in maioliche originali fuori produzione',
        problem:
          'Trafilamento continuo d’acqua nel vaso WC (oltre 300 litri persi al giorno) e blocco del pulsante tondo esterno in ottone cromato dovuto a incrostazioni calcaree sulla sede di tenuta e sfera deformata.',
        solution:
          'Smontaggio del rosone e del coperchio d’ispezione, decalcificazione interna della vasca, estrazione della vecchia sede ossidata, montaggio di nuova sede Pucci con guarnizione in silicone puro, sfera originale e galleggiante magnetico silenzioso.',
        result:
          'Tenuta ermetica perfetta al primo scarico, azzeramento del rumore di ricarica notturna e conservazione integrale delle maioliche storiche.',
      },
      {
        title: 'Ripristino Geberit Twinline incassata con sostituzione campana e rubinetto d’arresto',
        street: 'Via Lucio Sestio (angolo Via Calpurnio Fiamma)',
        buildingType: 'Appartamento ristrutturato negli anni ’90 in condominio di 8 piani',
        problem:
          'Il doppio tasto della placca Geberit Twinline scendeva a vuoto e l’acqua continuava a scorrere nella tazza per rottura dei ganci del bacino e indurimento della guarnizione di fondo.',
        solution:
          'Accesso dalla finestra della placca frontale, sostituzione del rubinetto d’arresto bloccato dal calcare (35°F), installazione del nuovo kit campana Geberit Twinline aggiornato, nuovo bacino con guarnizione EPDM e valvola Unifill Tipo 380.',
        result:
          'Ripristino del doppio scarico 3/6 litri con risparmio idrico immediato e garanzia di 24 mesi sui ricambi originali.',
      },
    ],
    faqs: [
      {
        question: 'Si può davvero riparare una vecchia cassetta Pucci a pulsante tondo senza rompere il muro?',
        answer:
          'Sì, sempre. Anche sulle cassette Pucci più datate (con coperchio in metallo o plastica fissato da vite centrale e pulsante tondo) disponiamo degli estrattori specifici per sostituire la sede di fondo, la sfera, l’asta di sollevamento e il galleggiante lavorando unicamente dal foro d’ispezione.',
      },
      {
        question: 'Perché la cassetta del WC ricomincia a perdere acqua nel vaso dopo pochi mesi?',
        answer:
          'Lungo Via Tuscolana concorrono due fattori: la durezza dell’acqua (33°F - 36°F) che deposita una crosta ruvida di calcare sulla guarnizione di fondo, e la pressione statica elevata (fino a 5,4 bar a Ponte Lungo, Via Assisi e Stazione Tuscolana) che impedisce la chiusura del galleggiante. Per questo puliamo chimicamente l’interno vasca e verifichiamo la pressione con manometro.',
      },
      {
        question: 'Riparate anche le cassette esterne alte in ceramica con batteria Catis?',
        answer:
          'Certamente. Nei villini storici del Mandrione, Quadraro Vecchio e Villa Lais e negli appartamenti d’epoca di Furio Camillo e Ponte Lungo eseguiamo la revisione o sostituzione completa delle batterie di scarico Catis originali, inclusi tubi di cacciata cromati, guarnizioni a cono e pulsanti pneumatici a parete.',
      },
      {
        question: 'È possibile aggiornare una vecchia placca Pucci o Geberit ingiallita con un modello moderno?',
        answer:
          'Sì. Esistono kit di aggiornamento ufficiali Pucci e Geberit che consentono di installare placche ultrasottili moderne (bianche, cromate o satinate) sulle cassette incassate nei decenni passati senza alcuna opera muraria.',
      },
    ],
  },
  {
    id: 4,
    slug: 'assistenza-caldaie-tuscolana',
    title: 'Assistenza Caldaie Tuscolana',
    h1: 'Assistenza Caldaie Tuscolana',
    shortName: 'Assistenza e Riparazione Caldaie',
    category: 'Termoidraulica e Trattamento Acque UNI 8065',
    metaDescription:
      'Assistenza, riparazione sblocco e lavaggio chimico caldaie a Roma Tuscolana (Vaillant, Baxi, Beretta, Ariston, Riello, Immergas). Chiama lo 06 8590 2169.',
    heroSummary:
      'Riparazione guasti e blocchi caldaia, disincrostazione chimica degli scambiatori a piastre intasati dal calcare (33–36°F), risoluzione aperture valvola 3 bar per sovrapressione di rete e installazione di defangatori magnetici ciclonici e dosatori di polifosfati a norma UNI 8065:2019 in tutto il quartiere Tuscolano.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 90',
    instrumentation: [
      'Pompa disincrostante elettrica a ciclo chiuso con invertitore di flusso per lavaggio chimico scambiatori',
      'Analizzatore di combustione digitale certificato UNI 10389 e micromanometro differenziale per tiraggio e pressione gas',
      'Multimetro digitale True-RMS per test sonde NTC, flussostati sanitari, valvole a tre vie e schede elettroniche',
      'Kit di precarica azoto/aria e manometro digitale per taratura vasi di espansione riscaldamento',
      'Titolatore colorimetrico per misura istantanea della durezza totale (°F) e del pH dell’acqua di impianto',
    ],
    normativeRefs: [
      'UNI 8065:2019 (Trattamento dell’acqua negli impianti per la climatizzazione invernale ed estiva e produzione ACS)',
      'UNI 7129:2015 (Impianti a gas per uso domestico e similare alimentati da rete di distribuzione)',
      'D.P.R. 74/2013 e D.M. 37/2008 (Esercizio, conduzione, controllo e manutenzione impianti termici)',
      'UNI 10845 (Verifica e adeguamento dei sistemi di evacuazione dei prodotti della combustione)',
    ],
    techTable: [
      {
        parameter: 'Durezza Media Acqua Rete Tuscolana',
        value: '33 °F – 36 °F (Soglia critica UNI 8065 per obbligo trattamento anticalcare: > 15 °F)',
        normative: 'UNI 8065:2019 par. 6',
      },
      {
        parameter: 'Tempo Lavaggio Chimico Scambiatore',
        value: '45 – 60 minuti a inversione di flusso con acido organico inibito e neutralizzante',
        normative: 'Protocollo Ripristino Portata ACS',
      },
      {
        parameter: 'Taratura Precarica Vaso Espansione',
        value: '1,0 bar a freddo (con pressione idraulica circuito primario regolata a 1,2 – 1,5 bar)',
        normative: 'Manuali Tecnici Costruttori',
      },
      {
        parameter: 'Abbattimento Magnetite con Defangatore',
        value: '> 98% dei fanghi ferrosi provenienti dai vecchi radiatori in ghisa anni ’50–’60',
        normative: 'UNI 8065:2019',
      },
      {
        parameter: 'Marchi Trattati Fuori Garanzia Casa Madre',
        value: 'Vaillant, Beretta, Baxi, Ariston, Immergas, Riello, Ferroli, Junkers Bosch, Hermann Saunier Duval',
        normative: 'D.M. 37/2008 Lettere C ed E',
      },
    ],
    caseStudies: [
      {
        title: 'Disincrostazione chimica scambiatore secondario e posa dosatore polifosfati a Lucio Sestio',
        street: 'Via Calpurnio Fiamma (zona Metro Lucio Sestio)',
        buildingType: 'Appartamento al 6° piano in palazzo del 1960 con caldaia a condensazione Vaillant ecoTEC',
        problem:
          'Acqua calda sanitaria che diventava gelida dopo 40 secondi e portata ridotta a un filo nei rubinetti del bagno, con codice di blocco per sovratemperatura dovuto allo scambiatore a piastre occluso dal calcare (35°F).',
        solution:
          'Lavaggio chimico a ciclo chiuso con pompa a inversione di flusso e reagente disincrostante inibito, risciacquo neutralizzante e installazione sottocaldaia di un dosatore proporzionale di polifosfati alimentari in ottone cromato.',
        result:
          'Portata d’acqua calda riportata a 13,5 litri/minuto stabili a 45°C e protezione permanente dello scambiatore contro nuove precipitazioni di CaCO3.',
      },
      {
        title: 'Risoluzione scarico continuo valvola 3 bar e blocco per magnetite su impianto con termosifoni in ghisa',
        street: 'Via Assisi (tratto Stazione Tuscolana / Ponte Lungo)',
        buildingType: 'Appartamento al 2° piano in stabile anni ’50 con radiatori originali in ghisa a colonne',
        problem:
          'La caldaia Baxi saliva costantemente a 3,2 bar scaricando acqua dalla valvola di sicurezza anche a riscaldamento spento, mentre i termosifoni restavano freddi nella parte bassa per accumulo di fanghi ferrosi.',
        solution:
          'Sostituzione del rubinetto di carico trafilante sollecitato dai 5,1 bar della rete stradale di Via Assisi, montaggio di un riduttore di pressione generale, lavaggio idropneumatico del circuito e installazione di filtro defangatore magnetico Caleffi Dirtmag.',
        result:
          'Pressione del circuito primario inchiodata a 1,3 bar e resa termica dei radiatori in ghisa incrementata del 25%.',
      },
    ],
    faqs: [
      {
        question: 'Perché sulla Tuscolana l’acqua calda esce a sbalzi (calda e poi fredda) sotto la doccia?',
        answer:
          'Con una durezza dell’acqua tra 33°F e 36°F, il carbonato di calcio precipita rapidamente sulle sottili piastre in acciaio inox dello scambiatore secondario: il calore non riesce più a trasferirsi all’acqua sanitaria, la sonda NTC rileva un picco oltre 85°C e spegne il bruciatore. Il nostro lavaggio chimico a inversione di flusso scioglie il calcare senza cambiare lo scambiatore.',
      },
      {
        question: 'Cosa causa il gocciolamento continuo di acqua da sotto la caldaia nei piani bassi di Ponte Lungo?',
        answer:
          'Tra Piazza Ragusa, Stazione Tuscolana, Via Assisi e Ponte Lungo la pressione di rete Acea supera spesso i 5 bar. Se il rubinetto di riempimento della caldaia trafila anche minimamente, o se la membrana del vaso di espansione è scarica, la pressione interna supera i 3 bar facendo aprire la valvola di sicurezza.',
      },
      {
        question: 'Perché è obbligatorio installare il defangatore magnetico sui vecchi impianti con termosifoni in ghisa?',
        answer:
          'I grandi radiatori in ghisa dei palazzi anni ’50-’60 del Tuscolano rilasciano continuamente ossidi di ferro neri (magnetite). Nelle moderne caldaie a condensazione il circolatore ad alta efficienza ha un rotore a magneti permanenti che attira la magnetite fino a gripparsi e bucare lo scambiatore primario. Il defangatore magnetico UNI 8065:2019 blocca il 98% di questi fanghi.',
      },
      {
        question: 'Effettuate anche sostituzioni complete con nuove caldaie a condensazione e intubamento canna fumaria?',
        answer:
          'Certamente. Eseguiamo la sostituzione chiavi in mano con caldaie a condensazione Classe A, lavaggio chimico dell’impianto, intubamento scarico fumi o scarico a parete nei casi consentiti dal D.P.R. 74/2013 e rilascio della Dichiarazione di Conformità D.M. 37/2008.',
      },
    ],
  },
  {
    id: 5,
    slug: 'sostituzione-scaldabagni-tuscolana',
    title: 'Sostituzione Scaldabagni Tuscolana',
    h1: 'Sostituzione Scaldabagni Tuscolana',
    shortName: 'Sostituzione e Riparazione Scaldabagni',
    category: 'Produzione Acqua Calda Sanitaria (Elettrici e Gas)',
    metaDescription:
      'Sostituzione e riparazione scaldabagni elettrici e a gas in giornata a Roma Tuscolana (Ariston, Baxi, Vaillant, Rinnai, Junkers). Chiama 06 8590 2169.',
    heroSummary:
      'Sostituzione rapida in giornata e riparazione di scaldabagni elettrici ad accumulo (50, 80, 100 litri e modelli sottili a doppio serbatoio) e scaldabagni istantanei a gas Low NOx negli appartamenti con riscaldamento centralizzato di Furio Camillo, Colli Albani, Numidio Quadrato, Lucio Sestio e Cinecittà.',
    responseTime: '30 minuti (Sostituzione in giornata)',
    priceFrom: 'Da € 90 (+ eventuale fornitura)',
    instrumentation: [
      'Cercafughe elettronico per gas metano/GPL e manometro differenziale a colonna d’acqua per prova tenuta UNI 11137',
      'Multimetro digitale e megaohmetro per verifica dispersione a terra delle resistenze corazzate e steatite',
      'Giunti dielettrici isolanti da 1/2" PN16 contro le correnti vaganti della Metro A e delle colonne in ferro',
      'Valvole di sicurezza idraulica combinate (ritegno + sovrapressione 7/8 bar) con convogliamento scarico sifonato',
      'Carrello saliscale elettrico per trasporto in sicurezza dei boiler ai piani alti privi di ascensore capiente',
    ],
    normativeRefs: [
      'UNI 7129:2015 (Installazione apparecchi a gas per produzione di acqua calda sanitaria e ventilazione locali)',
      'Regolamento Europeo ErP UE 814/2013 (Limiti emissioni ossidi di azoto Low NOx < 56 mg/kWh)',
      'CEI 64-8 Sezione 701 (Sicurezza elettrica nei locali bagno: Zone 0, 1, 2 e protezione differenziale 30 mA)',
      'D.M. 37/2008 (Dichiarazione di conformità per installazione e sostituzione apparecchi idrotermosanitari)',
    ],
    techTable: [
      {
        parameter: 'Durata Media Anodo di Magnesio a 35°F',
        value: '18 – 24 mesi prima della passivazione completa e dell’attacco corrosivo al bollitore',
        normative: 'Manutenzione Preventiva Antiperforazione',
      },
      {
        parameter: 'Protezione contro Correnti Galvaniche',
        value: 'Coppia di giunti dielettrici isolanti obbligatori su attacchi acqua fredda e calda',
        normative: 'UNI EN 806-2 / Tutela Anticorrosione',
      },
      {
        parameter: 'Taratura Valvola di Sicurezza Boiler',
        value: '7,0 – 8,0 bar (richiede riduttore di pressione a monte se la rete supera i 4,8 bar)',
        normative: 'UNI EN 1489',
      },
      {
        parameter: 'Classi Energetiche Boiler Elettrici',
        value: 'Classe A / B con funzione ECO-EVO autoapprendente e resistenza smaltata o steatite',
        normative: 'Regolamento UE 812/2013',
      },
      {
        parameter: 'Tipologie Scaldabagni a Gas Installati',
        value: 'Camera stagna tiraggio forzato (balconi/interni) e camera aperta Low NOx (solo balconi esterni)',
        normative: 'UNI 7129-2 / UNI 7129-3',
      },
    ],
    caseStudies: [
      {
        title: 'Sostituzione d’urgenza boiler elettrico 80 litri forato da correnti galvaniche a Colli Albani',
        street: 'Via Mario Menghini / Largo dei Colli Albani',
        buildingType: 'Condominio intensivo di 8 piani del 1962 con riscaldamento centralizzato a colonne montanti',
        problem:
          'Forte perdita d’acqua rugginosa dalla flangia inferiore di uno scaldabagno elettrico di 4 anni e scatto continuo dell’interruttore salvavita (differenziale 30 mA) per foratura della resistenza.',
        solution:
          'Svuotamento controllato del serbatoio, smontaggio del vecchio apparecchio e installazione di un nuovo Ariston Velis Evo 80 litri a doppio serbatoio piatto, completo di giunti dielettrici isolanti da 1/2", valvola di sicurezza Caleffi e nuovi flessibili inox.',
        result:
          'Intervento completato in 95 minuti dalla chiamata, dimezzamento dei tempi di riscaldamento dell’acqua e protezione totale del bollitore dalle correnti vaganti.',
      },
      {
        title: 'Installazione scaldabagno a gas Rinnai camera stagna Low NOx su balcone a Giulio Agricola',
        street: 'Via Marco Valerio Corvo (zona Giulio Agricola)',
        buildingType: 'Appartamento al 5° piano con vecchio scaldabagno a gas a fiamma pilota fuori produzione',
        problem:
          'Il vecchio scaldabagno non si accendeva più all’apertura dell’acqua calda a causa della membrana del gruppo acqua lacerata e della serpentina in rame ostruita dal calcare (35°F).',
        solution:
          'Rimozione dell’apparecchio obsoleto, lavaggio delle tubazioni, montaggio di uno scaldabagno a gas termostatico Rinnai Infinity 14 litri/min Low NOx a camera stagna con kit fumi coassiale, rubinetto gas con presa di pressione, prova di tenuta UNI 11137 e filtro anticalcare a polifosfati.',
        result:
          'Temperatura dell’acqua stabilizzata al grado anche aprendo due rubinetti contemporaneamente e rilascio della Dichiarazione di Conformità D.M. 37/2008.',
      },
    ],
    faqs: [
      {
        question: 'Perché nei grandi condomini con riscaldamento centralizzato della Tuscolana i boiler si bucano così presto?',
        answer:
          'Nei palazzi anni ’50-’60 tra Furio Camillo, Colli Albani, Numidio Quadrato e Cinecittà l’accoppiamento diretto tra le vecchie tubazioni condominiali in ferro zincato Mannesmann e i raccordi in ottone/rame innesca una pila galvanica, amplificata dalle correnti vaganti della linea Metro A e della ferrovia. Senza la coppia di giunti dielettrici isolanti che installiamo di serie, l’anodo di magnesio si consuma rapidamente e la corrente perfora il serbatoio.',
      },
      {
        question: 'Perché la valvola di sicurezza sotto lo scaldabagno elettrico gocciola tutta la notte?',
        answer:
          'Nelle zone a quota depressa come Ponte Lungo, Via Assisi e Stazione Tuscolana la pressione notturna di rete Acea supera i 5 bar. Quando l’acqua nel boiler si scalda a 65°C e aumenta di volume, la pressione interna supera la taratura di 7-8 bar della valvola di sicurezza facendola gocciolare. Si risolve installando un mini-vaso di espansione sanitario o un riduttore di pressione a monte.',
      },
      {
        question: 'In quanto tempo sostituite uno scaldabagno rotto compreso il trasporto del nuovo apparecchio?',
        answer:
          'Disponiamo a magazzino dei modelli elettrici (50, 80, 100 litri verticali, orizzontali e sottili) e a gas Low NOx più richiesti: interveniamo in giornata e completiamo smontaggio, nuova installazione certificata e smaltimento del vecchio boiler in circa 90-120 minuti.',
      },
      {
        question: 'Si può riparare uno scaldabagno elettrico che fa scattare il salvavita senza cambiarlo tutto?',
        answer:
          'Se il serbatoio smaltato è integro e non perde acqua dalla carcassa, sostituiamo in loco la sola resistenza elettrica bruciata dal calcare, il termostato di sicurezza bipolare, la guarnizione della flangia e l’anodo di magnesio, svuotando il bollitore dai chili di sabbia calcarea accumulata sul fondo.',
      },
    ],
  },
  {
    id: 6,
    slug: 'riparazione-rubinetteria-sanitari-tuscolana',
    title: 'Riparazione Rubinetteria Sanitari Tuscolana',
    h1: 'Riparazione Rubinetteria Sanitari Tuscolana',
    shortName: 'Riparazione Rubinetteria e Sanitari',
    category: 'Idraulica Sanitaria e Rubinetteria d’Epoca/Moderna',
    metaDescription:
      'Riparazione e sostituzione rubinetti, miscelatori, passi rapidi, sifoni e sanitari a Roma Tuscolana. Estrazione filetti spezzati nel muro. Tel: 06 8590 2169.',
    heroSummary:
      'Riparazione e sostituzione di miscelatori cucina e bagno (Grohe, Hansgrohe, Ideal Standard, Paffoni, Paini), rettifica di rubinetti d’arresto e passi rapidi incassati bloccati dal calcare, estrazione meccanica di filetti spezzati nel muro e montaggio di vasi WC a scarico traslato, bidet e cabine doccia in tutto il quartiere Tuscolano.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 75',
    instrumentation: [
      'Fresa rettificatrice manuale con punte in carburo di tungsteno per spianatura sedi in ottone di passi rapidi e vitoni',
      'Set di estrattori conici sinistrorsi in acciaio al cromo-molibdeno per rimozione nippli e eccentrici spezzati sottotraccia',
      'Chiavi a tubo snodate telescopiche per dadi di fissaggio sottolavello in spazi angusti',
      'Filiere e maschiatori BSP (da 3/8", 1/2" e 3/4") per ripristino filettature incrostate o spanate nelle curve a muro',
      'Siliconi acetici e neutri antimuffa certificati ISO 846 Classe A per sigillatura profili box doccia e sanitari a filo muro',
    ],
    normativeRefs: [
      'UNI EN 817 (Rubinetteria sanitaria — Miscelatori meccanici PN 10: requisiti tecnici e collaudo)',
      'UNI EN 200 (Rubinetteria sanitaria — Rubinetti singoli e miscelatori a due manopole per impianti PN 10)',
      'UNI EN 997 (Vasi WC con sifone integrato ed efficienza di lavaggio a volume ridotto)',
      'UNI EN 806-4 (Collaudo di tenuta delle giunzioni filettate e dei raccordi flessibili in treccia inox AISI 304)',
    ],
    techTable: [
      {
        parameter: 'Diametro Cartucce Ceramiche Ricambio',
        value: 'Ø 25 mm, Ø 35 mm, Ø 40 mm e Ø 46 mm (standard e con anello limitatore di temperatura)',
        normative: 'UNI EN 817',
      },
      {
        parameter: 'Tipologia Flessibili Sottolavello',
        value: 'Treccia in acciaio inox AISI 304 con anima in EPDM alimentare atossico certificato DM 174/2004',
        normative: 'D.M. 174/2004 / UNI EN 13618',
      },
      {
        parameter: 'Curve Tecniche Scarico WC Traslato',
        value: 'Eccentriche regolabili da 6 cm a 22 cm per adattare nuovi sanitari agli scarichi anni ’50–’60',
        normative: 'UNI EN 997 / UNI EN 12056',
      },
      {
        parameter: 'Rettifica Passi Rapidi e Rubinetti Arresto',
        value: 'Spianatura sede interna + sostituzione vitone in ottone stampato e guarnizione EPDM/Teflon',
        normative: 'UNI EN 200',
      },
      {
        parameter: 'Coppia di Serraggio Fissaggi Sanitari',
        value: 'Controllata con bussole in nylon anti-rottura ceramica e guarnizione fonoassorbente a pavimento',
        normative: 'Regola d’Arte Installativa',
      },
    ],
    caseStudies: [
      {
        title: 'Estrazione eccentrico doccia spezzato nel muro senza rompere le mattonelle a Numidio Quadrato',
        street: 'Via Scribonio Curione (zona Numidio Quadrato)',
        buildingType: 'Appartamento al 3° piano in stabile anni ’60 con tubazioni in ferro zincato Mannesmann',
        problem:
          'Durante un tentativo di sostituzione del gruppo doccia esterno, il raccordo eccentrico in ottone da 1/2" si era spezzato a filo della piastrella dentro la curva a muro in ferro arrugginita, causando una perdita sottotraccia.',
        solution:
          'Impiego di estrattore cilindrico ad espansione interna a freddo previa applicazione di sbloccante criogenico, rimozione del moncone filettato, ripassatura della filettatura da 1/2" con maschio calibrato BSP, tenuta con filo poliammidico Loctite 55 e montaggio di nuovo miscelatore termostatico Grohe.',
        result:
          'Salvataggio integrale del rivestimento ceramico del bagno e tenuta idraulica collaudata a 4,5 bar.',
      },
      {
        title: 'Sostituzione WC con scarico a pavimento fuori standard mediante curva traslata a Furio Camillo',
        street: 'Viale Furio Camillo / Via Cesare Baronio',
        buildingType: 'Palazzo d’epoca del 1954 con braga fecale in piombo posizionata a 19 cm dalla parete',
        problem:
          'Rottura della tazza WC storica e impossibilità di montare un sanitario moderno a filo muro standard (che richiede scarico a 9-11 cm) senza demolire il pavimento e rifare la braga in piombo.',
        solution:
          'Fornitura e posa di vaso WC rimless (senza brida) predisposto per scarico traslato, accoppiato con curva tecnica ribassata ad alta portata con guarnizione multi-labbro in elastomero termoplastico innestata a tenuta stagna nel collare in piombo.',
        result:
          'Installazione estetica a filo parete completata in 2 ore senza alcuna opera muraria e con scarico perfetto.',
      },
    ],
    faqs: [
      {
        question: 'Perché i rubinetti d’arresto generali e i passi rapidi sulla Tuscolana si bloccano o perdono dal perno?',
        answer:
          'Negli impianti anni ’50-’70 della Tuscolana i rubinetti d’arresto a vitone rimangono aperti nella stessa posizione per anni; la durezza dell’acqua (33-36°F) salda letteralmente l’albero filettato in ottone e secca il premistoppa. Quando si tenta di chiuderli in emergenza, girano a vuoto o gocciolano. Noi rettifichiamo la sede interna con fresa al tungsteno e montiamo un vitone nuovo con O-ring in EPDM senza rompere il muro.',
      },
      {
        question: 'Cosa fate se una chiave d’arresto sottolavello si spezza dentro il muro?',
        answer:
          'Utilizziamo estrattori conici sinistrorsi e maschiatori calibrati per svitare il troncone di ottone rimasto nella curva a muro e ripristinare i filetti originali, evitando di dover demolire la piastrella.',
      },
      {
        question: 'Sostituite anche i vecchi sanitari senza dover rifare gli attacchi a pavimento?',
        answer:
          'Sì. Grazie ai moderni sanitari a scarico traslato e ai flessibili estensibili ad alto passaggio, possiamo sostituire vaso WC e bidet adattandoci agli interassi storici degli anni ’50, ’60 e ’70 senza rompere il pavimento.',
      },
      {
        question: 'Riparate anche miscelatori termostatici doccia e gruppi incasso bloccati dal calcare?',
        answer:
          'Certamente. Smontiamo la cartuccia termostatica o ceramica, eseguiamo un bagno disincrostante agli ultrasuoni/acido organico, puliamo i filtri a rete sulle prese eccentriche o installiamo la cartuccia originale di ricambio.',
      },
    ],
  },
  {
    id: 7,
    slug: 'pronto-intervento-allagamenti-tuscolana',
    title: 'Pronto Intervento Allagamenti Tuscolana',
    h1: 'Pronto Intervento Allagamenti Tuscolana',
    shortName: 'Pronto Intervento Allagamenti e Pompe',
    category: 'Emergenza Allagamenti, Fognature e Stazioni Sollevamento',
    metaDescription:
      'Pronto intervento allagamenti H24 a Roma Tuscolana: svuotamento cantine, box e negozi, pompe sommerse vortex Lowara/Flygt/Pedrollo e valvole antiriflusso AISI 316. Tel: 06 8590 2169.',
    heroSummary:
      'Intervento d’emergenza in 20 minuti per allagamenti da rottura tubazioni in pressione o rigurgito fognario durante i nubifragi nei locali seminterrati, cantine, autorimesse e negozi della conca depressa tra Piazza Ragusa, Stazione Tuscolana, Via Assisi, Ponte Lungo e Via del Mandrione, con installazione di elettropompe sommerse vortex e valvole antiriflusso in acciaio inox AISI 316.',
    responseTime: '15-20 minuti (Priorità Emergenza Rossa)',
    priceFrom: 'Da € 95',
    instrumentation: [
      'Elettropompe sommergibili portatili ad alta prevalenza e aspiraliquidi industriali a doppio motore per prosciugamento rapido',
      'Pompe sommerse da fognatura con girante Vortex (Lowara DOMO, Flygt, Pedrollo serie VX) con passaggio solidi fino a 50 mm',
      'Valvole antiriflusso fognario a clapet singolo o doppio battente in acciaio inox AISI 316 con blocco manuale d’emergenza',
      'Quadri elettrici di comando per stazioni di sollevamento a 1 o 2 pompe con alternanza automatica e allarme acustico GSM/batteria',
      'Congelatore elettrico criogenico per tubazioni (fino a Ø 2") per creare un tappo di ghiaccio e bloccare perdite su colonne senza chiudere il palazzo',
    ],
    normativeRefs: [
      'UNI EN 13564-1 / 13564-2 (Dispositivi antiriflusso per edifici — Requisiti costruttivi, installazione e manutenzione)',
      'UNI EN 12050-1 / 12050-2 (Impianti di sollevamento delle acque reflue per edifici e cantieri)',
      'CEI 64-8 (Grado di protezione IP68 per apparecchiature elettriche sommerse e quadri di comando in ambienti umidi)',
      'D.M. 37/2008 Lettere A ed E (Messa in sicurezza idraulica ed elettrica post-allagamento)',
    ],
    techTable: [
      {
        parameter: 'Quota Critica Rischio Rigurgito Fognario',
        value: '35,0 – 38,5 metri s.l.m. (Conca Stazione Tuscolana, Via Assisi, Ponte Lungo, Mandrione)',
        normative: 'Mappatura Idrografica Bacino Marrana',
      },
      {
        parameter: 'Portata Elettropompe Sommerse Vortex',
        value: 'Da 180 a 650 litri/minuto con passaggio libero corpi solidi Ø 35 – 50 mm',
        normative: 'UNI EN 12050-1',
      },
      {
        parameter: 'Materiale Otturatore Valvole Antiriflusso',
        value: 'Acciaio Inox austenitico AISI 316L anti-corrosione e anti-roditori con guarnizione EPDM',
        normative: 'UNI EN 13564-1 Tipo 2 / Tipo 3',
      },
      {
        parameter: 'Congelamento Criogenico Tubazioni Attive',
        value: 'Formazione tappo di ghiaccio a -30 °C in 8–12 minuti su ferro Mannesmann, rame e multistrato',
        normative: 'Sezionamento d’Emergenza Senza Svuotamento',
      },
      {
        parameter: 'Tempo di Reazione Unità Mobile H24',
        value: '15 – 20 minuti su tutto l’asse Via Tuscolana / Appio-Tuscolano',
        normative: 'Protocollo Emergenza Rossa H24',
      },
    ],
    caseStudies: [
      {
        title: 'Messa in sicurezza autorimessa allagata e posa doppia pompa Lowara DOMO a Ponte Lungo',
        street: 'Via Assisi / Via Gela (conca depressa Ponte Lungo)',
        buildingType: 'Autorimessa condominiale interrata a quota -4,20 metri dal piano stradale (circa 33 m s.l.m.)',
        problem:
          'Durante un violento nubifragio estivo il collettore fognario stradale è andato in pressione, bruciando la vecchia pompa monofase sottodimensionata e allagando la corsia box con 35 cm di acqua mista a fango pozzolanico.',
        solution:
          'Aspirazione immediata con motopompe d’emergenza, bonifica della vasca di raccolta dal limo e installazione di un gruppo gemellare di sollevamento con 2 elettropompe Lowara DOMO 15 Vortex in acciaio inox, galleggianti a doppia soglia, quadro di scambio automatico con sirena d’allarme e valvole di ritegno a palla.',
        result:
          'Locazione prosciugata in 70 minuti e sistema ridondante collaudato capace di smaltire fino a 800 litri/minuto anche in caso di guasto di una pompa.',
      },
      {
        title: 'Arresto allagamento da flessibile scoppiato a 5,3 bar e installazione clapet inox in negozio',
        street: 'Piazza di Ponte Lungo / Via Tuscolana',
        buildingType: 'Locale commerciale C/1 con magazzino seminterrato e bagno di servizio sotto quota fognaria',
        problem:
          'Scoppio notturno del flessibile dello scaldabagno per sovrapressione statica (5,3 bar) combinato con periodici rigurgiti dalla piletta a pavimento durante i temporali.',
        solution:
          'Chiusura d’urgenza, aspirazione dell’acqua dal magazzino, sostituzione del flessibile con tubo rigido in rame cromato e riduttore di pressione Caleffi tarato a 3,0 bar, più installazione nel pozzetto d’ispezione di una valvola antiriflusso a clapet in acciaio inox AISI 316.',
        result:
          'Riapertura regolare del negozio alle ore 09:00 e protezione definitiva sia dalle sovrapressioni idriche sia dai rigurgiti fognari.',
      },
    ],
    faqs: [
      {
        question: 'Perché le cantine e i box tra Stazione Tuscolana, Via Assisi e Ponte Lungo si allagano durante i temporali?',
        answer:
          'Quel tratto del quartiere giace nella depressione altimetrica più bassa dell’area (35-38 m s.l.m.), lungo l’antico tracciato idrografico della Marrana dell’Acqua Mariana e sotto il deflusso superficiale che scende dai 55 metri di Cinecittà e Porta Furba. Durante le bombe d’acqua i collettori fognari misti entrano in pressione e l’acqua risale dagli scarichi più bassi se privi di valvola antiriflusso a clapet in acciaio inox AISI 316 e pompa sommersa Vortex.',
      },
      {
        question: 'Cosa devo fare nei primi 5 minuti se si rompe un tubo in casa e non riesco a chiudere la chiave generale?',
        answer:
          'Stacca subito l’interruttore generale della corrente elettrica dal quadro se l’acqua sta bagnando prese o pavimenti, chiama immediatamente lo 06 8590 2169 e indica la via esatta. I nostri tecnici arrivano in 15-20 minuti dotati di chiavi a T per chiusini stradali/condominiali e di congelatore criogenico per bloccare il tubo anche se la valvola d’arresto è spezzata.',
      },
      {
        question: 'Perché si bloccano le pompe sommerse nelle fosse biologiche e nei pozzetti delle rampe garage?',
        answer:
          'Le pompe economiche ad acque chiare si intasano subito a causa della sabbia pozzolanica, del fogliame e dei residui solidi, oppure il galleggiante elettrico resta incastrato contro le pareti di un pozzetto troppo stretto. Noi installiamo esclusivamente pompe professionali a girante arretrata Vortex (Lowara, Flygt, Pedrollo) con passaggio solidi fino a 50 mm e interruttori di livello magnetici verticali.',
      },
      {
        question: 'Una valvola antiriflusso fognario protegge anche dall’ingresso dei ratti negli scarichi al piano terra?',
        answer:
          'Sì, a condizione che la patella mobile interna (clapet) sia realizzata in acciaio inox AISI 316. I modelli completamente in plastica possono essere rosicchiati dai roditori provenienti dai collettori fognari stradali, mentre l’otturatore in acciaio inox garantisce una barriera meccanica invalicabile.',
      },
    ],
  },
  {
    id: 8,
    slug: 'riduttori-pressione-autoclavi-tuscolana',
    title: 'Riduttori Pressione Autoclavi Tuscolana',
    h1: 'Riduttori Pressione Autoclavi Tuscolana',
    shortName: 'Riduttori di Pressione e Autoclavi',
    category: 'Regolazione Pressione Idrica e Gruppi di Spinta',
    metaDescription:
      'Installazione riduttori di pressione Caleffi e gruppi autoclave a inverter DAB Esybox a Roma Tuscolana. Risoluzione colpi d’ariete e cali pressione. Tel: 06 8590 2169.',
    heroSummary:
      'Stabilizzazione ingegneristica della pressione idrica lungo l’intero dislivello di Via Tuscolana: installazione di riduttori di pressione a sede compensata Caleffi tarati a 3,0 bar contro i picchi di 4,8–5,4 bar a Ponte Lungo, Via Assisi e Stazione Tuscolana, e posa di autoclavi ultra-silenziose a inverter DAB Esybox Mini 3 per i piani alti (6°–8° piano) di Furio Camillo, Colli Albani e Porta Furba.',
    responseTime: '25-30 minuti',
    priceFrom: 'Da € 120',
    instrumentation: [
      'Data-logger manometrico digitale con registrazione continua H24 dei picchi di pressione statica e dinamica',
      'Riduttori di pressione a pistone e a sede compensata Caleffi serie 5350/5360 certificati EN 1567 con manometro in glicerina',
      'Ammortizzatori di colpo d’ariete a molla/membrana Caleffi serie 525 per protezione elettrovalvole e tubi Mannesmann',
      'Gruppi elettronici di pressurizzazione idrica a inverter integrato DAB Esybox e DAB Esybox Mini 3 (43 dB)',
      'Misuratore di portata ultrasonico e manometro differenziale per verifica intasamento filtri autopulenti a monte',
    ],
    normativeRefs: [
      'UNI EN 1567 (Valvole per edilizia — Riduttori di pressione per l’acqua: requisiti e prove di compensazione)',
      'UNI EN 806-2 / 806-3 (Progettazione impianti idrici sanitari: limiti di velocità del fluido e pressione tra 1,5 e 5,0 bar)',
      'UNI 9182 (Impianti di alimentazione e distribuzione d’acqua fredda e calda — Dimensionamento autoclavi)',
      'D.M. 174/2004 (Idoneità dei materiali a contatto con acque destinate al consumo umano)',
    ],
    techTable: [
      {
        parameter: 'Pressione Statica Rilevata in Quota Bassa',
        value: '4,8 – 5,4 bar (Piazza Ragusa, Stazione Tuscolana, Via Assisi, Ponte Lungo)',
        normative: 'Rete Idrica Acea ATO2',
      },
      {
        parameter: 'Taratura Ottimale Riduttore Caleffi',
        value: '3,0 bar costanti in uscita con cartuccia estraibile a sede compensata e filtro inox',
        normative: 'UNI EN 1567 / UNI EN 806-2',
      },
      {
        parameter: 'Pressione Dinamica Rilevata ai Piani 6°–8°',
        value: '0,6 – 1,2 bar nelle ore di punta mattutine (7:00–9:00) a Colli Albani e Porta Furba',
        normative: 'Soglia Minima Caldaia: 1,5 bar',
      },
      {
        parameter: 'Rumorosità Autoclave Inverter DAB Esybox Mini 3',
        value: '43 – 45 dB(A) grazie al motore raffreddato ad acqua e guscio fonoassorbente in EPP',
        normative: 'Installabile in Balcone / Ripostiglio',
      },
      {
        parameter: 'Velocità Massima Acqua nelle Tubazioni',
        value: '≤ 2,0 m/s per azzerare rumori di cavitazione, fischi e colpi d’ariete',
        normative: 'UNI EN 806-2',
      },
    ],
    caseStudies: [
      {
        title: 'Installazione riduttore di pressione Caleffi e arresto colpi d’ariete in condominio a Ponte Lungo',
        street: 'Via Albenga / Piazza di Ponte Lungo',
        buildingType: 'Palazzo di 7 piani del 1957 servito direttamente dalla condotta ad alta pressione Acea ATO2',
        problem:
          'Ai primi tre piani la pressione notturna raggiungeva i 5,4 bar, provocando violenti colpi nelle tubazioni ad ogni chiusura della lavatrice, fischi continui nei galleggianti WC e la rottura di due flessibili sottolavello in pochi mesi.',
        solution:
          'Sezionamento della dorsale all’uscita del contatore e installazione di un riduttore di pressione Caleffi serie 5350 da 3/4" a sede compensata con filtro ispezionabile e manometro a bagno di glicerina tarato a 3,0 bar, abbinato a due ammortizzatori di colpo d’ariete.',
        result:
          'Pressione inchiodata a 3,0 bar sia di giorno sia di notte, scomparsa immediata dei colpi d’ariete e messa in sicurezza delle tubazioni d’epoca.',
      },
      {
        title: 'Potenziamento portata idrica al 7° piano con gruppo inverter DAB Esybox Mini 3 a Porta Furba',
        street: 'Via Tuscolana (tratto Porta Furba – Quadraro)',
        buildingType: 'Attico al 7° piano in maxi-condominio del 1964 privo di autoclave condominiale moderna',
        problem:
          'Tra le 07:00 e le 09:00 del mattino e all’ora di cena la portata d’acqua scendeva a un filo (0,7 bar), impedendo l’accensione della caldaia a condensazione e l’uso contemporaneo di doccia e rubinetto cucina.',
        solution:
          'Realizzazione di un sistema di spinta autonomo nel vano tecnico del balcone con serbatoio di disgiunzione compatto da 200 litri alimentare e gruppo elettronico a inverter DAB Esybox Mini 3 con valvola di non ritorno antipolluzione.',
        result:
          'Pressione costante a 3,2 bar su tutti i punti acqua a qualsiasi ora con funzionamento ultra-silenzioso impercettibile all’interno dell’appartamento.',
      },
    ],
    faqs: [
      {
        question: 'Come faccio a capire se nel mio appartamento sulla Tuscolana la pressione dell’acqua è troppo alta?',
        answer:
          'I segnali tipici (molto frequenti a Ponte Lungo, Via Assisi, Stazione Tuscolana e Piazza Ragusa) sono tre: colpi secchi nei muri quando lavatrice o lavastoviglie chiudono l’acqua (colpo d’ariete), la cassetta del WC o la valvola sotto lo scaldabagno che gocciolano soprattutto di notte, e il getto dei rubinetti che schizza con violenza. Basta una nostra verifica con manometro per misurare i bar reali.',
      },
      {
        question: 'Qual è la differenza tra un riduttore di pressione economico e uno a sede compensata Caleffi?',
        answer:
          'Un riduttore economico non compensato subisce le variazioni della rete stradale: se di notte la pressione Acea sale di 1,5 bar, anche la pressione in casa sale. I riduttori a sede compensata Caleffi che installiamo possiedono un pistone bilanciato che mantiene l’uscita esattamente a 3,0 bar qualunque sia lo sbalzo esterno, e hanno la cartuccia interna estraibile per pulire il calcare (35°F) senza smontare il corpo dalle tubazioni.',
      },
      {
        question: 'Abito al 6°, 7° o 8° piano e al mattino non ho pressione: posso installare un’autoclave solo per il mio appartamento?',
        answer:
          'Sì. Installiamo il sistema elettronico a inverter DAB Esybox Mini 3 (grande quanto un piccolo case di computer e silenziosissimo, soli 43 dB) abbinato a un accumulo compatto sul balcone o in ripostiglio a norma UNI EN 1717, risolvendo definitivamente il calo di pressione senza attendere delibere condominiali.',
      },
      {
        question: 'Eseguite anche la manutenzione e riparazione di grandi gruppi autoclave condominiali?',
        answer:
          'Certamente. Interveniamo sulle centrali idriche dei super-condomini di Via Tuscolana, Viale Bruno Pelizzi, Viale Spartaco e Cinecittà per la sostituzione di vasi di espansione a membrana forati, pressostati, teleruttori, valvole di ritegno e la conversione a inverter delle pompe gemellari.',
      },
    ],
  },
];
