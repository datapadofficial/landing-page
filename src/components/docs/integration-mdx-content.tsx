import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

interface IntegrationMDXContentProps {
  content: string;
}

export async function IntegrationMDXContent({ content }: IntegrationMDXContentProps) {
  // Create custom components for integration docs
  const components = {
    ...getMDXComponents({}),
    DocSection,
    FeatureGrid,
  };

  return (
    <div itemProp="articleBody">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
