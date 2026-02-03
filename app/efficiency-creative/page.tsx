import { Metadata } from "next";
import { HeroEfficiency } from "@/components/sections/efficiency/HeroEfficiency";
import { TrustNumbers } from "@/components/shared/TrustNumbers";
import { ProblemsEfficiency } from "@/components/sections/efficiency/ProblemsEfficiency";
import { CostComparisonEfficiency } from "@/components/sections/efficiency/CostComparisonEfficiency";
import { SolutionEfficiency } from "@/components/sections/efficiency/SolutionEfficiency";
import { FeaturesEfficiency } from "@/components/sections/efficiency/FeaturesEfficiency";
import { PortfolioEfficiency } from "@/components/sections/efficiency/PortfolioEfficiency";
import { HowItWorksEfficiency } from "@/components/sections/efficiency/HowItWorksEfficiency";
import { LinePreviewEfficiency } from "@/components/sections/LinePreviewEfficiency";
import { SupportSection } from "@/components/shared/SupportSection";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { PricingEfficiency } from "@/components/sections/efficiency/PricingEfficiency";
import { FAQEfficiency } from "@/components/sections/efficiency/FAQEfficiency";
import { CTAEfficiency } from "@/components/sections/efficiency/CTAEfficiency";
import { FooterEfficiency } from "@/components/sections/efficiency/FooterEfficiency";

export const metadata: Metadata = {
  title: "クリエイティブ効率化 | First Advertisement",
  description:
    "クリエイティブ費用を半減し、広告費に回せる。既存の広告運用をさらに効率化。制作コスト削減でROAS向上を実現。",
};

/**
 * LP構成（鉄板7要素に基づく）
 *
 * 【ファーストビュー】
 * 1. HeroEfficiency - キャッチコピー + 数値インパクト + CTA
 *
 * 【ボディ】
 * 2. ProblemsEfficiency - 問題提起（共感）
 * 3. SolutionEfficiency - ソリューション（ベネフィット）
 * 4. FeaturesEfficiency - 強み・特徴（サービス説明）
 * 5. PortfolioEfficiency - 制作事例（Instagram）
 * 6. HowItWorksEfficiency - 利用の流れ
 *
 * 【クロージング】
 * 7. PricingEfficiency - 料金プラン
 * 8. FAQEfficiency - よくある質問
 * 9. CTAEfficiency - 最終CTA
 */
// 数値バッジ用データ
const trustStats = [
  { value: "50", unit: "%", label: "コスト削減", description: "制作費平均" },
  { value: "100", unit: "+", label: "制作実績", description: "クリエイティブ数" },
  { value: "24", unit: "h", label: "納品スピード", description: "最短対応" },
  { value: "98", unit: "%", label: "継続率", description: "リピーター" },
];

// サポートメンバー
const supportMembers = [
  {
    name: "担当者",
    role: "クリエイティブ担当",
    image: "/people/support.png",
    message: "広告運用の現場を知る担当者が対応します。制作コストの削減から、より効果的なクリエイティブまで、お気軽にご相談ください。",
  },
];

export default function EfficiencyCreativePage() {
  return (
    <div className="bg-dark-100 min-h-screen">
      <main>
        {/* ファーストビュー */}
        <HeroEfficiency />

        {/* 数値バッジ */}
        <TrustNumbers stats={trustStats} variant="dark" />

        {/* ボディ: 問題提起 → コスト比較 → ソリューション → 強み・特徴 → 事例 → 流れ */}
        <ProblemsEfficiency />
        <CostComparisonEfficiency />
        <SolutionEfficiency />
        <FeaturesEfficiency />
        <PortfolioEfficiency />
        <HowItWorksEfficiency />
        <LinePreviewEfficiency />

        {/* サポート紹介 */}
        <SupportSection
          variant="dark"
          title="専任スタッフがサポート"
          subtitle="広告運用の悩みをお聞かせください"
          members={supportMembers}
        />

        {/* クロージング */}
        <PricingEfficiency />
        <FAQEfficiency />
        <CTAEfficiency />
      </main>
      <FooterEfficiency />
      
      {/* モバイル固定CTA */}
      <FloatingCTA text="今すぐ無料でお試し" variant="electric" />
    </div>
  );
}
