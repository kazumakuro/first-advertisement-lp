"use client";

import { howItWorks } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function HowItWorksEfficiency() {
  return (
    <Section background="dark" id="how-it-works">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {howItWorks.title}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500/50 via-electric-500 to-neon-500/50" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {howItWorks.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative z-10 w-24 h-24 bg-dark-100 border-2 border-electric-500 flex items-center justify-center">
                    <span className="text-4xl font-bold font-mono text-electric-500">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile arrow */}
                {index < howItWorks.steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg
                      className="w-6 h-6 text-electric-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
