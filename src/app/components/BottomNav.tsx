"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaHistory, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/dashboard" },
    { name: "History", icon: <FaHistory />, path: "/dashboard/history" },
    { name: "Appointments", icon: <FaCalendarAlt />, path: "/dashboard/appointments" },
    { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-3 border-t">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => router.push(item.path)}
          className={`flex flex-col items-center text-sm ${
            pathname === item.path ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          {item.name}
        </button>
      ))}
    </nav>
  );
}
