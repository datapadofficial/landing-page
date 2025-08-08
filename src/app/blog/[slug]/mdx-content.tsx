import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";

interface MDXContentProps {
  content: string;
}

export async function MDXContent({ content }: MDXContentProps) {
  return (
    <div itemProp="articleBody">
      <MDXRemote source={content} components={getMDXComponents({})} />
    </div>
  );
}
