'use client';

/**
 * Calcolatore Preventivi e Stime Orientative — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import React, { useState } from 'react';
import { SITE_CONFIG } from '@/data/siteConfig';

interface ServiceEstimate {
  id: string;
  name: string;
  range: string;
  note: string;
}

const ESTIMATES: ServiceEstimate[] = [
  {
    id: 'ricerca-perdite',
    name: 'Ricerca Perdite Acqua Occulte (Non Invasiva)',
    range: 'da 140 €',
    note: 'Include termocamera FLIR, geofono Sewerin o gas tracciante N2/H2 e relazione tecnica per assicurazione.',
  },
  {
    id: 'disotturazione-wc',
    name: 'Disotturazione WC o Scarichi Principali',
    range: 'da 85 €',
    note: 'Intervento con stasatrice elettromeccanica a spirali flessibili o fresa Root-Cutter senza rottura sanitari.',
  },
  {
    id: 'cassetta-pucci-geberit',
    name: 'Riparazione Cassetta Pucci o Geberit Incassata',
    range: 'da 80 €',
    note: 'Sostituzione sfere, sedi silicone, campane o galleggiante silenzioso agendo solo dalla placca frontale.',
  },
  {
    id: 'assistenza-caldaia',
    name: 'Assistenza e Lavaggio Chimico Caldaia',
    range: 'da 90 €',
    note: 'Decalcificazione scambiatore primario/secondario da calcare 33-36°F con acidi tamponati a ciclo chiuso.',
  },
  {
    id: 'scaldabagno',
    name: 'Sostituzione Scaldabagno Elettrico o a Gas',
    range: 'da 90 € + fornitura',
    note: 'Smontaggio vecchio boiler, posa nuovo apparecchio, giunti dielettrici, flessibili inox e collaudo.',
  },
  {
    id: 'riduttore-pressione',
    name: 'Installazione Riduttore di Pressione Caleffi / Autoclave',
    range: 'da 120 €',
    note: 'Regolazione a 3,0 bar con manometro in glicerina o posa gruppo inverter DAB Esybox Mini 3.',
  },
  {
    id: 'rubinetteria',
    name: 'Riparazione o Sostituzione Miscelatori / Sanitari',
    range: 'da 75 €',
    note: 'Sostituzione cartucce ceramiche, rettifica passi rapidi o montaggio nuovi gruppi rubinetto e sanitari.',
  },
];

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<string>(ESTIMATES[0].id);

  const current = ESTIMATES.find((e) => e.id === selectedService) || ESTIMATES[0];

  return (
    <div className="card-light p-6 sm:p-8 space-y-6">
      <div>
        <span className="inline-block px-3 py-1 rounded-md bg-sky-100 text-sky-900 text-xs font-extrabold uppercase tracking-wider mb-2">
          Stima Indicativa Interventi
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Calcolatore Orientativo di Costo
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Seleziona l’intervento desiderato per visualizzare la stima trasparente di partenza conforme agli standard di Roma Tuscolana.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="service-select" className="block text-xs font-bold text-slate-700">
          Tipologia di Intervento Richiesto
        </label>
        <select
          id="service-select"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-600"
        >
          {ESTIMATES.map((est) => (
            <option key={est.id} value={est.id}>
              {est.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs uppercase font-extrabold text-slate-500">Tariffa di Base:</span>
          <span className="text-2xl font-black text-sky-900">{current.range}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.note}</p>
        <div className="text-[11px] text-slate-500 font-medium">
          * Il costo effettivo viene confermato in loco dal tecnico abilitato prima di procedere, senza sorprese in fattura.
        </div>
      </div>

      <div className="pt-2">
        <a
          href={SITE_CONFIG.phoneHref}
          className="btn-emergency-amber w-full justify-center text-sm sm:text-base py-3.5 px-4 rounded-xl flex items-center gap-2 font-extrabold"
        >
          <span>Conferma Tariffa al Telefono:</span>
          <span>{SITE_CONFIG.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
