import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "はじめての広告出稿 | First Advertisement",
  description:
    "広告がわからないあなたの、はじめの一歩。1万円から、プロの広告を。ハンドメイド作家、イラストレーター、教室運営者向けの簡単広告サービス。",
};

/**
 * LP構成（鉄板7要素に基づく）
 *
 * 【ファーストビュー】
 * 1. Hero - キャッチコピー + アイキャッチ + CTA
 *
 * 【ボディ】
 * 2. Problems - 共感（問題提起）
 * 3. Solution - ベネフィット（解決策）
 * 4. Features - サービス説明
 * 5. HowItWorks - 利用の流れ
 * 6. Testimonials - お客様の声・実績（社会的証明）
 * 7. TargetAudience - こんな方に
 *
 * 【クロージング】
 * 8. Pricing - 料金
 * 9. FAQ - よくある質問
 * 10. CTA - 最終CTA
 */
export default function EasyPublishPage() {
  return (
    <>
      <Header />
      <main>
        {/* ファーストビュー */}
        <Hero />

        {/* ボディ: 共感 → ベネフィット → サービス説明 → 実績 */}
        <Problems />
        <Solution />
        <Features />
        <HowItWorks />
        <Testimonials />
        <TargetAudience />

        {/* クロージング */}
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
