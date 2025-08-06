"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AppPreview() {
  return (
    <section className="my-12 container mx-auto max-w-7xl">
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
        className="relative z-10 w-full rounded-3xl border border-neutral-200 bg-neutral-100 p-2 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="w-full overflow-hidden rounded-xl border border-white/10 p-2 bg-background">
          <Image
            src="/images/datapad-ai-analyst.png"
            alt="Landing page preview"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
