"use client";

import { solution } from "@/config/content-branding";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  search: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  users: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  copy: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
};

export function SolutionBranding() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-orange-50 to-rose-50" id="solution">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {solution.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {solution.subtitle}
          </p>
        </div>

        {/* キーワード浮遊イメージ */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg bg-orange-50">
            <Image
              src="/images/branding/keywords.jpeg"
              alt="商品から魅力キーワードが浮かぶイメージ"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {solution.features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-warmth-100 p-8 text-center rounded-2xl group hover:shadow-xl hover:shadow-warmth-100 transition-all"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-warmth-100 to-rose-100 rounded-2xl flex items-center justify-center text-warmth-600 group-hover:scale-110 transition-transform">
                {iconMap[feature.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
