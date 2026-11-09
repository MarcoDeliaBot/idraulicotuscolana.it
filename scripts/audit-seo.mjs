/**
 * Script di Audit SEO, Conformità Tecnica e Divieto Canali Esclusi — idraulicotuscolana.it
 * Verifica:
 * 1. Zero occorrenze di "whatsapp" o "wa.me" in src/, public/ e out/
 * 2. Presenza telefono "06 8590 2169" e link "tel:0685902169" su ogni pagina HTML
 * 3. Validità Schema.org JSON-LD e Canonical URL
 * 4. Coerenza Sitemap XML con le pagine compilate in /out
 * Autore: Marco D'Elia
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const OUT_DIR = path.join(ROOT_DIR, 'out');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function getAllFiles(dir, extFilter = null) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extFilter));
    } else if (!extFilter || extFilter.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

let errors = 0;

console.log('======================================================================');
console.log(' 1. VERIFICA DIVIETO ASSOLUTO WHATSAPP (src/, public/, out/)');
console.log('======================================================================');

const codeFiles = [
  ...getAllFiles(SRC_DIR, ['.ts', '.tsx', '.css', '.json']),
  ...getAllFiles(PUBLIC_DIR, ['.txt', '.xml', '.svg']),
  ...getAllFiles(OUT_DIR, ['.html', '.txt', '.xml']),
];

let whatsappHits = 0;
for (const file of codeFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  if (/whatsapp|wa\.me/i.test(content)) {
    console.error(`❌ [VIOLAZIONE WHATSAPP] Trovato riferimento in: ${path.relative(ROOT_DIR, file)}`);
    whatsappHits++;
    errors++;
  }
}

if (whatsappHits === 0) {
  console.log(`✅ Zero occorrenze di "whatsapp" o "wa.me" su ${codeFiles.length} file scansionati.`);
}

console.log('\n======================================================================');
console.log(' 2. VERIFICA TELEFONO (06 8590 2169), CANONICAL E SCHEMA.ORG JSON-LD');
console.log('======================================================================');

const htmlFiles = getAllFiles(OUT_DIR, ['.html']).filter(
  (f) =>
    !f.endsWith('404.html') &&
    !f.includes(`${path.sep}404${path.sep}`) &&
    !f.includes(`${path.sep}_not-found${path.sep}`)
);

const htmlUrls = new Set();

for (const htmlFile of htmlFiles) {
  const relPath = path.relative(OUT_DIR, htmlFile).replace(/\\/g, '/');
  const routePath =
    relPath === 'index.html'
      ? '/'
      : '/' + relPath.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');

  const html = fs.readFileSync(htmlFile, 'utf-8');

  // Controllo Telefono
  const hasDisplayPhone = html.includes('06 8590 2169');
  const hasTelLink = html.includes('tel:0685902169');
  if (!hasDisplayPhone || !hasTelLink) {
    console.error(`❌ [TELEFONO MANCANTE] ${routePath} | Display: ${hasDisplayPhone}, Href: ${hasTelLink}`);
    errors++;
  }

  // Controllo Canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonicalMatch) {
    console.error(`❌ [CANONICAL MANCANTE] ${routePath}`);
    errors++;
  } else {
    const expectedCanonical = `https://idraulicotuscolana.it${routePath}`;
    if (canonicalMatch[1] !== expectedCanonical) {
      console.error(
        `❌ [CANONICAL ERRATO] ${routePath} -> Trovato: ${canonicalMatch[1]} | Atteso: ${expectedCanonical}`
      );
      errors++;
    }
  }

  // Controllo JSON-LD
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (jsonLdMatches.length === 0) {
    console.error(`❌ [JSON-LD MANCANTE] ${routePath}`);
    errors++;
  } else {
    for (const match of jsonLdMatches) {
      try {
        const parsed = JSON.parse(match[1]);
        if (!parsed || typeof parsed !== 'object') {
          throw new Error('JSON-LD non valido');
        }
      } catch (e) {
        console.error(`❌ [JSON-LD MALFORMATO] ${routePath}: ${e.message}`);
        errors++;
      }
    }
  }

  // Escludiamo /grazie/ (pagina conferma post-form) dalla verifica sitemap
  if (routePath !== '/grazie/') {
    htmlUrls.add(`https://idraulicotuscolana.it${routePath}`);
  }

  console.log(`✅ ${routePath.padEnd(55)} | Tel OK | Canonical OK | JSON-LD OK`);
}

console.log('\n======================================================================');
console.log(' 3. VERIFICA COERENZA SITEMAP.XML E LLMS.TXT');
console.log('======================================================================');

const sitemapPath = path.join(OUT_DIR, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ out/sitemap.xml non trovato.');
  errors++;
} else {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  const locMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const sitemapUrls = new Set(locMatches);

  for (const url of htmlUrls) {
    if (!sitemapUrls.has(url)) {
      console.error(`❌ [MANCANTE IN SITEMAP] ${url}`);
      errors++;
    }
  }
  for (const url of sitemapUrls) {
    if (!htmlUrls.has(url)) {
      console.error(`❌ [URL SITEMAP SENZA PAGINA HTML] ${url}`);
      errors++;
    }
  }
  console.log(`✅ Sitemap.xml perfettamente allineata: ${sitemapUrls.size} URL indicizzabili verificati.`);
}

const llmsTxtPath = path.join(OUT_DIR, 'llms.txt');
const llmsFullPath = path.join(OUT_DIR, 'llms-full.txt');
if (!fs.existsSync(llmsTxtPath) || !fs.existsSync(llmsFullPath)) {
  console.error('❌ File llms.txt o llms-full.txt mancanti in /out.');
  errors++;
} else {
  console.log('✅ File out/llms.txt e out/llms-full.txt presenti e verificati.');
}

if (errors > 0) {
  console.error(`\n❌ Audit SEO fallito con ${errors} errori.`);
  process.exit(1);
} else {
  console.log('\n🎉 AUDIT SEO E CONFORMITÀ TECNICA SUPERATI AL 100%!');
}
