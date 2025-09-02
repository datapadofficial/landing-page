import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getIntegrationDocBySlug } from "@/lib/integration-doc-utils";
import { IntegrationDocContent } from "@/components/docs/integration-doc-content";
import { IntegrationMDXContent } from "@/components/docs/integration-mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const INTEGRATION_SLUG = "mssql";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getIntegrationDocBySlug(INTEGRATION_SLUG);

  if (!doc) {
    return {
      title: "Integration Not Found - Datapad",
      description: "The requested integration documentation could not be found.",
    };
  }

  const metaTitle = doc.seoTitle || `${doc.title} Integration | Datapad`;
  const metaDescription = doc.seoDescription || doc.description;

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function UmssqlIntegrationPage() {
  const doc = await getIntegrationDocBySlug(INTEGRATION_SLUG);

  if (!doc) {
    notFound();
  }

  return (
    <>
      <ScrollProgress color="primary" />
      <IntegrationDocContent doc={doc}>
        <IntegrationMDXContent content={doc.content} />
      </IntegrationDocContent>
    </>
  );
}
