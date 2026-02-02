import { Metadata } from "next";
import { HeroEfficiency } from "@/components/sections/efficiency/HeroEfficiency";
import { ProblemsEfficiency } from "@/components/sections/efficiency/ProblemsEfficiency";
import { SolutionEfficiency } from "@/components/sections/efficiency/SolutionEfficiency";
import { FeaturesEfficiency } from "@/components/sections/efficiency/FeaturesEfficiency";
import { HowItWorksEfficiency } from "@/components/sections/efficiency/HowItWorksEfficiency";
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
 * 5. HowItWorksEfficiency - 利用の流れ
 *
 * 【クロージング】
 * 6. PricingEfficiency - 料金プラン
 * 7. FAQEfficiency - よくある質問
 * 8. CTAEfficiency - 最終CTA
 */
export default function EfficiencyCreativePage() {
  return (
    <div className="bg-dark-100 min-h-screen">
      <main>
        {/* ファーストビュー */}
        <HeroEfficiency />

        {/* ボディ: 問題提起 → ソリューション → 強み・特徴 → 流れ */}
        <ProblemsEfficiency />
        <SolutionEfficiency />
        <FeaturesEfficiency />
        <HowItWorksEfficiency />

        {/* クロージング */}
        <PricingEfficiency />
        <FAQEfficiency />
        <CTAEfficiency />
      </main>
      <FooterEfficiency />
    </div>
  );
}
