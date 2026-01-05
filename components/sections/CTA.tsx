"use client";

import { Button } from "@/components/ui/Button";
import { cta } from "@/config/content";
import Image from "next/image";

export function CTA() {
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              {cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                {cta.primary}
              </Button>
              <Button variant="outline" size="lg">
                {cta.secondary}
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 via-secondary-300/20 to-accent-300/20 rounded-3xl blur-2xl" />
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
