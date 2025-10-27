import React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
}

export const Progress: React.FC<ProgressProps> = ({ value, className, ...props }) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-4", className)} {...props}>
      <div
        className="bg-blue-500 h-4 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
