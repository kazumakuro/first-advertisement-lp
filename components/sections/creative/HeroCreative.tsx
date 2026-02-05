"use client";

import Image from "next/image";
import { hero } from "@/config/content-creative";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackExternalLink } from "@/lib/analytics";

export function HeroCreative() {
  const handlePrimaryClick = () => {
    trackCTAClick("hero-creative", hero.cta.primary);
    trackExternalLink("LINE", "hero-creative");
  };

  return (
    <section className="relative min-h-[500px] md:min-h-screen overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/creative/hero.jpeg"
          alt="複数のクリエイティブが生成されるイメージ"
          fill
          quality={90}
          className="object-cover object-center"
          priority
        />
        {/* オーバーレイ - テキストの可読性を確保 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/90" />
      </div>

      {/* Header */}
      <header className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-gray-800 text-xl md:text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </a>
          <a
            href={hero.cta.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePrimaryClick}
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 text-white font-semibold rounded-full text-sm hover:opacity-90 transition-all shadow-lg"
          >
            {hero.cta.primary}
          </a>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-20 pb-20">
        <div className="flex flex-col items-center gap-8">
          {/* Text content - センター配置 */}
          <div className="text-center max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 rounded-full" />
              <span className="bg-gradient-to-r from-rose-600 to-coral-600 bg-clip-text text-transparent text-sm font-medium">
                AI Creative Generator
              </span>
            </div>

            {/* Catchphrase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-6 drop-shadow-sm">
              {hero.catchphrase.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Sub catchphrase */}
            <p className="text-xl md:text-2xl text-gray-700 mb-4 drop-shadow-sm">
              {hero.subCatchphrase}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8">
              {hero.description.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={hero.cta.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePrimaryClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 text-white font-semibold text-lg rounded-full shadow-lg btn-magnetic hover-glow"
              >
                {hero.cta.primary}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#before-after"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-rose-400 text-rose-600 font-semibold text-lg rounded-full bg-white/80 backdrop-blur-sm hover:bg-rose-50 transition-colors"
              >
                {hero.cta.secondary}
              </a>
            </div>

            {/* フローティングバッジ */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-4 border border-rose-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 via-coral-400 to-orange-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">最短</p>
                <p className="text-sm font-bold bg-gradient-to-r from-rose-600 to-coral-600 bg-clip-text text-transparent">5分で完成</p>
              </div>
            </div>
          </div>

          {/* Stats - 大きな数字で実績を強調 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            {hero.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-5 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent font-mono">
                    {stat.value}
                  </span>
                  <span className="text-base md:text-xl bg-gradient-to-r from-rose-500 via-coral-500 to-orange-400 bg-clip-text text-transparent font-mono">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-700 mt-2 font-medium">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-xs text-gray-500 mt-1">
                    {stat.sublabel}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
