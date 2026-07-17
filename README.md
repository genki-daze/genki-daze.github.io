# 研究者向け個人サイト

自分の研究・業績・経歴を日本語と英語で公開するための個人サイトです。
GitHub Pages で無料で公開できます。

- 公開URL: `https://genki-daze.github.io`
  - 日本語版が `/`、英語版が `/en/` です。
- 技術構成: [Astro](https://astro.build) 7 + GitHub Pages（GitHub Actions で自動ビルド）

<details>
<summary>なぜ Jekyll ではないのか（興味があれば）</summary>

GitHub Pages の標準は Jekyll ですが、このサイトは Astro を使っています。理由は3つです。

1. **日英2言語を1つのサイトで扱いやすい**。同じ内容の ja / en を並べて管理できます。
2. **数式（LaTeX）がそのまま書ける**。KaTeX で組版され、CDN も使いません。
3. **書き間違いをビルド時に検出できる**。YAML の型が違うとビルドが止まって教えてくれます
   （→ 「6. ビルドエラーの読み方」）。Jekyll は黙って空欄のまま公開してしまいます。

Astro を知らなくても運用できます。基本的に触るのは
`src/data/` の YAML と `src/content/` の Markdown だけです。

</details>

---

## 1. 残っている作業

**サンプル（架空の内容）はすべて実データに置き換え済みです。** 氏名・所属・研究室・業績6件・
学歴2件・メール・公開URL はあなたの情報が入っており、この状態でも公開できます。

以下は「埋めるとより良くなる」項目です。上から順に効果が大きい順に並べています。

### 1-1. 優先度：高

| # | ファイル | 何をするか |
|---|---|---|
| 1 | `src/content/about/ja.md` + `en.md` | 研究の動機・この分野を選んだ理由を1段落。**進学先の先生や採用担当が最も読む部分**です。事実は入っていますが「あなたらしさ」がまだありません |
| 2 | `src/data/publications.yml` | 国内学会発表の**英語タイトル**は日本語からの下訳です。正式な英語表記に直してください（該当行に個別の TODO 付き）。※共著者のローマ字は LM-QASAS の著者リストで確認済みなので正確です |
| 3 | `src/data/profile.ts` | `links`：X / Google Scholar / ORCID / researchmap があれば、コメントを外して ID を入れてください。GitHub のみ有効です |
| 4 | `src/content/research/ja/topic-1.md`, `topic-2.md`（+ `en/`） | 手法の要点を2〜4文。topic-1 は medRxiv のアブストラクトから起こしてあるので事実は正確ですが、表現はご自身の言葉に |

> **Skills（スキル）セクションについて**: 不要との判断で機構ごと削除してあります。
> 就活等で必要になったら「4-6. Skills セクションを復活させる」の手順で戻せます。

### 1-2. 優先度：中

| # | ファイル | 何をするか |
|---|---|---|
| 6 | `src/data/profile.ts` | `photo`：初期値 `/profile.svg` はダミーのシルエット。`public/profile.jpg` を置いて `'/profile.jpg'` に。写真を出さないなら `''` で非表示 |
| 7 | `public/favicon.svg` | タブのアイコン。中の文字が **「Y」（山田の名残）のまま**です。「M」等に直してください |
| 8 | `src/data/profile.ts` | `lab`：指導教員名を載せるなら「大上研究室（指導教員: 大上 雅史 先生）」のように追記。役職が未確認のため意図的に書いていません |
| 9 | `src/data/cv.yml` | 修士論文のテーマが決まったら `edu-master` の `detail` に追記 |

### 1-3. 優先度：低（あとで良い）

| # | ファイル | 何をするか |
|---|---|---|
| 10 | `src/data/profile.ts` | `cvPdf`：`public/cv.pdf` を置いて `'/cv.pdf'` と書くとトップに「CV (PDF)」ボタンが出ます。空のあいだはボタンごと非表示 |
| 11 | `src/layouts/BaseLayout.astro` | `ogImageURL`：SNSシェア時のカード画像。1200x630 の PNG を `public/og.png` に置くと綺麗になります（SVGはSNSでは無視されます） |
| 12 | `src/i18n/ui.ts` | ナビや見出しの文言（「業績一覧」「連絡先」等）。気に入らなければここで変更。**日本語を直接コンポーネントに書かないこと** |
| 13 | `src/data/profile.ts` | `authorAliases`：今後 `Masuda G.` のような別表記の論文が増えたら追加してください（→ 4-1） |

### 1-4. 置き換え漏れのチェック

```sh
cd ~/dev/genki-daze.github.io
grep -rn "TODO(user)" src/ public/ astro.config.mjs
```

`TODO(user)` は「埋めると良くなる場所」の印です。**残っていても公開に支障はありません。**
ただし `src/content/` 内の `<!-- TODO(user): ... -->` は HTML コメントとして公開ソースに残るので、
埋めたら削除しておくと綺麗です（画面には表示されません）。

---

## 2. 公開手順（GitHub Pages）

初回だけ少し手順があります。2回目以降は「push するだけ」で自動更新されます。

1. **GitHub でリポジトリを作る。**
   名前は**必ず** `<自分のユーザー名>.github.io` にしてください（例: ユーザー名が `taro-yamada` なら
   `taro-yamada.github.io`）。この名前でないと URL が変わります。
   - Public にしてください（Private だと無料プランでは Pages が使えません）。

2. **`astro.config.mjs` の `site` がそのユーザー名と一致しているか確認。**
   ここがズレていると、sitemap や OGP のURLが間違ったまま公開されます。

3. **push する。**
   ```sh
   cd "/Users/genki/Library/Mobile Documents/com~apple~CloudDocs/Documents/my_website"
   git init
   git add -A
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<ユーザー名>.github.io.git
   git push -u origin main
   ```

4. **GitHub 側で Pages を有効にする（ここが一番間違えやすい）。**
   リポジトリの **Settings** → 左メニューの **Pages** → **Build and deployment** の **Source** を
   **`GitHub Actions`** にしてください。

   > **⚠️ `Deploy from a branch` を選ばないこと。**
   > これは Jekyll 用の設定です。選ぶとビルドされず、真っ白なページか 404 になります。
   > 正しいのは **`GitHub Actions`** です。

5. **待つ。** リポジトリの **Actions** タブに緑のチェックが付けば完了です。初回は2分ほどかかります。
   `https://<ユーザー名>.github.io` を開いて確認してください。

以降は `git push` するたびに `.github/workflows/deploy.yml` が自動でビルドして公開します。

---

## 3. ローカルプレビュー（手元で見る）

公開する前に、自分のパソコンで確認できます。

```sh
cd "/Users/genki/Library/Mobile Documents/com~apple~CloudDocs/Documents/my_website"
npm install      # 最初の1回だけ
npm run dev
```

ブラウザで **http://localhost:4321** を開きます。
（3000番ではありません。Astro の既定は **4321** です。）

- ファイルを保存すると自動で画面が更新されます。
- 止めるときはターミナルで `Control` + `C`。
- 英語版は http://localhost:4321/en/ です。

**push する前に、必ず本番と同じビルドが通るか確認してください:**

```sh
npm run build    # エラーが出なければOK
npm run preview  # ビルド結果を http://localhost:4321 で確認
npm run check    # 型のチェック（任意）
```

> **`command not found: npm` と出たら**
> Node.js は Homebrew で入れてあります。パスが通っていないだけなので、以下を実行してから再挑戦してください。
> ```sh
> export PATH="/opt/homebrew/bin:$PATH"
> ```
> 毎回打つのが面倒なら、この1行を `~/.zshrc` の末尾に足しておくと次から不要になります。

---

## 4. よくある編集

### 4-1. 論文を1本足す — `src/data/publications.yml`

ファイルの**一番下**に追記します。表示順は自動で新しい順になります。

```yaml
- id: my-paper-2027            # 他と重複しない名前なら何でもOK
  type: journal                # journal / preprint / intl_conf / domestic_conf / poster / thesis
  authors:
    ja: 増田元希, 大上雅史
    en: G. Masuda, M. Ohue
  title:
    ja: 〇〇における〇〇の研究
    en: A Study on 〇〇 in 〇〇
  venue:
    ja: 〇〇学会論文誌, Vol.12, No.3, pp.45-56
    en: Journal of 〇〇, Vol. 12, No. 3, pp. 45-56
  year: 2027                   # 数字。'2027' とクォートで囲むとエラーになります
  month: 4                     # 1〜12。省略可
  award:                       # 受賞した時だけ。省略可
    ja: 優秀論文賞
    en: Best Paper Award
  links:                       # 無ければ links ごと省略可
    - label: DOI
      url: https://doi.org/xxxxx
```

- **`ja` と `en` は両方必須**です。片方だけだとビルドが失敗します。
- 表示順は `journal → preprint → intl_conf → domestic_conf → poster → thesis`。
  1件も無い種別は見出しごと消えます。
- 著者名のうち自分の名前は自動で**太字**になります。照合には
  `src/data/profile.ts` の `authorAliases` を使っており、初期値は
  `['増田 元希', '増田元希', 'Genki Masuda', 'G. Masuda']` です。
  **太字にならない時は、その論文での表記を `authorAliases` に足してください**
  （例: `Masuda G.` 形式の論文が出たら、その文字列を配列に追加）。

> **注意: YAML を空にしないでください。**
> 業績を全部消して「コメントだけ」にすると、Astro の `file()` ローダーが
> `Cannot convert undefined or null to object` で落ちます（原因が分からない類のエラーです）。
> 全部消したい時は、代わりに空配列 `[]` を1行書いてください。`cv.yml` `skills.yml` も同じです。

### 4-2. 研究テーマを足す — `src/content/research/ja/` と `en/`

**必ず日英2ファイルをセットで作ります。ファイル名（basename）を同じにしてください。**

- `src/content/research/ja/topic-4.md`
- `src/content/research/en/topic-4.md`  ← 名前を揃える

```markdown
---
title: '〇〇の高速化'
summary: 'カードの見出しの下に出る1〜2行の要約。'
keywords: ['数値シミュレーション', '〇〇']
order: 4
links:
  - label: GitHub
    url: https://github.com/xxx/yyy
---

ここが本文です。段落を普通に書けます。

#### 小見出し

- 箇条書きも書けます。
```

> **小見出しは `##` ではなく `####`（h4）を使ってください。**
> カードのタイトルが h3 なので、`##`(h2) にすると見出しの階層が逆転します。

### 4-3. CV に1行足す — `src/data/cv.yml`

```yaml
- id: exp-intern-2026
  section: experience        # education / experience / award のいずれか
  order: 2026                # 大きいほど上に表示。開始年を入れると自然に並びます
  period:
    ja: 2026年8月 - 2026年9月
    en: Aug 2026 - Sep 2026
  title:
    ja: 株式会社〇〇 研究インターン
    en: Research Intern, 〇〇 Inc.
  detail:                    # 不要なら detail ごと省略可
    ja: 〇〇の研究開発に従事。
    en: Worked on R&D for 〇〇.
```

### 4-4. リンクを足す — `src/data/profile.ts`

`links` の配列に足します。`icon` は用意されているものだけ使えます:
`github` / `x` / `scholar` / `orcid` / `researchmap` / `linkedin` / `email`

```ts
{ name: 'GitHub', url: 'https://github.com/taro-yamada', icon: 'github' },
```

不要な行は**削除**すればアイコンごと消えます。

### 4-6. Skills セクションを復活させる

「スキル不要」との判断で、Skills セクションは**機構ごと削除**してあります（空のまま残すと
ビルドのたびに警告が出るため）。就活等で必要になったら、以下の3手順で戻せます。

**1) `src/data/skills.yml` を新規作成:**

```yaml
- id: skills-languages
  order: 1
  category: { ja: プログラミング言語, en: Programming Languages }
  items: [Python, R, Shell]

- id: skills-tools
  order: 2
  category: { ja: ツール・環境, en: Tools & Environments }
  items: [Git / GitHub, Linux, PyTorch]
```

**2) `src/content.config.ts` にコレクションを追加:**

```ts
const skills = defineCollection({
  loader: file('src/data/skills.yml'),
  schema: z.object({ order: z.number(), category: bilingual, items: z.array(z.string()) }),
});

// 最終行の export に skills を足す
export const collections = { publications, cv, skills, research, about };
```

**3) `src/components/CVSection.astro` に表示を追加。** frontmatter に:

```ts
const skillGroups = (await getCollection('skills')).sort((a, b) => a.data.order - b.data.order);
```

`</div>` の直前に:

```astro
{
  skillGroups.length > 0 && (
    <div class="cv-block">
      <h3 class="cv-block__title">{tr('cv_skills')}</h3>
      <dl class="skills">
        {skillGroups.map((group) => (
          <Fragment>
            <dt class="skills__category">{group.data.category[lang]}</dt>
            <dd class="skills__items">
              {group.data.items.map((item) => <span class="tag tag--sm">{item}</span>)}
            </dd>
          </Fragment>
        ))}
      </dl>
    </div>
  )
}
```

文言キー `cv_skills` は `src/i18n/ui.ts` に残してあるので、そのまま使えます。
`.skills` 系の CSS は削除済みなので、レイアウトを整えるなら `<style>` に足してください。

### 4-5. 数式の書き方

`src/content/` の Markdown（About と 研究テーマの本文）で LaTeX が使えます。

```markdown
文中に埋め込むときは $E = mc^2$ のように $ で挟みます。

独立した行にするときは $$ で挟みます:

$$
\frac{\partial u}{\partial t} = \alpha \nabla^2 u
$$
```

- frontmatter（`---` で挟まれた部分）の `title` や `summary` では数式は組版されません。**本文だけ**です。
- 表示には KaTeX を使っています。ネットに繋がっていなくても表示されます。

---

## 5. ビルドエラーの読み方

`npm run build` が止まったときは、**たいてい YAML の書き間違い**です。
これは不便ではなく**安全装置**です。間違ったまま公開されるのを防いでいます。

### 実例

`publications.yml` で年を `year: '2025'` とクォートで囲んでしまった場合:

```
[InvalidContentEntryDataError] publications → sample-journal-2025 data does not match collection schema.

  year**: **year: Expected type `"number"`, received `"string"`

  Location:
    /Users/.../my_website/src/data/publications.yml:0:0
```

**読み方:**

| 部分 | 意味 |
|---|---|
| `publications` | `src/data/publications.yml` の話 |
| `→ sample-journal-2025` | その中の `id: sample-journal-2025` の項目 |
| `year:` | `year` というキーが悪い |
| `Expected type "number", received "string"` | 数字が来るはずが、文字列が来た |

**直し方:** `year: '2025'` → `year: 2025`（クォートを外す）

### よくある原因

- **数字をクォートで囲んだ** — `year: '2025'` は文字列扱い。`year: 2025` が正解。
- **`ja` か `en` を書き忘れた** — `Required` と言われます。両方必須です。
- **`type` のスペルミス** — `journal` / `intl_conf` / `domestic_conf` / `preprint` / `poster` / `thesis` のどれかだけ。
- **インデントがズレた** — YAML は半角スペースの数で構造が決まります。タブは使えません。
- **`id` が重複した** — ファイル内で重複しない名前にしてください。

`Location:` に出るファイルを開いて、`→` の後ろに出ている `id` の項目を見れば、ほぼ必ず見つかります。

---

## 6. 独自ドメイン（CNAME）

`https://<ユーザー名>.github.io` ではなく自分で買ったドメイン（例 `taro-yamada.com`）を使う場合:

1. リポジトリの **Settings** → **Pages** → **Custom domain** にドメインを入力して Save。
   （これで GitHub が `CNAME` ファイルを自動で作ります。**手で作らないでください。**）
2. ドメイン業者側の DNS で、GitHub の指示どおりに `A` レコードか `CNAME` レコードを設定。
3. `astro.config.mjs` の `site` を新しいドメイン（`https://taro-yamada.com`）に変更して push。
4. 反映に最大24時間かかることがあります。**Enforce HTTPS** のチェックも忘れずに。

---

## 7. トラブルシューティング

### Actions が失敗する（赤い×）
Actions タブ → 失敗したジョブをクリックして、赤い行を開きます。
**ほぼ必ず YAML の書き間違い**です（→「5. ビルドエラーの読み方」）。
先に手元で `npm run build` を通してから push すれば、ここで落ちることはまずありません。

### ページが 404 になる
- **Settings → Pages → Source が `GitHub Actions` になっていますか？**
  `Deploy from a branch` になっているのが原因の9割です。
- リポジトリ名は `<ユーザー名>.github.io` ちょうどですか？
- Actions が1回も成功していない場合も 404 になります。緑のチェックを確認してください。

### 変更が反映されない
- Actions が終わるまで1〜2分待ちます。
- ブラウザのキャッシュです。`Command` + `Shift` + `R` で強制リロード。
- `main` ブランチに push しましたか？ 他のブランチでは動きません。

### 画像が出ない
- 画像は **`public/` フォルダ**に置きます。
- パスは `public/` を含めません。`public/profile.jpg` → `photo: '/profile.jpg'`（先頭のスラッシュは必要）。
- **大文字小文字は区別されます。** Mac の手元では出るのに GitHub では出ない場合、`Photo.JPG` と `photo.jpg` の違いを疑ってください。これが原因の大半です。

### `site` と `base` の関係
- `site` … サイトの本番URL（`https://<ユーザー名>.github.io`）。sitemap や OGP の絶対URLに使われます。
- `base` … サイトがドメインの**どこに置かれるか**。`<ユーザー名>.github.io` というリポジトリ名なら
  ドメイン直下に置かれるので `'/'` のままでOKです。
- **`base` は基本さわらないでください。** `<ユーザー名>.github.io` 以外の名前のリポジトリ
  （例 `my-site`）にすると `https://<ユーザー名>.github.io/my-site/` に置かれるため
  `base: '/my-site/'` が必要になり、話が一気にややこしくなります。素直に
  `<ユーザー名>.github.io` という名前で作るのが一番簡単です。

---

## 8. 【重要】このフォルダは iCloud Drive の中にあります

このプロジェクトは **`~/dev/genki-daze.github.io`** にあります。

当初は iCloud Drive の中（`~/Library/Mobile Documents/.../my_website`）に作りましたが、
**iCloud の外へ移動済み**です。理由は、iCloud が「使っていないファイルを勝手にクラウドへ退避する」
仕様で、`node_modules`（数千個の小さいファイル）や `.git` と相性が悪いためです。

**iCloud に戻さないでください。** 戻すと次のような症状が出ます。

- `npm install` が終わらない、やたら遅い
- 消したはずのファイルが復活する
- git が「ファイルが変わっている」と言い張る / 最悪 `.git` が壊れる
- ビルドが理由もなく失敗したり成功したりする

バックアップは GitHub 側で確保されるので、iCloud に置く必要はありません。
別の Mac で作業したくなったら `git clone` してください。それが正しいやり方です。
