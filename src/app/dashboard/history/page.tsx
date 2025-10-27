"use client";

import { FaHeartbeat, FaWalking, FaBed, FaChartBar } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import BottomNav from "@/app/components/BottomNav"; // ✅ Import BottomNav

export default function HistoryPage() {
  const router = useRouter();
  const pathname = usePathname(); // get current route

  const weeklySummary = [
    { day: "Mon", heartRate: 72, steps: 8500, sleep: 7.2 },
    { day: "Tue", heartRate: 75, steps: 9200, sleep: 6.8 },
    { day: "Wed", heartRate: 78, steps: 10100, sleep: 7.5 },
    { day: "Thu", heartRate: 74, steps: 7800, sleep: 7.0 },
    { day: "Fri", heartRate: 80, steps: 11200, sleep: 6.5 },
    { day: "Sat", heartRate: 69, steps: 12500, sleep: 8.2 },
    { day: "Sun", heartRate: 71, steps: 9800, sleep: 8.0 },
  ];

  const todayTrend = [
    { time: "6 AM", bpm: 68 },
    { time: "9 AM", bpm: 75 },
    { time: "12 PM", bpm: 82 },
    { time: "3 PM", bpm: 78 },
    { time: "6 PM", bpm: 85 },
    { time: "9 PM", bpm: 72 },
  ];

  // Export weekly summary as CSV
  const handleExport = () => {
    const headers = ["Day,Heart Rate (bpm),Steps,Sleep (hrs)"];
    const rows = weeklySummary.map(
      (d) => `${d.day},${d.heartRate},${d.steps},${d.sleep}`
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "health_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700">
      {/* Page content */}
      <div className="flex-1 px-8 py-6 overflow-y-auto">
        {/* Header with export */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Health History</h1>
          <button
            onClick={handleExport}
            className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
          >
            Export Report
          </button>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Average Heart Rate",
              value: "74 bpm",
              change: "↓ 2.6% vs. 76 bpm",
            },
            {
              title: "Blood Pressure",
              value: "118/76 mmHg",
              change: "↓ 3.2% vs. 122/78",
            },
            {
              title: "Daily Steps",
              value: "9,887",
              change: "↑ 10.2% vs. 8,945",
            },
            {
              title: "Sleep Quality",
              value: "7.3 hrs",
              change: "↑ 7.4% vs. 6.8 hrs",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-200"
            >
              <h3 className="text-gray-800 text-sm">{item.title}</h3>
              <p className="text-2xl font-semibold mt-2 text-gray-900">
                {item.value}
              </p>
              <span className="text-green-600 text-xs">{item.change}</span>
            </div>
          ))}
        </div>

        {/* Today's Heart Rate Trend */}
        <div className="bg-white rounded-xl p-6 shadow mt-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <FaHeartbeat className="text-purple-500" /> Today’s Heart Rate Trend
          </h2>
          <div className="flex items-end justify-between h-40">
            {todayTrend.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-10 rounded-t-lg bg-gradient-to-t from-purple-500 to-blue-400"
                  style={{ height: `${item.bpm}px` }}
                ></div>
                <span className="text-xs mt-2 text-gray-700">{item.time}</span>
                <span className="text-sm font-medium text-gray-900">
                  {item.bpm}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Health Summary */}
        <div className="bg-white rounded-xl p-6 shadow mt-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <FaChartBar className="text-blue-500" /> Weekly Health Summary
          </h2>
          <div className="space-y-4">
            {weeklySummary.map((day, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-3"
              >
                <span className="font-semibold w-12 text-gray-900">
                  {day.day}
                </span>
                <div className="flex flex-1 items-center justify-between gap-6 text-gray-800">
                  <div className="flex items-center gap-2">
                    <FaHeartbeat className="text-red-500" />
                    <span>{day.heartRate} bpm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWalking className="text-green-500" />
                    <span>{day.steps.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBed className="text-purple-500" />
                    <span>{day.sleep}h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Use BottomNav component instead of inline buttons */}
      <BottomNav />
    </div>
  );
}
