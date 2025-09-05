import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getGuideDocBySlug, getGuideDocSlugs } from "@/lib/guide-doc-utils";
import { GuideDocContent } from "@/components/docs/guide-doc-content";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { MDXRemote } from "next-mdx-remote/rsc";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getGuideDocSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getGuideDocBySlug(slug);

  if (!doc) {
    return {
      title: "Guide Not Found - Datapad",
      description: "The requested guide could not be found.",
    };
  }

  const metaTitle = doc.seoTitle || `${doc.title} | Datapad`;
  const metaDescription = doc.seoDescription || doc.description;

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const doc = await getGuideDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { useMDXComponents } = await import("../../../../../mdx-components");
  const components = useMDXComponents;
  const mdxComponents = components({});

  return (
    <>
      <ScrollProgress color="primary" />
      <GuideDocContent 
        doc={doc}
        mdxContent={
          <div className="mdx-content" key={doc.slug}>
            <MDXRemote source={doc.content} components={mdxComponents} />
          </div>
        }
      />
    </>
  );
}
