/**
 * Template Pagina Pilastro Micro-Zona (/zone/[slug]/) — idraulicotuscolana.it
 * Regola Aurea 1:1 Assoluta: <title> === <h1>
 * Profondità Editoriale > 2.200 parole reali in <main>, overlap n-gram < 20%
 * Autore: Marco D'Elia
 */
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ZONES_DATA } from '@/data/zonesData';
import { SERVICES_DATA } from '@/data/servicesData';
import { SITE_CONFIG } from '@/data/siteConfig';
import zonesLongContent from '@/data/zonesLongContent.json';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaPhone from '@/components/CtaPhone';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ContactForm from '@/components/ContactForm';

const longContentMap = zonesLongContent as Record<string, string>;

export function generateStaticParams() {
  return ZONES_DATA.map((zone) => ({
    slug: zone.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const zone = ZONES_DATA.find((z) => z.slug === slug);
  if (!zone) return {};

  const canonicalUrl = `${SITE_CONFIG.url}/zone/${zone.slug}/`;

  return {
    title: zone.title,
    description: zone.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'it_IT',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: zone.title,
      description: zone.metaDescription,
    },
  };
}

export default async function ZoneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const zone = ZONES_DATA.find((z) => z.slug === slug);

  if (!zone) {
    notFound();
  }

  const markdownBody = longContentMap[zone.slug] || '';
  const nearbyZones = ZONES_DATA.filter((z) => z.slug !== zone.slug);

  return (
    <>
      <JsonLd
        pageTitle={zone.title}
        pageDescription={zone.metaDescription}
        canonicalPath={`/zone/${zone.slug}/`}
        areaName={`${zone.shortName} — Roma Tuscolana (${zone.cap})`}
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Zone Presidiate', url: '/zone/' },
          { name: zone.title, url: `/zone/${zone.slug}/` },
        ]}
        faqs={zone.faqs}
      />

      <main className="bg-white pb-16">
        {/* Hero Tecnico Territoriale Light */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Zone Presidiate', href: '/zone/' },
                { label: zone.title },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold uppercase tracking-wider">
                    {zone.quadrant}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
                    CAP: {zone.cap}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                    Arrivo: {zone.responseTime}
                  </span>
                </div>

                {/* Regola Aurea 1:1: <h1> identico al 100% a <title> */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {zone.h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {zone.heroSummary}
                </p>

                {/* Indicatori Idro-Orografici della Micro-Zona */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[11px] font-bold uppercase text-slate-500">
                      Quota s.l.m.
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      {zone.altitude}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[11px] font-bold uppercase text-slate-500">
                      Pressione Acea
                    </div>
                    <div className="text-sm font-extrabold text-sky-900 mt-0.5">
                      {zone.pressureStatic}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[11px] font-bold uppercase text-slate-500">
                      Durezza Calcare
                    </div>
                    <div className="text-sm font-extrabold text-amber-800 mt-0.5">
                      {zone.waterHardness}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[11px] font-bold uppercase text-slate-500">
                      Edilizia Prevalente
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                      {zone.dominantBuildingEra}
                    </div>
                  </div>
                </div>

                {/* Vie e Punti di Riferimento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-bold uppercase text-slate-500 mb-2">
                      Arterie e Vie Presidiate ({zone.shortName})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.mainStreets.map((street, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold"
                        >
                          {street}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <div className="text-xs font-bold uppercase text-slate-500 mb-2">
                      Punti di Riferimento ({zone.shortName})
                    </div>
                    <ul className="space-y-1 text-xs font-medium text-slate-700">
                      {zone.landmarks.map((lm, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-sky-600 font-bold">•</span>
                          <span>{lm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Chiamata Rapida */}
              <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-sky-900 p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-900">
                    Unità Mobile {zone.shortName}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Operativo
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-medium">
                    Numero Unico Pronto Intervento:
                  </div>
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="block text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-sky-700 transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong>Assetto Idrogeologico:</strong> {zone.groundwaterRisk}
                </div>

                <CtaPhone size="md" className="w-full justify-center" />

                <Link
                  href="/preventivo-gratuito/"
                  className="block w-full text-center py-2.5 px-4 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Preventivo Intervento Programmato
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Corpo Monografico e Dati Tecnici */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8 space-y-10">
              {/* Contenuto Monografico Specifico della Micro-Zona */}
              <MarkdownRenderer content={markdownBody} />

              {/* Tabella Tecnica Locale */}
              <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Scheda Tecnica Territoriale: {zone.shortName}
                </h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm border-collapse bg-white">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 font-bold">Parametro Territoriale</th>
                        <th className="px-4 py-3 font-bold">Rilevazione Locale</th>
                        <th className="px-4 py-3 font-bold">Impatto Impiantistico e Soluzione</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {zone.techTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="px-4 py-3 font-bold text-slate-900">{row.parameter}</td>
                          <td className="px-4 py-3 text-sky-900 font-semibold">{row.value}</td>
                          <td className="px-4 py-3 text-slate-700">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Casi Studio Documentati nella Micro-Zona */}
              <section className="space-y-5 pt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interventi Recenti nel Quadrante {zone.shortName}
                </h2>
                <div className="grid grid-cols-1 gap-5">
                  {zone.caseStudies.map((cs, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-md bg-sky-900 text-white text-xs font-bold">
                          {cs.street}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900">{cs.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{cs.description}</p>
                      <p className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-sm font-medium">
                        <strong>Risultato certificato:</strong> {cs.outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Domande Frequenti della Micro-Zona */}
              <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Domande Frequenti: {zone.title}
                </h2>
                <div className="space-y-4">
                  {zone.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2"
                    >
                      <h3 className="text-base font-extrabold text-slate-900">{faq.question}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            {/* Sidebar Silo Servizi e Zone Limitrofe */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Servizi Attivi in Zona {zone.shortName}
                </h2>
                <ul className="space-y-2 text-sm">
                  {SERVICES_DATA.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/servizi/${s.slug}/`}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 hover:border-sky-600 hover:text-sky-800 font-semibold transition-colors"
                      >
                        <span>{s.title}</span>
                        <span className="text-sky-600">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Altre Micro-Zone della Tuscolana
                </h2>
                <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                  {nearbyZones.map((z) => (
                    <Link
                      key={z.slug}
                      href={`/zone/${z.slug}/`}
                      className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-sky-600 hover:text-sky-800 font-medium transition-colors"
                    >
                      {z.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm defaultLocation={zone.shortName} />
        </div>
      </section>
    </>
  );
}
