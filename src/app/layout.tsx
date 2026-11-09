/**
 * Root Layout Light Theme — idraulicotuscolana.it
 * Regola Aurea 1:1: template '%s', default 'Idraulico Tuscolana'
 * Autore: Marco D'Elia
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { SITE_CONFIG } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: '%s',
    default: 'Idraulico Tuscolana',
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author }],
  alternates: {
    canonical: `${SITE_CONFIG.url}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: `${SITE_CONFIG.url}/`,
    siteName: SITE_CONFIG.name,
    title: 'Idraulico Tuscolana',
    description: SITE_CONFIG.description,
  },
  other: {
    version: SITE_CONFIG.version,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} font-sans`}>
      <head>
        <meta name="geo.region" content="IT-RM" />
        <meta name="geo.placename" content="Roma Tuscolana" />
        <meta
          name="geo.position"
          content={`${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`}
        />
        <meta
          name="ICBM"
          content={`${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-700 selection:bg-sky-600 selection:text-white">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
