import React from "react";

type HeaderBrand = "vijfhart" | "dcg";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface HeaderProps {
  brand?: HeaderBrand;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  className?: string;
}

const brandStyles: Record<HeaderBrand, { bg: string; text: string; hover: string }> = {
  vijfhart: {
    bg: "bg-vijfhart-red",
    text: "text-white",
    hover: "hover:text-vijfhart-grey",
  },
  dcg: {
    bg: "bg-dcg-purple",
    text: "text-white",
    hover: "hover:text-dcg-yellow",
  },
};

export const Header: React.FC<HeaderProps> = ({
  brand = "vijfhart",
  logoSrc,
  logoAlt = "Logo",
  navItems = [],
  className = "",
}) => {
  const styles = brandStyles[brand];

  return (
    <header className={`${styles.bg} ${styles.text} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logoSrc ? (
              <img src={logoSrc} alt={logoAlt} className="h-10 w-auto" />
            ) : (
              <span className="text-xl font-bold">
                {brand === "vijfhart" ? "Vijfhart" : "DCG"}
              </span>
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${styles.hover} ${
                  item.active ? "underline underline-offset-4" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
