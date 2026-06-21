"use client";
import React from "react";

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: "top" | "right" | "bottom" | "left";
};

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="relative group inline-block">
      {children}
      <span className="absolute left-1/2 -translate-x-1/2 -translate-y-full mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
        {content}
      </span>
    </span>
  );
}
