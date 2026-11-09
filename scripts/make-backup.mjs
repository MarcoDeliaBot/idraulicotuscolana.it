/**
 * @file scripts/make-backup.mjs
 * @description Genera il backup .zip del progetto nella cartella parent senza dipendenze esterne
 *              utilizzando PowerShell Compress-Archive da child_process.
 * @author Marco D'Elia
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8"));
const version = pkg.version || "0.1.0";
const projectName = pkg.name || "idraulicotuscolana.it";
const zipName = `${projectName}_v${version}.zip`;
const destPath = path.resolve(process.cwd(), "..", zipName);

const entries = fs.readdirSync(process.cwd()).filter((entry) => {
  return ![
    "node_modules",
    ".git",
    ".next",
    "out",
    "dist",
    ".wrangler",
  ].includes(entry);
});

console.log(`📦 Creazione backup zip: ${destPath}`);
console.log(`   Elementi inclusi: ${entries.join(", ")}`);

if (fs.existsSync(destPath)) {
  fs.unlinkSync(destPath);
}

const itemsArg = entries.map((e) => `'${e}'`).join(", ");
const psCommand = `powershell -Command "Compress-Archive -Path ${itemsArg} -DestinationPath '${destPath}' -Force"`;

execSync(psCommand, { stdio: "inherit" });

if (fs.existsSync(destPath)) {
  const stat = fs.statSync(destPath);
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Backup completato con successo: ${destPath} (${sizeMB} MB, ${stat.size} bytes)`);
} else {
  console.error(`❌ Errore nella creazione del backup!`);
  process.exit(1);
}
