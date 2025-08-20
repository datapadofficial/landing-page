/**
 * Marketing Attribution Tracking System
 *
 * This system captures marketing attribution data and passes it between
 * www.datapad.io and app.datapad.io using multiple methods for reliability:
 *
 * 1. URL Parameters (primary method)
 * 2. GTM Data Layer (for analytics)
 * 3. sessionStorage (fallback)
 *
 * Industry standard approach used by most marketing tools.
 */

export interface AttributionData {
  // Landing page info
  landingPage: string;

  // Referrer information
  referrer: string;
  referrerDomain: string;

  // All URL query parameters (UTM, gclid, fbclid, any tracking params)
  queryParams: Record<string, string>;

  // Technical info
  userAgent: string;

  // Session info
  sessionId: string;
  timestamp: number;

  // Additional marketing data
  browserLanguage: string;
  screenResolution: string;
  timezone: string;

  // First touch attribution
  isFirstVisit: boolean;
  isFirstTouch: boolean; // Whether this data represents first-touch attribution

  // Page specific
  pageTitle: string;
}

/**
 * Generates a unique session ID for tracking
 */
function generateSessionId(): string {
  return `dp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Extracts all query parameters from URL
 */
function getAllQueryParameters(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const urlParams = new URLSearchParams(window.location.search);
  const queryParams: Record<string, string> = {};

  // Collect ALL parameters
  for (const [key, value] of urlParams.entries()) {
    if (value) {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

/**
 * Gets the referrer domain from referrer URL
 */
function getReferrerDomain(referrer: string): string {
  if (!referrer || referrer === "") return "direct";

  try {
    const url = new URL(referrer);
    return url.hostname;
  } catch {
    return "unknown";
  }
}

/**
 * Checks if this is the user's first visit and manages attribution persistence
 */
function getAttributionSession(): {
  isFirstVisit: boolean;
  shouldUpdateAttribution: boolean;
  existingAttribution: AttributionData | null;
} {
  if (typeof window === "undefined")
    return {
      isFirstVisit: false,
      shouldUpdateAttribution: true,
      existingAttribution: null,
    };

  // Check for existing first-touch attribution in localStorage (persistent)
  const firstTouchData = localStorage.getItem("dp_first_attribution");
  const sessionVisited = sessionStorage.getItem("dp_session_visited");

  let existingAttribution: AttributionData | null = null;
  let isFirstVisit = false;
  let shouldUpdateAttribution = true;

  if (firstTouchData) {
    try {
      existingAttribution = JSON.parse(firstTouchData);
      isFirstVisit = false; // Not first visit if we have existing data
      shouldUpdateAttribution = false; // Don't overwrite first-touch attribution
    } catch {
      // Invalid data, treat as first visit
      localStorage.removeItem("dp_first_attribution");
    }
  }

  if (!firstTouchData) {
    // This is truly the first visit
    isFirstVisit = true;
    shouldUpdateAttribution = true;
  }

  // Mark this session as visited
  if (!sessionVisited) {
    sessionStorage.setItem("dp_session_visited", "true");
  }

  return { isFirstVisit, shouldUpdateAttribution, existingAttribution };
}

/**
 * Captures comprehensive attribution data with first-touch preservation
 */
export function captureAttributionData(): AttributionData {
  if (typeof window === "undefined") {
    // Server-side fallback
    return {
      landingPage: "",
      referrer: "",
      referrerDomain: "server",
      userAgent: "",
      sessionId: generateSessionId(),
      timestamp: Date.now(),
      browserLanguage: "",
      screenResolution: "",
      timezone: "",
      isFirstVisit: false,
      isFirstTouch: false,
      pageTitle: "",
      queryParams: {},
    };
  }

  const { isFirstVisit, shouldUpdateAttribution, existingAttribution } =
    getAttributionSession();
  const referrer = document.referrer || "";
  const queryParams = getAllQueryParameters();

  // If we have existing first-touch attribution and shouldn't update it,
  // return the existing data with updated session info
  if (!shouldUpdateAttribution && existingAttribution) {
    return {
      ...existingAttribution,
      sessionId: generateSessionId(), // New session ID for this visit
      timestamp: Date.now(), // Update timestamp for this session
      isFirstVisit: false, // This is not the first visit
      isFirstTouch: true, // But this data represents first-touch attribution
    };
  }

  // Capture new attribution data (first visit or forced update)
  const attributionData: AttributionData = {
    // Landing page info
    landingPage: window.location.href,

    // Referrer information
    referrer,
    referrerDomain: getReferrerDomain(referrer),

    // All query parameters from URL (UTM, gclid, fbclid, any tracking params)
    queryParams,

    // Technical info
    userAgent: navigator.userAgent,

    // Session info
    sessionId: generateSessionId(),
    timestamp: Date.now(),

    // Additional marketing data
    browserLanguage: navigator.language || "unknown",
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",

    // Attribution flags
    isFirstVisit,
    isFirstTouch: isFirstVisit, // First touch only if this is the first visit

    // Page specific
    pageTitle: document.title,
  };

  return attributionData;
}

/**
 * Stores attribution data with first-touch preservation
 */
export function storeAttributionData(data: AttributionData): void {
  if (typeof window === "undefined") return;

  try {
    // Always store current session data in sessionStorage
    sessionStorage.setItem("dp_attribution", JSON.stringify(data));

    // Store first-touch attribution in localStorage (persistent across sessions)
    if (data.isFirstTouch) {
      localStorage.setItem("dp_first_attribution", JSON.stringify(data));
    }

    // Push to GTM data layer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "attribution_captured",
        attribution_data: data,
        landing_page: data.landingPage,
        referrer: data.referrer,
        referrer_domain: data.referrerDomain,
        query_params: data.queryParams,
        session_id: data.sessionId,
        is_first_visit: data.isFirstVisit,
        is_first_touch: data.isFirstTouch,
      });
    }
  } catch (error) {
    console.warn("Failed to store attribution data:", error);
  }
}

/**
 * Retrieves stored attribution data
 */
export function getStoredAttributionData(): AttributionData | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = sessionStorage.getItem("dp_attribution");
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn("Failed to retrieve attribution data:", error);
    return null;
  }
}

/**
 * Builds signup URL with all attribution and tracking parameters
 */
export function buildSignupUrl(
  baseUrl: string = "https://app.datapad.io",
  attributionData?: AttributionData
): string {
  const data = attributionData || getStoredAttributionData();

  if (!data) return baseUrl;

  const url = new URL(baseUrl);

  // Add core attribution parameters
  url.searchParams.set("landing_page", encodeURIComponent(data.landingPage));
  url.searchParams.set("referrer", encodeURIComponent(data.referrer));
  url.searchParams.set("referrer_domain", data.referrerDomain);
  url.searchParams.set("session_id", data.sessionId);
  url.searchParams.set("first_visit", data.isFirstVisit.toString());
  url.searchParams.set("first_touch", data.isFirstTouch.toString());

  // Add ALL query parameters (UTM, gclid, fbclid, any tracking params)
  Object.entries(data.queryParams).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
}

/**
 * Tracks signup click event with comprehensive attribution data
 */
export function trackSignupClick(buttonLocation: string): void {
  if (typeof window === "undefined") return;

  const attributionData = getStoredAttributionData();

  // Push to GTM data layer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "signup_click",
      button_location: buttonLocation,
      attribution_data: attributionData,
      landing_page: attributionData?.landingPage,
      referrer: attributionData?.referrer,
      referrer_domain: attributionData?.referrerDomain,
      query_params: attributionData?.queryParams,
      session_id: attributionData?.sessionId,
      is_first_visit: attributionData?.isFirstVisit,
      is_first_touch: attributionData?.isFirstTouch,
    });
  }
}

/**
 * Initialize attribution tracking on page load
 */
export function initializeAttributionTracking(): void {
  if (typeof window === "undefined") return;

  // Capture and store attribution data
  const attributionData = captureAttributionData();
  storeAttributionData(attributionData);

  // Track page view
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "page_view_with_attribution",
      page_title: attributionData.pageTitle,
      page_url: attributionData.landingPage,
      referrer: attributionData.referrer,
      referrer_domain: attributionData.referrerDomain,
      query_params: attributionData.queryParams,
      session_id: attributionData.sessionId,
      is_first_visit: attributionData.isFirstVisit,
      is_first_touch: attributionData.isFirstTouch,
    });
  }
}

// Type declarations for GTM
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
