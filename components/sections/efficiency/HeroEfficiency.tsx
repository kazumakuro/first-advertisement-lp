"use client";

import Image from "next/image";
import { hero } from "@/config/content-efficiency";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackExternalLink } from "@/lib/analytics";

export function HeroEfficiency() {
  const handlePrimaryClick = () => {
    trackCTAClick("hero-efficiency", hero.cta.primary);
    trackExternalLink("LINE", "hero-efficiency");
  };
  return (
    <section className="relative min-h-[500px] md:min-h-screen bg-dark-100 overflow-hidden noise-texture">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Header */}
      <header className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-white text-xl md:text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </a>
          <a
            href={hero.cta.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePrimaryClick}
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-electric-500 text-dark-100 font-semibold uppercase tracking-wider text-sm hover:bg-electric-400 transition-colors"
          >
            {hero.cta.primary}
          </a>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-20 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-electric-500 rounded-full" />
              <span className="text-electric-500 text-sm font-medium uppercase tracking-wider">
                For Advertisers
              </span>
            </div>

            {/* Catchphrase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {hero.catchphrase.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Sub catchphrase */}
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              {hero.subCatchphrase}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-500 mb-10 md:mb-12">
              {hero.description.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>

            {/* Stats - 大きな数字で実績を強調 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
              {hero.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 md:p-5 bg-white/5 border border-white/10 hover:border-electric-500/30 transition-colors"
                >
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-electric-500 font-mono">
                      {stat.value}
                    </span>
                    <span className="text-base md:text-xl text-electric-400 font-mono">
                      {stat.unit}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-white mt-2 font-medium">
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={hero.cta.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePrimaryClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-500 text-dark-100 font-semibold text-lg uppercase tracking-wider shadow-lg shadow-electric-500/25 btn-magnetic"
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
                href="#case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-electric-500 text-electric-500 font-semibold text-lg uppercase tracking-wider hover:bg-electric-500/10 transition-colors"
              >
                {hero.cta.secondary}
              </a>
            </div>
          </div>

          {/* Right - 人物写真 */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative">
              {/* 背景グロー */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-neon-500/20 rounded-2xl blur-2xl transform scale-110" />

              {/* 人物写真コンテナ */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/formal/A_01office_seane022.png"
                  alt="クリエイティブ制作に悩む担当者"
                  width={320}
                  height={384}
                  className="w-full h-full object-contain bg-dark-50"
                  priority
                />

                {/* オーバーレイグラデーション */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/80 via-transparent to-transparent" />
              </div>

              {/* フローティングバッジ */}
              <div className="absolute -bottom-4 -right-4 bg-dark-50 rounded-xl shadow-lg p-4 border border-electric-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">制作コスト</p>
                    <p className="text-sm font-bold text-electric-500">50%削減</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-100 to-transparent" />
    </section>
  );
}
