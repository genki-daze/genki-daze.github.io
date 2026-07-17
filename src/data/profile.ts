import type { Lang } from '../i18n/ui';

export type Bilingual = { ja: string; en: string };

/** ソーシャルリンクのアイコン識別子。Social コンポーネントの SVG と対応。 */
export type IconName = 'github' | 'x' | 'scholar' | 'orcid' | 'researchmap' | 'linkedin' | 'email';

export type ProfileLink = { name: string; url: string; icon: IconName };

export type Profile = {
  name: Bilingual;
  nameReading: Bilingual;
  affiliation: Bilingual;
  lab: Bilingual;
  location: Bilingual;
  email: string;
  photo: string;
  cvPdf: string;
  /** 業績の著者欄で太字にする、自分の名前の表記ゆれ一覧。 */
  authorAliases: string[];
  interests: Bilingual[];
  links: ProfileLink[];
};

export const profile: Profile = {
  name: { ja: '増田 元希', en: 'Genki Masuda' },

  // 氏名の下に小さく表示されます。
  //   ja … ふりがな
  //   en … 英語ページは氏名がすでにローマ字なので、慣習にならい漢字表記を入れています。
  //         （'' にすると非表示。name と同じ文字列にしても Hero 側のガードで消えます）
  nameReading: { ja: 'ますだ げんき', en: '増田 元希' },

  affiliation: {
    ja: '東京科学大学 情報理工学院 情報工学系 修士課程2年',
    en: 'M2, Department of Computer Science, School of Computing, Institute of Science Tokyo',
  },

  // TODO(user): 指導教員名も載せるなら「大上研究室（指導教員: 大上 雅史 先生）」のように追記。
  //             役職（教授 / 准教授）は未確認のため、意図的に書いていません。
  lab: {
    ja: '大上研究室',
    en: 'Ohue Laboratory',
  },

  // 大上研究室はすずかけ台（横浜）キャンパス G3棟。違っていれば直してください。
  location: { ja: '横浜, 日本', en: 'Yokohama, Japan' },

  email: 'masuda@li.comp.isct.ac.jp',

  // ヒーローの画像であり、OGP画像（SNS共有時のサムネイル）も兼ねています。
  // 差し替える場合は public/ に置いてパスを書き換えてください。
  // 表示は120px（Retinaで240px）なので、512px程度あれば十分です。
  photo: '/profile.png',

  // TODO(user): CV の PDF を public/cv.pdf に置いて '/cv.pdf' と書く。
  // 空文字のあいだはヒーローの「CV (PDF)」ボタンは表示されません。
  cvPdf: '',

  // 業績一覧の著者欄で太字にする、自分の名前の表記ゆれ。
  // 論文ごとに「増田元希」「G. Masuda」など表記が違うため、name だけでは一致しません。
  // 長いものから順に照合されるので、順番は気にしなくて大丈夫です。
  // TODO(user): 今後 "Masuda G." のような別表記の論文が増えたら、ここに足してください。
  authorAliases: ['増田 元希', '増田元希', 'Genki Masuda', 'G. Masuda'],

  interests: [
    { ja: 'バイオインフォマティクス', en: 'Bioinformatics' },
    { ja: '機械学習', en: 'Machine Learning' },
    { ja: 'BCRレパトア', en: 'BCR Repertoire' },
    { ja: '抗体設計', en: 'Antibody Design' },
  ],

  // TODO(user): X / Google Scholar / ORCID / researchmap のアカウントがあれば、
  //             該当行のコメントを外して YOUR_* を自分のIDに置き換えてください。
  //             使わないものは行ごと削除してかまいません。
  links: [
    { name: 'GitHub', url: 'https://github.com/genki-daze', icon: 'github' },
    // { name: 'X', url: 'https://x.com/YOUR_X_HANDLE', icon: 'x' },
    // { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID', icon: 'scholar' },
    // { name: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000', icon: 'orcid' },
    // { name: 'researchmap', url: 'https://researchmap.jp/YOUR_RESEARCHMAP_ID', icon: 'researchmap' },
  ],
};

/** profile の Bilingual フィールドを言語で解決するヘルパー。 */
export function pick(value: Bilingual, lang: Lang): string {
  return value[lang];
}
