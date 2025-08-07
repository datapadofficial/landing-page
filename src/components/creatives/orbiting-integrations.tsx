"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export function OrbitingIntegrations() {
  return (
    <div className="relative h-[320px] w-full flex items-center justify-center overflow-hidden">
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={8}
        delay={0}
        radius={50}
        iconSize={18}
      >
        <Image
          src="/images/integrations/google-analytics.png"
          alt="Google Analytics"
          width={20}
          height={20}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/facebook-ads.png"
          alt="Facebook Ads"
          width={20}
          height={20}
          className="rounded-md"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={12}
        delay={2}
        radius={80}
        iconSize={18}
        reverse
      >
        <Image
          src="/images/integrations/shopify.png"
          alt="Shopify"
          width={18}
          height={18}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/hubspot.png"
          alt="HubSpot"
          width={18}
          height={18}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/stripe.png"
          alt="Stripe"
          width={18}
          height={18}
          className="rounded-md"
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={15}
        delay={4}
        radius={110}
        iconSize={16}
      >
        <Image
          src="/images/integrations/salesforce.png"
          alt="Salesforce"
          width={16}
          height={16}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/google-ads.png"
          alt="Google Ads"
          width={16}
          height={16}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/mailchimp.png"
          alt="Mailchimp"
          width={16}
          height={16}
          className="rounded-md"
        />
        <Image
          src="/images/integrations/slack.png"
          alt="Slack"
          width={16}
          height={16}
          className="rounded-md"
        />
      </OrbitingCircles>
    </div>
  );
}
