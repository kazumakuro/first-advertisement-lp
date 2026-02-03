"use client";

import { Button } from "@/components/ui/Button";
import { hero } from "@/config/content";
import { trackCTAClick, trackExternalLink } from "@/lib/analytics";
import { TrustNumbersCompact } from "@/components/shared/TrustNumbers";
import { HighlightText } from "@/components/shared/HandwrittenAccent";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrimaryClick = () => {
    trackCTAClick("hero", hero.cta.primary);
    trackExternalLink("LINE", "hero");
    window.open(hero.cta.primaryUrl, "_blank");
  };

  // 数値バッジ用データ - より大きくインパクトのある数字
  const trustStats = [
    { value: "500", unit: "+", label: "利用実績", sublabel: "個人・企業様" },
    { value: "98", unit: "%", label: "満足度", sublabel: "アンケート結果" },
    { value: "24h", unit: "", label: "平均対応", sublabel: "初回お問合せ" },
    { value: "0", unit: "円", label: "初期費用", sublabel: "広告費込み" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-coral-50/30 to-primary-50/20 pt-20 md:pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-coral-200 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-coral-500 rounded-full animate-pulse" />
              <span className="text-coral-600 text-sm font-medium">はじめての広告</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              {hero.catchphrase.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <HighlightText color="#FFE4D6">{line}</HighlightText>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-coral-600 font-semibold mb-6 md:mb-8">
              {hero.subCatchphrase}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 whitespace-pre-line">
              {hero.description}
            </p>

            {/* CTAボタン - より目立つデザイン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimaryClick}
                className="text-lg px-8 py-4 shadow-xl shadow-coral-500/30 hover:shadow-coral-500/50 transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {hero.cta.primary}
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("solution")}
                className="text-lg"
              >
                {hero.cta.secondary}
              </Button>
            </div>

            {/* 大きな数字で実績表示 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-coral-100 shadow-sm">
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-coral-600">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-lg md:text-xl font-semibold text-coral-500">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-700 mt-1">{stat.label}</p>
                  {stat.sublabel && (
                    <p className="text-xs text-gray-500">{stat.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right image - 人物写真プレースホルダー */}
          <div className="flex-1 flex justify-center w-full lg:w-auto">
            <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md">
              {/* 背景装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral-300/30 via-primary-300/20 to-secondary-300/20 rounded-3xl blur-2xl" />

              {/* 人物写真コンテナ */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/people/trouble_women.png"
                  alt="広告に悩む女性"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* フローティングバッジ */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-coral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral-400 to-primary-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">初めてでも安心</p>
                    <p className="text-sm font-bold text-gray-800">専任サポート付き</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
