import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  // Configure page extensions to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Configure allowed image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },

  // Experimental features (only use stable ones in production)
  // experimental: {
  //   // PPR is only available in canary versions
  //   // ppr: true,
  // },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Enable GitHub-Flavored Markdown at runtime (tables, task lists, etc.)
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
