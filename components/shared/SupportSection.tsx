"use client";

import Image from "next/image";
import { SmileIcon, HeartIcon, CheckCircleIcon } from "./HandwrittenAccent";

interface SupportMember {
  name: string;
  role: string;
  image: string;
  message: string;
}

interface SupportSectionProps {
  variant?: "light" | "dark" | "warm";
  title?: string;
  subtitle?: string;
  members?: SupportMember[];
  className?: string;
}

// デフォルトのサポートメンバー
const defaultMembers: SupportMember[] = [
  {
    name: "担当者",
    role: "サポート担当",
    image: "/people/support.png",
    message: "お気軽にご相談ください。あなたの広告を一緒に考えましょう。",
  },
];

/**
 * サポート紹介セクション - 担当者の顔写真とメッセージを表示
 * 「AIっぽくない」「人間味のある」印象を与える
 *
 * 使用例:
 * <SupportSection
 *   variant="light"
 *   title="安心のサポート体制"
 *   subtitle="一人ひとりに寄り添います"
 * />
 */
export function SupportSection({
  variant = "light",
  title = "専任スタッフがサポート",
  subtitle = "わからないことは、なんでも聞いてください",
  members = defaultMembers,
  className = "",
}: SupportSectionProps) {
  const baseStyles = {
    light: {
      container: "bg-gradient-to-b from-white via-coral-50/30 to-white",
      card: "bg-white border-coral-100 shadow-lg shadow-coral-100/30",
      title: "text-gray-800",
      subtitle: "text-coral-600",
      name: "text-gray-800",
      role: "text-coral-500",
      message: "text-gray-600",
      iconBg: "bg-coral-100",
      iconColor: "#FF6B6B",
      bubbleBg: "bg-coral-50",
      bubbleBorder: "border-coral-200",
    },
    dark: {
      container: "bg-dark-100",
      card: "bg-white border-gray-200 shadow-lg shadow-gray-200/30",
      title: "text-white",
      subtitle: "text-electric-500",
      name: "text-gray-800",
      role: "text-electric-500",
      message: "text-gray-600",
      iconBg: "bg-electric-500/20",
      iconColor: "#00D4FF",
      bubbleBg: "bg-gray-50",
      bubbleBorder: "border-gray-200",
    },
    warm: {
      container: "bg-gradient-to-b from-warmth-50/50 via-white to-warmth-50/50",
      card: "bg-white border-warmth-200 shadow-lg shadow-warmth-100/30",
      title: "text-gray-800",
      subtitle: "text-warmth-600",
      name: "text-gray-800",
      role: "text-warmth-500",
      message: "text-gray-600",
      iconBg: "bg-warmth-100",
      iconColor: "#F59E0B",
      bubbleBg: "bg-warmth-50",
      bubbleBorder: "border-warmth-200",
    },
  };

  const styles = baseStyles[variant];

  return (
    <section className={`py-16 md:py-24 ${styles.container} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <SmileIcon className="w-6 h-6" color={styles.iconColor} />
            <HeartIcon className="w-5 h-5" color={styles.iconColor} />
            <CheckCircleIcon className="w-6 h-6" color={styles.iconColor} />
          </div>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${styles.title} mb-3`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl ${styles.subtitle}`}>
            {subtitle}
          </p>
        </div>

        {/* サポートメンバーカード */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border p-6 md:p-8 ${styles.card}`}
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* プロフィール写真 */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // 画像が存在しない場合のフォールバック
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-coral-200 to-coral-300">
                                <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    {/* オンラインインジケーター */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-3 border-white" />
                  </div>

                  {/* 情報 */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <h3 className={`text-xl md:text-2xl font-bold ${styles.name}`}>
                        {member.name}
                      </h3>
                      <p className={`text-sm ${styles.role}`}>{member.role}</p>
                    </div>

                    {/* メッセージ吹き出し */}
                    <div className={`relative p-4 md:p-6 rounded-2xl ${styles.bubbleBg} border ${styles.bubbleBorder}`}>
                      {/* 吹き出しの三角形（モバイルでは上、デスクトップでは左） */}
                      <div
                        className={`absolute hidden md:block -left-3 top-6 w-0 h-0 border-t-[12px] border-t-transparent border-r-[12px] ${
                          variant === "light"
                            ? "border-r-coral-50"
                            : variant === "dark"
                            ? "border-r-white/5"
                            : "border-r-warmth-50"
                        } border-b-[12px] border-b-transparent`}
                      />
                      <p className={`text-base md:text-lg leading-relaxed ${styles.message}`}>
                        「{member.message}」
                      </p>
                    </div>
                  </div>
                </div>

                {/* 特徴バッジ */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                  {[
                    { icon: SmileIcon, text: "親身な対応" },
                    { icon: CheckCircleIcon, text: "迅速な返信" },
                    { icon: HeartIcon, text: "丁寧なサポート" },
                  ].map((badge, badgeIndex) => (
                    <div
                      key={badgeIndex}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${styles.iconBg}`}
                    >
                      <badge.icon className="w-4 h-4" color={styles.iconColor} />
                      <span className={`text-sm font-medium ${styles.role}`}>
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINE CTA */}
        <div className="text-center mt-10">
          <p className={`text-sm ${styles.message} mb-4`}>
            まずはお気軽にメッセージをお送りください
          </p>
          <a
            href="https://lin.ee/xN9WWHl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#06C755] text-white font-semibold rounded-full hover:bg-[#05B54C] transition-colors shadow-lg shadow-[#06C755]/25"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで相談する
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * コンパクト版: CTAセクション内で使用
 */
export function SupportBadge({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark" | "warm";
  className?: string;
}) {
  const styles = {
    light: {
      bg: "bg-white/80",
      border: "border-coral-200",
      text: "text-gray-700",
      subtext: "text-coral-600",
    },
    dark: {
      bg: "bg-white/10",
      border: "border-white/20",
      text: "text-white",
      subtext: "text-electric-400",
    },
    warm: {
      bg: "bg-white/80",
      border: "border-warmth-200",
      text: "text-gray-700",
      subtext: "text-warmth-600",
    },
  };

  const s = styles[variant];

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${s.bg} border ${s.border} ${className}`}>
      {/* プロフィール画像プレースホルダー */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral-200 to-coral-300 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div>
        <p className={`text-sm font-medium ${s.text}`}>担当者が直接対応</p>
        <p className={`text-xs ${s.subtext}`}>24時間以内に返信</p>
      </div>
    </div>
  );
}
