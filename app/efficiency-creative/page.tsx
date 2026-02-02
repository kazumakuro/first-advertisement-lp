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

export default function EfficiencyCreativePage() {
  return (
    <div className="bg-dark-100 min-h-screen">
      <main>
        <HeroEfficiency />
        <CostSavings />
        <ComparisonTable />
        <CreativeShowcase />
        <ProcessEfficiency />
        <CaseStudies />
        <PricingEfficiency />
        <FAQEfficiency />
        <CTAEfficiency />
      </main>
      <FooterEfficiency />
    </div>
  );
}
