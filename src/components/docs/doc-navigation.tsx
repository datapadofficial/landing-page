import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DocNavigationProps {
  previousPage?: {
    href: string;
    title: string;
  };
  nextPage?: {
    href: string;
    title: string;
  };
}

export function DocNavigation({ previousPage, nextPage }: DocNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-8 border-t">
      <div>
        {previousPage ? (
          <Link href={previousPage.href}>
            <Button variant="outline" className="gap-2">
              <ArrowRight className="h-4 w-4 rotate-180" />
              {previousPage.title}
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
      <div>
        {nextPage && (
          <Link href={nextPage.href}>
            <Button className="gap-2">
              {nextPage.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
