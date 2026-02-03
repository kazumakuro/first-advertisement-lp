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
    industry: "EC事業者",
    businessType: "アパレルD2C",
    challenge: "月20本のクリエイティブ制作費 60万円/月",
    result: "制作費 25万円/月 + 広告費増加",
    improvement: "58%削減",
    metric: "制作費",
  },
  {
    industry: "代理店",
    businessType: "デジタルマーケティング",
    challenge: "クライアント10社分のクリエイティブ制作に3日",
    result: "同じ量を1日で制作完了",
    improvement: "3倍速",
    metric: "制作時間",
  },
  {
    industry: "スタートアップ",
    businessType: "SaaS企業",
    challenge: "A/Bテスト用バリエーションが2種類が限界",
    result: "10種類のバリエーションでテスト実施",
    improvement: "5倍",
    metric: "テストパターン",
  },
];

export function CaseStudiesEfficiency() {
  return (
    <Section id="case-studies" background="industrial">
      <div className="max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-electric-400 font-medium mb-4 uppercase tracking-wider">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            導入<span className="text-electric-400">事例</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            実際に効率化を実現した企業様の事例をご紹介
          </p>
        </div>

        {/* 事例カード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 overflow-hidden hover:border-electric-500/30 transition-colors"
            >
              {/* 業種ラベル */}
              <div className="bg-electric-500/20 px-4 py-2 border-b border-white/10">
                <span className="text-electric-400 text-sm font-medium uppercase tracking-wider">
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
                    <svg className="w-4 h-4 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-white font-bold">{study.result}</p>
                </div>

                {/* 改善率 */}
                <div className="bg-electric-500/10 border border-electric-500/30 p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{study.metric}</p>
                  <span className="text-4xl md:text-5xl font-bold text-electric-400 font-mono">
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
            className="inline-flex items-center justify-center px-8 py-4 bg-electric-500 text-dark-100 font-semibold text-lg uppercase tracking-wider hover:bg-electric-400 transition-colors shadow-lg shadow-electric-500/25"
          >
            あなたも効率化を実現
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
