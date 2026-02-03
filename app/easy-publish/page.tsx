import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustNumbers } from "@/components/shared/TrustNumbers";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { LinePreviewEasyPublish } from "@/components/sections/LinePreviewEasyPublish";
import { SupportSection } from "@/components/shared/SupportSection";
import { InlineCTA } from "@/components/shared/InlineCTA";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
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
 * 6. TargetAudience - こんな方に
 *
 * 【クロージング】
 * 7. Pricing - 料金
 * 8. FAQ - よくある質問
 * 9. CTA - 最終CTA
 */
// 数値バッジ用データ
const trustStats = [
  { value: "500", unit: "+", label: "利用実績", description: "個人・企業様" },
  { value: "98", unit: "%", label: "満足度", description: "アンケート結果" },
  { value: "5", unit: "分", label: "平均対応", description: "初回お問合せ" },
  { value: "1万", unit: "円〜", label: "初期費用", description: "広告費込み" },
];

// サポートメンバー
const supportMembers = [
  {
    name: "担当者",
    role: "広告サポート担当",
    image: "/people/support.png",
    message: "広告が初めての方も安心してください。あなたの「伝えたい」を形にするお手伝いをします。些細なことでも、お気軽にご相談ください。",
  },
];

export default function EasyPublishPage() {
  return (
    <>
      <Header />
      <main>
        {/* ファーストビュー */}
        <Hero />

        {/* 数値バッジ */}
        <TrustNumbers stats={trustStats} variant="light" />

        {/* ボディ: 共感 → ベネフィット → サービス説明 → 実績 */}
        <Problems />
        <Solution />
        
        {/* 中間CTA */}
        <InlineCTA 
          text="今すぐ無料相談する"
          subtext="30秒で予約完了・売り込みなし"
          variant="coral"
          background="gradient"
        />
        
        <Features />
        <HowItWorks />
        <TargetAudience />
        <LinePreviewEasyPublish />

        {/* サポート紹介 */}
        <SupportSection
          variant="light"
          title="専任スタッフがサポート"
          subtitle="わからないことは、なんでも聞いてください"
          members={supportMembers}
        />

        {/* クロージング */}
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      {/* モバイル固定CTA */}
      <FloatingCTA text="今すぐ無料相談" variant="coral" />
    </>
  );
}
