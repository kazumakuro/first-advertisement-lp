"use client";

import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    name: "H.T さん",
    role: "ハンドメイドアクセサリー作家",
    content:
      "広告なんて難しそう...と思っていましたが、担当の方が丁寧に教えてくれて、初めてでも安心して始められました。今では毎月安定して新規のお客様が来てくれています。",
    result: "新規顧客 月5-8件増",
  },
  {
    name: "M.S さん",
    role: "オンラインヨガ講師",
    content:
      "SNSだけでは限界を感じていました。1万円から試せるということで始めてみたら、想像以上に反応があってびっくり。生徒さんが増えて、クラスを増設しました。",
    result: "生徒数 2倍に",
  },
  {
    name: "K.Y さん",
    role: "イラストレーター",
    content:
      "クリエイティブを自分で作るのは大変だと思っていましたが、AIが自動で作ってくれるので本当に楽。修正もすぐ対応してもらえて助かっています。",
    result: "フォロワー +3,000人",
  },
];

export function Testimonials() {
  return (
    <Section background="gradient" id="testimonials">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          ご利用者の声
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          実際にサービスをご利用いただいた方々からの声をご紹介します
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Quote icon */}
            <div className="text-primary-300 mb-4">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {testimonial.content}
            </p>

            {/* Result badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 rounded-full mb-4">
              <svg
                className="w-4 h-4 text-accent-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-accent-700 text-xs font-semibold">
                {testimonial.result}
              </span>
            </div>

            {/* Author */}
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-10 md:mt-14 text-center">
        <p className="text-gray-500 text-sm mb-4">多くのクリエイターにご利用いただいています</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary-500">500+</p>
            <p className="text-gray-500 text-xs md:text-sm">相談件数</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary-500">92%</p>
            <p className="text-gray-500 text-xs md:text-sm">満足度</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary-500">85%</p>
            <p className="text-gray-500 text-xs md:text-sm">継続率</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
