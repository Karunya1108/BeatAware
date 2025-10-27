// MapWrapper.tsx  (Client Component, does dynamic import)
"use client";

import dynamic from "next/dynamic";
import React from "react";

// dynamic import of MapClient — allowed in client components
const MapClient = dynamic(() => import("./MapClient"), { ssr: false });

// Optional: a small loading placeholder while the map JS loads
export default function MapWrapper() {
  return (
    <div>
      <React.Suspense fallback={<div className="h-80 flex items-center justify-center">Loading map…</div>}>
        <MapClient />
      </React.Suspense>
    </div>
  );
}
