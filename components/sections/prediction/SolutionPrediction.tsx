"use client";

import { solution } from "@/config/content-prediction";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  brain: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  calculator: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export function SolutionPrediction() {
  return (
    <Section background="industrial" id="solution">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {solution.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {solution.subtitle}
        </p>
      </div>

      {/* リスク軽減イメージ */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-sm rounded-lg overflow-hidden bg-dark-50">
          <Image
            src="/images/prediction/shield.jpeg"
            alt="データに基づくリスク軽減のイメージ"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {solution.features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-trust-500/10 to-cyan-500/5 border border-trust-500/30 p-8 text-center group hover:border-trust-500/50 transition-colors"
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-trust-500/20 flex items-center justify-center text-trust-400 group-hover:bg-trust-500/30 transition-colors">
              {iconMap[feature.icon]}
            </div>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
