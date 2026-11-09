/**
 * Template Pagina Pilastro Servizio (/servizi/[slug]/) — idraulicotuscolana.it
 * Regola Aurea 1:1 Assoluta: <title> === <h1>
 * Profondità Editoriale > 2.200 parole reali in <main>, overlap n-gram < 20%
 * Autore: Marco D'Elia
 */
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/data/servicesData';
import { ZONES_DATA } from '@/data/zonesData';
import { SITE_CONFIG } from '@/data/siteConfig';
import servicesLongContent from '@/data/servicesLongContent.json';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaPhone from '@/components/CtaPhone';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ContactForm from '@/components/ContactForm';

const longContentMap = servicesLongContent as Record<string, string>;

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};

  const canonicalUrl = `${SITE_CONFIG.url}/servizi/${service.slug}/`;

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'it_IT',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: service.title,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const markdownBody = longContentMap[service.slug] || '';
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        pageTitle={service.title}
        pageDescription={service.metaDescription}
        canonicalPath={`/servizi/${service.slug}/`}
        serviceType={service.shortName}
        breadcrumbs={[
          { name: 'Idraulico Tuscolana', url: '/' },
          { name: 'Servizi Idraulici', url: '/servizi/' },
          { name: service.title, url: `/servizi/${service.slug}/` },
        ]}
        faqs={service.faqs}
      />

      <main className="bg-white pb-16">
        {/* Hero Tecnico Light */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Servizi Idraulici', href: '/servizi/' },
                { label: service.title },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                    Arrivo: {service.responseTime}
                  </span>
                </div>

                {/* Regola Aurea 1:1: <h1> identico al 100% a <title> */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {service.h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {service.heroSummary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-xs font-bold uppercase text-slate-500 mb-1.5">
                      Dotazione Strumentale ({service.shortName})
                    </div>
                    <ul className="space-y-1 text-xs sm:text-sm font-medium text-slate-800">
                      {service.instrumentation.map((inst, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sky-600 font-bold">✓</span>
                          <span>{inst}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-xs font-bold uppercase text-slate-500 mb-1.5">
                      Normative Tecniche ({service.shortName})
                    </div>
                    <ul className="space-y-1 text-xs sm:text-sm font-medium text-slate-800">
                      {service.normativeRefs.map((ref, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">§</span>
                          <span>{ref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Chiamata Diretta */}
              <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-sky-900 p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-900">
                    Presidio Tuscolana
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Attivo H24
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-medium">
                    Centralino Tecnico Diretto:
                  </div>
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="block text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-sky-700 transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong>Tariffa di riferimento:</strong> {service.priceFrom}
                </div>

                <CtaPhone size="md" className="w-full justify-center" />

                <Link
                  href="/preventivo-gratuito/"
                  className="block w-full text-center py-2.5 px-4 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Richiedi Preventivo Scritto
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contenuto Principale e Monografia Tecnica */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8 space-y-10">
              {/* Corpo Monografico Approfondito */}
              <MarkdownRenderer content={markdownBody} />

              {/* Tabella Tecnica Parametrica del Servizio */}
              <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Parametri Operativi: {service.shortName}
                </h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm border-collapse bg-white">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 font-bold">Parametro Tecnico</th>
                        <th className="px-4 py-3 font-bold">Valore / Specifica di Cantiere</th>
                        <th className="px-4 py-3 font-bold">Normativa / Protocollo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {service.techTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                          <td className="px-4 py-3 font-bold text-slate-900">{row.parameter}</td>
                          <td className="px-4 py-3 text-slate-700">{row.value}</td>
                          <td className="px-4 py-3 text-slate-600 font-medium">{row.normative}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Casi Studio Reali nel Quartiere Tuscolano */}
              <section className="space-y-5 pt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interventi Eseguiti sulla Tuscolana: {service.shortName}
                </h2>
                <div className="grid grid-cols-1 gap-5">
                  {service.caseStudies.map((cs, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-md bg-sky-900 text-white text-xs font-bold">
                          {cs.street}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          {cs.buildingType}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900">{cs.title}</h3>
                      <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900">Patologia impiantistica:</strong>{' '}
                          {cs.problem}
                        </p>
                        <p>
                          <strong className="text-slate-900">Soluzione tecnica:</strong>{' '}
                          {cs.solution}
                        </p>
                        <p className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
                          <strong>Esito collaudo:</strong> {cs.result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Domande Frequenti (FAQ) */}
              <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Domande Tecniche su {service.title}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
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

            {/* Sidebar Tecnica e Interlinking Silo */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Altri Reparti Specialistici
                </h2>
                <ul className="space-y-2 text-sm">
                  {otherServices.map((s) => (
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
                  Micro-Zone Servite sulla Tuscolana
                </h2>
                <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                  {ZONES_DATA.map((z) => (
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
          <ContactForm defaultService={service.shortName} />
        </div>
      </section>
    </>
  );
}
