import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "white" | "gradient" | "dark" | "industrial";
}

export function Section({
  children,
  className = "",
  id,
  background = "cream",
}: SectionProps) {
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
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
