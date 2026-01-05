import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { features } from "@/config/content";

export function Features() {
  return (
    <Section id="features" background="white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
          {features.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.items.map((feature, index) => (
            <Card key={index} variant="gradient" hover className="group">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2 mt-auto">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
