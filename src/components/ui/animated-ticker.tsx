import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { LineShadowText } from "../magicui/line-shadow-text";

interface AnimatedTickerProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const AnimatedTicker: React.FC<AnimatedTickerProps> = ({
  texts,
  interval = 2400,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const chartColors = [
    "text-chart-red",
    "text-chart-green",
    "text-chart-purple",
    "text-chart-yellow",
    "text-chart-orange",
    "text-chart-blue",
  ];

  const chartShadowColors = [
    "var(--chart-red)",
    "var(--chart-green)",
    "var(--chart-purple)",
    "var(--chart-yellow)",
    "var(--chart-orange)",
    "var(--chart-blue)",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 200); // Half of transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      className={cn(
        "relative transition-all duration-400 ease-in-out",
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-2",
        className
      )}
    >
      <LineShadowText
        className={`${
          chartColors[currentIndex % chartColors.length]
        } inline-block w-full`}
        shadowColor={chartShadowColors[currentIndex % chartShadowColors.length]}
      >
        {texts[currentIndex]}
      </LineShadowText>
    </span>
  );
};

export { AnimatedTicker };
