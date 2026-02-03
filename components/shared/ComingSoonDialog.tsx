"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

interface ComingSoonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
  pageName: string;
}

export function ComingSoonDialog({
  isOpen,
  onClose,
  featureName,
  pageName,
}: ComingSoonDialogProps) {
  // Vercel Analytics カスタムイベント
  useEffect(() => {
    if (isOpen) {
      track("Coming_Soon_Dialog_Shown", {
        feature: featureName,
        page: pageName,
      });
    }
  }, [isOpen, featureName, pageName]);

  const handleLineClick = () => {
    track("Coming_Soon_Line_Click", {
      feature: featureName,
      page: pageName,
    });
    window.open("https://lin.ee/gVIckSF", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coral-100 to-primary-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-coral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            現在準備中です
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            この機能は現在開発中です。<br />
            <span className="font-semibold text-coral-600">公式LINE</span>では
            同じ機能をすぐにお試しいただけます！
          </p>

          {/* LINE CTA */}
          <button
            onClick={handleLineClick}
            className="w-full py-4 bg-[#06C755] text-white font-semibold text-lg rounded-full hover:bg-[#05b04c] transition-colors shadow-lg shadow-[#06C755]/25 flex items-center justify-center gap-2 btn-magnetic"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            公式LINEで今すぐ試す
          </button>

          {/* Sub text */}
          <p className="text-sm text-gray-500 mt-4">
            30秒で登録完了・売り込みなし
          </p>
        </div>
      </div>
    </div>
  );
}
