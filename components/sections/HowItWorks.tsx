import { Section } from "@/components/ui/Section";
import { howItWorks } from "@/config/content";

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
          {howItWorks.title}
        </h2>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 transform -translate-y-1/2 -z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {howItWorks.steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                {/* Step number circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
