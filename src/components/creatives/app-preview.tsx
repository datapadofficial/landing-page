"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { VideoSeekingComponent, VideoSeekPoint } from "./video-seeking";

interface AppPreviewProps {
  videoURL?: string;
  seekPoints?: VideoSeekPoint[];
}

export function AppPreview({ videoURL, seekPoints }: AppPreviewProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSeek = (startTime: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  };

  const updateTime = () => {
    if (videoRef.current && !videoRef.current.paused) {
      setCurrentTime(videoRef.current.currentTime);
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);

      // Fallback: Try to set duration here if it's not set yet
      if (
        duration === 0 &&
        videoRef.current.duration &&
        !isNaN(videoRef.current.duration)
      ) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handlePlay = () => {
    updateTime();
  };

  const handlePause = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="my-8 sm:my-12 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-center flex flex-col">
      {videoURL && seekPoints && seekPoints.length > 0 && (
        <VideoSeekingComponent
          seekPoints={seekPoints}
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
      )}
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
          {/* Video Seeking Component - shown at the top when video has seek points */}

          {videoURL ? (
            <video
              ref={videoRef}
              src={videoURL}
              autoPlay
              muted
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={handlePlay}
              onPause={handlePause}
              onError={(e) => console.error("Video error:", e)}
              onCanPlay={() => {
                if (
                  videoRef.current &&
                  videoRef.current.duration &&
                  !isNaN(videoRef.current.duration)
                ) {
                  setDuration(videoRef.current.duration);
                }
              }}
              onDurationChange={() => {
                if (
                  videoRef.current &&
                  videoRef.current.duration &&
                  !isNaN(videoRef.current.duration)
                ) {
                  setDuration(videoRef.current.duration);
                }
              }}
              className="w-full h-auto rounded-md"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <p className="text-muted-foreground text-center p-8">
                Your browser doesn't support HTML video. Here is a{" "}
                <a href={videoURL} className="underline text-primary">
                  link to the video
                </a>{" "}
                instead.
              </p>
            </video>
          ) : (
            <Image
              src={`/images/hero-${
                mounted && resolvedTheme === "dark" ? "1" : "2"
              }.png`}
              alt="Landing page preview"
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority={true}
              loading="eager"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
