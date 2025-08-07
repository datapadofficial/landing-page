import { getAllPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getAllPosts();
  const siteUrl = "https://datapad.io";

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Datapad Blog - AI Data Analytics Insights</title>
    <description>Latest insights on AI-powered data analytics, business intelligence, and autonomous data analysis from Datapad.</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <managingEditor>team@datapad.io (Datapad Team)</managingEditor>
    <webMaster>team@datapad.io (Datapad Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>Technology</category>
    <category>Data Analytics</category>
    <category>Artificial Intelligence</category>
    <category>Business Intelligence</category>
    <image>
      <url>${siteUrl}/images/datapad-logo.png</url>
      <title>Datapad Blog</title>
      <link>${siteUrl}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${posts
      .slice(0, 20) // Limit to latest 20 posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${
        post.seoDescription || post.description
      }]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${
        post.lastModified
          ? `<atom:updated>${new Date(
              post.lastModified
            ).toISOString()}</atom:updated>`
          : ""
      }
      <dc:creator><![CDATA[${post.author || "Datapad Team"}]]></dc:creator>
      ${
        post.tags
          ? post.tags
              .map((tag) => `<category><![CDATA[${tag}]]></category>`)
              .join("\n      ")
          : ""
      }
      ${post.image ? `<enclosure url="${post.image}" type="image/png" />` : ""}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
