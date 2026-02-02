import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "First Advertisement | 広告の課題を、あなたに合った方法で",
  description:
    "広告初心者から既存運用者まで、あなたに最適な広告ソリューションをご提案。クリエイター向け簡単広告出稿から、クリエイティブ費用効率化まで。",
};

export default function SelectorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="text-center">
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              {siteConfig.name}
            </span>
          </div>
        </div>
      </header>

      {/* Main content - Split screen */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Easy Publish (Light theme) */}
        <Link
          href="/easy-publish"
          className="group relative flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-cream-50 via-cream-100 to-primary-50/30 transition-all duration-500 hover:flex-[1.1] min-h-[50vh] lg:min-h-screen"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl group-hover:bg-primary-300/40 transition-colors duration-500" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary-200/30 rounded-full blur-3xl group-hover:bg-secondary-300/40 transition-colors duration-500" />
          </div>

          <div className="relative z-10 text-center max-w-md">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-sm text-gray-600 font-medium">
                広告初心者向け
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              はじめての広告
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              広告が難しい・わからない方へ。
              <br />
              1万円から、プロの広告を始められます。
            </p>

            {/* CTA */}
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary-400 text-white font-medium rounded-full group-hover:bg-primary-500 transition-colors shadow-lg">
              簡単に始める
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="hidden lg:flex items-center justify-center w-px bg-gray-200 relative">
          <div className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <span className="text-gray-400 text-sm font-medium">or</span>
          </div>
        </div>
        <div className="lg:hidden h-px bg-gray-200 relative flex items-center justify-center">
          <div className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <span className="text-gray-400 text-sm font-medium">or</span>
          </div>
        </div>

        {/* Right side - Efficiency Creative (Dark theme) */}
        <Link
          href="/efficiency-creative"
          className="group relative flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-dark-100 transition-all duration-500 hover:flex-[1.1] min-h-[50vh] lg:min-h-screen"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl group-hover:bg-electric-500/20 transition-colors duration-500" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-neon-500/10 rounded-full blur-3xl group-hover:bg-neon-500/20 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <div className="relative z-10 text-center max-w-md">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-electric-500/20 border border-electric-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-electric-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/30 mb-4">
              <span className="w-2 h-2 bg-electric-500 rounded-full" />
              <span className="text-sm text-electric-500 font-medium uppercase tracking-wider">
                既存運用者向け
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              クリエイティブ効率化
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              すでに広告を運用中の方へ。
              <br />
              制作コストを削減し、広告費に回せます。
            </p>

            {/* CTA */}
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 text-dark-100 font-semibold uppercase tracking-wider group-hover:bg-electric-400 transition-colors shadow-lg shadow-electric-500/25">
              効率化を始める
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </span>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
