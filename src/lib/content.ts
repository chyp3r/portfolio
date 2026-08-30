import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../consts';

export type ProjectEntry = CollectionEntry<'projects'>;
export type BlogEntry = CollectionEntry<'blog'>;

/** `en/odak` → `odak` */
export const slugOf = (id: string) => id.replace(/^(en|tr)\//, '');
export const localeOf = (id: string): Locale => (id.startsWith('tr/') ? 'tr' : 'en');

const notDraft = (draft: boolean) => import.meta.env.DEV || !draft;

/** All projects for a locale, sorted newest-first (year desc, then `order` desc, then title). */
export async function getProjects(locale: Locale): Promise<ProjectEntry[]> {
  const all = await getCollection('projects', (e) => localeOf(e.id) === locale && notDraft(e.data.draft));
  return all.sort(
    (a, b) =>
      b.data.year - a.data.year ||
      b.data.order - a.data.order ||
      a.data.title.localeCompare(b.data.title)
  );
}

/** Prev/next within the same locale, following the archive order. */
export async function getProjectSiblings(entry: ProjectEntry) {
  const list = await getProjects(localeOf(entry.id));
  const i = list.findIndex((p) => p.id === entry.id);
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined,
  };
}

export async function getPosts(locale: Locale): Promise<BlogEntry[]> {
  const all = await getCollection('blog', (e) => localeOf(e.id) === locale && notDraft(e.data.draft));
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
