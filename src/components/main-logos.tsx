"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface MainLogosProps {
  title?: ReactNode;
}

const MainLogos = ({
  title = (
    <h6 className="text-center">
      Powering the world's best product teams.
      <br className="max-md:hidden" />
      <span className="text-muted-foreground">
        From next-gen startups to established enterprises.
      </span>
    </h6>
  ),
}: MainLogosProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to get the appropriate logo path based on theme
  const getLogoPath = (basePath: string) => {
    if (!mounted) return basePath; // Return default during SSR

    // Check if dark version exists for this logo
    const isDark = resolvedTheme === "dark";
    const hasExtension = basePath.includes(".svg");

    if (isDark && hasExtension) {
      // Replace .svg with -dark.svg
      return basePath.replace(".svg", "-dark.svg");
    }

    return basePath;
  };
  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container flex flex-col gap-10">
        {title}

        <div className="flex w-full flex-col items-center gap-6">
          {/* Top row - 4 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 max-md:w-full sm:grid-cols-4 lg:gap-6">
            {topRowCompanies.map((company, index) => (
              <a
                href={company.href}
                target="_blank"
                key={index}
                className="group flex items-center justify-center w-full"
              >
                <div className="flex h-20 w-full items-center justify-center rounded-lg border border-border bg-card transition-all duration-200 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg group-hover:scale-105 sm:h-24 lg:h-28 lg:w-56">
                  <Image
                    src={getLogoPath(company.logo)}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className={`object-contain transition-opacity ${company.maxHeight}`}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Bottom row - 5 logos */}
          <div className="hidden sm:grid grid-cols-5 items-center justify-items-center gap-3 max-md:w-full lg:gap-6">
            {bottomRowCompanies.map((company, index) => (
              <a
                href={company.href}
                target="_blank"
                key={index}
                className="group flex items-center justify-center w-full"
              >
                <div className="flex h-20 w-full items-center justify-center rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg group-hover:scale-105 sm:h-24 lg:h-28 lg:w-56">
                  <Image
                    src={getLogoPath(company.logo)}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className={`object-contain transition-opacity ${company.maxHeight}`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const topRowCompanies = [
  {
    name: "Harvard",
    logo: "/images/company-logos/harvard-logo.svg",
    width: 130,
    height: 35,
    maxHeight: "max-h-6 sm:max-h-8 lg:max-h-10",
    href: "https://harvard.edu",
  },
  {
    name: "Delta Air Lines",
    logo: "/images/company-logos/delta-logo.svg",
    width: 104,
    height: 18,
    maxHeight: "max-h-4 sm:max-h-5 lg:max-h-6",
    href: "https://delta.com",
  },
  {
    name: "Maersk",
    logo: "/images/company-logos/maersk-logo.svg",
    width: 113,
    height: 22,
    maxHeight: "max-h-4 sm:max-h-5 lg:max-h-6",
    href: "https://maersk.com",
  },
  {
    name: "NYU",
    logo: "/images/company-logos/nyu-logo.svg",
    width: 110,
    height: 30,
    maxHeight: "max-h-4 sm:max-h-5 lg:max-h-6",
    href: "https://nyu.edu",
  },
];

const bottomRowCompanies = [
  {
    name: "Dentsu",
    logo: "/images/company-logos/dentsu-logo.svg",
    width: 141,
    height: 32,
    maxHeight: "max-h-4 max-w-full sm:max-h-5 lg:max-h-5",
    href: "https://dentsu.com",
  },
  {
    name: "Spendesk",
    logo: "/images/company-logos/spendesk-logo.svg",
    width: 105,
    height: 28,
    maxHeight: "max-h-4 max-w-full sm:max-h-5 lg:max-h-6",
    href: "https://spendesk.com",
  },
  {
    name: "Revolut",
    logo: "/images/company-logos/revolut-logo.svg",
    width: 154,
    height: 31,
    maxHeight: "max-h-4 max-w-full sm:max-h-5 lg:max-h-5",
    href: "https://revolut.com",
  },
  {
    name: "McKinsey & Company",
    logo: "/images/company-logos/mckinsey-logo.svg",
    width: 200,
    height: 50,
    maxHeight: "max-h-6 max-w-full sm:max-h-8 lg:max-h-9.5",
    href: "https://mckinsey.com",
  },
  {
    name: "Stanford",
    logo: "/images/company-logos/stanford-logo.svg",
    width: 90,
    height: 25,
    maxHeight: "max-h-4 max-w-full sm:max-h-5 lg:max-h-8",
    href: "https://stanford.edu",
  },
];

export { MainLogos };
