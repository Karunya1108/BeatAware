import React from "react";

interface VitalsCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
}

export default function VitalsCard({ label, value, unit, icon }: VitalsCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 
                 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
    >
      {/* Icon */}
      <div className="text-blue-500 text-3xl transition-colors duration-300 group-hover:text-blue-600">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900">
          {value} <span className="text-lg font-medium">{unit}</span>
        </h3>
      </div>
    </div>
  );
}
