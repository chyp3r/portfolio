/** Global, non-translated site configuration. */
export const SITE = {
  /** Used for absolute URLs, canonical tags and JSON-LD. Keep in sync with astro.config `site`. */
  url: 'https://chyp3r.github.io',
  name: 'Gökdeniz Kuruca',
  role: 'AI / ML & Mobile Developer',
  /** Set an address here to expose a mailto contact + JSON-LD email. Empty = contact via socials only. */
  email: '',
  /** Optional CV file. Drop a PDF at `public/cv.pdf` and the button appears automatically. */
  cvPath: '/cv.pdf',
  /** Path relative to the site base; Base.astro prefixes `import.meta.env.BASE_URL`. */
  ogImage: 'og-default.jpg',
} as const;

export const SOCIALS = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/chyp3r' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gokdenizkuruca/' },
  { key: 'itchio', label: 'itch.io', href: 'https://chyp3r.itch.io/' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/gokdeniz_kuruca/' },
] as const;

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** Project category keys — labels live in the i18n dictionary. */
export const CATEGORIES = ['ai', 'mobile', 'game', 'research', 'education'] as const;
export type Category = (typeof CATEGORIES)[number];
