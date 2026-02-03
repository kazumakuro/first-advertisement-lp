"use client";

import { LinePreviewSection } from "@/components/line/LineChatPreview";
import { linePreviewConfig } from "@/config/line-conversations";

export function LinePreviewPrediction() {
  const config = linePreviewConfig.prediction;

  return (
    <LinePreviewSection
      title={config.title}
      subtitle={config.subtitle}
      description={config.description}
      messages={config.messages}
      ctaText={config.ctaText}
      variant="dark"
    />
  );
}
