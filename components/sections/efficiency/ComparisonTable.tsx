"use client";

import { comparison } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function ComparisonTable() {
  return (
    <Section background="dark" id="comparison">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {comparison.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {comparison.subtitle}
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block max-w-4xl mx-auto">
        <div className="bg-white/5 border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/5">
            {comparison.headers.map((header, index) => (
              <div
                key={index}
                className={`px-6 py-4 text-sm uppercase tracking-wider font-semibold ${
                  index === 0
                    ? "text-gray-400"
                    : index === 1
                    ? "text-gray-400 text-center"
                    : "text-electric-500 text-center"
                }`}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Rows */}
          {comparison.rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index !== comparison.rows.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="px-6 py-5 text-white font-medium">{row.item}</div>
              <div className="px-6 py-5 text-gray-400 text-center">
                {row.traditional}
              </div>
              <div className="px-6 py-5 text-center">
                <span className="inline-flex items-center gap-2 text-electric-500 font-semibold">
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
                  {row.ours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {comparison.rows.map((row, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 p-4"
          >
            <h3 className="text-white font-semibold mb-3">{row.item}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  従来
                </div>
                <div className="text-gray-400 text-sm">{row.traditional}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-electric-500 mb-1">
                  First Ad
                </div>
                <div className="text-electric-500 text-sm font-semibold flex items-center gap-1">
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
                  {row.ours}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
