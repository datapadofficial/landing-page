import { getAllSpanishPosts } from "@/lib/spanish-blog-utils";
import { BlogPageLayout } from "@/components/blog/blog-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog en Español | Datapad - Análisis de Datos con IA",
  description:
    "Descubre las últimas perspectivas sobre analítica de datos impulsada por IA, inteligencia empresarial y análisis de datos autónomo. Aprende cómo Datapad puede transformar tus decisiones empresariales.",
  keywords:
    "análisis de datos, inteligencia empresarial, analítica de IA, Datapad, blog en español",
  authors: [{ name: "Equipo Datapad" }],
  creator: "Datapad",
  publisher: "Datapad",
  robots: "index, follow",

  openGraph: {
    title: "Blog en Español | Datapad - Análisis de Datos con IA",
    description:
      "Descubre las últimas perspectivas sobre analítica de datos impulsada por IA, inteligencia empresarial y análisis de datos autónomo.",
    url: "https://datapad.io/es/blog",
    siteName: "Blog Datapad",
    locale: "es_ES",
    type: "website",
    images: ["https://datapad.io/images/datapad-og-default.png"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@datapad",
    creator: "@datapad",
    title: "Blog en Español | Datapad - Análisis de Datos con IA",
    description:
      "Descubre las últimas perspectivas sobre analítica de datos impulsada por IA, inteligencia empresarial y análisis de datos autónomo.",
    images: ["https://datapad.io/images/datapad-og-default.png"],
  },

  alternates: {
    canonical: "https://datapad.io/es/blog",
    languages: {
      "es-ES": "https://datapad.io/es/blog",
      "en-US": "https://datapad.io/blog",
    },
  },
};

export default async function SpanishBlogsPage() {
  const posts = await getAllSpanishPosts();
  const siteUrl = "https://datapad.io";

  // Generate JSON-LD structured data for the blogs page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Datapad en Español",
    description:
      "Las últimas perspectivas sobre analítica de datos impulsada por IA, inteligencia empresarial y análisis de datos autónomo.",
    url: `${siteUrl}/es/blog`,
    inLanguage: "es-ES",
    publisher: {
      "@type": "Organization",
      name: "Datapad",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/datapad-logo.png`,
      },
    },
    mainEntity: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription || post.description,
      url: `${siteUrl}/es/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.lastModified || post.date,
      author: {
        "@type": "Person",
        name: post.author || "Equipo Datapad",
      },
      image: post.image || `${siteUrl}/images/datapad-og-default.png`,
      keywords: post.tags
        ? post.tags.join(", ")
        : "análisis de datos, IA, inteligencia empresarial",
    })),
  };

  const translations = {
    headerTitle: "Blog de Perspectivas y Tendencias",
    headerDescription:
      "Descubre las últimas perspectivas sobre analítica de datos impulsada por IA, inteligencia empresarial y análisis de datos autónomo con Datapad.",
    popularPosts: "Artículos Populares",
    allPosts: "Todos los Artículos",
    noPosts: "Blog en Español",
    noPostsDescription: "Aún no hay artículos disponibles.",
    defaultTag: "Análisis de Datos",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogPageLayout
        posts={posts}
        siteUrl={siteUrl}
        basePath="/es/blog"
        translations={translations}
      />
    </>
  );
}
