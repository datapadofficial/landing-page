import * as React from "react";
import { cn } from "@/lib/utils";

interface AnnouncementBadgeProps extends React.ComponentProps<"a"> {
  tag?: string;
  children: React.ReactNode;
}

function AnnouncementBadge({
  className,
  tag = "NEW",
  children,
  href,
  ...props
}: AnnouncementBadgeProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 h-min w-fit overflow-hidden px-3.5 py-2.5 bg-muted-background backdrop-blur-[5px] border border-white/15 border-solid rounded-full no-underline cursor-pointer opacity-100 shadow-sm",
        className
      )}
      {...props}
    >
      {/* NEW Tag */}
      <div className="bg-primary rounded-full px-2 py-1">
        <p className="font-inter text-2xs text-background font-bold tracking-[0.03em] leading-none uppercase m-0">
          {tag}
        </p>
      </div>

      {/* Main Content */}
      <div className="opacity-100">
        <p className="font-inter text-sm font-medium tracking-[-0.1px] leading-[1.4em] text-left text-primary">
          {children}
        </p>
      </div>
    </a>
  );
}

export { AnnouncementBadge };
