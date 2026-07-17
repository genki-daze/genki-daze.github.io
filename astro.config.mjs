import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 公開URL。リポジトリ名 genki-daze.github.io と一致している必要があります。
  site: 'https://genki-daze.github.io',
  base: '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: { prefixDefaultLocale: false },   // '/' = ja, '/en/' = en
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'ja', locales: { ja: 'ja-JP', en: 'en-US' } } })],
  markdown: {
    // Astro 7 の既定 Markdown プロセッサは Sätteri。remark/rehype を使うには
    // この `processor: unified({...})` エスケープハッチが必要（旧 remarkPlugins API は無効）。
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
