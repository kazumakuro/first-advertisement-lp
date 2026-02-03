import { Metadata } from "next";
import { HeroBranding } from "@/components/sections/branding/HeroBranding";
import { TrustNumbers } from "@/components/shared/TrustNumbers";
import { ProblemsBranding } from "@/components/sections/branding/ProblemsBranding";
import { DemoBranding } from "@/components/sections/branding/DemoBranding";
import { ExamplesBranding } from "@/components/sections/branding/ExamplesBranding";
import { SolutionBranding } from "@/components/sections/branding/SolutionBranding";
import { FeaturesBranding } from "@/components/sections/branding/FeaturesBranding";
import { HowItWorksBranding } from "@/components/sections/branding/HowItWorksBranding";
import { LinePreviewBranding } from "@/components/sections/LinePreviewBranding";
import { SupportSection } from "@/components/shared/SupportSection";
import { FAQBranding } from "@/components/sections/branding/FAQBranding";
import { CTABranding } from "@/components/sections/branding/CTABranding";
import { FooterBranding } from "@/components/sections/branding/FooterBranding";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

export const metadata: Metadata = {
  title: "AI魅力言語化 | First Advertisement",
  description:
    "URLを入力するだけで、AIが商品・サービスの魅力を分析・言語化。強みを発見し、売れる訴求文を生成します。",
};

/**
 * LP構成（AI魅力言語化LP）
 *
 * 【ファーストビュー】
 * 1. HeroBranding - キャッチコピー + 数値インパクト + CTA
 *
 * 【ボディ】
 * 2. ProblemsBranding - 問題提起（共感）
 * 3. DemoBranding - URL入力デモ
 * 4. ExamplesBranding - Before/After事例
 * 5. SolutionBranding - ソリューション（ベネフィット）
 * 6. FeaturesBranding - 強み・特徴（サービス説明）
 * 7. HowItWorksBranding - 利用の流れ
 *
 * 【クロージング】
 * 8. FAQBranding - よくある質問
 * 9. CTABranding - 最終CTA
 */
// 数値バッジ用データ
const trustStats = [
  { value: "30", unit: "秒", label: "分析時間", description: "URL入力から" },
  { value: "10", unit: "+", label: "強み発見", description: "平均抽出数" },
  { value: "500", unit: "+", label: "分析実績", description: "商品・サービス" },
  { value: "無料", unit: "", label: "お試し", description: "初回診断" },
];

// サポートメンバー
const supportMembers = [
  {
    name: "担当者",
    role: "ブランディング担当",
    image: "/people/support.png",
    message: "あなたの商品・サービスの「本当の強み」を一緒に見つけましょう。AIが見つけた強みをどう活かすか、具体的にご提案いたします。",
  },
];

export default function AIBrandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* ファーストビュー */}
        <HeroBranding />

        {/* 数値バッジ */}
        <TrustNumbers stats={trustStats} variant="warm" />

        {/* ボディ: 問題提起 → デモ → 事例 → ソリューション → 強み・特徴 → 流れ */}
        <ProblemsBranding />
        <DemoBranding />
        <ExamplesBranding />
        <SolutionBranding />
        <FeaturesBranding />
        <HowItWorksBranding />
        <LinePreviewBranding />

        {/* サポート紹介 */}
        <SupportSection
          variant="warm"
          title="専任スタッフがサポート"
          subtitle="魅力の言語化をお手伝いします"
          members={supportMembers}
        />

        {/* クロージング */}
        <FAQBranding />
        <CTABranding />
      </main>
      <FooterBranding />
      
      {/* モバイル固定CTA */}
      <FloatingCTA text="今すぐ無料で分析" variant="warmth" />
    </div>
  );
}
