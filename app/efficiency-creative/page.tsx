import { Metadata } from "next";
import { HeroEfficiency } from "@/components/sections/efficiency/HeroEfficiency";
import { CostSavings } from "@/components/sections/efficiency/CostSavings";
import { ComparisonTable } from "@/components/sections/efficiency/ComparisonTable";
import { CreativeShowcase } from "@/components/sections/efficiency/CreativeShowcase";
import { ProcessEfficiency } from "@/components/sections/efficiency/ProcessEfficiency";
import { CaseStudies } from "@/components/sections/efficiency/CaseStudies";
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
 * 2. CostSavings - 共感 + ベネフィット（ROI可視化）
 * 3. ComparisonTable - 差別化（従来比較）
 * 4. CreativeShowcase - サービス詳細
 * 5. ProcessEfficiency - 利用の流れ
 * 6. CaseStudies - 社会的証明（導入実績）
 *
 * 【クロージング】
 * 7. PricingEfficiency - 料金プラン
 * 8. FAQEfficiency - よくある質問
 * 9. CTAEfficiency - 最終CTA
 */
export default function EfficiencyCreativePage() {
  return (
    <div className="bg-dark-100 min-h-screen">
      <main>
        {/* ファーストビュー */}
        <HeroEfficiency />

        {/* ボディ: 共感+ベネフィット → 差別化 → サービス詳細 → 流れ → 実績 */}
        <CostSavings />
        <ComparisonTable />
        <CreativeShowcase />
        <ProcessEfficiency />
        <CaseStudies />

        {/* クロージング */}
        <PricingEfficiency />
        <FAQEfficiency />
        <CTAEfficiency />
      </main>
      <FooterEfficiency />
    </div>
  );
}
