"use client";

import { process } from "@/config/content-creative";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  link: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  search: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  download: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
};

export function ProcessCreative() {
  return (
    <section className="relative py-20 md:py-28 bg-white" id="process">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {process.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {process.subtitle}
          </p>
        </div>

        {/* プロセス変換イメージ */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg bg-rose-50">
            <Image
              src="/images/creative/process.jpeg"
              alt="URLからクリエイティブへの変換プロセス"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Process steps */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-rose-300 via-coral-400 to-orange-300 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 p-6 rounded-2xl hover:shadow-lg hover:shadow-purple-100 transition-all h-full">
                    {/* Step number */}
                    <div className="flex justify-center mb-4">
                      <div className="relative z-10 w-16 h-16 bg-white border-2 border-purple-400 rounded-full flex items-center justify-center shadow-lg shadow-purple-100">
                        <span className="text-2xl font-bold font-mono bg-gradient-to-r from-rose-600 to-coral-600 bg-clip-text text-transparent">
                          {String(step.number).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mb-4 bg-white border border-rose-200 rounded-xl flex items-center justify-center text-purple-500">
                      {iconMap[step.icon]}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm text-center mb-3">
                      {step.description}
                    </p>
                    <p className="text-gray-600 text-xs text-center leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Mobile arrow */}
                  {index < process.steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4 sm:hidden">
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

          {/* Time indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 rounded-full">
              <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 font-medium">
                全プロセス完了まで <span className="bg-gradient-to-r from-rose-600 to-coral-600 bg-clip-text text-transparent font-bold">最短5分</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
