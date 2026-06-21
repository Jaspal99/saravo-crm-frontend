import React from "react";

export type BadgeProps = {
  children?: React.ReactNode;
  color?: "default" | "success" | "warning" | "danger";
  className?: string;
};

const colorClass = (c: BadgeProps['color']) => {
  switch (c) {
    case "success":
      return "bg-green-100 text-green-800";
    case "warning":
      return "bg-yellow-100 text-yellow-800";
    case "danger":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Badge({ children, color = "default", className = "" }: BadgeProps) {
  return <span className={`text-xs px-2 py-0.5 rounded ${colorClass(color)} ${className}`}>{children}</span>;
}
