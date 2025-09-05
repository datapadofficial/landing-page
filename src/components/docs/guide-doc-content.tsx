"use client";

import { useEffect, useState, ReactNode } from "react";
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
import { ArrowUp, Clock, User, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { GuideDoc } from "@/types/guide-doc";
import { Faq } from "@/components/faq";

interface GuideDocContentProps {
  doc: GuideDoc;
  mdxContent: ReactNode; // This will be the rendered MDX content
}

export function GuideDocContent({ doc, mdxContent }: GuideDocContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Extract headings from MDX content
  useEffect(() => {
    const timer = setTimeout(() => {
      const headingElements = document.querySelectorAll(
        "#main-title, article h1, article h2, article h3, article h4, article h5, article h6"
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/guides">Guides</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{doc.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-muted/50">
              Guide
            </Badge>
            <Badge className={getDifficultyColor(doc.difficulty)}>
              {doc.difficulty.charAt(0).toUpperCase() + doc.difficulty.slice(1)}
            </Badge>
          </div>
          <h1
            id="main-title"
            className="text-4xl font-bold tracking-tight"
          >
            {doc.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {doc.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {doc.estimatedTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {doc.estimatedTime}
              </div>
            )}
            {doc.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {doc.author}
              </div>
            )}
            {doc.lastUpdated && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Updated {doc.lastUpdated}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="relative mt-16 grid gap-14 lg:mt-28 lg:grid-cols-5">
          {/* Main Content */}
          <div className="gap-6 lg:col-span-4">
            <div className="max-w-prose lg:mx-auto">
              {/* Article Content */}
              <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg mt-12">
                <article itemScope itemType="https://schema.org/TechArticle">
                  <meta itemProp="headline" content={doc.title} />
                  <meta itemProp="description" content={doc.seoDescription || doc.description} />
                  {doc.lastUpdated && (
                    <meta itemProp="dateModified" content={doc.lastUpdated} />
                  )}
                  {mdxContent}
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
              <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
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

              {/* Back to Top Button */}
              {showBackToTop && (
                <div className="mt-4 pt-4 border-t border-border">
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
                </div>
              )}
            </nav>
          )}
        </div>

        {/* FAQ Section */}
        {doc.faqs && doc.faqs.length > 0 && (
          <div className="mt-16">
            <Faq
              heading="Frequently Asked Questions"
              items={doc.faqs}
            />
          </div>
        )}
      </div>
    </section>
  );
}
