"use client";
import React from "react";

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Header({ children, className = "" }: HeaderProps) {
  return (
    <header className={`w-full bg-white border-b py-3 ${className}`}>
      <div className="mx-auto px-4 max-w-7xl">{children}</div>
    </header>
  );
}
