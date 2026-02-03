"use client";

import { features } from "@/config/content-prediction";
import { Section } from "@/components/ui/Section";

const iconMap: Record<string, React.ReactNode> = {
  cpu: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  layers: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  refresh: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

export function FeaturesPrediction() {
  return (
    <Section background="dark" id="features">
      {/* タイトル - ナンバリングを強調 */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-cyan-400 font-medium mb-4 uppercase tracking-wider">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          選ばれる<span className="text-cyan-400">4つ</span>の理由
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.items.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/5 border border-white/10 p-6 md:p-8 hover:border-trust-500/30 transition-colors overflow-hidden"
          >
            {/* 大きな番号 - 背景に配置 */}
            <div className="absolute -top-4 -right-4 text-8xl md:text-9xl font-bold text-white/5 select-none pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Reason ラベル */}
            <div className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4">
              Reason {String(index + 1).padStart(2, '0')}
            </div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="flex-shrink-0 w-14 h-14 bg-trust-500/20 flex items-center justify-center text-trust-400">
                {iconMap[item.icon]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Details */}
            <ul className="space-y-2 mt-4 pt-4 border-t border-white/10 relative z-10">
              {item.details.map((detail, detailIndex) => (
                <li
                  key={detailIndex}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <svg
                    className="w-4 h-4 text-cyan-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
