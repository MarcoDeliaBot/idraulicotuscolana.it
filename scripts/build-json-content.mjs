/**
 * Assembla e verifica i file JSON dei contenuti monografici (Servizi e Micro-Zone)
 * Autore: Marco D'Elia
 */

import fs from "node:fs";
import path from "node:path";
import { SERVICES_PART_1 } from "./content-services-part1.mjs";
import { SERVICES_PART_2 } from "./content-services-part2.mjs";
import { SERVICES_PART_3 } from "./content-services-part3.mjs";
import { SERVICES_PART_4 } from "./content-services-part4.mjs";
import { SERVICES_EXTRA } from "./content-services-extra.mjs";
import { ZONES_PART_1 } from "./content-zones-part1.mjs";
import { ZONES_PART_2 } from "./content-zones-part2.mjs";
import { ZONES_PART_3 } from "./content-zones-part3.mjs";
import { ZONES_PART_4 } from "./content-zones-part4.mjs";
import { ZONES_EXTRA_1 } from "./content-zones-extra1.mjs";
import { ZONES_EXTRA_2 } from "./content-zones-extra2.mjs";
import { SERVICES_BOOSTER, ZONES_BOOSTER } from "./content-booster.mjs";

function countWords(text) {
  return text
    .replace(/[#*|>_~`-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

const servicesBase = {
  ...SERVICES_PART_1,
  ...SERVICES_PART_2,
  ...SERVICES_PART_3,
  ...SERVICES_PART_4,
};

const servicesFull = {};
console.log("=== CONTEGGIO PAROLE JSON SERVIZI (8) ===");
for (const [slug, baseText] of Object.entries(servicesBase)) {
  const extraText = SERVICES_EXTRA[slug] || "";
  const boosterText = SERVICES_BOOSTER[slug] || "";
  const combined = [baseText.trim(), extraText.trim(), boosterText.trim()]
    .filter(Boolean)
    .join("\n\n---\n\n");
  servicesFull[slug] = combined;
  console.log(` - ${slug}: ${countWords(combined)} parole solo markdown`);
}

const zonesBase = {
  ...ZONES_PART_1,
  ...ZONES_PART_2,
  ...ZONES_PART_3,
  ...ZONES_PART_4,
};

const zonesExtras = {
  ...ZONES_EXTRA_1,
  ...ZONES_EXTRA_2,
};

const zonesFull = {};
console.log("\n=== CONTEGGIO PAROLE JSON ZONE (16) ===");
for (const [slug, baseText] of Object.entries(zonesBase)) {
  const extraText = zonesExtras[slug] || "";
  const boosterText = ZONES_BOOSTER[slug] || "";
  const combined = [baseText.trim(), extraText.trim(), boosterText.trim()]
    .filter(Boolean)
    .join("\n\n---\n\n");
  zonesFull[slug] = combined;
  console.log(` - ${slug}: ${countWords(combined)} parole solo markdown`);
}

const dataDir = path.resolve(process.cwd(), "src/data");
fs.writeFileSync(
  path.join(dataDir, "servicesLongContent.json"),
  JSON.stringify(servicesFull, null, 2),
  "utf8"
);
fs.writeFileSync(
  path.join(dataDir, "zonesLongContent.json"),
  JSON.stringify(zonesFull, null, 2),
  "utf8"
);

console.log("\nFile JSON generati con successo in src/data/!");
