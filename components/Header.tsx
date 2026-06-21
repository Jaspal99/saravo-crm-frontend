"use client";
import React from "react";

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Header({ children, className = "" }: HeaderProps) {
  return (
    <header className={`w-full bg-white border-b py-3 shadow-sm ${className}`}>
      <div className="mx-auto px-6 max-w-7xl">{children}</div>
    </header>
  );
}
