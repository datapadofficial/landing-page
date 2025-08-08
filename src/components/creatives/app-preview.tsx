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
        className="relative z-10 w-full rounded-3xl border border-neutral-200 bg-neutral-100 p-1.5 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="w-full overflow-hidden rounded-xl border border-white/10 p-1.5 bg-background">
          <Image
            src="/images/hero-1.png"
            alt="Landing page preview"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority={false}
            loading="lazy"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
