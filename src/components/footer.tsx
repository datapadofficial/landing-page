import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-8xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                D
              </span>
            </div>
            <span className="font-bold text-xl">Datapad</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link
              href="/kitchen-sink"
              className="hover:text-foreground transition-colors"
            >
              Kitchen Sink
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © 2025 Datapad Inc. Made with ❤️ for data-driven teams.
        </div>
      </div>
    </footer>
  );
}
