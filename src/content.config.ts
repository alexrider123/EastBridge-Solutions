import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/insights',
    // The `slug` field is shared between the en/ and zh/ counterpart of an
    // article (so their URLs pair up for hreflang), so it can't double as the
    // collection entry id — fall back to the file's own relative path instead.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    lang: z.enum(['en', 'zh']),
    slug: z.string(),
  }),
});

export const collections = { insights };
