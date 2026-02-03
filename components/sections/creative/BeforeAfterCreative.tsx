"use client";

import { useState } from "react";
import { beforeAfter } from "@/config/content-creative";
import { trackBeforeAfterInteraction } from "@/lib/analytics";

export function BeforeAfterCreative() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleCaseChange = (index: number) => {
    setActiveCase(index);
    trackBeforeAfterInteraction(index, "case_select", "ai-creative");
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
    trackBeforeAfterInteraction(activeCase, "slider_move", "ai-creative");
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-violet-50" id="before-after">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {beforeAfter.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {beforeAfter.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {beforeAfter.cases.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCaseChange(index)}
                className={`px-6 py-3 font-medium text-sm rounded-full transition-all ${
                  activeCase === index
                    ? "bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 text-white shadow-lg"
                    : "bg-white border border-purple-200 text-gray-600 hover:border-rose-400"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Before/After comparison */}
          <div className="bg-white border border-purple-100 p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <div className="relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-white z-10 rounded-full">
                  <span className="text-gray-500 text-sm font-medium">
                    {beforeAfter.cases[activeCase].beforeLabel}
                  </span>
                </div>
                <div className="border border-gray-200 bg-gray-50 aspect-square flex items-center justify-center rounded-xl">
                  {/* Placeholder for before image */}
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">商品画像</p>
                    <p className="text-gray-400 text-xs mt-1">シンプルな撮影画像</p>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-white z-10 rounded-full">
                  <span className="bg-gradient-to-r from-rose-600 to-coral-600 bg-clip-text text-transparent text-sm font-medium">
                    {beforeAfter.cases[activeCase].afterLabel}
                  </span>
                </div>
                <div className="border-2 border-rose-400 bg-gradient-to-br from-rose-50 to-orange-50 aspect-square flex items-center justify-center rounded-xl shadow-lg shadow-rose-100">
                  {/* Placeholder for after image */}
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <p className="text-gray-700 text-sm">広告クリエイティブ</p>
                    <p className="text-gray-500 text-xs mt-1">プロ品質のデザイン</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 pt-6 border-t border-purple-100">
              <p className="text-gray-600 text-center">
                {beforeAfter.cases[activeCase].description}
              </p>
            </div>

            {/* Slider control (visual only for demo) */}
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Before</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="flex-1 h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <span className="text-purple-600 text-sm">After</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              あなたの商品も、このように変換できます
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-500 transition-colors"
            >
              無料で試してみる
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
