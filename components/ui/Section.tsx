"use client";

import React from "react";
import { useSectionView } from "@/lib/useSectionView";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "white" | "gradient" | "dark" | "industrial";
  trackView?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  background = "cream",
  trackView = true,
}: SectionProps) {
  const sectionRef = useSectionView(id || "unnamed-section");

  const backgrounds = {
    cream: "bg-cream-50",
    white: "bg-white",
    gradient:
      "bg-gradient-to-br from-primary-50/30 via-secondary-50/30 to-accent-50/30",
    dark: "bg-dark-100",
    industrial: "bg-gradient-to-br from-dark-100 via-dark-50 to-dark-100",
  };

  return (
    <section
      ref={trackView ? sectionRef : undefined}
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
