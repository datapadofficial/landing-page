"use client";

import { cn } from "@/lib/utils";

export interface VideoSeekPoint {
  title: string;
  start: number; // start time in seconds
  end: number; // end time in seconds
}

interface VideoSeekingComponentProps {
  seekPoints: VideoSeekPoint[];
  currentTime: number;
  duration: number;
  onSeek: (startTime: number) => void;
}

export function VideoSeekingComponent({
  seekPoints,
  currentTime,
  duration,
  onSeek,
}: VideoSeekingComponentProps) {
  const getProgress = (point: VideoSeekPoint) => {
    if (duration === 0) return 0;
    if (currentTime < point.start) return 0;
    if (currentTime > point.end) return 100;

    // Calculate progress within this specific segment
    const segmentDuration = point.end - point.start;
    const progressInSegment = currentTime - point.start;
    return Math.min(
      100,
      Math.max(0, (progressInSegment / segmentDuration) * 100)
    );
  };

  const isCurrentlyPlaying = (point: VideoSeekPoint) => {
    return currentTime >= point.start && currentTime <= point.end;
  };

  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-8">
        {seekPoints.map((point) => {
          const progress = getProgress(point);
          const isPlaying = isCurrentlyPlaying(point);

          return (
            <div
              key={`${point.title}-${point.start}-${point.end}`}
              onClick={() => onSeek(point.start)}
              className={cn(
                "cursor-pointer",
                isPlaying ? "opacity-100" : "opacity-50",
                "hover:opacity-100"
              )}
            >
              <div className="flex flex-col items-start text-left w-full gap-1.5">
                <span className="text-xs sm:text-sm font-medium mb-1">
                  {point.title}
                </span>
                {/* Progress bar below title */}
                <div className="w-full h-[2px] bg-muted rounded-full overflow-hidden">
                  <div
                    className="transition-all duration-600 ease-out"
                    style={{
                      height: "100%",
                      width: `${progress}%`,
                      backgroundColor: isPlaying ? "#8686F2" : "#8686F2",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
