"use client";

import React from "react";
import { buildSignupUrl, trackSignupClick } from "@/lib/marketing-attribution";

interface AttributionLinkProps {
  href?: string;
  buttonLocation: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Attribution-aware link component that automatically appends
 * marketing attribution data to signup URLs
 */
export function AttributionLink({
  href = "https://app.datapad.io",
  buttonLocation,
  children,
  className,
  onClick,
  ...props
}: AttributionLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the signup click
    trackSignupClick(buttonLocation);

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Build attribution URL and navigate
    const attributionUrl = buildSignupUrl(href);

    // Update href to include attribution data
    e.currentTarget.href = attributionUrl;
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
