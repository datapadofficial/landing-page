"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/magicui/marquee";

const Integration8 = () => {
  const logos = [
    {
      image: "/images/integrations/slack.png",
      name: "Slack",
      className: "",
    },
    {
      image: "/images/integrations/google-analytics.png",
      name: "Google Analytics",
      className: "",
    },
    {
      image: "/images/integrations/facebook-ads.png",
      name: "Facebook Ads",
      className: "",
    },
    {
      image: "/images/integrations/shopify.png",
      name: "Shopify",
      className: "",
    },
    {
      image: "/images/integrations/stripe.png",
      name: "Stripe",
      className: "",
    },
    {
      image: "/images/integrations/hubspot.png",
      name: "HubSpot",
      className: "",
    },
    {
      image: "/images/integrations/salesforce.png",
      name: "Salesforce",
      className: "",
    },
    {
      image: "/images/integrations/google-ads.png",
      name: "Google Ads",
      className: "",
    },
    {
      image: "/images/integrations/mailchimp.png",
      name: "Mailchimp",
      className: "",
    },
    {
      image: "/images/integrations/linkedin-ads.png",
      name: "LinkedIn Ads",
      className: "",
    },
    {
      image: "/images/integrations/mixpanel.png",
      name: "Mixpanel",
      className: "",
    },
    {
      image: "/images/integrations/intercom.png",
      name: "Intercom",
      className: "",
    },
  ];

  return (
    <section className="py-32">
      <div className="container pt-32">
        <h1 className="text-center text-5xl font-medium tracking-tight md:text-7xl">
          Connect Everything
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center tracking-tight text-muted-foreground/80 md:text-lg">
          Integrate with 50+ data sources. From marketing platforms to
          databases, connect all your tools in minutes.
        </p>

        <div className="relative mt-12">
          <Marquee pauseOnHover className="[--duration:20s]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={20}
                  height={20}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={20}
                  height={20}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {[...logos].reverse().map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={20}
                  height={20}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {[...logos].reverse().map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 rounded-full bg-muted px-5 py-2"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={20}
                  height={20}
                  className={cn("size-5", logo?.className)}
                />
                <p className="text-lg">{logo.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export { Integration8 };
