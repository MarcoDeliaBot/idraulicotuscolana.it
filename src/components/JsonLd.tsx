/**
 * Componente Dati Strutturati Schema.org JSON-LD — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import React from 'react';
import { SITE_CONFIG } from '@/data/siteConfig';

interface BreadcrumbEntry {
  name: string;
  url: string;
}

interface FaqEntry {
  question: string;
  answer: string;
}

interface JsonLdProps {
  pageTitle: string;
  pageDescription: string;
  canonicalPath: string;
  breadcrumbs?: BreadcrumbEntry[];
  faqs?: FaqEntry[];
  serviceType?: string;
  areaName?: string;
}

export default function JsonLd({
  pageTitle,
  pageDescription,
  canonicalPath,
  breadcrumbs = [],
  faqs = [],
  serviceType,
  areaName,
}: JsonLdProps) {
  const fullUrl = `${SITE_CONFIG.url}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  const graph: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': ['Plumber', 'EmergencyService', 'LocalBusiness'],
      '@id': `${SITE_CONFIG.url}/#plumber`,
      name: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.brandSecondary,
      description: pageDescription,
      url: fullUrl,
      telephone: SITE_CONFIG.phoneSchema,
      priceRange: SITE_CONFIG.priceRange,
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Contanti, Bancomat, Carta di Credito, Bonifico Bancario',
      openingHours: 'Mo-Su 00:00-24:00',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.streetAddress,
        addressLocality: SITE_CONFIG.address.addressLocality,
        addressRegion: SITE_CONFIG.address.addressRegion,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name:
          areaName ||
          'Quartiere Tuscolano / Appio-Tuscolano, Roma (Municipio VII — CAP 00181, 00178, 00174, 00175)',
      },
    },
  ];

  if (serviceType) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageTitle,
      serviceType,
      description: pageDescription,
      url: fullUrl,
      provider: {
        '@id': `${SITE_CONFIG.url}/#plumber`,
      },
      areaServed: {
        '@type': 'City',
        name: 'Roma — Tuscolana',
      },
    });
  }

  if (breadcrumbs.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${SITE_CONFIG.url}${b.url}`,
      })),
    });
  }

  if (faqs.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
