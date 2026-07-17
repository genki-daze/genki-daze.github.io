import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
// z は 'astro:content' からも re-export されていますが非推奨です。'astro/zod' が正。
import { z } from 'astro/zod';

const bilingual = z.object({ ja: z.string(), en: z.string() });

const publications = defineCollection({
  loader: file('src/data/publications.yml'),
  schema: z.object({
    type: z.enum(['journal', 'intl_conf', 'domestic_conf', 'preprint', 'poster', 'thesis']),
    authors: bilingual,
    title: bilingual,
    venue: bilingual,
    year: z.number(),
    month: z.number().min(1).max(12).optional(),
    award: bilingual.optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

const cv = defineCollection({
  loader: file('src/data/cv.yml'),
  schema: z.object({
    section: z.enum(['education', 'experience', 'award']),
    order: z.number(),               // higher = newer = listed first
    period: bilingual,
    title: bilingual,
    detail: bilingual.optional(),
  }),
});

// Skills（スキル）コレクションは不要との判断で外してあります。
// 復活させたい場合は README の「4-6. Skills セクションを復活させる」を参照してください。

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(), summary: z.string(),
    keywords: z.array(z.string()).default([]),
    order: z.number().default(0),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '*.md' }),
  schema: z.object({}).passthrough(),
});

export const collections = { publications, cv, research, about };
