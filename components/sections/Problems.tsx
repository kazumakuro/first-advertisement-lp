import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { problems } from "@/config/content";

export function Problems() {
  return (
    <Section id="problems" background="white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          {problems.title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          多くのクリエイターや小規模事業者が、同じ壁にぶつかっています。
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.items.map((problem, index) => (
            <Card key={index} hover className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-5xl">{problem.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
