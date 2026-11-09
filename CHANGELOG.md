# Changelog — idraulicotuscolana.it

Tutti i cambiamenti rilevanti apportati a questo progetto sono documentati in questo file.
Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/), e questo progetto aderisce al [Semantic Versioning](https://semver.org/lang/it/).

**Autore e Sviluppatore:** Marco D'Elia

---

## [0.1.0] - 2026-03-30

### Added
- **Architettura Portale Next.js 15 (Static Export)**: Configurazione completa con App Router (`output: 'export'`, `trailingSlash: true`), TypeScript, Tailwind CSS (Light Theme ingegneristico ad alta leggibilità) e compatibilità nativa con Cloudflare Workers Static Assets (`wrangler.static.jsonc` e `worker/index.mjs`).
- **Regola Aurea 1:1 (`<title>` === `<h1>`)**: Implementazione rigorosa dell'identità 1:1 assoluta tra il tag `<title>` e l'unico tag `<h1>` su tutte le 33 pagine del sito, senza pipe, trattini o suffissi nel titolo.
- **8 Pagine Pilastro dei Servizi Idraulici (`/servizi/[slug]/`)**:
  - `Ricerca Perdite Acqua Tuscolana` (`/servizi/ricerca-perdite-acqua-tuscolana/`)
  - `Disotturazione WC Scarichi Tuscolana` (`/servizi/disotturazione-wc-scarichi-tuscolana/`)
  - `Riparazione Cassette Pucci Geberit Tuscolana` (`/servizi/riparazione-cassette-pucci-geberit-tuscolana/`)
  - `Assistenza Caldaie Tuscolana` (`/servizi/assistenza-caldaie-tuscolana/`)
  - `Sostituzione Scaldabagni Tuscolana` (`/servizi/sostituzione-scaldabagni-tuscolana/`)
  - `Riparazione Rubinetteria Sanitari Tuscolana` (`/servizi/riparazione-rubinetteria-sanitari-tuscolana/`)
  - `Pronto Intervento Allagamenti Tuscolana` (`/servizi/pronto-intervento-allagamenti-tuscolana/`)
  - `Riduttori Pressione Autoclavi Tuscolana` (`/servizi/riduttori-pressione-autoclavi-tuscolana/`)
- **16 Pagine Pilastro delle Micro-Zone Territoriali (`/zone/[slug]/`)**:
  - `Idraulico Piazza di Ponte Lungo`, `Idraulico Stazione Tuscolana`, `Idraulico Furio Camillo`, `Idraulico Colli Albani`, `Idraulico Arco di Travertino`, `Idraulico Porta Furba`, `Idraulico Numidio Quadrato`, `Idraulico Lucio Sestio`, `Idraulico Giulio Agricola`, `Idraulico Subaugusta`, `Idraulico Cinecittà`, `Idraulico Villa Lais`, `Idraulico Via del Mandrione`, `Idraulico Quadraro Vecchio`, `Idraulico Via Assisi`, `Idraulico Viale Furio Camillo`.
- **Contenuti Monografici Ultra-Approfonditi (> 2.200 parole per pagina)**: Redazione tecnica iper-specifica sulla geologia vulcanica (tufo litoide, pozzolana, quote altimetriche da 35 m a 56 m s.l.m.), idrodinamica della rete Acea ATO2 (pressioni da 3.2 a 5.4 bar, durezza calcarea 33°F-36°F) e stratificazione edilizia del Municipio VII di Roma (villini anni '20-'30, INA-Casa, intensivo anni '50-'70, comprensori anni '80-'90), con overlap lessicale 3-gram/4-gram inferiore al 20%.
- **Componenti di Conversione ed Esperienza Utente**:
  - Sticky bar mobile e CTA telefoniche ad alta visibilità sul numero unico `06 8590 2169` (`tel:0685902169`).
  - Esclusione tassativa di qualsiasi riferimento o link a WhatsApp.
  - Modulo contatti integrato con FormSubmit (`info@idraulicotuscolana.it`) con invio AJAX, fallback POST nativo e redirect a `/grazie/`.
  - Calcolatore interattivo di preventivo orientativo (`CostCalculator.tsx`).
- **SEO Tecnica, Dati Strutturati JSON-LD e AI Search Readiness**:
  - Grafo Schema.org JSON-LD (`Plumber`, `HomeAndConstructionBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`).
  - Generazione automatica di `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `manifest.webmanifest` e `icon.svg`.
- **Suite di Verifica e Automazione (`scripts/`)**:
  - `check-originality.mjs` (verifica Regola 1:1, word count > 2.200 parole in `<main>` e Jaccard n-gram overlap < 20%).
  - `audit-seo.mjs` (verifica tecnica SEO, telefono, assenza WhatsApp, canonical, JSON-LD e sitemap).
  - `make-backup.mjs` (creazione archivio `.zip` di backup nella cartella parent).
