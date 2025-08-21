"use client";

import React from "react";
import { buildSignupUrl, trackSignupClick } from "@/lib/marketing-attribution";

interface AttributionLinkProps {
  href?: string;
  buttonLocation: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  searchParams?: Record<string, string>;
}

/**
 * Attribution-aware link component that automatically appends
 * marketing attribution data to signup URLs
 */
export function AttributionLink({
  href = process.env.NEXT_PUBLIC_APP_URL || "https://app.datapad.io",
  buttonLocation,
  children,
  className,
  onClick,
  searchParams,
  ...props
}: AttributionLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get current page URL
    const currentPage =
      typeof window !== "undefined" ? window.location.href : "";

    // Track the signup click with current page information
    trackSignupClick(buttonLocation, currentPage);

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Build attribution URL and navigate with current page information
    const attributionUrl = buildSignupUrl(href, undefined, currentPage);

    // Add additional search parameters if provided
    let finalUrl = attributionUrl;
    if (searchParams && Object.keys(searchParams).length > 0) {
      const url = new URL(attributionUrl);
      Object.entries(searchParams).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
      finalUrl = url.toString();
    }

    // Update href to include attribution data and additional search params
    e.currentTarget.href = finalUrl;
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
