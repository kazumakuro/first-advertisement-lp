"use client";

import { Button } from "@/components/ui/Button";
import { cta } from "@/config/content";
import Image from "next/image";

export function CTA() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              {cta.title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 md:mb-6">
              {cta.subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-6 md:mb-8">
              {cta.description}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 md:mb-10">
              {cta.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full text-sm text-gray-700 shadow-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {benefit}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(cta.primaryUrl, "_blank")}
              >
                {cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("solution")}
              >
                {cta.secondary}
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center w-full lg:w-auto">
            <div className="relative w-full max-w-sm md:max-w-md aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 via-secondary-300/20 to-accent-300/20 rounded-2xl md:rounded-3xl blur-2xl" />
              <Image
                src="/assets/images/Gemini_Generated_Image_8o8lpk8o8lpk8o8l.png"
                alt="Call to action illustration"
                width={500}
                height={300}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
