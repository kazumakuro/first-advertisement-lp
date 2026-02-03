import { Metadata } from "next";
import { HeroPrediction } from "@/components/sections/prediction/HeroPrediction";
import { TrustNumbers } from "@/components/shared/TrustNumbers";
import { ProblemsPrediction } from "@/components/sections/prediction/ProblemsPrediction";
import { SimulatorPrediction } from "@/components/sections/prediction/SimulatorPrediction";
import { SolutionPrediction } from "@/components/sections/prediction/SolutionPrediction";
import { FeaturesPrediction } from "@/components/sections/prediction/FeaturesPrediction";
import { HowItWorksPrediction } from "@/components/sections/prediction/HowItWorksPrediction";
import { LinePreviewPrediction } from "@/components/sections/LinePreviewPrediction";
import { SupportSection } from "@/components/shared/SupportSection";
import { FAQPrediction } from "@/components/sections/prediction/FAQPrediction";
import { CTAPrediction } from "@/components/sections/prediction/CTAPrediction";
import { FooterPrediction } from "@/components/sections/prediction/FooterPrediction";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

export const metadata: Metadata = {
  title: "効果予測 | First Advertisement",
  description:
    "数理モデルで広告効果を予測。データ駆動型の広告戦略で、投資対効果を最大化。出稿前にROASを確認できます。",
};

/**
 * LP構成（効果予測LP）
 *
 * 【ファーストビュー】
 * 1. HeroPrediction - キャッチコピー + 数値インパクト + CTA
 *
 * 【ボディ】
 * 2. ProblemsPrediction - 問題提起（共感）
 * 3. SimulatorPrediction - シミュレーター（デモ計算）
 * 4. SolutionPrediction - ソリューション（ベネフィット）
 * 5. FeaturesPrediction - 強み・特徴（サービス説明）
 * 6. HowItWorksPrediction - 利用の流れ
 *
 * 【クロージング】
 * 7. FAQPrediction - よくある質問
 * 8. CTAPrediction - 最終CTA
 */
// 数値バッジ用データ
const trustStats = [
  { value: "±15", unit: "%", label: "予測精度", description: "ROAS予測" },
  { value: "1,000", unit: "+", label: "予測実績", description: "キャンペーン数" },
  { value: "3", unit: "分", label: "分析時間", description: "結果出力まで" },
  { value: "無料", unit: "", label: "初回診断", description: "お試し可能" },
];

// サポートメンバー
const supportMembers = [
  {
    name: "担当者",
    role: "データアナリスト",
    image: "/people/support.png",
    message: "データに基づいた広告戦略をご提案します。予測結果の見方や、具体的な改善施策について、丁寧にご説明いたします。",
  },
];

export default function EffectPredictionPage() {
  return (
    <div className="bg-dark-100 min-h-screen">
      <main>
        {/* ファーストビュー */}
        <HeroPrediction />

        {/* 数値バッジ */}
        <TrustNumbers stats={trustStats} variant="dark" />

        {/* ボディ: 問題提起 → シミュレーター → ソリューション → 強み・特徴 → 流れ */}
        <ProblemsPrediction />
        <SimulatorPrediction />
        <SolutionPrediction />
        <FeaturesPrediction />
        <HowItWorksPrediction />
        <LinePreviewPrediction />

        {/* サポート紹介 */}
        <SupportSection
          variant="dark"
          title="専任スタッフがサポート"
          subtitle="データの見方から改善策までお伝えします"
          members={supportMembers}
        />

        {/* クロージング */}
        <FAQPrediction />
        <CTAPrediction />
      </main>
      <FooterPrediction />
      
      {/* モバイル固定CTA */}
      <FloatingCTA text="今すぐ無料で予測" variant="trust" />
    </div>
  );
}
