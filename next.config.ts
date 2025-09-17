import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  // Configure page extensions to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Configure redirects
  async redirects() {
    return [
      {
        source: "/metabase",
        destination: "/integrations/metabase",
        permanent: true,
      },
    ];
  },

  // Configure allowed image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
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
