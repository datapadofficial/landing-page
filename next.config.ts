import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure page extensions to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Experimental features (only use stable ones in production)
  // experimental: {
  //   // PPR is only available in canary versions
  //   // ppr: true,
  // },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
