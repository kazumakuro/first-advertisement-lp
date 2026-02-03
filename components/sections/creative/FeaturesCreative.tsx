"use client";

import { features } from "@/config/content-creative";

const iconMap: Record<string, React.ReactNode> = {
  zap: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  award: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  scissors: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export function FeaturesCreative() {
  return (
    <section className="relative py-20 md:py-28 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* タイトル - ナンバリングを強調 */}
        <div className="text-center mb-12 md:mb-16">
          <p className="bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent font-medium mb-4 uppercase tracking-wider">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            選ばれる<span className="bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent">4つ</span>の理由
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.items.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-rose-50/50 to-orange-50/50 border border-rose-100 p-6 md:p-8 rounded-2xl hover:shadow-lg hover:shadow-purple-100 transition-all overflow-hidden"
            >
              {/* 大きな番号 - 背景に配置 */}
              <div className="absolute -top-4 -right-4 text-8xl md:text-9xl font-bold text-purple-100 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Reason ラベル */}
              <div className="bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider mb-4">
                Reason {String(index + 1).padStart(2, '0')}
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-purple-200 rounded-xl flex items-center justify-center text-purple-500">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Details */}
              <ul className="space-y-2 mt-4 pt-4 border-t border-rose-100 relative z-10">
                {item.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-pink-500 flex-shrink-0"
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
      </div>
    </section>
  );
}
