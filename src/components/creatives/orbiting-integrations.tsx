"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export function OrbitingIntegrations() {
  return (
    <div className="relative h-[320px] w-full flex items-center justify-center overflow-hidden">
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={30}
        delay={10}
        radius={50}
        iconSize={20}
      >
        <Image
          src="/images/integrations/google-analytics.png"
          alt="Google Analytics"
          width={32}
          height={32}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/facebook-ads.png"
          alt="Facebook Ads"
          width={32}
          height={32}
          className="rounded-md"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={35}
        delay={20}
        radius={100}
        iconSize={20}
        reverse
      >
        <Image
          src="/images/integrations/shopify.png"
          alt="Shopify"
          width={32}
          height={32}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/hubspot.png"
          alt="HubSpot"
          width={32}
          height={32}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/stripe.png"
          alt="Stripe"
          width={32}
          height={32}
          className="rounded-md"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={25}
        delay={4}
        radius={140}
        iconSize={20}
      >
        <Image
          src="/images/integrations/salesforce.png"
          alt="Salesforce"
          width={32}
          height={32}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/google-ads.png"
          alt="Google Ads"
          width={32}
          height={32}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/instagram-business.png"
          alt="Instagram"
          width={32}
          height={32}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/slack.png"
          alt="Slack"
          width={32}
          height={32}
          className="rounded-md"
        />
      </OrbitingCircles>
    </div>
  );
}
