import { AnimatedLogo } from "./navigation/aimated-logo/animated-logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  tagline2?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  tagline = "Datapad. All Rights Reserved. 2025",
  tagline2 = "Made with ❤️ in San Francisco",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "/" },
        { text: "Pricing", url: "/pricing" },
        { text: "Features", url: "/features" },
        { text: "Integrations", url: "/integrations" },
        { text: "Workflows", url: "/workflows" },
      ],
    },
    {
      title: "Compare",
      links: [
        { text: "vs Julius", url: "/vs/julius-ai" },
        { text: "vs Tableau", url: "/vs/tableau" },
        { text: "vs Power BI", url: "/vs/powerbi" },
        { text: "vs Sisense", url: "/vs/sisense" },
        { text: "vs Thoughtspot", url: "/vs/thoughtspot" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          text: "Funding News",
          url: "/blog/datapad-secures-over-500k-to-redefine-data-analytics-with-autonomous-ai-agents",
        },
        {
          text: "Conversational Analytics Guide",
          url: "/blog/conversational-analytics-guide-2025",
        },
        { text: "How to Analyze Data", url: "/blog/analyze-data" },
        { text: "KPI Examples", url: "/blog/kpi-examples" },
        {
          text: "Best AI Tools for Data Analysis",
          url: "/blog/best-ai-tools-for-data-analysis",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/#about" },
        { text: "Blog", url: "/blog" },
        { text: "Contact", url: "mailto:hello@datapad.io" },
        { text: "Privacy", url: "/privacy-policy" },
        { text: "Terms", url: "/terms-of-service" },
      ],
    },
  ],
  copyright = "© 2025 Datapad. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "/terms-of-service" },
    { text: "Privacy Policy", url: "/privacy-policy" },
  ],
}: FooterProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-8xl px-4 border-t pt-12">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <AnimatedLogo size="large" isActive={false} />
              </div>
              <p className="mt-4 text-sm font-bold">{tagline}</p>
              <p className="mt-4 text-sm">{tagline2}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-bold">{section.title}</h3>
                <ul className="text-muted-foreground text-sm space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary text-sm font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-xs font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
