"use client";

import { Button } from "@/components/ui/Button";
import { hero } from "@/config/content";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-primary-50/20 to-secondary-50/20 pt-20 md:pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {hero.catchphrase.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="text-2xl md:text-3xl text-primary-500 font-semibold mb-8">
              {hero.subCatchphrase}
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-10 whitespace-pre-line">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("cta")}
              >
                {hero.cta.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("solution")}
              >
                {hero.cta.secondary}
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 via-secondary-300/20 to-accent-300/20 rounded-full blur-2xl" />
              <Image
                src="/assets/images/Gemini_Generated_Image_639l0x639l0x639l.png"
                alt="Hero illustration"
                width={400}
                height={400}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
