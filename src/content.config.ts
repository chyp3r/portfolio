import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './consts';

/**
 * Projects and blog posts are stored one file per language:
 *   src/content/projects/en/<slug>.mdx
 *   src/content/projects/tr/<slug>.mdx
 * The loader id becomes `en/<slug>` / `tr/<slug>` — see src/lib/content.ts for helpers.
 */

const linkSchema = z
  .object({
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    playStore: z.string().url().optional(),
    appStore: z.string().url().optional(),
    itch: z.string().url().optional(),
    report: z.string().url().optional(),
    website: z.string().url().optional(),
  })
  .partial();

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(CATEGORIES),
      year: z.number().int(),
      /** Sort key inside a year; higher = earlier in the list. */
      order: z.number().default(0),
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      status: z.enum(['shipped', 'finalist', 'award', 'wip', 'archived']).default('archived'),
      featured: z.boolean().default(false),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      links: linkSchema.default({}),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };
