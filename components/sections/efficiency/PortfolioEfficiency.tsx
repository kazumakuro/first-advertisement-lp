"use client";

import { Section } from "@/components/ui/Section";

export function PortfolioEfficiency() {
  const instagramUrl = "https://www.instagram.com/normcore.studio";

  return (
    <Section background="dark" id="portfolio">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          制作事例
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          実際に制作した広告クリエイティブをご覧ください
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Instagram Profile Card */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/5 border border-white/10 hover:border-electric-500/50 transition-all duration-300 overflow-hidden group"
        >
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-white/10">
            {/* Instagram Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white group-hover:text-electric-500 transition-colors">
                @normcore.studio
              </h3>
              <p className="text-gray-400 text-sm">
                広告クリエイティブ制作事例
              </p>
            </div>

            {/* Arrow */}
            <div className="text-electric-500 group-hover:translate-x-2 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Preview Grid Placeholder */}
          <div className="p-6">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-electric-500/20 to-neon-500/10 flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,212,255,0.1)_25%,rgba(0,212,255,0.1)_50%,transparent_50%,transparent_75%,rgba(0,212,255,0.1)_75%)] bg-[size:20px_20px]" />
                  <svg className="w-8 h-8 text-electric-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-electric-500 font-semibold uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
                Instagramで事例を見る
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-6">
          ※ 実際の制作物はInstagramでご確認いただけます
        </p>
      </div>
    </Section>
  );
}
