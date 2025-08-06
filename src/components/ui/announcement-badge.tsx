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
        "inline-flex items-center justify-center gap-2 h-min w-fit overflow-hidden px-3.5 py-2 backdrop-blur-[5px] border border-solid rounded-full no-underline cursor-pointer opacity-100 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:shadow-primary/20",
        // Light mode styles
        "bg-gradient-to-r from-zinc-100/90 via-zinc-50/80 to-zinc-100/90 border-zinc-300/50 hover:border-zinc-400/60 hover:bg-gradient-to-r hover:from-zinc-200/95 hover:via-zinc-100/85 hover:to-zinc-200/95",
        // Dark mode styles
        "dark:bg-gradient-to-r dark:from-zinc-900/80 dark:via-zinc-800/60 dark:to-zinc-900/80 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-gradient-to-r dark:hover:from-zinc-800/90 dark:hover:via-zinc-700/70 dark:hover:to-zinc-800/90",
        className
      )}
      {...props}
    >
      {/* NEW Tag */}
      <div className="bg-chart-purple rounded-full px-1.5 py-1">
        <p className="font-inter text-3xs text-background font-bold tracking-[0.03em] leading-none uppercase">
          {tag}
        </p>
      </div>

      {/* Main Content */}
      <div className="opacity-100">
        <p className="font-inter text-sm font-medium tracking-[-0.1px] leading-[1.4em] text-left text-chart-purple">
          {typeof children === "string"
            ? children.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {word}
                  {index < children.split(" ").length - 1 && "\u00A0"}
                </span>
              ))
            : children}
        </p>
      </div>
    </a>
  );
}

export { AnnouncementBadge };
