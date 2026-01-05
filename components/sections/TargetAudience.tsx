import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { targetAudience } from "@/config/content";

export function TargetAudience() {
  return (
    <Section id="target-audience" background="gradient">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
          {targetAudience.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.audiences.map((audience, index) => (
            <Card
              key={index}
              variant="white"
              hover
              className="text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {audience.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
