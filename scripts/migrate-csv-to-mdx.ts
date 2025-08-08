import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";

/**
 * This script migrates blog content from `context/Blog Posts.csv` (HTML bodies)
 * to MDX files under `content/posts/{slug}.mdx` with proper frontmatter.
 *
 * It:
 * - Parses CSV with PapaParse
 * - Converts HTML body to Markdown via unified (rehype-parse -> rehype-remark -> remark-stringify)
 * - Normalizes whitespace, removes empty strong tags effects, fixes bold label spacing
 * - Maps all known CSV columns to frontmatter fields used by the app
 */

type CsvRow = {
  Slug: string;
  ":draft": string;
  Name: string;
  "Created On": string;
  "Updated On": string;
  "Published On": string;
  "Custom Date": string;
  Author: string;
  "Post Summary": string;
  "Page Title (SEO)": string;
  "Meta Description (SEO)": string;
  "Show in Footer": string;
  "Popular Article": string;
  "Footer Title": string;
  "Main Image": string;
  "Main Image:alt": string;
  "Featured?": string;
  "Hide in Blog": string;
  "Show Image": string;
  "Post Body": string;
};

function coerceBoolean(value: string | undefined): boolean | undefined {
  if (value === undefined) return undefined;
  const v = String(value).trim().toLowerCase();
  if (v === "true") return true;
  if (v === "false") return false;
  return undefined;
}

function coerceDate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  if (isNaN(d.getTime())) return undefined;
  return value;
}

function frontmatterEscape(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  // Escape YAML-sensitive characters minimally by JSON-stringify and strip quotes later if safe
  return value.replace(/"/g, '\\"');
}

function normalizeMarkdown(md: string): string {
  let out = md;
  // Replace non-breaking spaces with normal spaces
  out = out.replace(/\u00a0|&nbsp;/g, " ");
  // Remove stray escaped double-asterisks (artifact of empty <strong>)
  out = out.replace(/\\\*\\\*\s*\\\*\\\*/g, "");
  // Normalize label bold spacing: "**Label: **Text" -> "**Label:** Text"
  out = out.replace(/\*\*([^*]+?):\s*\*\*/g, "**$1:** ");
  // Also handle accidental space before closing bold: "**Text **" -> "**Text**"
  out = out.replace(/\*\*\s*([^*][^]*?)\s*\*\*/g, (m, p1) => `**${p1}**`);
  // Deduplicate multiple blank lines to max 2
  out = out.replace(/\n{3,}/g, "\n\n");
  return out.trim() + "\n";
}

async function htmlToMarkdown(html: string): Promise<string> {
  // Ensure the HTML is wrapped; rehype-parse expects HTML fragment fine, but we normalize entities
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: "-",
      fences: true,
      listItemIndent: "one",
      rule: "-",
      strong: "*",
      emphasis: "_",
    });

  const file = await processor.process(html);
  return String(file);
}

function buildFrontmatter(row: CsvRow) {
  const fm: Record<string, unknown> = {
    title: frontmatterEscape(row.Name) ?? "",
    description:
      frontmatterEscape(row["Post Summary"]) ??
      frontmatterEscape(row["Meta Description (SEO)"]) ??
      "",
    date:
      coerceDate(row["Published On"]) ??
      coerceDate(row["Created On"]) ??
      new Date().toISOString(),
    author: frontmatterEscape(row.Author) ?? "",
    slug: row.Slug,
    draft: coerceBoolean(row[":draft"]) ?? false,
    featured: coerceBoolean(row["Featured?"]) ?? false,
    popular: coerceBoolean(row["Popular Article"]) ?? false,
    image: row["Main Image"] || undefined,
    imageAlt: row["Main Image:alt"] || undefined,
    lastModified: coerceDate(row["Updated On"]) ?? undefined,
    customDate: coerceDate(row["Custom Date"]) ?? undefined,
    footerTitle: frontmatterEscape(row["Footer Title"]) ?? undefined,
    showInFooter: coerceBoolean(row["Show in Footer"]) ?? false,
    hideInBlog: coerceBoolean(row["Hide in Blog"]) ?? false,
    showImage: coerceBoolean(row["Show Image"]) ?? true,
    createdDate: coerceDate(row["Created On"]) ?? undefined,
    seoTitle: frontmatterEscape(row["Page Title (SEO)"]) ?? undefined,
    seoDescription:
      frontmatterEscape(row["Meta Description (SEO)"]) ?? undefined,
  };

  // Serialize to YAML frontmatter manually (keep ordering stable)
  const order = [
    "title",
    "description",
    "date",
    "author",
    "slug",
    "draft",
    "featured",
    "popular",
    "image",
    "imageAlt",
    "lastModified",
    "customDate",
    "footerTitle",
    "showInFooter",
    "hideInBlog",
    "showImage",
    "createdDate",
    "seoTitle",
    "seoDescription",
  ];

  const lines: string[] = ["---"];
  for (const key of order) {
    const value = fm[key];
    if (value === undefined || value === "") continue;
    if (typeof value === "string") {
      lines.push(`${key}: "${value}"`);
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: "${String(value)}"`);
    }
  }
  lines.push("---", "");
  return lines.join("\n");
}

async function run() {
  const csvPath = path.join(process.cwd(), "context/Blog Posts.csv");
  const outDir = path.join(process.cwd(), "content/posts");

  if (!fs.existsSync(csvPath)) {
    console.error(`CSV not found at ${csvPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const csvContent = fs.readFileSync(csvPath, "utf8");
  const parsed = Papa.parse<CsvRow>(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors && parsed.errors.length > 0) {
    console.error("CSV parse errors:", parsed.errors.slice(0, 3));
  }

  const rows = parsed.data.filter((r) => r && r.Slug);
  let converted = 0;
  for (const row of rows) {
    const slug = row.Slug.trim();
    const html = row["Post Body"] || "";

    try {
      const md = await htmlToMarkdown(html);
      const normalized = normalizeMarkdown(md);
      const fm = buildFrontmatter(row);
      const content = fm + normalized;
      const outPath = path.join(outDir, `${slug}.mdx`);
      fs.writeFileSync(outPath, content, "utf8");
      converted += 1;
    } catch (err) {
      console.error(`Failed to convert slug=${slug}:`, err);
    }
  }

  console.log(`Converted ${converted} posts to MDX in ${outDir}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
