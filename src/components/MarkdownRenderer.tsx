/**
 * Renderizzatore Markdown Strutturato per Dossier Tecnici — idraulicotuscolana.it
 * Supporta H2, H3, H4, Liste puntate, Liste numerate e Tabelle Markdown.
 * Autore: Marco D'Elia
 */
import React from 'react';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function formatInline(text: string): React.ReactNode {
  if (!text) return null;
  const regex = /(\*\*.*?\*\*|\*[^*]+\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 3) {
      return (
        <em key={index} className="italic text-slate-800">
          {part.slice(1, -1)}
        </em>
      );
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      if (href.startsWith('/') || href.startsWith('#')) {
        return (
          <Link key={index} href={href} className="text-sky-700 hover:text-sky-900 underline font-semibold">
            {label}
          </Link>
        );
      }
      return (
        <a key={index} href={href} className="text-sky-700 hover:text-sky-900 underline font-semibold">
          {label}
        </a>
      );
    }
    return part;
  });
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  if (!content) return null;
  const cleanContent = content.replace(/\r\n/g, '\n').trim();
  const rawBlocks = cleanContent.split(/\n\s*\n/);

  return (
    <div className={`space-y-4 text-slate-700 leading-relaxed ${className}`}>
      {rawBlocks.map((block, bIdx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        const lines = trimmed
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);
        if (lines.length === 0) return null;

        const firstLine = lines[0];

        if (firstLine.startsWith('## ')) {
          const title = firstLine.replace(/^##\s+/, '');
          const rest = lines.slice(1);
          return (
            <div key={bIdx} className="space-y-3 pt-6 first:pt-0">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 pb-2 border-b-2 border-sky-100 tracking-tight">
                {formatInline(title)}
              </h2>
              {rest.length > 0 && (
                <p className="leading-relaxed text-slate-700">{formatInline(rest.join(' '))}</p>
              )}
            </div>
          );
        }

        if (firstLine.startsWith('### ')) {
          const title = firstLine.replace(/^###\s+/, '');
          const rest = lines.slice(1);
          return (
            <div key={bIdx} className="space-y-2 pt-4 first:pt-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {formatInline(title)}
              </h3>
              {rest.length > 0 && (
                <p className="leading-relaxed text-slate-700">{formatInline(rest.join(' '))}</p>
              )}
            </div>
          );
        }

        if (firstLine.startsWith('#### ')) {
          const title = firstLine.replace(/^####\s+/, '');
          const rest = lines.slice(1);
          return (
            <div key={bIdx} className="space-y-1.5 pt-3 first:pt-0">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {formatInline(title)}
              </h4>
              {rest.length > 0 && (
                <p className="leading-relaxed text-slate-700">{formatInline(rest.join(' '))}</p>
              )}
            </div>
          );
        }

        // Tabella Markdown
        if (lines.length >= 2 && lines[0].startsWith('|') && lines[1].includes('---')) {
          const parseRow = (row: string) =>
            row
              .replace(/^\|/, '')
              .replace(/\|$/, '')
              .split('|')
              .map((cell) => cell.trim());

          const headers = parseRow(lines[0]);
          const bodyRows = lines.slice(2).filter((r) => r.startsWith('|')).map(parseRow);

          return (
            <div key={bIdx} className="my-5 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm border-collapse bg-white">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    {headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 font-bold border-b border-slate-700">
                        {formatInline(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {bodyRows.map((r, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                      {r.map((c, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-slate-700 align-top">
                          {formatInline(c)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Lista puntata
        if (lines.every((l) => l.startsWith('- ') || l.startsWith('* '))) {
          return (
            <ul key={bIdx} className="list-none space-y-2.5 my-3 pl-1">
              {lines.map((line, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2.5 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-sky-600 mt-2 shrink-0" />
                  <span className="flex-1 leading-relaxed">
                    {formatInline(line.replace(/^[-*]\s+/, ''))}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        // Lista numerata
        if (lines.every((l) => /^\d+\.\s+/.test(l))) {
          return (
            <ol key={bIdx} className="list-none space-y-2.5 my-3 pl-1">
              {lines.map((line, lIdx) => (
                <li key={lIdx} className="flex items-start gap-3 text-slate-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold mt-0.5 shrink-0">
                    {lIdx + 1}
                  </span>
                  <span className="flex-1 leading-relaxed">
                    {formatInline(line.replace(/^\d+\.\s+/, ''))}
                  </span>
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={bIdx} className="leading-relaxed text-slate-700">
            {formatInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
