"use client";

import { pricing } from "@/config/content-efficiency";
import { Section } from "@/components/ui/Section";

export function PricingEfficiency() {
  return (
    <Section background="dark" id="pricing">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {pricing.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {pricing.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-5xl mx-auto">
        {pricing.plans.map((plan, index) => (
          <div
            key={index}
            className={`relative ${
              plan.recommended
                ? "bg-gradient-to-b from-electric-500/10 to-transparent border-2 border-electric-500"
                : "bg-white/5 border border-white/10"
            }`}
          >
            {/* Recommended badge */}
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric-500 text-dark-100 text-xs font-bold uppercase tracking-wider">
                Recommended
              </div>
            )}

            <div className="p-6 md:p-8">
              {/* Plan name */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

              {/* Ad spend range */}
              <p className="text-gray-400 text-sm mb-6">{plan.adSpendRange}</p>

              {/* Fee */}
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold font-mono text-electric-500">
                  {plan.fee}
                </span>
                {plan.fee !== "要相談" && (
                  <span className="text-gray-400 ml-2">手数料</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.recommended ? "text-electric-500" : "text-neon-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://lin.ee/gVIckSF"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center font-semibold uppercase tracking-wider text-sm transition-colors ${
                  plan.recommended
                    ? "bg-electric-500 text-dark-100 hover:bg-electric-400"
                    : "border-2 border-electric-500 text-electric-500 hover:bg-electric-500/10"
                }`}
              >
                相談する
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-gray-500 text-sm mt-8">{pricing.note}</p>
    </Section>
  );
}
