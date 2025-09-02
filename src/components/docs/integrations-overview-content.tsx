import { ReactNode } from "react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IntegrationsOverviewDoc } from "@/types/integrations-overview";

interface IntegrationsOverviewContentProps {
  doc: IntegrationsOverviewDoc;
  children: ReactNode; // This will be the rendered MDX content
}

export function IntegrationsOverviewContent({ doc, children }: IntegrationsOverviewContentProps) {
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
              <BreadcrumbPage>{doc.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main Content */}
        <div className="max-w-none">
          <article itemScope itemType="https://schema.org/TechArticle" className="space-y-8">
            <meta itemProp="headline" content={doc.title} />
            <meta itemProp="description" content={doc.seoDescription || doc.description} />
            {doc.lastModified && (
              <meta itemProp="dateModified" content={doc.lastModified} />
            )}
            {children}
          </article>
        </div>
      </div>
    </section>
  );
}
