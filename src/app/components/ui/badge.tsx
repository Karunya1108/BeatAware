import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success";
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", className, children, ...props }) => {
  const baseClasses = "inline-flex items-center px-2 py-1 text-sm rounded-full font-medium";

  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-blue-200 text-blue-800",
    success: "bg-green-200 text-green-800",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
};
