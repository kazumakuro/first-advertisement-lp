import { siteConfig } from "@/config/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: "会社情報",
      links: [
        { label: "サービス概要", href: "#solution" },
        { label: "料金", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    support: {
      title: "サポート",
      links: [
        { label: "お問い合わせ", href: "#cta" },
        { label: "利用規約", href: "#" },
        { label: "プライバシーポリシー", href: "#" },
      ],
    },
    social: {
      title: "SNS",
      links: [
        { label: "X", href: "https://x.com/contact_first_1" },
        { label: "Instagram", href: "https://www.instagram.com/first.advertisement/" },
      ],
    },
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-xs md:text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs md:text-sm hover:text-primary-300 transition-colors"
                      {...(key === 'social' && { target: "_blank", rel: "noopener noreferrer" })}
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
        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
