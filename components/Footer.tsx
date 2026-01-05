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
        { label: "Twitter", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-primary-300 transition-colors"
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
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
