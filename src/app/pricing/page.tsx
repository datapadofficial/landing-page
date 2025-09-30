import { Metadata } from "next";
import { Faq } from "@/components/faq";
import { MainCTA } from "@/components/main-cta";
import { PricingSection } from "@/components/pricing-section";
import { PricingComparisonTable } from "@/components/pricing-comparison-table";
import { SocialMediaTestimonials } from "@/components/social-media-testimonials";
export const metadata: Metadata = {
  title: "Pricing - Datapad | AI Data Analysis Platform",
  description:
    "Choose the perfect plan for your team. From free starter plans to enterprise solutions, Datapad scales with your data analysis needs.",
  keywords: [
    "datapad pricing",
    "ai data analysis pricing",
    "business intelligence pricing",
    "data analytics platform cost",
    "dashboard software pricing",
  ],
  openGraph: {
    title: "Pricing - Datapad | AI Data Analysis Platform",
    description:
      "Choose the perfect plan for your team. From free starter plans to enterprise solutions, Datapad scales with your data analysis needs.",
    type: "website",
  },
};

const pricingFAQs = [
  {
    question: "Can I start with a free plan?",
    answer:
      "Yes! Our Free plan includes 1 user, 5 daily chat messages, 1 saved report, and community support. It's perfect for individual users and small teams getting started with AI data analysis.",
  },
  {
    question: "What's included in the Pro plan?",
    answer:
      "The Pro plan includes unlimited users, unlimited messages, unlimited reports, auto-learning AI agent, automations, Slack bot integration, and priority support. It's our most popular plan for teams that need advanced AI features and automation.",
  },
  {
    question: "How does billing work?",
    answer:
      "All plans are billed monthly or annually. Annual billing saves you up to 20% compared to monthly billing. You can upgrade, downgrade, or cancel your subscription at any time.",
  },
  {
    question: "What data sources can I connect?",
    answer:
      "Datapad connects to 50+ data sources including databases (SQL, BigQuery, Snowflake), marketing platforms (Google Ads, Facebook Ads), social media, CRMs, and more. You can also upload CSV files or use our API.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties, and you maintain full control over your information.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Yes! Our Enterprise plan includes custom solutions, dedicated support, bring-your-own-cloud options, advanced security features, and white-label options. Contact our sales team to discuss your specific requirements.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Support varies by plan: Free plan includes community support, Basic and Pro plans include email support, and Enterprise includes dedicated support with priority response times and a dedicated account manager.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col container max-w-7xl items-center">
      {/* Pricing Table */}
      <PricingSection />

      <PricingComparisonTable />

      {/* Social Proof - Case Studies */}
      <SocialMediaTestimonials />

      {/* Call to Action */}
      <MainCTA />

      {/* FAQ Section */}
      <Faq heading="Pricing FAQ" items={pricingFAQs} />
    </div>
  );
}
