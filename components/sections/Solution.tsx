import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { solution } from "@/config/content";

export function Solution() {
  return (
    <Section id="solution" background="gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {solution.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solution.features.map((feature, index) => (
            <Card
              key={index}
              variant="white"
              hover
              className="text-center group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
