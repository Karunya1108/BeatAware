"use client";
import { Heart, Activity, User, Calendar } from "lucide-react";
import Link from "next/link";

const menu = [
  { name: "Dashboard", icon: Heart, href: "/dashboard" },
  { name: "Live Vitals", icon: Activity, href: "/dashboard/vitals" },
  { name: "History", icon: Activity, href: "/dashboard/history" },
  { name: "Profile", icon: User, href: "/dashboard/profile" },
  { name: "Appointments", icon: Calendar, href: "/dashboard/appointments" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md flex flex-col">
      <div className="p-6 text-xl font-semibold text-purple-600">
        Monitoring System
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
