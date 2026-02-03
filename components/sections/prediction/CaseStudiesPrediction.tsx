"use client";

import { Section } from "@/components/ui/Section";

interface CaseStudy {
  industry: string;
  businessType: string;
  challenge: string;
  result: string;
  improvement: string;
  metric: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: "EC",
    businessType: "アパレルD2C",
    challenge: "広告費100万円を投入するか迷っていた",
    result: "予測ROASを確認し、自信を持って投資。実績もほぼ予測通り",
    improvement: "予測との誤差 8%",
    metric: "予測精度",
  },
  {
    industry: "サービス",
    businessType: "SaaS企業",
    challenge: "複数チャネルの予算配分が勘頼みだった",
    result: "各チャネルの期待ROASを予測し、最適配分を実現",
    improvement: "ROAS 2.1倍",
    metric: "投資効率",
  },
  {
    industry: "小売",
    businessType: "雑貨ショップ",
    challenge: "初めての広告で、いくら使うべきか不明",
    result: "10万円からの予測で適正予算を把握。無駄なく開始",
    improvement: "初月黒字化",
    metric: "投資回収",
  },
];

export function CaseStudiesPrediction() {
  return (
    <Section id="case-studies" background="dark">
      <div className="max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-medium mb-4 uppercase tracking-wider">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            導入<span className="text-cyan-400">事例</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            効果予測で広告投資の不安を解消した企業様の事例
          </p>
        </div>

        {/* 事例カード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 overflow-hidden hover:border-trust-500/30 transition-colors"
            >
              {/* 業種ラベル */}
              <div className="bg-trust-500/20 px-4 py-2 border-b border-white/10">
                <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                  {study.industry} / {study.businessType}
                </span>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* Before → After */}
                <div className="mb-6">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Before</div>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">After</div>
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">{study.result}</p>
                </div>

                {/* 改善率 */}
                <div className="bg-trust-500/10 border border-trust-500/30 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{study.metric}</p>
                  <span className="text-3xl md:text-4xl font-bold text-cyan-400 font-mono">
                    {study.improvement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://lin.ee/xN9WWHl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-trust-500 text-white font-semibold text-lg uppercase tracking-wider hover:bg-trust-400 transition-colors shadow-lg shadow-trust-500/25"
          >
            あなたも予測してみる
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
