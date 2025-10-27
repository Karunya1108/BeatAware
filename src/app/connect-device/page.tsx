"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Wifi } from "lucide-react";

export default function ConnectDevicePage() {
  const [wifiList, setWifiList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const fetchWifiNetworks = async () => {
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // fake delay
      setWifiList([
        "Home_Network_5G",
        "Office_Wifi",
        "Coffee_Shop_Free",
        "MyHotspot",
        "Beataware_Device",
      ]);
    } catch (err) {
      setError("Failed to scan Wi-Fi networks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWifiNetworks();
  }, []);

  const handleConnect = (wifi: string) => {
    // Navigate to success page with wifi name as query param
    router.push(`/wifi-success?name=${encodeURIComponent(wifi)}`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center">
          <Wifi className="h-16 w-16 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect to Wi-Fi</h2>
          <p className="text-gray-600 text-center mb-6">Tap a network to connect your device</p>
        </div>

        {loading && <p className="text-center text-gray-500">Scanning for networks…</p>}

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        {!loading && !error && (
          <ul className="space-y-3">
            {wifiList.map((wifi, idx) => (
              <li
                key={idx}
                className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-100 cursor-pointer transition"
                onClick={() => handleConnect(wifi)}
              >
                <span className="font-medium text-gray-700">{wifi}</span>
                <Wifi className="h-5 w-5 text-blue-500" />
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={fetchWifiNetworks}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          Refresh List
        </button>
      </div>
    </main>
  );
}
