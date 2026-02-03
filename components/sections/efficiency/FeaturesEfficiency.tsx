"use client";

import { features } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  infinity: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.781 0-4.781 8 0 8 5.606 0 7.644-8 12.74-8z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export function FeaturesEfficiency() {
  return (
    <Section background="industrial" id="features">
      {/* タイトル - ナンバリングを強調 */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-electric-400 font-medium mb-4 uppercase tracking-wider">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          選ばれる<span className="text-electric-400">4つ</span>の理由
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.items.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/5 border border-white/10 p-6 md:p-8 hover:border-electric-500/30 transition-colors overflow-hidden"
          >
            {/* 大きな番号 - 背景に配置 */}
            <div className="absolute -top-4 -right-4 text-8xl md:text-9xl font-bold text-white/5 select-none pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Reason ラベル */}
            <div className="text-electric-400 font-bold text-sm uppercase tracking-wider mb-4">
              Reason {String(index + 1).padStart(2, '0')}
            </div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="flex-shrink-0 w-14 h-14 bg-electric-500/20 flex items-center justify-center text-electric-500">
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
                    className="w-4 h-4 text-electric-400 flex-shrink-0"
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
