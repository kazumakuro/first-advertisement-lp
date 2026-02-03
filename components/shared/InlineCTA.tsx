"use client";

interface InlineCTAProps {
  text?: string;
  subtext?: string;
  url?: string;
  variant?: "coral" | "electric" | "warmth" | "purple" | "trust";
  background?: "light" | "dark" | "gradient";
}

export function InlineCTA({
  text = "今すぐ無料相談する",
  subtext = "30秒で予約完了・売り込みなし",
  url = "https://lin.ee/xN9WWHl",
  variant = "coral",
  background = "light",
}: InlineCTAProps) {
  const buttonStyles = {
    coral: "bg-coral-500 hover:bg-coral-600 shadow-coral-500/25",
    electric: "bg-electric-500 hover:bg-electric-400 shadow-electric-500/25 text-dark-100",
    warmth: "bg-gradient-to-r from-warmth-500 to-rose-500 hover:from-warmth-400 hover:to-rose-400 shadow-warmth-500/25",
    purple: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 shadow-purple-500/25",
    trust: "bg-trust-500 hover:bg-trust-400 shadow-trust-500/25",
  };

  const bgStyles = {
    light: "bg-gradient-to-r from-coral-50 via-white to-primary-50",
    dark: "bg-dark-50",
    gradient: "bg-gradient-to-r from-coral-100 to-primary-100",
  };

  const textColor = background === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`py-8 md:py-12 ${bgStyles[background]}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-8 py-4 text-white font-semibold text-lg rounded-full transition-all shadow-lg transform hover:scale-105 ${buttonStyles[variant]}`}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            {text}
          </a>
          {subtext && (
            <p className={`text-sm ${textColor}`}>{subtext}</p>
          )}
        </div>
      </div>
    </div>
  );
}
