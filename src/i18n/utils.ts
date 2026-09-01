import { en } from './en';
import { zh } from './zh';

export const languages = { en: 'English', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const translations = { en, zh } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function truncate(text: string, maxLen: number): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= maxLen) return flat;
  return `${flat.slice(0, maxLen - 1).trimEnd()}…`;
}

export function buildArticleJsonLd(opts: {
  headline: string;
  description: string;
  url: string;
  lang: Lang;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.lang,
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    author: {
      '@type': 'Person',
      name: 'Daniel Israeli',
    },
    publisher: {
      '@type': 'Organization',
      name: 'East Bridge Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://eastbridge.solutions/favicon.svg',
      },
    },
  };
}
