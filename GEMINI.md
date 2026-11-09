# GEMINI.md — Direttive Architetturali e Operative (idraulicotuscolana.it)

**Autore e Sviluppatore Software:** Marco D'Elia  
**Versione Corrente:** `0.1.0`  
**Dominio:** `https://idraulicotuscolana.it`

---

## 1. Regole Inviolabili del Progetto

1. **Lingua e Firma**:
   - Scrivere, documentare e rispondere sempre in **Italiano**.
   - Firmare il codice e la documentazione come **Marco D'Elia** (sviluppatore software, mai come idraulico nel copy pubblico del sito).
   - Il copy del sito deve rimanere **de-personalizzato e istituzionale** ("Idraulico Tuscolana Roma", "Termoidraulica Tuscolana", "i nostri tecnici abilitati").
2. **Ambiente Windows 11 PowerShell**:
   - Nei comandi terminale concatenare con `;` (MAI usare `&&`).
3. **Canali di Conversione e Divieto WhatsApp**:
   - Telefono unico: `06 8590 2169` (`tel:0685902169`, Schema.org: `+39-06-8590-2169`).
   - Modulo contatti: **FormSubmit** verso `info@idraulicotuscolana.it` con redirect a `https://idraulicotuscolana.it/grazie/`.
   - **DIVIETO ASSOLUTO WHATSAPP**: Zero occorrenze di `whatsapp` o `wa.me` in tutto il repository.
4. **Regola Aurea SEO 1:1 (`<title>` === `<h1>`)**:
   - In ogni pagina il tag `<title>` deve coincidere al 100% con l'unico tag `<h1>` della pagina (`template: '%s'` in `src/app/layout.tsx`).
5. **Profondità Tecnica e Originalità (> 2.200 parole, Overlap < 20%)**:
   - Ciascuna delle 24 pagine pilastro (8 servizi + 16 micro-zone) deve superare le **2.200 parole reali in `<main>`** e mantenere un overlap Jaccard 3-gram e 4-gram inferiore al **20%** rispetto a tutte le altre pagine.
6. **Workflow di Rilascio**:
   - Aggiornare sempre il numero di versione (**Semantic Versioning**) in `package.json`.
   - Aggiornare `CHANGELOG.md` con data, versione e modifiche (`Added` / `Changed` / `Fixed` / `Removed`).
   - Eseguire `node scripts/check-originality.mjs` e `node scripts/audit-seo.mjs` dopo ogni build.
   - Creare il backup `.zip` nella cartella parent (`..\idraulicotuscolana.it_v[versione].zip`) tramite `node scripts/make-backup.mjs`.
   - Eseguire `git add .`, `git commit` e `git push` sul branch corrente.
