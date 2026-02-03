"use client";

interface HandwrittenUnderlineProps {
  color?: string;
  className?: string;
}

/**
 * 手書き風下線 - 強調テキストに使用
 */
export function HandwrittenUnderline({
  color = "#FF6B6B",
  className = "",
}: HandwrittenUnderlineProps) {
  return (
    <svg
      className={`absolute -bottom-2 left-0 w-full h-3 ${className}`}
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8C30 4 50 9 80 6C110 3 140 8 170 5C185 4 195 6 198 7"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: "200",
          strokeDashoffset: "0",
        }}
      />
    </svg>
  );
}

interface HandwrittenCircleProps {
  color?: string;
  className?: string;
}

/**
 * 手書き風丸囲み - 数値などの強調に使用
 */
export function HandwrittenCircle({
  color = "#FF6B6B",
  className = "",
}: HandwrittenCircleProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 100 60"
      fill="none"
      preserveAspectRatio="none"
    >
      <ellipse
        cx="50"
        cy="30"
        rx="45"
        ry="25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="4 3"
        transform="rotate(-2 50 30)"
      />
    </svg>
  );
}

interface HandwrittenArrowProps {
  color?: string;
  className?: string;
  direction?: "right" | "down" | "left" | "up";
}

/**
 * 手書き風矢印 - フローの説明などに使用
 */
export function HandwrittenArrow({
  color = "#FF6B6B",
  className = "",
  direction = "right",
}: HandwrittenArrowProps) {
  const rotations = {
    right: "0",
    down: "90",
    left: "180",
    up: "270",
  };

  return (
    <svg
      className={`${className}`}
      viewBox="0 0 60 24"
      fill="none"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <path
        d="M2 12C10 11 20 13 30 12C40 11 45 12 50 12"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 6C48 9 52 11 55 12C52 13 48 15 45 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface HighlightTextProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

/**
 * 手書き風ハイライトテキスト - 重要な言葉を強調
 */
export function HighlightText({
  children,
  color = "#FFEB99",
  className = "",
}: HighlightTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="absolute inset-0 -skew-y-1"
        style={{
          background: `linear-gradient(transparent 40%, ${color} 40%, ${color} 85%, transparent 85%)`,
          zIndex: -1,
        }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}

/**
 * スター評価アイコン
 */
export function StarIcon({
  filled = true,
  className = "w-5 h-5",
  color = "#FFC107",
}: {
  filled?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/**
 * ハートアイコン
 */
export function HeartIcon({
  filled = true,
  className = "w-5 h-5",
  color = "#FF6B6B",
}: {
  filled?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/**
 * スマイルアイコン
 */
export function SmileIcon({
  className = "w-5 h-5",
  color = "#06C755",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

/**
 * チェックサークルアイコン
 */
export function CheckCircleIcon({
  className = "w-5 h-5",
  color = "#06C755",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
