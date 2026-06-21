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
      className={`h-full border-r bg-white p-6 ${className}`}
    >
      <nav aria-label="Primary" className="h-full">
        <ul className="flex flex-col gap-3">
          {React.Children.map(children, (c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
