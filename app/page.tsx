import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "First Advertisement | 広告の課題を、あなたに合った方法で",
  description:
    "広告初心者から既存運用者まで、あなたに最適な広告ソリューションをご提案。クリエイター向け簡単広告出稿から、クリエイティブ費用効率化まで。",
};

const lpOptions = [
  {
    href: "/easy-publish",
    theme: "light",
    badge: "広告初心者向け",
    title: "はじめての広告",
    description: "広告が難しい・わからない方へ。\n1万円から、プロの広告を始められます。",
    cta: "簡単に始める",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    href: "/efficiency-creative",
    theme: "dark",
    badge: "既存運用者向け",
    title: "クリエイティブ効率化",
    description: "すでに広告を運用中の方へ。\n制作コストを削減し、広告費に回せます。",
    cta: "効率化を始める",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: "/effect-prediction",
    theme: "blue",
    badge: "効果予測",
    title: "広告効果を予測",
    description: "出稿前に効果を予測。\n数理モデルで投資対効果を最大化。",
    cta: "予測を試す",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: "/ai-branding",
    theme: "warm",
    badge: "AI言語化",
    title: "AIで魅力を言語化",
    description: "URLを入力するだけ。\nAIが商品の強みを発見・言語化。",
    cta: "言語化を試す",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    href: "/ai-creative",
    theme: "colorful",
    badge: "AI生成",
    title: "AIでクリエイティブ生成",
    description: "URLから広告クリエイティブを自動生成。\nデザイナー不要で最短5分。",
    cta: "生成を試す",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SelectorPage() {
  return (
    <div className="min-h-screen bg-dark-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-100/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl md:text-2xl font-bold text-white">
              {siteConfig.name}
            </span>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#06C755] text-white text-sm font-medium hover:bg-[#05B54C] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              無料相談
            </a>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            広告の課題を、<br className="md:hidden" />あなたに合った方法で
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            初心者から運用者まで、最適なソリューションをご提案
          </p>
        </div>
      </section>

      {/* LP Options Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lpOptions.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className={`group relative p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  option.theme === "light"
                    ? "bg-gradient-to-br from-cream-50 to-primary-50/30 border-primary-200/50 hover:border-primary-400"
                    : option.theme === "blue"
                    ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/30 hover:border-blue-500"
                    : option.theme === "warm"
                    ? "bg-gradient-to-br from-orange-50 to-rose-50 border-orange-200/50 hover:border-orange-400"
                    : option.theme === "colorful"
                    ? "bg-gradient-to-br from-violet-50 via-pink-50 to-orange-50 border-purple-200/50 hover:border-purple-400"
                    : "bg-white/5 border-white/10 hover:border-electric-500/50"
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 mb-4 flex items-center justify-center rounded-xl ${
                  option.theme === "light"
                    ? "bg-primary-100 text-primary-500"
                    : option.theme === "blue"
                    ? "bg-blue-500/20 text-blue-500"
                    : option.theme === "warm"
                    ? "bg-orange-100 text-orange-500"
                    : option.theme === "colorful"
                    ? "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-500"
                    : "bg-electric-500/20 text-electric-500"
                }`}>
                  {option.icon}
                </div>

                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider rounded-full ${
                  option.theme === "light"
                    ? "bg-primary-100 text-primary-600"
                    : option.theme === "blue"
                    ? "bg-blue-500/10 text-blue-500 border border-blue-500/30"
                    : option.theme === "warm"
                    ? "bg-orange-100 text-orange-600"
                    : option.theme === "colorful"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-electric-500/10 text-electric-500 border border-electric-500/30"
                }`}>
                  {option.badge}
                </div>

                {/* Title */}
                <h2 className={`text-xl md:text-2xl font-bold mb-2 ${
                  option.theme === "light" || option.theme === "warm" || option.theme === "colorful"
                    ? "text-gray-800"
                    : "text-white"
                }`}>
                  {option.title}
                </h2>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-4 whitespace-pre-line ${
                  option.theme === "light" || option.theme === "warm" || option.theme === "colorful"
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}>
                  {option.description}
                </p>

                {/* CTA */}
                <span className={`inline-flex items-center gap-2 text-sm font-medium ${
                  option.theme === "light"
                    ? "text-primary-500 group-hover:text-primary-600"
                    : option.theme === "blue"
                    ? "text-blue-500 group-hover:text-blue-400"
                    : option.theme === "warm"
                    ? "text-orange-500 group-hover:text-orange-600"
                    : option.theme === "colorful"
                    ? "text-purple-500 group-hover:text-purple-600"
                    : "text-electric-500 group-hover:text-electric-400"
                }`}>
                  {option.cta}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                X
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
