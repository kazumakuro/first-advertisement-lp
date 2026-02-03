"use client";

import { ReactNode } from "react";
import { LineChatMessage, ChatMessage } from "./LineChatMessage";

interface LineChatPreviewProps {
  accountName?: string;
  accountIcon?: string;
  messages: ChatMessage[];
  className?: string;
}

export function LineChatPreview({
  accountName = "First Advertisement",
  accountIcon = "/line/icon.png",
  messages,
  className = "",
}: LineChatPreviewProps) {
  return (
    <div
      className={`w-full max-w-[375px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-gray-800 bg-gray-800 ${className}`}
    >
      {/* ノッチ（iPhoneスタイル） */}
      <div className="bg-gray-800 flex justify-center py-1">
        <div className="w-24 h-5 bg-black rounded-full" />
      </div>
      
      {/* スマホ画面部分 */}
      <div className="aspect-[9/17] flex flex-col bg-[#8cabd8]">
        {/* ヘッダー */}
        <header className="bg-[#8cabd8] px-3 py-2 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <h1 className="text-sm font-bold text-gray-800 truncate max-w-[140px]">{accountName}</h1>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </header>

        {/* チャットエリア */}
        <main className="flex-1 px-2 py-3 overflow-y-auto">
          {messages.map((message, index) => (
            <LineChatMessage
              key={index}
              message={message}
              accountName={accountName}
              accountIcon={accountIcon}
            />
          ))}
        </main>

        {/* フッター（入力欄風） */}
        <footer className="bg-white px-2 py-1.5 flex items-center gap-2 flex-shrink-0">
          <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-400">
            メッセージを入力...
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </footer>
      </div>
      
      {/* ホームバー（iPhoneスタイル） */}
      <div className="bg-gray-800 flex justify-center py-2">
        <div className="w-28 h-1 bg-gray-400 rounded-full" />
      </div>
    </div>
  );
}

// セクションラッパーコンポーネント
interface LinePreviewSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  messages: ChatMessage[];
  accountName?: string;
  accountIcon?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  variant?: "light" | "dark";
  children?: ReactNode;
}

export function LinePreviewSection({
  title = "LINEでこんなことができます",
  subtitle,
  description,
  messages,
  accountName,
  accountIcon,
  ctaText,
  ctaHref = "https://lin.ee/xN9WWHl",
  className = "",
  variant = "light",
  children,
}: LinePreviewSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 md:py-24 ${
        isDark ? "bg-dark-200" : "bg-gray-50"
      } ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* テキストコンテンツ */}
        <div className="text-center mb-10">
          {subtitle && (
            <p
              className={`text-sm font-medium mb-2 ${
                isDark ? "text-primary-400" : "text-primary-600"
              }`}
            >
              {subtitle}
            </p>
          )}
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-base md:text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* LINEプレビュー */}
        <div className="mb-10">
          <LineChatPreview
            messages={messages}
            accountName={accountName}
            accountIcon={accountIcon}
          />
        </div>

        {/* 追加コンテンツ */}
        {children}

        {/* CTA */}
        {ctaText && (
          <div className="text-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full hover:bg-[#05b34d] transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
