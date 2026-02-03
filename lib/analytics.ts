"use client";

import { track } from "@vercel/analytics";

// CTAボタンクリック
export function trackCTAClick(location: string, buttonText: string) {
  track("CTA_Click", {
    location,
    button: buttonText,
  });
}

// 外部リンククリック
export function trackExternalLink(destination: string, location: string) {
  track("External_Link_Click", {
    destination,
    location,
  });
}

// セクション到達
export function trackSectionView(sectionId: string) {
  track("Section_View", {
    section: sectionId,
  });
}

// ページビュー（LP識別用）
export function trackPageView(pageName: string) {
  track("Page_View", {
    page: pageName,
  });
}

// シミュレーター入力（効果予測LP用）
export function trackSimulatorInput(field: string, value: string, page: string = "effect-prediction") {
  track("Simulator_Input", {
    page,
    field,
    value,
  });
}

// シミュレーター結果表示（効果予測LP用）
export function trackSimulatorResult(result: {
  category: string;
  price: number;
  budget: number;
  roas: number;
  additionalSales: number;
}, page: string = "effect-prediction") {
  track("Simulator_Result", {
    page,
    category: result.category,
    price: result.price,
    recommended_budget: result.budget,
    predicted_roas: result.roas,
    additional_sales: result.additionalSales,
  });
}

// デモインタラクション（AI言語化LP用）
export function trackDemoInteraction(action: string, page: string = "ai-branding", detail?: string) {
  track("Demo_Interaction", {
    page,
    action,
    detail: detail || "",
  });
}

// Before/Afterインタラクション（AIクリエイティブ生成LP用）
export function trackBeforeAfterInteraction(caseIndex: number, action: string, page: string = "ai-creative") {
  track("BeforeAfter_Interaction", {
    page,
    case_index: caseIndex,
    action,
  });
}
