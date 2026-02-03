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
    industry: "コスメ",
    businessType: "スキンケアブランド",
    challenge: "「保湿力が高い」しか訴求できない",
    result: "「24時間うるおいキープ」など5パターンの訴求文を作成",
    improvement: "5パターン",
    metric: "訴求文生成",
  },
  {
    industry: "食品",
    businessType: "お取り寄せグルメ",
    challenge: "競合との差別化ポイントが不明確",
    result: "「職人が1日10個だけ」の希少性訴求を発見",
    improvement: "CTR 2.3倍",
    metric: "広告効果",
  },
  {
    industry: "サービス",
    businessType: "オンラインスクール",
    challenge: "ターゲットに響く言葉がわからない",
    result: "「忙しいママでも30分で学べる」の共感訴求を発見",
    improvement: "CV 180%",
    metric: "コンバージョン",
  },
];

export function CaseStudiesBranding() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-50 to-rose-50" id="case-studies">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-warmth-500 font-medium mb-4 uppercase tracking-wider">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            導入<span className="text-warmth-500">事例</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AIが発見した「強み」で、広告効果がアップした事例
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
              <div className="bg-gradient-to-r from-warmth-500 to-rose-500 px-4 py-2">
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
                    <svg className="w-4 h-4 text-warmth-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-bold text-sm">{study.result}</p>
                </div>

                {/* 改善率 */}
                <div className="bg-gradient-to-r from-warmth-50 to-rose-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">{study.metric}</p>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-warmth-500 to-rose-500 bg-clip-text text-transparent">
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
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-warmth-500 to-rose-500 text-white font-semibold text-lg rounded-full hover:from-warmth-400 hover:to-rose-400 transition-all shadow-lg shadow-warmth-500/25"
          >
            あなたの強みも発見する
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
