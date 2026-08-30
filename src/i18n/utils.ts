import { DEFAULT_LOCALE, LOCALES, type Locale } from '../consts';
import { ui, type UIKey } from './ui';

/** Strip a configured `base` (e.g. `/portfolio`) off a pathname. */
function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && (pathname === base || pathname.startsWith(base + '/'))) {
    return pathname.slice(base.length);
  }
  return pathname;
}

/** Read the active locale from a URL pathname (`/tr/...` → `tr`, else default). */
export function getLocale(url: URL): Locale {
  const seg = stripBase(url.pathname).split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

/** Translator bound to a locale. Falls back to English, then to the key itself. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
  };
}

/**
 * Build a locale-aware, base-aware path.
 * `localizePath('/projects', 'tr')` → `/tr/projects`
 * `localizePath('/', 'en')` → `/`
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/\/+$/, '');
  const withLocale =
    locale === DEFAULT_LOCALE ? clean : `/${locale}${clean === '/' ? '' : clean}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (base + (withLocale === '/' ? '/' : withLocale)) || '/';
}

/** Same page, other language. Strips the base + a leading locale segment, then re-adds the target one. */
export function switchLocalePath(url: URL, target: Locale): string {
  const parts = stripBase(url.pathname).split('/').filter(Boolean);
  if ((LOCALES as readonly string[]).includes(parts[0])) parts.shift();
  return localizePath('/' + parts.join('/'), target);
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'tr' : 'en');

/** Locale-aware date formatting. */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
