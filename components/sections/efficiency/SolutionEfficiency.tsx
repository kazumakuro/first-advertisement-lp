"use client";

import { solution } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  scissors: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  ),
  zap: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  check: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export function SolutionEfficiency() {
  return (
    <Section background="dark" id="solution">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {solution.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {solution.subtitle}
        </p>
      </div>

      {/* ワークフロー説明画像 */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-2xl rounded-lg overflow-hidden bg-dark-50">
          <Image
            src="/images/efficiency/workflow.jpeg"
            alt="効率化されたクリエイティブ制作ワークフロー"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {solution.features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-electric-500/10 to-neon-500/5 border border-electric-500/30 p-8 text-center group hover:border-electric-500/50 transition-colors"
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-electric-500/20 flex items-center justify-center text-electric-500 group-hover:bg-electric-500/30 transition-colors">
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
