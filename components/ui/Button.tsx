import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "industrial" | "industrial-outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const isIndustrial = variant === "industrial" || variant === "industrial-outline";

  const baseStyles = isIndustrial
    ? "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
    : "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary-400 text-white hover:bg-primary-500 focus:ring-primary-400 shadow-lg hover:shadow-xl",
    secondary:
      "bg-secondary-400 text-gray-800 hover:bg-secondary-500 focus:ring-secondary-400 shadow-lg hover:shadow-xl",
    outline:
      "bg-white border-2 border-primary-400 text-primary-500 hover:bg-primary-50 focus:ring-primary-400",
    industrial:
      "bg-electric-500 text-dark-100 hover:bg-electric-400 focus:ring-electric-500 shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40",
    "industrial-outline":
      "bg-transparent border-2 border-electric-500 text-electric-500 hover:bg-electric-500/10 focus:ring-electric-500",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm md:px-4",
    md: "px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base",
    lg: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
