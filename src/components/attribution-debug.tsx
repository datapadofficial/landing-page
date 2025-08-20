"use client";

import { useEffect, useState } from "react";
import {
  getStoredAttributionData,
  type AttributionData,
} from "@/lib/marketing-attribution";

/**
 * Attribution Debug Component
 *
 * Shows attribution data in development for testing.
 * Only renders in development mode.
 */
export function AttributionDebug() {
  const [attributionData, setAttributionData] =
    useState<AttributionData | null>(null);
  const [firstTouchData, setFirstTouchData] = useState<AttributionData | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(true);

  const refreshData = () => {
    // Get current session data
    const sessionData = getStoredAttributionData();
    setAttributionData(sessionData);

    // Get first-touch data from localStorage
    try {
      const firstTouch = localStorage.getItem("dp_first_attribution");
      setFirstTouchData(firstTouch ? JSON.parse(firstTouch) : null);
    } catch {
      setFirstTouchData(null);
    }
  };

  const clearAllData = () => {
    // Clear all stored attribution data
    sessionStorage.removeItem("dp_attribution");
    sessionStorage.removeItem("dp_session_visited");
    localStorage.removeItem("dp_first_attribution");
    localStorage.removeItem("dp_visited");

    // Refresh display to show cleared state
    refreshData();

    // Don't reload - let user navigate to test URLs manually
  };

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") return;

    // Get attribution data on mount
    refreshData();

    // Listen for attribution updates
    const interval = setInterval(refreshData, 1000);
    return () => clearInterval(interval);
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-lg">
      <div className="bg-black text-white p-3 rounded-lg shadow-lg text-xs max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-green-400">Attribution Debug</h4>
          <div className="flex gap-2">
            <button
              onClick={clearAllData}
              className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-white text-xs"
              title="Clear all attribution data"
            >
              Clear
            </button>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-gray-400 hover:text-white"
            >
              {isVisible ? "−" : "+"}
            </button>
          </div>
        </div>

        {isVisible && (
          <div className="space-y-4 font-mono">
            {/* Current Session Data */}
            {attributionData && (
              <div>
                <h5 className="font-bold text-yellow-400 mb-2">
                  Current Session Data
                </h5>
                <div className="space-y-2 bg-gray-900 p-2 rounded">
                  <div>
                    <strong className="text-blue-400">Landing:</strong>
                    <div className="text-gray-300 break-all text-xs">
                      {attributionData.landingPage}
                    </div>
                  </div>

                  <div>
                    <strong className="text-blue-400">Referrer:</strong>
                    <div className="text-gray-300">
                      {attributionData.referrerDomain}
                      {attributionData.referrer && (
                        <div className="text-xs text-gray-500 break-all">
                          {attributionData.referrer}
                        </div>
                      )}
                    </div>
                  </div>

                  {Object.keys(attributionData.queryParams || {}).length >
                    0 && (
                    <div>
                      <strong className="text-blue-400">Query Params:</strong>
                      <div className="text-gray-300 bg-gray-800 p-1 rounded mt-1">
                        {Object.entries(attributionData.queryParams).map(
                          ([key, value]) => (
                            <div key={key} className="flex">
                              <span className="text-purple-400">{key}:</span>
                              <span className="ml-1">{value}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <div>
                      <strong className="text-blue-400">Session:</strong>
                      <div className="text-gray-300 text-xs">
                        {attributionData.sessionId}
                      </div>
                    </div>
                    <div>
                      <strong className="text-blue-400">Flags:</strong>
                      <div className="text-xs">
                        <span
                          className={
                            attributionData.isFirstVisit
                              ? "text-green-400"
                              : "text-gray-400"
                          }
                        >
                          First Visit:{" "}
                          {attributionData.isFirstVisit ? "Yes" : "No"}
                        </span>
                        <br />
                        <span
                          className={
                            attributionData.isFirstTouch
                              ? "text-green-400"
                              : "text-gray-400"
                          }
                        >
                          First Touch:{" "}
                          {attributionData.isFirstTouch ? "Yes" : "No"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 pt-1 border-t border-gray-700">
                    Timestamp:{" "}
                    {new Date(attributionData.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>
            )}

            {/* First Touch Data */}
            {firstTouchData && (
              <div>
                <h5 className="font-bold text-orange-400 mb-2">
                  First Touch Data (Persistent)
                </h5>
                <div className="space-y-2 bg-gray-900 p-2 rounded">
                  <div>
                    <strong className="text-blue-400">Original Landing:</strong>
                    <div className="text-gray-300 break-all text-xs">
                      {firstTouchData.landingPage}
                    </div>
                  </div>

                  <div>
                    <strong className="text-blue-400">
                      Original Referrer:
                    </strong>
                    <div className="text-gray-300">
                      {firstTouchData.referrerDomain}
                      {firstTouchData.referrer && (
                        <div className="text-xs text-gray-500 break-all">
                          {firstTouchData.referrer}
                        </div>
                      )}
                    </div>
                  </div>

                  {Object.keys(firstTouchData.queryParams || {}).length > 0 && (
                    <div>
                      <strong className="text-blue-400">
                        Original Params:
                      </strong>
                      <div className="text-gray-300 bg-gray-800 p-1 rounded mt-1">
                        {Object.entries(firstTouchData.queryParams).map(
                          ([key, value]) => (
                            <div key={key} className="flex">
                              <span className="text-purple-400">{key}:</span>
                              <span className="ml-1">{value}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  <div className="text-xs text-gray-500 pt-1 border-t border-gray-700">
                    First Touch:{" "}
                    {new Date(firstTouchData.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>
            )}

            {/* Storage Info */}
            <div>
              <h5 className="font-bold text-gray-400 mb-2">Storage Status</h5>
              <div className="text-xs space-y-1">
                <div>
                  <span className="text-blue-400">SessionStorage:</span>
                  <span
                    className={
                      attributionData ? "text-green-400" : "text-red-400"
                    }
                  >
                    {attributionData ? " Active" : " Empty"}
                  </span>
                </div>
                <div>
                  <span className="text-blue-400">
                    LocalStorage (First Touch):
                  </span>
                  <span
                    className={
                      firstTouchData ? "text-green-400" : "text-red-400"
                    }
                  >
                    {firstTouchData ? " Stored" : " Empty"}
                  </span>
                </div>
              </div>
            </div>

            {!attributionData && !firstTouchData && (
              <div className="text-gray-500 text-center py-4">
                No attribution data found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
