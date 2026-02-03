"use client";

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
    industry: "アパレル",
    businessType: "ファッションEC",
    challenge: "デザイナーに依頼すると1枚3万円、納期2週間",
    result: "1枚500円、5分で10バリエーション生成",
    improvement: "98%削減",
    metric: "制作コスト",
  },
  {
    industry: "飲食",
    businessType: "テイクアウト専門店",
    challenge: "スマホ写真しかなく、広告クオリティに不安",
    result: "商品写真からプロ品質の広告を自動生成",
    improvement: "CTR 3.2倍",
    metric: "クリック率",
  },
  {
    industry: "美容",
    businessType: "エステサロン",
    challenge: "A/Bテスト用の複数パターンを作る余裕がない",
    result: "10パターンを一括生成、最適なクリエイティブを発見",
    improvement: "ROAS 250%",
    metric: "広告効果",
  },
];

export function CaseStudiesCreative() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50" id="case-studies">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <p className="bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent font-medium mb-4 uppercase tracking-wider">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            導入<span className="bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent">事例</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AIクリエイティブ生成で成果を出した企業様の事例
          </p>
        </div>

        {/* 事例カード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* 業種ラベル */}
              <div className="bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 px-4 py-2">
                <span className="text-white text-sm font-medium">
                  {study.industry} / {study.businessType}
                </span>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* Before → After */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Before</div>
                  <p className="text-gray-700 text-sm mb-4">{study.challenge}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-sm text-gray-500">After</div>
                    <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-bold text-sm">{study.result}</p>
                </div>

                {/* 改善率 */}
                <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">{study.metric}</p>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent">
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
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 text-white font-semibold text-lg rounded-full hover:opacity-90 transition-all shadow-lg"
          >
            あなたも試してみる
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
