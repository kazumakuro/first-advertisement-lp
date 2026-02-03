"use client";

import Image from "next/image";
import { hero } from "@/config/content-branding";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackExternalLink } from "@/lib/analytics";

export function HeroBranding() {
  const handlePrimaryClick = () => {
    trackCTAClick("hero-branding", hero.cta.primary);
    trackExternalLink("LINE", "hero-branding");
  };

  return (
    <section className="relative min-h-[500px] md:min-h-screen bg-gradient-to-b from-orange-50 via-rose-50 to-amber-50 overflow-hidden noise-texture">
      {/* Background effects - Warm gradient theme */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-warmth-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-3xl" />
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
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-warmth-500 to-rose-500 text-white font-semibold rounded-full text-sm hover:from-warmth-400 hover:to-rose-400 transition-all shadow-lg shadow-warmth-500/25"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-warmth-200 rounded-full mb-6 md:mb-8 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-warmth-500 to-rose-500 rounded-full" />
              <span className="text-warmth-600 text-sm font-medium">
                AI Branding
              </span>
            </div>

            {/* Catchphrase */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-6">
              {hero.catchphrase.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Sub catchphrase */}
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
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
                  className="text-center p-4 md:p-5 bg-white/80 border border-warmth-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-warmth-500 to-rose-500 bg-clip-text text-transparent font-mono">
                      {stat.value}
                    </span>
                    <span className="text-base md:text-xl bg-gradient-to-r from-warmth-500 to-rose-500 bg-clip-text text-transparent font-mono">
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={hero.cta.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePrimaryClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-warmth-500 to-rose-500 text-white font-semibold text-lg rounded-full shadow-lg shadow-warmth-500/25 btn-magnetic hover-glow"
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
                href="#examples"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-warmth-400 text-warmth-600 font-semibold text-lg rounded-full hover:bg-warmth-50 transition-colors"
              >
                {hero.cta.secondary}
              </a>
            </div>
          </div>

          {/* Right - 人物写真 */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative">
              {/* 背景装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-warmth-300/30 to-rose-300/30 rounded-3xl blur-2xl transform scale-110" />

              {/* 人物写真コンテナ */}
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/people/marketing_men.png"
                  alt="マーケティング担当者"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* フローティングバッジ */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-warmth-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warmth-400 to-rose-400 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">AIが言語化</p>
                    <p className="text-sm font-bold text-warmth-600">魅力を発見</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
