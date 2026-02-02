"use client";

import { caseStudies } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function CaseStudies() {
  return (
    <Section background="industrial" id="case-studies">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {caseStudies.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {caseStudies.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {caseStudies.cases.map((caseItem, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 overflow-hidden hover:border-electric-500/30 transition-colors"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-electric-500/20 to-neon-500/20 px-6 py-4 border-b border-white/10">
              <div className="text-xs uppercase tracking-wider text-electric-500 mb-1">
                {caseItem.industry}
              </div>
              <h3 className="text-lg font-bold text-white">
                {caseItem.companyType}
              </h3>
            </div>

            {/* Metrics */}
            <div className="p-6">
              <div className="space-y-6">
                {caseItem.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex}>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        {metric.label}
                      </span>
                      <span
                        className={`text-2xl md:text-3xl font-bold font-mono ${
                          metric.value.startsWith("-")
                            ? "text-electric-500"
                            : metric.value.startsWith("+")
                            ? "text-neon-500"
                            : "text-electric-500"
                        }`}
                      >
                        {metric.value}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.description}
                    </div>
                    {metricIndex < caseItem.metrics.length - 1 && (
                      <div className="border-b border-white/10 mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-gray-500 text-sm mt-8">
        ※ 実績は導入企業の一例です。効果は運用状況により異なります。
      </p>
    </Section>
  );
}
