"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";

interface CaseStudy {
  industry: string;
  businessType: string;
  challenge: string;
  result: string;
  improvement: string;
  quote: string;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: "ハンドメイド",
    businessType: "アクセサリー作家",
    challenge: "SNSフォロワー300人、月売上5万円",
    result: "月売上25万円（5倍）",
    improvement: "400%UP",
    quote: "広告なんて私には無理と思っていましたが、本当に簡単でした。",
    image: "/people/trouble_women.png",
  },
  {
    industry: "教室運営",
    businessType: "ヨガインストラクター",
    challenge: "新規生徒の獲得に苦戦、月2〜3名",
    result: "月10名の新規獲得",
    improvement: "3倍",
    quote: "生徒さんが増えて、念願の2クラス目を開講できました。",
    image: "/people/marketing_men.png",
  },
  {
    industry: "D2Cブランド",
    businessType: "スキンケア商品",
    challenge: "認知度が低く、ECサイト訪問者が少ない",
    result: "月間訪問者10倍、売上3倍",
    improvement: "売上3倍",
    quote: "少額から始められたので、リスクなく試せました。",
    image: "/people/creative_women.png",
  },
];

export function CaseStudies() {
  return (
    <Section id="case-studies" background="cream">
      <div className="max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-coral-500 font-medium mb-4 uppercase tracking-wider">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            導入<span className="text-coral-500">事例</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            実際にサービスをご利用いただいたお客様の声をご紹介します
          </p>
        </div>

        {/* 事例カード */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* 業種ラベル */}
              <div className="bg-gradient-to-r from-coral-500 to-primary-500 px-4 py-2">
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
                    <svg className="w-4 h-4 text-coral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-bold">{study.result}</p>
                </div>

                {/* 改善率 */}
                <div className="bg-gradient-to-r from-coral-50 to-primary-50 rounded-xl p-4 mb-6 text-center">
                  <span className="text-4xl md:text-5xl font-bold text-coral-600">
                    {study.improvement}
                  </span>
                </div>

                {/* 顧客の声 */}
                <div className="flex items-start gap-3">
                  {study.image && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={study.image}
                        alt="お客様"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    「{study.quote}」
                  </p>
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
            className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-semibold text-lg rounded-full hover:bg-coral-600 transition-colors shadow-lg shadow-coral-500/25"
          >
            あなたも成功事例に
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
