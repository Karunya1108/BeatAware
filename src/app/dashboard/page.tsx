"use client";

import { useEffect, useState } from "react";
import {
  FaHeartbeat,
  FaTint,
  FaThermometerHalf,
  FaLungs,
  FaBurn,
  FaCog,
  FaBell,
  FaCalendarAlt,
  FaHistory,
} from "react-icons/fa";
import VitalsCard from "../components/dashboard/VitalsCard";
import HeartRateChart from "../components/dashboard/HeartRateChart";
import BottomNav from "@/app/components/BottomNav";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Dashboard() {
  const router = useRouter();
  const [currentBpm, setCurrentBpm] = useState(72);
  const [bpmData, setBpmData] = useState<{ time: string; bpm: number }[]>([]);
  const [userName] = useState("John Doe");
  const [sweatTemp] = useState("92.3 °F");
  const [pulseRate] = useState(76);
  const [profileCompletion] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBpm((prev) => {
        const newBpm =
          prev +
          (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5);
        return Math.max(60, Math.min(110, newBpm));
      });
      setBpmData((prev) => [
        ...prev.slice(-9),
        { time: new Date().toLocaleTimeString().slice(0, 5), bpm: currentBpm },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentBpm]);

  // Personalized Greeting
  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";
  const tips = [
    "💧 Stay hydrated today!",
    "🚶 Take short breaks to walk.",
    "🧘 Relax and breathe deeply.",
    "🥗 Eat something fresh & healthy.",
  ];
  const tip = tips[Math.floor(Math.random() * tips.length)];

  const heartRisk =
    currentBpm > 120 ? "⚠️ High Heart Rate" : "✅ Normal Heart Rate";
  const feverRisk =
    parseFloat("98.6") > 100
      ? "🤒 Fever Detected"
      : "✅ Normal Body Temperature";
  const oxygenStatus = 98 < 95 ? "⚠️ Low Oxygen Level" : "✅ Oxygen Normal";

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700">
      {/* Scrollable main content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="w-full space-y-6">

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow p-6 flex justify-between items-center"
          >
            <div>
              <h1 className="text-xl font-bold text-black">BeatAware</h1>
              <p className="mt-1 text-sm italic text-gray-600">
                “Listen to your heart, BeatAware helps you care.” 💙
              </p>
              <p className="mt-2 text-md font-medium text-blue-700">
                {greeting}, {userName.split(" ")[0]} 🌞
              </p>
              <p className="text-sm text-gray-600">{tip}</p>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg shadow">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-full shadow">
                {userName.charAt(0)}
              </div>
              <div className="flex flex-col leading-tight w-32">
                <span className="font-semibold text-black">{userName}</span>
                <span className="text-xs text-gray-500">Active User</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">
                  Profile {profileCompletion}% complete
                </span>
              </div>

              <div className="flex items-center gap-2 ml-3">
                <button
                  onClick={() => router.push("/dashboard/notifications")}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-blue-100 text-blue-600 shadow"
                >
                  <FaBell size={14} />
                </button>
                <button
                  onClick={() => router.push("/dashboard/profile")}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-purple-100 text-purple-600 shadow"
                >
                  <FaCog size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Vitals Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 text-black">Vitals</h2>
            <div className="grid grid-cols-2 gap-4">
              <VitalsCard
                label="Heart Rate"
                value={currentBpm}
                unit="bpm"
                icon={
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaHeartbeat className="text-red-500" />
                  </motion.div>
                }
              />
              <VitalsCard label="Blood Pressure" value="120/80" unit="mmHg" icon={<FaTint />} />
              <VitalsCard label="Body Temp." value="98.6" unit="°F" icon={<FaThermometerHalf />} />
              <VitalsCard label="Oxygen Saturation" value="98" unit="%" icon={<FaLungs />} />
              <VitalsCard label="Pulse Rate" value={pulseRate} unit="bpm" icon={<FaHeartbeat />} />
              <VitalsCard label="Sweat Temp." value={sweatTemp} icon={<FaBurn />} />
            </div>
          </div>

          {/* Heart Rate Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-black">Heart Rate Trend</h2>
            <HeartRateChart data={bpmData} />
          </motion.div>

          {/* ✅ Health Summary (moved inside scrollable area) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-black">Health Summary</h2>
            <ul className="space-y-2 text-gray-800">
              <li>{heartRisk}</li>
              <li>{feverRisk}</li>
              <li>{oxygenStatus}</li>
            </ul>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6 mb-20"
          >
            <h2 className="text-lg font-semibold mb-4 text-black">Quick Actions</h2>
            <div className="flex gap-4">
              <button
                onClick={() => router.push("/dashboard/appointments")}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
              >
                <FaCalendarAlt /> Book Appointment
              </button>
              <button
                onClick={() => router.push("/dashboard/history")}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
              >
                <FaHistory /> View History
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Bottom Nav */}
      <BottomNav />
    </div>
  );
}
