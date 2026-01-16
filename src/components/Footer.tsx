import React from "react";

type FooterBrand = "vijfhart" | "dcg";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  brand?: FooterBrand;
  companyName?: string;
  tagline?: string;
  links?: FooterLink[];
  showVersion?: boolean;
  version?: string;
  className?: string;
}

const brandStyles: Record<FooterBrand, { bg: string; text: string; accent: string }> = {
  vijfhart: {
    bg: "bg-vijfhart-anthracite",
    text: "text-white",
    accent: "text-vijfhart-red",
  },
  dcg: {
    bg: "bg-dcg-purple",
    text: "text-white",
    accent: "text-dcg-yellow",
  },
};

const defaultTaglines: Record<FooterBrand, string> = {
  vijfhart: "Dat klopt voor jou!",
  dcg: "House of Ambition",
};

const defaultCompanyNames: Record<FooterBrand, string> = {
  vijfhart: "Vijfhart IT-opleidingen",
  dcg: "De Complementair Groep",
};

export const Footer: React.FC<FooterProps> = ({
  brand = "vijfhart",
  companyName,
  tagline,
  links = [],
  showVersion = true,
  version = "1.0.0",
  className = "",
}) => {
  const styles = brandStyles[brand];
  const displayTagline = tagline || defaultTaglines[brand];
  const displayCompanyName = companyName || defaultCompanyNames[brand];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.bg} ${styles.text} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-2">{displayCompanyName}</h3>
            <p className={`${styles.accent} font-handwriting text-xl`} style={{ fontFamily: brand === "dcg" ? "'Nothing You Could Do', cursive" : "inherit" }}>
              {displayTagline}
            </p>
          </div>

          {/* Links */}
          {links.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Links</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:underline transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Version & Copyright */}
          <div className="text-sm opacity-75">
            <p>&copy; {currentYear} {displayCompanyName}</p>
            {showVersion && (
              <p className="mt-2">Versie {version}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
