import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonBrand = "vijfhart" | "dcg";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  brand?: ButtonBrand;
  size?: ButtonSize;
  children: React.ReactNode;
}

const brandStyles: Record<ButtonBrand, Record<ButtonVariant, string>> = {
  vijfhart: {
    primary: "bg-vijfhart-red text-vijfhart-white hover:bg-red-700",
    secondary: "bg-vijfhart-grey text-vijfhart-anthracite hover:bg-gray-300",
    outline: "border-2 border-vijfhart-red text-vijfhart-red hover:bg-vijfhart-red hover:text-white",
  },
  dcg: {
    primary: "bg-dcg-purple text-white hover:bg-purple-800",
    secondary: "bg-dcg-yellow text-dcg-purple hover:bg-yellow-500",
    outline: "border-2 border-dcg-purple text-dcg-purple hover:bg-dcg-purple hover:text-white",
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  brand = "vijfhart",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "font-semibold rounded-vijfhart shadow-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const focusRing = brand === "vijfhart" ? "focus:ring-vijfhart-red" : "focus:ring-dcg-purple";

  return (
    <button
      className={`${baseStyles} ${brandStyles[brand][variant]} ${sizeStyles[size]} ${focusRing} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
