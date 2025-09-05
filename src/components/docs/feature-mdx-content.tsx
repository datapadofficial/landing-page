import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../mdx-components";

interface FeatureMDXContentProps {
  content: string;
}

export function FeatureMDXContent({ content }: FeatureMDXContentProps) {
  const components = useMDXComponents({});

  return (
    <MDXRemote 
      source={content} 
      components={components}
    />
  );
}
