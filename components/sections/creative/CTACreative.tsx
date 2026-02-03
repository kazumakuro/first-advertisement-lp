"use client";

import Image from "next/image";
import { cta } from "@/config/content-creative";
import { SupportBadge } from "@/components/shared/SupportSection";
import { trackCTAClick, trackExternalLink } from "@/lib/analytics";

export function CTACreative() {
  const handleCTAClick = () => {
    trackCTAClick("cta-creative", cta.primary);
    trackExternalLink("LINE", "cta-creative");
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-violet-50 to-pink-50" id="cta">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 via-pink-200/50 to-orange-200/50 blur-3xl" />

          <div className="relative bg-white border border-purple-100 p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl shadow-purple-200/50">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                {/* サポートバッジ */}
                <div className="mb-6 flex justify-center lg:justify-start">
                  <SupportBadge variant="warm" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  {cta.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl">
                  {cta.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-500 mb-8 max-w-xl">
                  {cta.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-10">
                  {cta.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <div className="flex justify-center lg:justify-start">
                  <a
                    href={cta.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCTAClick}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#06C755] text-white font-semibold text-lg rounded-full hover:bg-[#05B54C] transition-colors shadow-lg shadow-[#06C755]/25"
                  >
                    {/* LINE icon */}
                    <svg
                      className="mr-3 w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    {cta.primary}
                  </a>
                </div>
              </div>

              {/* Right - 人物写真 */}
              <div className="flex-shrink-0 hidden lg:block">
                <div className="relative">
                  {/* 背景装飾 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-pink-300/30 to-orange-300/30 rounded-3xl blur-2xl transform scale-110" />

                  {/* 人物写真コンテナ */}
                  <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/people/creative_women.png"
                      alt="クリエイティブ制作をする女性"
                      width={256}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* フローティングメッセージ */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 max-w-[180px] border border-purple-100">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      「クリエイティブを一緒に作りましょう」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
