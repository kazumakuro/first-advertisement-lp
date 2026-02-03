"use client";

import { examples } from "@/config/content-branding";

export function ExamplesBranding() {
  return (
    <section className="relative py-20 md:py-28 bg-white" id="examples">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {examples.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {examples.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {examples.items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50/50 to-rose-50/50 border border-warmth-100 p-6 md:p-8 rounded-2xl"
            >
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-warmth-200 rounded-full mb-6">
                <span className="text-warmth-600 text-xs font-medium">
                  {item.category}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative">
                  <div className="absolute -top-3 left-4 px-2 bg-gradient-to-br from-orange-50/50 to-rose-50/50">
                    <span className="text-gray-500 text-sm font-medium">
                      {item.before.title}
                    </span>
                  </div>
                  <div className="border border-gray-300 p-6 pt-8 h-full rounded-xl bg-white/50">
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {item.before.copy}
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute -top-3 left-4 px-2 bg-gradient-to-br from-orange-50/50 to-rose-50/50">
                    <span className="text-warmth-600 text-sm font-medium">
                      {item.after.title}
                    </span>
                  </div>
                  <div className="border-2 border-warmth-400 p-6 pt-8 h-full rounded-xl bg-white shadow-lg shadow-warmth-100">
                    <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-4 whitespace-pre-line">
                      {item.after.copy}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-warmth-100">
                      {item.after.points.map((point, pointIndex) => (
                        <span
                          key={pointIndex}
                          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-warmth-100 to-rose-100 text-warmth-700 text-xs font-medium rounded-full"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow indicator for mobile */}
              <div className="lg:hidden flex justify-center my-4">
                <svg className="w-6 h-6 text-warmth-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
