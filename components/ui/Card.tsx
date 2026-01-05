import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "white";
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
}: CardProps) {
  const baseStyles = "rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all duration-300";

  const variants = {
    default: "bg-white shadow-md",
    gradient:
      "bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 shadow-lg",
    white: "bg-white/80 backdrop-blur-sm shadow-md",
  };

  const hoverStyles = hover
    ? "hover:shadow-xl hover:scale-105 cursor-pointer"
    : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
