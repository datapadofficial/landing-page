import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getGuidesOverviewDoc } from "@/lib/guides-overview-utils";
import { GuidesOverviewContent } from "@/components/docs/guides-overview-content";
import { GuidesOverviewMDXContent } from "@/components/docs/guides-overview-mdx-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getGuidesOverviewDoc();

  if (!doc) {
    return {
      title: "Guides Not Found - Datapad",
      description: "The guides overview could not be found.",
    };
  }

  const metaTitle = doc.seoTitle || `${doc.title} | Datapad`;
  const metaDescription = doc.seoDescription || doc.description;

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function GuidesOverviewPage() {
  const doc = await getGuidesOverviewDoc();

  if (!doc) {
    notFound();
  }

  return (
    <>
      <ScrollProgress color="primary" />
      <GuidesOverviewContent doc={doc}>
        <GuidesOverviewMDXContent content={doc.content} />
      </GuidesOverviewContent>
    </>
  );
}
