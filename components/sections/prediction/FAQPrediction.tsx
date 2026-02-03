"use client";

import { useState } from "react";
import { faq } from "@/config/content-prediction";
import { Section } from "@/components/ui/Section";

export function FAQPrediction() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background="dark" id="faq">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {faq.title}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-trust-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-gray-400 leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
