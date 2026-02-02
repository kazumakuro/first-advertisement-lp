"use client";

import { showcase } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function CreativeShowcase() {
  return (
    <Section background="dark" id="showcase">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {showcase.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {showcase.subtitle}
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
        {showcase.categories.map((category, index) => (
          <div
            key={index}
            className="group relative bg-white/5 border border-white/10 p-6 md:p-8 hover:border-electric-500/50 transition-colors"
          >
            {/* Placeholder for creative preview */}
            <div className="aspect-video bg-gradient-to-br from-electric-500/20 to-neon-500/20 mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,212,255,0.1)_25%,rgba(0,212,255,0.1)_50%,transparent_50%,transparent_75%,rgba(0,212,255,0.1)_75%)] bg-[size:20px_20px]" />
              <div className="relative z-10 text-electric-500/50">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {index === 0 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  )}
                  {index === 1 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  )}
                  {index === 2 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  )}
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-500 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-400 text-sm">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {[
          "ブランドガイドライン適用",
          "サイズ自動リサイズ",
          "コピーライティング含む",
          "無制限修正",
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10"
          >
            <svg
              className="w-4 h-4 text-neon-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
