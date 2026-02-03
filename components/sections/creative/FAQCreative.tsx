"use client";

import { useState } from "react";
import { faq } from "@/config/content-creative";

export function FAQCreative() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-violet-50" id="faq">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-gray-800 font-medium pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform ${
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
                    <div className="pt-2 border-t border-purple-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
