export const languages = { ja: '日本語', en: 'English' } as const;

export type Lang = keyof typeof languages;

/**
 * サイトの UI 文言（ボタン・見出し・ナビなど）。
 * ここに無い文言をコンポーネント側に直接書かないでください（英語版が壊れます）。
 * 使い方:  const tr = t(lang);  →  tr('nav_about')
 */
export const ui = {
  // --- ナビゲーション ---
  nav_about: { ja: 'About', en: 'About' },
  nav_research: { ja: '研究', en: 'Research' },
  nav_publications: { ja: '業績', en: 'Publications' },
  nav_cv: { ja: '経歴', en: 'CV' },
  nav_contact: { ja: '連絡先', en: 'Contact' },

  // --- ヒーロー ---
  hero_cta_contact: { ja: '連絡する', en: 'Get in touch' },
  hero_cta_cv: { ja: 'CV (PDF)', en: 'CV (PDF)' },

  // --- セクション見出し ---
  section_about: { ja: 'About', en: 'About' },
  section_research: { ja: '研究テーマ', en: 'Research' },
  section_publications: { ja: '業績一覧', en: 'Publications' },
  section_cv: { ja: '経歴', en: 'CV' },
  section_contact: { ja: '連絡先', en: 'Contact' },

  // --- ヒーロー / About 補助 ---
  interests_label: { ja: '関心分野', en: 'Interests' },

  // --- 連絡先 ---
  contact_intro: {
    ja: '研究に関するご連絡、共同研究や進学・採用のお問い合わせはメールでお願いします。',
    en: 'For research inquiries, collaborations, or opportunities, please reach out by email.',
  },
  email_label: { ja: 'メール', en: 'Email' },
  copy_email: { ja: 'アドレスをコピー', en: 'Copy address' },
  copied: { ja: 'コピーしました', en: 'Copied' },

  // --- CV ---
  cv_education: { ja: '学歴', en: 'Education' },
  // インターン・TA・学会スタッフが混在するため、「職歴」ではなく広めの語にしています。
  cv_experience: { ja: '経歴・活動', en: 'Experience' },
  cv_awards: { ja: '受賞', en: 'Awards' },
  cv_skills: { ja: 'スキル', en: 'Skills' },

  // --- 業績の種別ラベル（publications.yml の type と対応）---
  pub_journal: { ja: '学術論文（査読あり）', en: 'Journal Articles' },
  pub_intl_conf: { ja: '国際会議', en: 'International Conferences' },
  pub_domestic_conf: { ja: '国内会議・研究会', en: 'Domestic Conferences' },
  pub_preprint: { ja: 'プレプリント', en: 'Preprints' },
  pub_poster: { ja: 'ポスター発表', en: 'Posters' },
  pub_thesis: { ja: '学位論文', en: 'Theses' },

  // --- 共通 UI ---
  lang_switch_label: { ja: 'English', en: '日本語' },
  nav_menu_label: { ja: 'メニュー', en: 'Menu' },
  skip_to_content: { ja: '本文へスキップ', en: 'Skip to content' },
  back_to_top: { ja: 'ページ先頭へ', en: 'Back to top' },

  // --- 404 ---
  notfound_title: { ja: 'ページが見つかりません', en: 'Page not found' },
  notfound_body: {
    ja: 'お探しのページは移動または削除された可能性があります。',
    en: 'The page you are looking for may have been moved or removed.',
  },
  notfound_home: { ja: 'トップへ戻る', en: 'Back to home' },

  // --- フッター ---
  footer_built_with: { ja: 'Astro で構築 / GitHub Pages で公開', en: 'Built with Astro / Hosted on GitHub Pages' },
  last_updated: { ja: '最終更新', en: 'Last updated' },

  // --- 空状態 ---
  empty_state: { ja: 'まだ登録がありません。', en: 'Nothing here yet.' },
} as const;

export function t(lang: Lang) {
  return (key: keyof typeof ui) => ui[key][lang];
}
