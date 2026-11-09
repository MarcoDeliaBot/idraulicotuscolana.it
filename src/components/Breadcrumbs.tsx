/**
 * Componente Breadcrumbs — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-500 mb-6">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="text-sky-700 hover:text-sky-900 hover:underline">
            Idraulico Tuscolana
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <span className="text-slate-400">/</span>
            {item.href ? (
              <Link href={item.href} className="text-sky-700 hover:text-sky-900 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
