import React from "react";

type CardBrand = "vijfhart" | "dcg";
type CardVariant = "default" | "featured" | "outline";

interface CardProps {
  brand?: CardBrand;
  variant?: CardVariant;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const brandStyles: Record<CardBrand, Record<CardVariant, string>> = {
  vijfhart: {
    default: "bg-white border border-vijfhart-grey",
    featured: "bg-vijfhart-red text-white",
    outline: "bg-white border-2 border-vijfhart-red",
  },
  dcg: {
    default: "bg-white border border-dcg-light-purple",
    featured: "bg-dcg-purple text-white",
    outline: "bg-white border-2 border-dcg-purple",
  },
};

const titleStyles: Record<CardBrand, Record<CardVariant, string>> = {
  vijfhart: {
    default: "text-vijfhart-anthracite",
    featured: "text-white",
    outline: "text-vijfhart-red",
  },
  dcg: {
    default: "text-dcg-purple",
    featured: "text-dcg-yellow",
    outline: "text-dcg-purple",
  },
};

export const Card: React.FC<CardProps> = ({
  brand = "vijfhart",
  variant = "default",
  title,
  subtitle,
  children,
  className = "",
  onClick,
}) => {
  const baseStyles = "rounded-vijfhart shadow-card p-6 transition-all duration-200 hover:shadow-card-hover";
  const cursorStyle = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseStyles} ${brandStyles[brand][variant]} ${cursorStyle} ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className={`text-xl font-bold mb-2 ${titleStyles[brand][variant]}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={`text-sm mb-4 ${variant === "featured" ? "opacity-90" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
