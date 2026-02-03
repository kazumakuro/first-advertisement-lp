"use client";

import { howItWorks } from "@/config/content-creative";

export function HowItWorksCreative() {
  return (
    <section className="relative py-20 md:py-28 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {howItWorks.title}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-pink-400 to-orange-300 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {howItWorks.steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number circle */}
                  <div className="flex justify-center mb-6">
                    <div className="relative z-10 w-24 h-24 bg-white border-4 border-purple-400 rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
                      <span className="text-4xl font-bold font-mono bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                        {String(step.number).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center px-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile arrow */}
                  {index < howItWorks.steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <svg
                        className="w-6 h-6 text-purple-400"
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
      </div>
    </section>
  );
}
