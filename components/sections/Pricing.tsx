import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { pricing } from "@/config/content";

export function Pricing() {
  return (
    <Section id="pricing" background="cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {pricing.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {pricing.subtitle}
          </p>
        </div>

        <Card variant="gradient" className="mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {pricing.model.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {pricing.model.description}
            </p>

            {/* Pricing display */}
            <div className="bg-white/50 rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">スタート価格</p>
                <p className="text-5xl md:text-6xl font-bold text-primary-500 mb-2">
                  {pricing.model.startingPrice}
                </p>
                <p className="text-gray-500">少額から始められる、安心の料金設定</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Features included */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {pricing.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg
                className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 text-center italic">
          {pricing.note}
        </p>
      </div>
    </Section>
  );
}
