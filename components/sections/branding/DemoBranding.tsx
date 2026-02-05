"use client";

import { useState } from "react";
import { demo } from "@/config/content-branding";
import { trackDemoInteraction } from "@/lib/analytics";
import { ComingSoonDialog } from "@/components/shared/ComingSoonDialog";
import Image from "next/image";

export function DemoBranding() {
  const [url, setUrl] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleAnalyze = () => {
    if (!url) return;

    trackDemoInteraction("analyze_click", "ai-branding", url);
    setShowDialog(true);
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-orange-50" id="demo">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {demo.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {demo.subtitle}
          </p>
        </div>

        {/* 分析UIイメージ */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg bg-orange-50">
            <Image
              src="/images/branding/analysis-ui.jpeg"
              alt="AI分析結果ダッシュボードのイメージ"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* URL Input */}
          <div className="bg-white border border-warmth-100 p-6 md:p-8 mb-8 rounded-2xl shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-warmth-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={demo.placeholder}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 pl-12 pr-4 py-4 rounded-xl focus:border-warmth-400 focus:ring-2 focus:ring-warmth-100 focus:outline-none transition-all"
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={!url}
                className="px-8 py-4 bg-gradient-to-r from-warmth-500 to-rose-500 text-white font-semibold rounded-full hover:from-warmth-400 hover:to-rose-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-warmth-500/25 btn-magnetic"
              >
                {demo.buttonText}
              </button>
            </div>
          </div>

          {/* Sample Result */}
          <div className="transition-all duration-500 opacity-60">
            <div className="bg-white border-2 border-warmth-200 p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-warmth-500 to-rose-500 rounded-full" />
                <span className="text-warmth-600 text-sm font-medium">
                  {demo.sampleResult.title}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                {demo.sampleResult.productName}
              </h3>

              {/* Strengths */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {demo.sampleResult.strengths.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-rose-50 border border-warmth-100 p-4 rounded-xl">
                    <h4 className="text-warmth-600 font-semibold text-sm mb-3">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                          <svg className="w-4 h-4 text-warmth-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Suggested Copy */}
              <div className="border-t border-warmth-100 pt-6">
                <h4 className="text-warmth-600 font-semibold text-sm mb-4">
                  提案キャッチコピー
                </h4>
                <div className="space-y-3">
                  {demo.sampleResult.suggestedCopy.map((copy, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-orange-50 to-rose-50 border border-warmth-100 p-4 rounded-xl hover:shadow-md transition-all"
                    >
                      <p className="text-lg md:text-xl text-gray-800 font-medium">
                        &ldquo;{copy}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">
            ※ 上のフォームにURLを入力すると、サンプル分析結果が表示されます
          </p>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <ComingSoonDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        featureName="AI魅力言語化"
        pageName="ai-branding"
      />
    </section>
  );
}
