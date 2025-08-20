"use client";

import { useEffect } from "react";
import { initializeAttributionTracking } from "@/lib/marketing-attribution";

/**
 * Attribution Tracker Component
 *
 * This component initializes marketing attribution tracking
 * when the page loads. It should be included in the root layout.
 */
export function AttributionTracker() {
  useEffect(() => {
    // Initialize attribution tracking on page load
    initializeAttributionTracking();
  }, []);

  // This component doesn't render anything
  return null;
}
