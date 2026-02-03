"use client";

import { problems } from "@/config/content-prediction";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function ProblemsPrediction() {
  return (
    <Section background="industrial" id="problems">
      <div className="max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            広告投資、こんな<span className="text-trust-400">不安</span>ありませんか？
          </h2>
        </div>

        {/* 吹き出し + 困っている女性レイアウト */}
        <div className="relative max-w-4xl mx-auto">
          {/* デスクトップ: 吹き出しレイアウト */}
          <div className="hidden md:block">
            {/* 左側の吹き出し */}
            <div className="absolute left-0 top-8 w-[280px] transform -translate-x-4">
              <div className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-2xl rounded-br-none border border-white/20 shadow-lg">
                <p className="text-sm font-medium leading-relaxed">
                  {problems.items[0]?.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {problems.items[0]?.description.slice(0, 40)}...
                </p>
              </div>
            </div>

            <div className="absolute left-0 bottom-24 w-[280px] transform -translate-x-4">
              <div className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-2xl rounded-tr-none border border-white/20 shadow-lg">
                <p className="text-sm font-medium leading-relaxed">
                  {problems.items[1]?.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {problems.items[1]?.description.slice(0, 40)}...
                </p>
              </div>
            </div>

            {/* 右側の吹き出し */}
            <div className="absolute right-0 top-8 w-[280px] transform translate-x-4">
              <div className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-2xl rounded-bl-none border border-white/20 shadow-lg">
                <p className="text-sm font-medium leading-relaxed">
                  {problems.items[2]?.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {problems.items[2]?.description.slice(0, 40)}...
                </p>
              </div>
            </div>

            <div className="absolute right-0 bottom-24 w-[280px] transform translate-x-4">
              <div className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-2xl rounded-tl-none border border-white/20 shadow-lg">
                <p className="text-sm font-medium leading-relaxed">
                  {problems.items[3]?.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {problems.items[3]?.description.slice(0, 40)}...
                </p>
              </div>
            </div>

            {/* 中央の困っている女性画像 */}
            <div className="flex justify-center py-8">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/people/trouble_women.png"
                  alt="困っている女性"
                  fill
                  className="object-contain brightness-0 invert opacity-80"
                />
              </div>
            </div>
          </div>

          {/* モバイル: リスト形式 */}
          <div className="md:hidden">
            {/* 困っている女性画像 */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src="/people/trouble_women.png"
                  alt="困っている女性"
                  fill
                  className="object-contain brightness-0 invert opacity-80"
                />
              </div>
            </div>

            {/* 悩みリスト */}
            <div className="space-y-4">
              {problems.items.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-2xl border border-white/20 shadow-lg"
                >
                  <p className="font-medium">{problem.title}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
