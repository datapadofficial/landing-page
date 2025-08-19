import Image from "next/image";
import { ReactNode } from "react";

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
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-10">
        {title}

        <div className="flex w-full flex-col items-center gap-6">
          {/* Top row - 4 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 max-md:w-full sm:grid-cols-4 md:gap-4 lg:gap-6">
            {topRowCompanies.map((company, index) => (
              <a
                href={company.href}
                target="_blank"
                key={index}
                className="group"
              >
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg group-hover:scale-105 sm:h-24 sm:w-48 lg:h-28 lg:w-56">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className="max-h-4 max-w-full object-contain opacity-60 dark:opacity-100 transition-opacity sm:max-h-5 lg:max-h-6 invert dark:invert-0"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Bottom row - 5 logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 max-md:w-full sm:grid-cols-5 md:gap-4 lg:gap-6">
            {bottomRowCompanies.map((company, index) => (
              <a
                href={company.href}
                target="_blank"
                key={index}
                className="group"
              >
                <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-primary/20 hover:bg-card/80 hover:shadow-lg group-hover:scale-105 sm:h-24 sm:w-48 lg:h-28 lg:w-56">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className="max-h-4 max-w-full object-contain opacity-60 dark:opacity-100 transition-opacity sm:max-h-5 lg:max-h-6 invert dark:invert-0"
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
    name: "McKinsey & Company",
    logo: "/images/company-logos/mckinsey-logo.svg",
    width: 143,
    height: 26,
    href: "https://mckinsey.com",
  },
  {
    name: "Revolut",
    logo: "/images/company-logos/revolut-logo.svg",
    width: 154,
    height: 31,
    href: "https://revolut.com",
  },
  {
    name: "Maersk",
    logo: "/images/company-logos/maersk-logo.svg",
    width: 113,
    height: 22,
    href: "https://maersk.com",
  },
  {
    name: "Contentful",
    logo: "/images/company-logos/contentful-logo.svg",
    width: 112,
    height: 27,
    href: "https://contentful.com",
  },
];

const bottomRowCompanies = [
  {
    name: "Dentsu",
    logo: "/images/company-logos/dentsu-logo.svg",
    width: 141,
    height: 32,
    href: "https://dentsu.com",
  },
  {
    name: "Delta Air Lines",
    logo: "/images/company-logos/delta-logo.svg",
    width: 104,
    height: 18,
    href: "https://delta.com",
  },
  {
    name: "Spendesk",
    logo: "/images/company-logos/spendesk-logo.svg",
    width: 105,
    height: 28,
    href: "https://spendesk.com",
  },
  {
    name: "Shangri-La Hotels",
    logo: "/images/company-logos/shangrila-logo.svg",
    width: 128,
    height: 33,
    href: "https://shangri-la.com",
  },
  {
    name: "Corsair",
    logo: "/images/company-logos/corsair-logo.svg",
    width: 90,
    height: 28,
    href: "https://corsair.com",
  },
];

export { MainLogos };
