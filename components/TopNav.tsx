"use client";
import React from "react";

export type TopNavProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function TopNav({ children, className = "" }: TopNavProps) {
  return (
    <nav className={`w-full bg-white border-b py-2 ${className}`}>
      <div className="mx-auto px-4 max-w-7xl flex items-center justify-between">
        {children}
      </div>
    </nav>
  );
}
