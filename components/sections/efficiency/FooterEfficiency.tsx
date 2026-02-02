"use client";

import { siteConfig } from "@/config/site";

export function FooterEfficiency() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    service: {
      title: "サービス",
      links: [
        { label: "課題", href: "#problems" },
        { label: "特徴", href: "#features" },
        { label: "料金プラン", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    company: {
      title: "会社情報",
      links: [
        { label: "初心者向けLP", href: "/easy-publish" },
        { label: "利用規約", href: "#" },
        { label: "プライバシーポリシー", href: "#" },
      ],
    },
    social: {
      title: "SNS",
      links: [
        { label: "X", href: siteConfig.social.x },
        { label: "Instagram", href: siteConfig.social.instagram },
      ],
    },
  };

  return (
    <footer className="bg-dark-200 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-white text-xl md:text-2xl font-bold tracking-tight"
            >
              {siteConfig.name}
            </a>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              クリエイティブ費用を効率化し、
              <br />
              広告効果を最大化するパートナー
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-electric-500 transition-colors"
                      {...(key === "social" && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-electric-500 text-sm hover:text-electric-400 transition-colors"
          >
            <span>無料で相談する</span>
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </footer>
  );
}
