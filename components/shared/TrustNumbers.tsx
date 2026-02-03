"use client";

import { HandwrittenCircle } from "./HandwrittenAccent";

interface TrustStat {
  value: string;
  unit?: string;
  label: string;
  description?: string;
}

interface TrustNumbersProps {
  stats: TrustStat[];
  variant?: "light" | "dark" | "warm";
  showDecoration?: boolean;
  className?: string;
}

/**
 * 数値バッジセクション - 利用者数、満足度などの信頼指標を表示
 *
 * 使用例:
 * <TrustNumbers
 *   stats={[
 *     { value: "500", unit: "+", label: "利用実績", description: "個人・企業様" },
 *     { value: "98", unit: "%", label: "満足度", description: "アンケート結果" },
 *     { value: "5", unit: "分", label: "平均対応", description: "初回お問合せ" },
 *   ]}
 *   variant="light"
 * />
 */
export function TrustNumbers({
  stats,
  variant = "light",
  showDecoration = true,
  className = "",
}: TrustNumbersProps) {
  const baseStyles = {
    light: {
      container: "bg-gradient-to-r from-coral-50 via-warmth-50 to-coral-50",
      card: "bg-white/80 border-coral-100",
      value: "text-coral-600",
      unit: "text-coral-500",
      label: "text-gray-700",
      description: "text-gray-500",
      accent: "#FF8C7A",
    },
    dark: {
      container: "bg-dark-100",
      card: "bg-white/5 border-white/10",
      value: "text-electric-500",
      unit: "text-electric-400",
      label: "text-gray-300",
      description: "text-gray-500",
      accent: "#00D4FF",
    },
    warm: {
      container: "bg-gradient-to-r from-warmth-50 via-rose-50 to-warmth-50",
      card: "bg-white/90 border-warmth-200",
      value: "text-warmth-600",
      unit: "text-warmth-500",
      label: "text-gray-700",
      description: "text-gray-500",
      accent: "#F59E0B",
    },
  };

  const styles = baseStyles[variant];

  return (
    <section className={`py-8 md:py-12 ${styles.container} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative p-4 md:p-6 rounded-2xl border ${styles.card} text-center transition-transform hover:scale-105`}
            >
              {/* 装飾的な手書き風丸 */}
              {showDecoration && index === 0 && (
                <div className="absolute -top-1 -right-1 w-16 h-10 pointer-events-none opacity-30">
                  <HandwrittenCircle color={styles.accent} />
                </div>
              )}

              {/* 数値 */}
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className={`text-3xl md:text-4xl lg:text-5xl font-bold ${styles.value}`}>
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className={`text-lg md:text-xl font-semibold ${styles.unit}`}>
                    {stat.unit}
                  </span>
                )}
              </div>

              {/* ラベル */}
              <p className={`text-sm md:text-base font-medium ${styles.label}`}>
                {stat.label}
              </p>

              {/* 補足説明 */}
              {stat.description && (
                <p className={`text-xs mt-1 ${styles.description}`}>
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * コンパクト版: ヒーローセクション内で使用
 */
export function TrustNumbersCompact({
  stats,
  variant = "light",
  className = "",
}: Omit<TrustNumbersProps, "showDecoration">) {
  const textStyles = {
    light: {
      value: "text-coral-600",
      unit: "text-coral-500",
      label: "text-gray-600",
    },
    dark: {
      value: "text-electric-500",
      unit: "text-electric-400",
      label: "text-gray-400",
    },
    warm: {
      value: "text-warmth-600",
      unit: "text-warmth-500",
      label: "text-gray-600",
    },
  };

  const styles = textStyles[variant];

  return (
    <div className={`flex flex-wrap justify-center gap-6 md:gap-10 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex items-baseline justify-center gap-0.5">
            <span className={`text-2xl md:text-3xl font-bold ${styles.value}`}>
              {stat.value}
            </span>
            {stat.unit && (
              <span className={`text-base md:text-lg font-semibold ${styles.unit}`}>
                {stat.unit}
              </span>
            )}
          </div>
          <p className={`text-xs md:text-sm ${styles.label}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
