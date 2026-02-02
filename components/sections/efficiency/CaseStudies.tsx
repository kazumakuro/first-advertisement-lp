"use client";

import { caseStudies } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function CaseStudies() {
  return (
    <Section background="dark" id="case-studies">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {caseStudies.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {caseStudies.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {caseStudies.cases.map((caseItem, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 hover:border-electric-500/30 transition-colors"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
              <div className="text-xs uppercase tracking-wider text-electric-500 mb-1">
                {caseItem.industry}
              </div>
              <h3 className="text-lg font-bold text-white">
                {caseItem.companyType}
              </h3>
            </div>

            {/* Metrics */}
            <div className="p-6 space-y-4">
              {caseItem.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                    <div className="text-gray-500 text-xs">{metric.description}</div>
                  </div>
                  <div className="text-2xl font-bold font-mono text-neon-500">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-gray-500 text-sm mt-8">
        ※ 具体的な導入企業名・詳細はお問い合わせください
      </p>
    </Section>
  );
}
