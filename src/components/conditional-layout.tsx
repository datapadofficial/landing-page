"use client";

import { usePathname } from "next/navigation";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith("/docs");

  if (isDocsPage) {
    // Docs pages: no navbar/footer, just the content
    return <>{children}</>;
  }

  // Regular pages: include navbar and footer
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      <main className="flex-1 flex flex-col items-center mx-auto w-full min-h-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
