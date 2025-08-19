"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface AppVideoPreviewProps {
  videoUrl?: string;
  poster?: string;
  title?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function AppVideoPreview({
  videoUrl = "/videos/datapad-demo.mp4",
  poster,
  title = "Datapad Demo Video",
  controls = true,
  autoPlay = true,
  loop = true,
  muted = true,
}: AppVideoPreviewProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="my-8 sm:my-12 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
        className="relative z-10 w-full rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-100 p-1 sm:p-1.5 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="w-full overflow-hidden rounded-lg sm:rounded-xl border border-white/10 p-1 sm:p-1.5 bg-background">
          <video
            className="w-full h-auto rounded-md min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]"
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            poster={poster}
            preload="metadata"
            style={{
              width: "100%",
              height: "auto",
            }}
            aria-label={title}
          >
            <source src={videoUrl} type="video/mp4" />
            <p className="text-muted-foreground text-center p-8">
              Your browser doesn't support HTML video. Here is a{" "}
              <a href={videoUrl} className="underline text-primary">
                link to the video
              </a>{" "}
              instead.
            </p>
          </video>
        </div>
      </motion.div>
    </section>
  );
}
