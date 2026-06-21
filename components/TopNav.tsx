"use client";
import React from "react";

export type TopNavProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function TopNav({ children, className = "" }: TopNavProps) {
  return (
    <nav className={`w-full bg-transparent ${className}`}>
      <div className="flex items-center gap-4">{children}</div>
    </nav>
  );
}
