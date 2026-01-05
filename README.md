# First Advertisement - ランディングページ

クリエイターのための、はじめての広告・プロモーション体験を提供するサービスのランディングページです。

## 🎨 デザインコンセプト

### ターゲット
- **年齢層**: 25-45歳
- **属性**: 個人クリエイター、小規模事業者、副業運営者
- **心理特性**: 広告を「難しい・高い・怖い」と感じている層

### カラーパレット
- **Primary (ピンク)**: 柔らかく親しみやすい印象
- **Secondary (イエロー)**: 明るく前向きな印象
- **Accent (ミントグリーン)**: 安心感と信頼性
- **Background (クリーム)**: 優しく温かみのある雰囲気

### デザイン思想
- パステルカラーで威圧感を排除
- 丸みのあるデザインで親しみやすさを演出
- 「安心」「優しい」「温かい」を視覚化

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel

## 📁 プロジェクト構成

```
.
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # メインページ
│   └── globals.css          # グローバルスタイル
├── components/              # Reactコンポーネント
│   ├── ui/                  # 再利用可能なUIコンポーネント
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── sections/            # LPセクション
│   │   ├── Hero.tsx
│   │   ├── Problems.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── TargetAudience.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── config/                  # 設定ファイル
│   └── content.ts          # コンテンツ設定（簡単に編集可能）
├── assets/                  # 静的アセット
│   └── images/
└── docs/                    # ドキュメント
    └── overview.md
```

## 🛠️ 開発環境のセットアップ

### 必要なもの
- Node.js 18.17以降
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

```bash
# 本番ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 📝 コンテンツの編集方法

### テキスト・データの変更

すべてのコンテンツは `config/content.ts` に集約されています。このファイルを編集することで、簡単にページの内容を変更できます。

```typescript
// config/content.ts の例
export const hero = {
  catchphrase: "広告がわからないあなたの、\nはじめの一歩",
  subCatchphrase: "1万円から、プロの広告を。",
  // ... 他のコンテンツ
};
```

### カラーの変更

カラーパレットは `tailwind.config.ts` で管理されています。

```typescript
// tailwind.config.ts
colors: {
  primary: { /* ピンク系 */ },
  secondary: { /* イエロー系 */ },
  accent: { /* ミントグリーン系 */ },
  // ...
}
```

### レイアウトの変更

各セクションは独立したコンポーネントとして実装されているため、`components/sections/` 内のファイルを編集するだけで変更できます。

## 🚢 Vercelへのデプロイ

### 方法1: Vercel CLI（推奨）

```bash
# Vercel CLIのインストール（初回のみ）
npm i -g vercel

# デプロイ
vercel

# 本番環境へのデプロイ
vercel --prod
```

### 方法2: Vercel Web UI

1. [Vercel](https://vercel.com) にアクセスしてログイン
2. "New Project" をクリック
3. GitHubリポジトリをインポート
4. フレームワークプリセット: **Next.js** を選択
5. "Deploy" をクリック

### 環境変数

現在、環境変数は必要ありません。将来的にAPIキーやバックエンドURLが必要になった場合は、Vercelのダッシュボードから設定できます。

## 🎯 主要機能

### レスポンシブデザイン
- モバイル、タブレット、デスクトップに完全対応
- Tailwind CSSのユーティリティクラスで柔軟に調整可能

### パフォーマンス最適化
- Next.js 15の静的生成（SSG）を活用
- 画像の最適化（next/image）
- コンポーネントの遅延読み込み

### アクセシビリティ
- セマンティックHTML
- キーボードナビゲーション対応
- スクリーンリーダー対応

## 🔧 カスタマイズガイド

### 新しいセクションの追加

1. `components/sections/` に新しいコンポーネントを作成
2. `config/content.ts` にコンテンツを追加
3. `app/page.tsx` でインポートして配置

```tsx
// components/sections/NewSection.tsx
import { Section } from "@/components/ui/Section";

export function NewSection() {
  return (
    <Section id="new-section" background="cream">
      {/* コンテンツ */}
    </Section>
  );
}

// app/page.tsx
import { NewSection } from "@/components/sections/NewSection";

export default function Home() {
  return (
    <>
      {/* 他のセクション */}
      <NewSection />
    </>
  );
}
```

### スタイルのカスタマイズ

Tailwind CSSを使用しているため、クラス名を変更するだけでスタイルを調整できます。

```tsx
// 例: ボタンのサイズを大きくする
<Button size="lg" variant="primary">
  クリック
</Button>
```

## 📊 パフォーマンス

- **First Load JS**: 約102 KB
- **静的生成**: 全ページが静的にビルド
- **Lighthouse スコア**: 90+を目標

## 🤝 貢献

改善案やバグ報告は、GitHubのIssueまたはPull Requestでお願いします。

## 📄 ライセンス

このプロジェクトは私的使用のためのものです。

## 📞 サポート

質問や問題がある場合は、プロジェクトのIssueを作成してください。

---

**Built with ❤️ using Next.js and Tailwind CSS**
