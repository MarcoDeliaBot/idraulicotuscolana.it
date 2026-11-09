/**
 * Pulsante Call-to-Action Telefonica — idraulicotuscolana.it
 * Autore: Marco D'Elia
 */
import React from 'react';
import { SITE_CONFIG } from '@/data/siteConfig';

interface CtaPhoneProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CtaPhone({
  label = 'Chiama Subito',
  size = 'md',
  className = '',
}: CtaPhoneProps) {
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm rounded-xl',
    md: 'px-6 py-3.5 text-base rounded-xl',
    lg: 'px-7 py-4 text-base sm:text-lg rounded-2xl',
  };

  return (
    <a
      href={SITE_CONFIG.phoneHref}
      className={`btn-emergency-amber inline-flex items-center justify-center gap-3 font-extrabold tracking-tight ${sizeClasses[size]} ${className}`}
      aria-label={`${label} ${SITE_CONFIG.phoneDisplay}`}
    >
      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <svg
          className="w-4 h-4 text-white animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.054 15.054 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
        </svg>
      </span>
      <span>
        {label} {SITE_CONFIG.phoneDisplay}
      </span>
    </a>
  );
}
