"use client";

import { ReactNode } from "react";

export interface ChatMessage {
  type: "bot" | "user";
  content: string | ReactNode;
  timestamp?: string;
}

interface LineChatMessageProps {
  message: ChatMessage;
  accountName?: string;
  accountIcon?: string;
}

export function LineChatMessage({
  message,
  accountName = "First Advertisement",
  accountIcon = "/line/icon.png",
}: LineChatMessageProps) {
  const { type, content, timestamp } = message;

  if (type === "bot") {
    return (
      <div className="w-full my-2 overflow-hidden">
        <div className="flex items-start">
          {/* アイコン */}
          <div className="flex-shrink-0 w-10 h-10 mr-2 ml-1">
            <img
              src={accountIcon}
              alt={accountName}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* メッセージ */}
          <div className="flex flex-col max-w-[80%]">
            <span className="text-xs font-bold text-gray-700 mb-1 ml-1">
              {accountName}
            </span>
            <div className="relative">
              <div className="bg-white rounded-xl px-3 py-2 text-sm text-gray-800 shadow-sm">
                {typeof content === "string" ? (
                  <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
                ) : (
                  content
                )}
              </div>
              {/* 吹き出しの尖り */}
              <div
                className="absolute top-2 -left-2 w-0 h-0"
                style={{
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "8px solid white",
                }}
              />
              {timestamp && (
                <span className="absolute -right-12 bottom-0 text-[10px] text-gray-600 whitespace-nowrap">
                  {timestamp}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // User message
  return (
    <div className="w-full my-2 overflow-hidden">
      <div className="flex justify-end items-end pr-3">
        <div className="relative max-w-[75%]">
          <div className="bg-[#9de693] rounded-xl px-3 py-2 text-sm text-gray-800 shadow-sm">
            {typeof content === "string" ? (
              <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
            ) : (
              content
            )}
          </div>
          {/* 吹き出しの尖り */}
          <div
            className="absolute top-2 -right-2 w-0 h-0"
            style={{
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "8px solid #9de693",
            }}
          />
          {timestamp && (
            <span className="absolute -left-12 bottom-0 text-[10px] text-gray-600 whitespace-nowrap">
              {timestamp}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// 選択ボタンコンポーネント
interface QuickReplyButtonProps {
  options: string[];
}

export function QuickReplyButtons({ options }: QuickReplyButtonProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {options.map((option, index) => (
        <span
          key={index}
          className="px-3 py-1.5 text-xs bg-white border border-[#06C755] text-[#06C755] rounded-full"
        >
          {option}
        </span>
      ))}
    </div>
  );
}

// リンクボタンコンポーネント
interface LinkButtonProps {
  text: string;
}

export function LinkButton({ text }: LinkButtonProps) {
  return (
    <div className="mt-2">
      <span className="block w-full px-4 py-2.5 text-sm bg-[#06C755] text-white rounded-lg font-medium text-center">
        {text}
      </span>
    </div>
  );
}

// 分析結果カードコンポーネント
interface AnalysisCardProps {
  title: string;
  items: { icon: string; label: string; value: string }[];
  color?: string;
}

export function AnalysisCard({ title, items, color = "#06C755" }: AnalysisCardProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
      <div className="px-3 py-2 text-white text-sm font-bold" style={{ backgroundColor: color }}>
        {title}
      </div>
      <div className="bg-gray-50 px-3 py-2 space-y-1.5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <span className="text-gray-600">
              {item.icon} {item.label}
            </span>
            <span className="font-bold text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 強みリストカードコンポーネント
interface StrengthCardProps {
  title: string;
  strengths: string[];
}

export function StrengthCard({ title, strengths }: StrengthCardProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
      <div className="px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold">
        {title}
      </div>
      <div className="bg-white px-3 py-2 space-y-1">
        {strengths.map((strength, index) => (
          <div key={index} className="flex items-start gap-2 text-xs">
            <span className="text-green-500 font-bold">✓</span>
            <span className="text-gray-700">{strength}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// キャッチコピー提案カードコンポーネント
interface CopywritingCardProps {
  title: string;
  copies: string[];
}

export function CopywritingCard({ title, copies }: CopywritingCardProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
      <div className="px-3 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold">
        {title}
      </div>
      <div className="bg-white px-2 py-2 space-y-1.5">
        {copies.map((copy, index) => (
          <div key={index} className="flex items-start gap-1.5 text-xs bg-gray-50 rounded px-2 py-1.5">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold">
              {index + 1}
            </span>
            <span className="text-gray-700 leading-relaxed">「{copy}」</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 予測結果カードコンポーネント
interface PredictionCardProps {
  budget: string;
  roas: string;
  revenue: string;
  period: string;
  confidence?: string;
}

export function PredictionCard({ budget, roas, revenue, period, confidence }: PredictionCardProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
      <div className="px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center gap-2">
        <span>📊</span> AI予測レポート
      </div>
      <div className="bg-white px-3 py-3 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 rounded-lg p-2 text-center">
            <div className="text-[10px] text-blue-600">推奨広告予算</div>
            <div className="text-sm font-bold text-blue-700">{budget}</div>
          </div>
          <div className="bg-green-50 rounded-lg p-2 text-center">
            <div className="text-[10px] text-green-600">予測ROAS</div>
            <div className="text-sm font-bold text-green-700">{roas}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-2 text-center">
            <div className="text-[10px] text-purple-600">追加売上見込</div>
            <div className="text-sm font-bold text-purple-700">{revenue}</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-2 text-center">
            <div className="text-[10px] text-orange-600">回収期間</div>
            <div className="text-sm font-bold text-orange-700">{period}</div>
          </div>
        </div>
        {confidence && (
          <div className="text-[10px] text-gray-500 text-center pt-1 border-t">
            予測信頼度: {confidence}
          </div>
        )}
      </div>
    </div>
  );
}

// クリエイティブグリッドコンポーネント
interface CreativeGridProps {
  images: string[];
  labels?: string[];
}

export function CreativeGrid({ images, labels }: CreativeGridProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
      <div className="px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center gap-2">
        <span>🎨</span> 生成クリエイティブ
      </div>
      <div className="bg-white p-2">
        <div className="grid grid-cols-2 gap-1.5">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square rounded overflow-hidden bg-gray-100">
              <img src={src} alt={labels?.[index] || `Creative ${index + 1}`} className="w-full h-full object-cover" />
              {labels?.[index] && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[9px] px-1.5 py-0.5 truncate">
                  {labels[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ダウンロードボタングループ
interface DownloadButtonGroupProps {
  platforms: string[];
}

export function DownloadButtonGroup({ platforms }: DownloadButtonGroupProps) {
  return (
    <div className="mt-2 space-y-1.5">
      <div className="text-xs text-gray-500 mb-1">ダウンロード形式を選択：</div>
      <div className="flex flex-wrap gap-1.5">
        {platforms.map((platform, index) => (
          <span
            key={index}
            className="px-2.5 py-1 text-[10px] bg-gray-100 text-gray-700 rounded border border-gray-200"
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
}

// ローディングアニメーション
export function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-gray-600">分析中</span>
      <span className="flex gap-0.5">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </span>
    </div>
  );
}

// 画像プレビューコンポーネント
interface ImagePreviewProps {
  src: string;
  alt: string;
}

export function ImagePreview({ src, alt }: ImagePreviewProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}

// ターゲット分析カード
interface TargetAnalysisCardProps {
  persona: {
    age: string;
    gender: string;
    interests: string[];
    painPoints: string[];
  };
}

export function TargetAnalysisCard({ persona }: TargetAnalysisCardProps) {
  return (
    <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
      <div className="px-3 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-bold flex items-center gap-2">
        <span>👤</span> ターゲット分析
      </div>
      <div className="bg-white px-3 py-2 space-y-2">
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded">{persona.age}</span>
          <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded">{persona.gender}</span>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 mb-1">興味・関心</div>
          <div className="flex flex-wrap gap-1">
            {persona.interests.map((interest, i) => (
              <span key={i} className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                {interest}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 mb-1">課題・悩み</div>
          <div className="space-y-0.5">
            {persona.painPoints.map((point, i) => (
              <div key={i} className="text-[10px] text-gray-600 flex items-start gap-1">
                <span className="text-red-400">•</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
