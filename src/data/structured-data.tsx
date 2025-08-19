export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Datapad",
    url: "https://datapad.io",
    logo: "https://datapad.io/logo.png",
    description:
      "100% Autonomous AI Data Analyst - Get instant answers anywhere, anytime",
    sameAs: [
      "https://twitter.com/datapad",
      "https://linkedin.com/company/datapad",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://datapad.io/contact",
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Datapad",
    url: "https://datapad.io",
    description:
      "No more frustrating waits in critical meetings. Get instant answers anywhere, anytime with Datapad's autonomous AI data analyst.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://datapad.io/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Datapad",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "100% Autonomous AI Data Analyst for instant business insights",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationData),
        }}
      />
    </>
  );
}
