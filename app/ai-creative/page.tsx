import { Metadata } from "next";
import { HeroCreative } from "@/components/sections/creative/HeroCreative";
import { TrustNumbers } from "@/components/shared/TrustNumbers";
import { ProblemsCreative } from "@/components/sections/creative/ProblemsCreative";
import { BeforeAfterCreative } from "@/components/sections/creative/BeforeAfterCreative";
import { ProcessCreative } from "@/components/sections/creative/ProcessCreative";
import { SolutionCreative } from "@/components/sections/creative/SolutionCreative";
import { FeaturesCreative } from "@/components/sections/creative/FeaturesCreative";
import { PortfolioCreative } from "@/components/sections/creative/PortfolioCreative";
import { HowItWorksCreative } from "@/components/sections/creative/HowItWorksCreative";
import { LinePreviewCreative } from "@/components/sections/LinePreviewCreative";
import { SupportSection } from "@/components/shared/SupportSection";
import { FAQCreative } from "@/components/sections/creative/FAQCreative";
import { CTACreative } from "@/components/sections/creative/CTACreative";
import { FooterCreative } from "@/components/sections/creative/FooterCreative";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

export const metadata: Metadata = {
  title: "AIクリエイティブ生成 | First Advertisement",
  description:
    "URLを入力するだけで、AIが広告クリエイティブを自動生成。デザイナー不要で、最短5分でプロ品質の広告が完成。",
};

/**
 * LP構成（AIクリエイティブ生成LP）
 *
 * 【ファーストビュー】
 * 1. HeroCreative - キャッチコピー + 数値インパクト + CTA
 *
 * 【ボディ】
 * 2. ProblemsCreative - 問題提起（共感）
 * 3. BeforeAfterCreative - Before/After画像比較
 * 4. ProcessCreative - 4ステップ生成プロセス
 * 5. SolutionCreative - ソリューション（ベネフィット）
 * 6. FeaturesCreative - 強み・特徴（サービス説明）
 * 7. PortfolioCreative - 制作事例（Instagram埋め込み）
 * 8. HowItWorksCreative - 利用の流れ
 *
 * 【クロージング】
 * 9. FAQCreative - よくある質問
 * 10. CTACreative - 最終CTA
 */
// 数値バッジ用データ
const trustStats = [
  { value: "5", unit: "分", label: "生成時間", description: "クリエイティブ完成" },
  { value: "10", unit: "+", label: "バリエーション", description: "1回の生成で" },
  { value: "80", unit: "%", label: "コスト削減", description: "デザイン費用" },
  { value: "無料", unit: "", label: "お試し", description: "初回1枚" },
];

// サポートメンバー
const supportMembers = [
  {
    name: "担当者",
    role: "クリエイティブ担当",
    image: "/people/support.png",
    message: "AIで生成したクリエイティブを、さらに効果的にブラッシュアップ。あなたのブランドに合った広告を一緒に作りましょう。",
  },
];

export default function AICreativePage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* ファーストビュー */}
        <HeroCreative />

        {/* 数値バッジ */}
        <TrustNumbers stats={trustStats} variant="warm" />

        {/* ボディ: 問題提起 → Before/After → プロセス → ソリューション → 強み・特徴 → 事例 → 流れ */}
        <ProblemsCreative />
        <BeforeAfterCreative />
        <ProcessCreative />
        <SolutionCreative />
        <FeaturesCreative />
        <PortfolioCreative />
        <HowItWorksCreative />
        <LinePreviewCreative />

        {/* サポート紹介 */}
        <SupportSection
          variant="warm"
          title="専任スタッフがサポート"
          subtitle="クリエイティブの最適化をお手伝いします"
          members={supportMembers}
        />

        {/* クロージング */}
        <FAQCreative />
        <CTACreative />
      </main>
      <FooterCreative />
      
      {/* モバイル固定CTA */}
      <FloatingCTA text="今すぐ無料で生成" variant="purple" />
    </div>
  );
}
