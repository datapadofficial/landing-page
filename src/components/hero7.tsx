import React from "react";
import { Button } from "@/components/ui/button";
import { AnnouncementBadge } from "@/components/ui/announcement-badge";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({
  description = "Generalistic AI is to shallow to meet your competitive business demands. Datapad analyses your existing data before takin any action; leading to 5x better results on ROI on average.",
  button = {
    text: "Get Started",
    url: "https://www.shadcnblocks.com",
  },
}: Hero7Props) => {
  return (
    <section className="pt-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <div className="mx-auto flex flex-col gap-6">
          <div className="flex justify-center">
            <AnnouncementBadge
              href="/blog/datapad-secures-over-500k-to-redefine-data-analytics-with-autonomous-ai-agents"
              tag="NEW"
            >
              Datapad Raises New Funding Round
            </AnnouncementBadge>
          </div>
          <h1 className="w-full text-heading-1 relative max-w-5xl text-center mx-auto">
            <span className="text-primary/80">Better AI Outputs With</span>
            <LineShadowText className="w-full">
              Data-Backed Workflows
            </LineShadowText>
          </h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            {description}
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Button asChild size="lg" className="mt-10">
            <a href={button.url}>{button.text}</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="mt-10">
            <a href={button.url}>Book a Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero7 };
