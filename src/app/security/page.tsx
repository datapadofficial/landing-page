import { Metadata } from "next";
import { SecurityPageContent } from "@/components/security-page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Security - Datapad",
    description: "Learn about Datapad's enterprise-grade security measures, compliance certifications, and commitment to protecting your data.",

    // Open Graph metadata
    openGraph: {
      title: "Security - Datapad",
      description: "Learn about Datapad's enterprise-grade security measures, compliance certifications, and commitment to protecting your data.",
      url: "https://datapad.io/security",
      siteName: "Datapad",
      type: "website",
    },

    // Twitter Card metadata
    twitter: {
      card: "summary",
      site: "@datapad",
      title: "Security - Datapad",
      description: "Learn about Datapad's enterprise-grade security measures, compliance certifications, and commitment to protecting your data.",
    },

    // Canonical URL
    alternates: {
      canonical: "https://datapad.io/security",
    },

    // Robots
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SecurityPage() {
  return <SecurityPageContent />;
}
