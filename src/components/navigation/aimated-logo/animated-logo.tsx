import React from "react";
import { classNames } from "@/lib/class-names";
import styles from "./styles.module.css";

const AnimatedLogo = ({
  isActive,
  size = "medium",
  className = "",
  fillColor = "#7a69ee",
}: {
  isActive: boolean;
  size?: "medium" | "large";
  className?: string;
  fillColor?: string;
}) => {
  return (
    <svg
      className={classNames([
        styles.logo,
        size === "large" ? "scale-[160%] -mt-20" : "",
        isActive ? styles.active : "",
        // "scale-x-[-1]",
        className,
      ])}
      style={
        {
          "--logo-fill-color": fillColor,
        } as React.CSSProperties
      }
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="8.8849"
        height="2.66667"
        rx="0.88869"
        transform="matrix(-1 0 0 1 8.89355 0)"
        className={styles["svg-elem-3"]}
      />
      <rect
        width="8.8849"
        height="2.66667"
        rx="0.88869"
        transform="matrix(1 -8.7462e-08 -8.73836e-08 -1 7.1123 16)"
        className={styles["svg-elem-4"]}
      />
      <rect
        width="5.33094"
        height="2.66667"
        rx="0.88869"
        transform="matrix(-1 0 0 1 5.33105 4.44312)"
        className={styles["svg-elem-5"]}
      />
      <rect
        width="5.33094"
        height="2.66667"
        rx="0.88869"
        transform="matrix(1 -8.7462e-08 -8.73836e-08 -1 10.6733 11.5558)"
        className={styles["svg-elem-6"]}
      />
      <rect
        width="8.8849"
        height="2.66667"
        rx="0.88869"
        transform="matrix(-1 0 0 1 16.001 4.44312)"
        className={styles["svg-elem-7"]}
      />
      <rect
        width="8.8849"
        height="2.66667"
        rx="0.88869"
        transform="matrix(1 -8.7462e-08 -8.73836e-08 -1 0.000976562 11.5559)"
        className={styles["svg-elem-8"]}
      />
    </svg>
  );
};

export { AnimatedLogo };
