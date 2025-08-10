"use client";

import { useEffect, useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowUp } from "lucide-react";

interface LegalDocument {
  title: string;
  description?: string;
  date: string;
  lastModified?: string;
}

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface LegalPageContentProps {
  document: LegalDocument;
  slug: string;
  children: ReactNode;
  breadcrumb?: Array<BreadcrumbItem>;
}

export function LegalPageContent({
  document,
  children,
  breadcrumb,
}: LegalPageContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Extract headings from MDX content
  useEffect(() => {
    const timer = setTimeout(() => {
      const headingElements = window.document.querySelectorAll(
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
          const element = window.document.getElementById(id);
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
      const element = window.document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [headings]);

  return (
    <section className="flex w-full flex-col gap-10 pb-32">
      {/* Full-width header with background pattern */}
      <div className="bg-black-3 dark:bg-white-3 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-20">
        <div className="container flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between mx-auto">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full max-w-[36rem] flex-col items-center justify-center gap-8">
              {/* Breadcrumb */}
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumb?.map((item, i) => (
                    <div key={item.label} className="flex items-center">
                      <BreadcrumbItem>
                        <BreadcrumbLink href={item.link}>
                          {item.label}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {i < breadcrumb.length - 1 && (
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      )}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>

              <div className="flex w-full flex-col gap-5">
                {document.lastModified && (
                  <div className="text-muted-2-foreground flex items-center justify-center gap-2.5 text-sm font-medium">
                    <div>
                      Last updated:{" "}
                      {new Date(document.lastModified).toLocaleDateString()}
                    </div>
                  </div>
                )}
                <h1
                  id="main-title"
                  className="text-center text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl"
                >
                  {document.title}
                </h1>
                {document.description && (
                  <p className="text-foreground text-center text-xl font-semibold leading-[1.4]">
                    {document.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content layout */}
      <div className="container pt-20">
        <div className="relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex">
          {/* Left sidebar - Table of Contents */}
          {headings.length > 0 && (
            <div className="bg-background top-20 flex-1 pb-10 lg:sticky lg:pb-0">
              <div className="text-xl font-medium leading-snug">Contents</div>
              <div className="flex flex-col gap-2 pl-2 pt-2">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm font-medium leading-normal transition duration-300 ${
                      heading.level === 3 ? "pl-4" : ""
                    } ${
                      activeHeading === heading.id
                        ? "lg:bg-muted lg:!text-primary lg:rounded-md lg:p-2 lg:font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex w-full max-w-[40rem] flex-col gap-10">
            {/* Legal document metadata */}
            <div className="flex flex-col gap-4">
              {document.lastModified && (
                <div>
                  <h5 className="font-semibold">Last Updated</h5>
                  <time
                    className="text-muted-foreground text-sm"
                    dateTime={document.lastModified}
                  >
                    {new Date(document.lastModified).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </time>
                </div>
              )}

              {/* Back to Top Button */}
              {showBackToTop && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <ArrowUp className="mr-2 h-4 w-4" />
                  Back to Top
                </Button>
              )}
            </div>

            {/* Article Content */}
            <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg max-w-none">
              <article itemScope itemType="https://schema.org/Article">
                <meta itemProp="headline" content={document.title} />
                <meta itemProp="description" content={document.description} />
                <meta itemProp="datePublished" content={document.date} />
                <meta
                  itemProp="dateModified"
                  content={document.lastModified || document.date}
                />
                {children}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Legacy export for backwards compatibility
export const LegalPage = LegalPageContent;
