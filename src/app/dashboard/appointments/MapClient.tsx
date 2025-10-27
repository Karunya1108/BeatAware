// MapClient.tsx  (Client-only, your posted map code)
"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons (Leaflet CDN icons)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function MapClient() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [hospitals, setHospitals] = useState<Array<{ name: string; lat: number; lng: number }>>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);

          setHospitals([
            { name: "City Hospital", lat: latitude + 0.005, lng: longitude + 0.005 },
            { name: "Health Plus Clinic", lat: latitude - 0.004, lng: longitude - 0.006 },
            { name: "General Care Hospital", lat: latitude + 0.007, lng: longitude - 0.003 },
          ]);
        },
        () => {
          setError("Could not get your location. Showing default hospitals.");
          setUserLocation([19.076, 72.8777]); // fallback
          setHospitals([
            { name: "City Hospital", lat: 19.08, lng: 72.88 },
            { name: "Health Plus Clinic", lat: 19.07, lng: 72.89 },
          ]);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setUserLocation([19.076, 72.8777]);
      setHospitals([
        { name: "City Hospital", lat: 19.08, lng: 72.88 },
        { name: "Health Plus Clinic", lat: 19.07, lng: 72.89 },
      ]);
    }
  }, []);

  const RecenterMap = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
      if (center) map.setView(center, 14);
    }, [center, map]);
    return null;
  };

  const getGoogleMapsDirections = (lat: number, lng: number) => {
    if (!userLocation) return `https://www.google.com/maps?q=${lat},${lng}`;
    const [uLat, uLng] = userLocation;
    return `https://www.google.com/maps/dir/${uLat},${uLng}/${lat},${lng}`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Coordinates copied to clipboard");
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  if (!userLocation) {
    return <div className="h-80 flex items-center justify-center text-black">Loading map…</div>;
  }

  return (
    <MapContainer center={userLocation} zoom={14} className="w-full h-80 rounded border">
      <RecenterMap center={userLocation} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={userLocation}>
        <Popup>
          <div className="min-w-[220px] max-w-sm">
            <div className="text-sm font-semibold">Your Location</div>
            <div className="text-xs text-slate-600">
              {userLocation[0].toFixed(5)}, {userLocation[1].toFixed(5)}
            </div>

            <div className="mt-3 flex gap-2">
              <a
                href={getGoogleMapsDirections(userLocation[0], userLocation[1])}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                Open in Maps
              </a>

              <button
                onClick={() => copyToClipboard(`${userLocation[0]}, ${userLocation[1]}`)}
                className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium text-slate-700"
              >
                Copy
              </button>
            </div>
          </div>
        </Popup>
      </Marker>

      {hospitals.map((hosp, idx) => (
        <Marker key={idx} position={[hosp.lat, hosp.lng]}>
          <Popup className="!p-0">
            <div className="min-w-[240px] max-w-xs rounded-lg bg-white shadow-lg ring-1 ring-slate-100">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="text-sm font-semibold text-slate-800">{hosp.name}</div>
                <button
                  onClick={(e) => {
                    const popupEl = (e.target as HTMLElement).closest(".leaflet-popup");
                    popupEl?.querySelector(".leaflet-popup-close-button")?.dispatchEvent(new Event("click"));
                  }}
                  className="text-slate-400 hover:text-slate-600"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="px-4 py-3">
                <div className="text-xs text-slate-500 mb-2">Coordinates</div>
                <div className="text-sm font-medium text-slate-800">Lat: {hosp.lat.toFixed(5)}</div>
                <div className="text-sm font-medium text-slate-800 mb-3">Lng: {hosp.lng.toFixed(5)}</div>

                <div className="flex gap-2">
                  <a
                    href={getGoogleMapsDirections(hosp.lat, hosp.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
                  >
                    Get Directions
                  </a>

                  <button
                    onClick={() => copyToClipboard(`${hosp.lat}, ${hosp.lng}`)}
                    className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="px-4 py-2 border-t text-xs text-slate-500">Opens Google Maps</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
