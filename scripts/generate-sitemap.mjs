/**
 * Generatore Sitemap XML — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://idraulicotuscolana.it';
const TODAY = new Date().toISOString().split('T')[0];

const SERVICE_SLUGS = [
  'ricerca-perdite-acqua-tuscolana',
  'disotturazione-wc-scarichi-tuscolana',
  'riparazione-cassette-pucci-geberit-tuscolana',
  'assistenza-caldaie-tuscolana',
  'sostituzione-scaldabagni-tuscolana',
  'riparazione-rubinetteria-sanitari-tuscolana',
  'pronto-intervento-allagamenti-tuscolana',
  'riduttori-pressione-autoclavi-tuscolana',
];

const ZONE_SLUGS = [
  'idraulico-piazza-di-ponte-lungo',
  'idraulico-stazione-tuscolana',
  'idraulico-furio-camillo',
  'idraulico-colli-albani',
  'idraulico-arco-di-travertino',
  'idraulico-porta-furba',
  'idraulico-numidio-quadrato',
  'idraulico-lucio-sestio',
  'idraulico-giulio-agricola',
  'idraulico-subaugusta',
  'idraulico-cinecitta',
  'idraulico-villa-lais',
  'idraulico-via-del-mandrione',
  'idraulico-quadraro-vecchio',
  'idraulico-via-assisi',
  'idraulico-viale-furio-camillo',
];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/servizi/', priority: '0.9', changefreq: 'weekly' },
  { path: '/zone/', priority: '0.9', changefreq: 'weekly' },
  ...SERVICE_SLUGS.map((slug) => ({
    path: `/servizi/${slug}/`,
    priority: '0.9',
    changefreq: 'weekly',
  })),
  ...ZONE_SLUGS.map((slug) => ({
    path: `/zone/${slug}/`,
    priority: '0.85',
    changefreq: 'weekly',
  })),
  { path: '/chi-siamo/', priority: '0.7', changefreq: 'monthly' },
  { path: '/contatti/', priority: '0.8', changefreq: 'monthly' },
  { path: '/preventivo-gratuito/', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy/', priority: '0.3', changefreq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf-8');
console.log(`✅ Generato public/sitemap.xml con ${routes.length} URL.`);

const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf-8');
  console.log(`✅ Copiato sitemap.xml in out/sitemap.xml.`);
}
