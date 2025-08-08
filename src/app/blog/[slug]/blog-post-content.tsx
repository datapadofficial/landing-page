"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogPost {
  title: string;
  description?: string;
  date: string;
  lastModified?: string;
  author?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  showImage?: boolean;
  featured?: boolean;
  popular?: boolean;
  seoDescription?: string;
}

interface BlogPostContentProps {
  post: BlogPost;
  slug: string;
  children: ReactNode; // This will be the rendered MDX content
}

export function BlogPostContent({
  post,
  slug,
  children,
}: BlogPostContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  // Extract headings from MDX content
  useEffect(() => {
    const timer = setTimeout(() => {
      const headingElements = document.querySelectorAll(
        "article h1, article h2, article h3, article h4, article h5, article h6"
      );
      const headingData = Array.from(headingElements).map((element, index) => {
        const id = element.id || `heading-${index}`;
        if (!element.id) {
          element.id = id;
        }
        return {
          id,
          text: element.textContent || "",
          level: parseInt(element.tagName.charAt(1)),
        };
      });
      setHeadings(headingData);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for active heading tracking
  useEffect(() => {
    if (headings.length === 0) return;

    const observerCallback = () => {
      // Get all headings with their positions
      const headingPositions = headings
        .map(({ id }) => {
          const element = document.getElementById(id);
          return {
            id,
            element,
            top: element ? element.getBoundingClientRect().top : Infinity,
          };
        })
        .filter((item) => item.element);

      // Find the current heading (first one that hasn't passed the viewport top)
      // Account for navbar height (~60px) plus some buffer
      const currentHeadingIndex = headingPositions.findIndex(
        (item) => item.top > 120
      );

      // If no heading is below the threshold, we're at the bottom, so use the last heading
      const activeIndex =
        currentHeadingIndex === -1
          ? headingPositions.length - 1
          : Math.max(0, currentHeadingIndex - 1);

      // Set only one active heading
      const activeId = activeIndex >= 0 ? headingPositions[activeIndex].id : "";
      setActiveHeading(activeId);

      // Update back to top button visibility
      setShowBackToTop(window.scrollY > 300);
    };

    // Use a more frequent scroll listener for smoother updates
    const handleScroll = () => {
      observerCallback();
    };

    // Initial call
    observerCallback();

    // Listen to scroll events for real-time updates
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also use intersection observer as backup
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: [0, 0.1, 0.5, 1],
    });

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [headings]);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header - Simplified like content3 */}
        <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-5 max-w-2xl text-balance text-xl font-medium">
            {post.description}
          </p>
        )}
        <div className="mt-8 flex items-center gap-3">
          <Button size="lg" asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to Top
            </Link>
          </Button>
        </div>

        {/* Main Content Layout - Match content3 spacing */}
        <div className="relative mt-16 grid gap-10 lg:mt-28 lg:grid-cols-5">
          {/* Left Sidebar - All Metadata */}
          <aside className="top-24 flex h-fit w-full max-w-56 flex-col gap-5 lg:sticky">
            {/* Article Status */}
            {(post.featured || post.popular) && (
              <div>
                <h5 className="font-semibold">Article Status</h5>ikmp
                <div className="mt-2 flex flex-col gap-2">
                  {post.featured && (
                    <Badge variant="default" className="w-fit">
                      Featured Article
                    </Badge>
                  )}
                  {post.popular && (
                    <Badge variant="outline" className="w-fit">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Author */}
            {post.author && (
              <div>
                <h5 className="font-semibold">Author</h5>
                <p className="text-muted-foreground text-sm">{post.author}</p>
              </div>
            )}

            {/* Publication Date */}
            <div>
              <h5 className="font-semibold">Published</h5>
              <time
                className="text-muted-foreground text-sm"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {/* Last Updated */}
            {post.lastModified && post.lastModified !== post.date && (
              <div>
                <h5 className="font-semibold">Last Updated</h5>
                <time
                  className="text-muted-foreground text-sm"
                  dateTime={post.lastModified}
                >
                  {new Date(post.lastModified).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}

            {/* Topics/Tags */}
            {post.tags && post.tags.length > 0 && (
              <div>
                <h5 className="font-semibold">Topics</h5>
                <ul className="mt-2 flex flex-col gap-2">
                  {post.tags.slice(0, 5).map((tag) => (
                    <li key={tag}>
                      <p className="text-muted-foreground text-sm">{tag}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back to Top Button */}
            {showBackToTop && (
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ArrowUp className="mr-2 h-4 w-4" />
                Back to Top
              </Button>
            )}
          </aside>

          {/* Main Content */}
          <div className="gap-6 lg:col-span-3">
            <div className="max-w-prose lg:mx-auto">
              {/* Hero Image */}
              {post.image && post.showImage && (
                <div className="mb-8 relative w-full h-80">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover rounded-2xl border border-border"
                    priority
                  />
                </div>
              )}

              {/* Article Content - Match content3 prose styling */}
              <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg mt-12">
                <article itemScope itemType="https://schema.org/Article">
                  <meta itemProp="headline" content={post.title} />
                  <meta
                    itemProp="description"
                    content={post.seoDescription || post.description}
                  />
                  <meta itemProp="datePublished" content={post.date} />
                  <meta
                    itemProp="dateModified"
                    content={post.lastModified || post.date}
                  />
                  {children}
                </article>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Table of Contents */}
          {headings.length > 0 && (
            <nav className="sticky top-24 hidden h-fit lg:block">
              <p className="text-muted-foreground text-sm font-medium mb-3">
                ON THIS PAGE
              </p>
              <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
                <ul className="text-muted-foreground text-sm space-y-1">
                  {headings.map(({ id, text, level }) => (
                    <li key={id}>
                      <a
                        className={cn(
                          "border-border block border-l py-1 transition-colors duration-200",
                          level === 2
                            ? "pl-2.5"
                            : level === 3
                            ? "pl-4"
                            : level === 4
                            ? "pl-6"
                            : "pl-2.5",
                          activeHeading === id
                            ? "border-primary text-primary font-medium"
                            : "text-muted-foreground hover:text-primary border-transparent"
                        )}
                        href={`#${id}`}
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
