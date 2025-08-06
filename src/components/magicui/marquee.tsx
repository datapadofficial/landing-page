import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   * If not provided, defaults to company logos
   */
  children?: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Whether to show company logos as default content
   * @default true
   */
  showDefaultLogos?: boolean;
}

const companyLogos = [
  { name: "Revolut", src: "/images/company-logos/revolut-logo.svg" },
  { name: "Dentsu", src: "/images/company-logos/dentsu-logo.svg" },
  { name: "Spendesk", src: "/images/company-logos/spendesk-logo.svg" },
  { name: "Maersk", src: "/images/company-logos/maersk-logo.svg" },
  { name: "Contentful", src: "/images/company-logos/contentful-logo.svg" },
  { name: "Corsair", src: "/images/company-logos/corsair-logo.svg" },
  { name: "Shangri-La", src: "/images/company-logos/shangrila-logo.svg" },
  { name: "McKinsey", src: "/images/company-logos/mckinsey-logo.svg" },
  { name: "Delta", src: "/images/company-logos/delta-logo.svg" },
];

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  showDefaultLogos = true,
  ...props
}: MarqueeProps) {
  const content =
    children ||
    (showDefaultLogos ? (
      <>
        {companyLogos.map((logo) => (
          <div
            key={logo.name}
            className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={100}
              height={100}
              className="w-auto h-7 filter invert dark:invert-0"
            />
          </div>
        ))}
      </>
    ) : null);

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {content}
          </div>
        ))}
    </div>
  );
}
