"use client";

import { cta } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function CTAEfficiency() {
  return (
    <Section background="dark" id="cta">
      <div className="relative max-w-4xl mx-auto">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 via-neon-500/10 to-electric-500/10 blur-3xl" />

        <div className="relative bg-gradient-to-br from-electric-500/10 to-neon-500/10 border border-electric-500/30 p-8 md:p-12 lg:p-16 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {cta.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            {cta.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            {cta.description}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            {cta.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-300"
              >
                <svg
                  className="w-5 h-5 text-neon-500"
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

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={cta.primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-electric-500 text-dark-100 font-semibold text-lg uppercase tracking-wider hover:bg-electric-400 transition-colors shadow-lg shadow-electric-500/25"
            >
              {cta.primary}
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
            <button
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-electric-500 text-electric-500 font-semibold text-lg uppercase tracking-wider hover:bg-electric-500/10 transition-colors"
              onClick={() => {
                // TODO: Implement download functionality
                alert("資料ダウンロード機能は準備中です");
              }}
            >
              {cta.secondary}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
