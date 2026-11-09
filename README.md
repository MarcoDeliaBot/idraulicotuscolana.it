# Portale Web Ufficiale — idraulicotuscolana.it

Portale verticale di ingegneria idraulica, termoidraulica e pronto intervento per il quadrante di **Roma Tuscolana / Appio-Tuscolano (Municipio VII di Roma Capitale)**.

- **Dominio di Produzione:** `https://idraulicotuscolana.it`
- **Numero Unico Pronto Intervento e Preventivi:** `06 8590 2169` (`tel:0685902169`)
- **Email / Endpoint Contatti:** `info@idraulicotuscolana.it` (FormSubmit AJAX + POST nativo)
- **Versione Corrente:** `0.1.0`
- **Autore e Sviluppatore Software:** **Marco D'Elia**

---

## 1. Architettura Tecnica

Il portale è sviluppato con **Next.js 15 (App Router)** configurato per la generazione statica pura (`output: 'export'`, `trailingSlash: true`), TypeScript e Tailwind CSS (Light Theme ingegneristico ad alta leggibilità e contrasto).

### Caratteristiche Principali
- **Regola Aurea 1:1 (`<title>` === `<h1>`)**: Ogni pagina del portale presenta un'identità assoluta 1:1 tra il tag `<title>` e l'unico tag `<h1>`, privo di suffissi o separatori.
- **24 Pagine Pilastro Monografiche (> 2.200 parole ciascuna in `<main>`)**:
  - **8 Servizi Pilastro (`/servizi/[slug]/`)**: Contenuti tra **2.967 e 4.300 parole** per pagina.
  - **16 Micro-Zone Territoriali (`/zone/[slug]/`)**: Contenuti tra **2.332 e 2.966 parole** per pagina.
- **Originalità Certificata (> 93%)**: Indice di somiglianza Jaccard su 3-grammi massimo pari al **6.47%** (e 4-grammi **4.27%**) su tutte le 276 combinazioni di pagine pilastro (soglia richiesta `< 20%`).
- **Esclusione Tassativa WhatsApp**: Nessun riferimento, link o icona WhatsApp nell'intero codice sorgente e nell'output compilato.
- **Dati Strutturati Schema.org JSON-LD**: Grafo semantico completo con `Plumber`, `HomeAndConstructionBusiness`, `Service`, `FAQPage`, `BreadcrumbList` e `WebSite`.
- **Cloudflare Workers Ready**: Configurazione inclusa in `wrangler.static.jsonc` e `worker/index.mjs` per il deploy su Cloudflare Workers Static Assets (`./out`).

---

## 2. Comandi di Sviluppo, Build e Collaudo (Windows 11 PowerShell)

> **Nota per Windows PowerShell**: Concatenare i comandi con `;` (non usare `&&`).

```powershell
# Installazione dipendenze
npm install

# Avvio server di sviluppo locale
npm run dev

# Build completa (Genera JSON contenuti, Sitemap XML, LLMs.txt ed esporta in ./out)
npm run build

# Verifica Regola 1:1, Word Count (> 2.200 parole) e Originalità N-gram (< 20%)
npm run verify:originality

# Audit SEO completo (Zero WhatsApp, Telefono, Canonical, JSON-LD, Sitemap)
npm run verify:seo

# Creazione backup .zip nella cartella parent (..\idraulicotuscolana.it_v0.1.0.zip)
npm run backup
```

---

## 3. Struttura del Progetto

- `src/app/` — Route App Router Next.js 15 (`/`, `/servizi/`, `/servizi/[slug]/`, `/zone/`, `/zone/[slug]/`, `/chi-siamo/`, `/contatti/`, `/preventivo-gratuito/`, `/grazie/`, `/privacy-policy/`, `/cookie-policy/`).
- `src/components/` — Componenti UI (`Header`, `Footer`, `StickyMobileBar`, `CtaPhone`, `ContactForm`, `CostCalculator`, `Breadcrumbs`, `MarkdownRenderer`, `JsonLd`).
- `src/data/` — Configurazione sito (`siteConfig.ts`), metadati strutturati di servizi e zone (`servicesData.ts`, `zonesData.ts`) e contenuti monografici (`servicesLongContent.json`, `zonesLongContent.json`).
- `scripts/` — Script Node.js per generazione contenuti, `sitemap.xml`, `llms.txt`, verifica originalità, audit SEO e backup `.zip`.
- `public/` — Asset statici (`icon.svg`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`).

---

*Progettato e sviluppato da **Marco D'Elia**.*
