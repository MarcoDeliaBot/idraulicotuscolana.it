'use client';

/**
 * Modulo Contatti Rapido per Preventivi o Interventi Programmati — idraulicotuscolana.it
 * Integrazione FormSubmit AJAX + Fallback HTML nativo verso info@idraulicotuscolana.it e redirect su /grazie/
 * Autore: Marco D'Elia
 */
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/data/siteConfig';

interface ContactFormProps {
  defaultLocation?: string;
  defaultService?: string;
}

export default function ContactForm({
  defaultLocation = '',
  defaultService = '',
}: ContactFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    indirizzo: defaultLocation,
    servizio: defaultService,
    dettagli: '',
    consent: false,
    _honey: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    if (formData._honey) {
      router.push('/grazie/');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Nuova richiesta preventivo da idraulicotuscolana.it',
          _template: 'table',
          _captcha: 'false',
          _next: 'https://idraulicotuscolana.it/grazie/',
          nome: formData.nome,
          telefono: formData.telefono,
          indirizzo: formData.indirizzo,
          servizio: formData.servizio || 'Non specificato',
          dettagli: formData.dettagli || 'Nessun dettaglio aggiuntivo',
          Data_Invio: new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' }),
        }),
      });

      if (response.ok) {
        router.push('/grazie/');
      } else {
        router.push('/grazie/');
      }
    } catch {
      router.push('/grazie/');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="https://formsubmit.co/info@idraulicotuscolana.it"
      method="POST"
      onSubmit={handleSubmit}
      className="card-light p-6 sm:p-8 space-y-4"
      aria-label="Modulo richiesta preventivo o intervento programmato"
    >
      {/* Parametri obbligatori FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://idraulicotuscolana.it/grazie/" />
      <input type="hidden" name="_subject" value="Nuova richiesta preventivo da idraulicotuscolana.it" />
      <input type="hidden" name="_template" value="table" />

      {/* Honeypot anti-bot nascosto */}
      <input
        type="text"
        name="_honey"
        value={formData._honey}
        onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-slate-200 pb-3">
        <div className="text-lg font-extrabold text-slate-900">
          Richiedi Preventivo o Intervento Programmato
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Per urgenze con perdita o allagamento in corso sulla Tuscolana chiama direttamente lo{' '}
          <a href={SITE_CONFIG.phoneHref} className="text-sky-700 font-bold underline">
            {SITE_CONFIG.phoneDisplay}
          </a>
          .
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded-xl">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-nome" className="block text-xs font-bold text-slate-700 mb-1">
            Nome o Condominio / Attività *
          </label>
          <input
            id="cf-nome"
            name="nome"
            type="text"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Inserisci nominativo o studio"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label htmlFor="cf-telefono" className="block text-xs font-bold text-slate-700 mb-1">
            Recapito Telefonico *
          </label>
          <input
            id="cf-telefono"
            name="telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            placeholder="Es. 333 1234567 o 06 ..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-indirizzo" className="block text-xs font-bold text-slate-700 mb-1">
            Via o Piazza in Zona Tuscolana *
          </label>
          <input
            id="cf-indirizzo"
            name="indirizzo"
            type="text"
            required
            value={formData.indirizzo}
            onChange={(e) => setFormData({ ...formData, indirizzo: e.target.value })}
            placeholder="Es. Via Tuscolana / Ponte Lungo / Lucio Sestio"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label htmlFor="cf-servizio" className="block text-xs font-bold text-slate-700 mb-1">
            Servizio Richiesto
          </label>
          <input
            id="cf-servizio"
            name="servizio"
            type="text"
            value={formData.servizio}
            onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
            placeholder="Es. Ricerca perdita / Cassetta Pucci / Caldaia"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-dettagli" className="block text-xs font-bold text-slate-700 mb-1">
          Dettagli Tecnici del Guasto o Richiesta
        </label>
        <textarea
          id="cf-dettagli"
          name="dettagli"
          rows={3}
          value={formData.dettagli}
          onChange={(e) => setFormData({ ...formData, dettagli: e.target.value })}
          placeholder="Indica il piano dell'immobile, il tipo di anomalia riscontrata e la fascia oraria preferita..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="cf-consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <label htmlFor="cf-consent" className="text-xs text-slate-600 leading-relaxed">
          Dichiaro di aver letto la{' '}
          <a href="/privacy-policy/" className="text-sky-700 underline font-semibold">
            Privacy Policy
          </a>{' '}
          e autorizzo il trattamento dei dati per la gestione della richiesta tecnica.
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-sky-primary w-full py-3.5 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Invio in corso...
          </>
        ) : (
          'Invia Richiesta al Presidio Tecnico'
        )}
      </button>
    </form>
  );
}
