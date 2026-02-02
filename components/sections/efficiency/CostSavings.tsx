"use client";

import { costSavings } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function CostSavings() {
  const { before, after } = costSavings.example;
  const savingsPercent = Math.round(
    ((before.creativeCost - after.creativeCost) / before.creativeCost) * 100
  );
  const roasImprovement = Math.round(
    ((after.roas - before.roas) / before.roas) * 100
  );

  return (
    <Section background="industrial" id="cost-savings">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {costSavings.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {costSavings.subtitle}
        </p>
      </div>

      {/* Flow visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-16 md:mb-20">
        {costSavings.flow.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 text-center h-full">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-electric-500/20 flex items-center justify-center">
                {step.icon === "scissors" && (
                  <svg
                    className="w-8 h-8 text-electric-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                    />
                  </svg>
                )}
                {step.icon === "arrow-right" && (
                  <svg
                    className="w-8 h-8 text-electric-500"
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
                )}
                {step.icon === "trending-up" && (
                  <svg
                    className="w-8 h-8 text-neon-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-2xl md:text-3xl font-mono font-bold text-electric-500 mb-2">
                {step.amount}
              </p>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>

            {/* Arrow between items */}
            {index < costSavings.flow.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                <svg
                  className="w-4 h-4 text-electric-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Example calculation */}
      <div className="bg-white/5 border border-white/10 p-6 md:p-10 max-w-4xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
          {costSavings.example.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-dark-100/50 p-6">
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Before
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">広告費</span>
                <span className="text-white font-mono">
                  {before.adSpend.toLocaleString()}円
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">制作費</span>
                <span className="text-white font-mono">
                  {before.creativeCost.toLocaleString()}円
                </span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="text-gray-400">ROAS</span>
                <span className="text-white font-mono text-xl">
                  {before.roas}%
                </span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-electric-500/10 border border-electric-500/30 p-6">
            <div className="text-sm uppercase tracking-wider text-electric-500 mb-4">
              After
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">広告費</span>
                <span className="text-neon-500 font-mono font-bold">
                  {after.adSpend.toLocaleString()}円
                  <span className="text-xs ml-2">+{((after.adSpend - before.adSpend) / before.adSpend * 100).toFixed(0)}%</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">制作費</span>
                <span className="text-electric-500 font-mono font-bold">
                  {after.creativeCost.toLocaleString()}円
                  <span className="text-xs ml-2">-{savingsPercent}%</span>
                </span>
              </div>
              <div className="border-t border-electric-500/30 pt-4 flex justify-between items-center">
                <span className="text-gray-400">ROAS</span>
                <span className="text-neon-500 font-mono text-xl font-bold">
                  {after.roas}%
                  <span className="text-xs ml-2">+{roasImprovement}%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          ※ 同じ総予算で、広告効果を最大化
        </p>
      </div>
    </Section>
  );
}
