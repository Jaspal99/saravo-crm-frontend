"use client";
import React from "react";

export type SidebarProps = {
  children?: React.ReactNode;
  width?: number | string;
  className?: string;
};

export default function Sidebar({
  children,
  width = 250,
  className = "",
}: SidebarProps) {
  const style = typeof width === "number" ? { width } : { width };
  return (
    <aside
      style={style}
      className={`h-full border-r bg-white p-4 ${className}`}
    >
      {children}
    </aside>
  );
}
