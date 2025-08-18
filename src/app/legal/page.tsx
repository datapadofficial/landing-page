import { Metadata } from "next";
import { getAllLegalDocuments } from "@/lib/legal-utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal - Datapad",
  description:
    "Legal documents and policies for Datapad, including privacy policy, terms of service, and data security information.",

  openGraph: {
    title: "Legal - Datapad",
    description:
      "Legal documents and policies for Datapad, including privacy policy, terms of service, and data security information.",
    url: "https://datapad.io/legal",
    siteName: "Datapad",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@datapad",
    title: "Legal - Datapad",
    description:
      "Legal documents and policies for Datapad, including privacy policy, terms of service, and data security information.",
  },

  alternates: {
    canonical: "https://datapad.io/legal",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function LegalPage() {
  const documents = await getAllLegalDocuments();

  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Legal</h1>
          <p className="text-xl text-muted-foreground">
            Important legal documents and policies for Datapad users.
          </p>
        </div>

        <div className="grid gap-6">
          {documents.map((document) => (
            <Link
              key={document.slug}
              href={`/${document.slug}`}
              className="block p-6 bg-card border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{document.title}</h2>
              <p className="text-muted-foreground mb-3">
                {document.description}
              </p>
              {document.lastModified && (
                <p className="text-sm text-muted-foreground">
                  Last updated:{" "}
                  {new Date(document.lastModified).toLocaleDateString()}
                </p>
              )}
            </Link>
          ))}
        </div>

        {documents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No legal documents found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
