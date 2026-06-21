"use client";
import React from "react";
import Sidebar from "./Sidebar";

export type PageLayoutProps = {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export default function PageLayout({
  children,
  sidebar,
  header,
  footer,
  className = "",
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 text-gray-900 ${className}`}>
      {header}
      <div className="flex flex-1">
        {sidebar && (
          <div className="hidden md:block">
            <Sidebar>{sidebar}</Sidebar>
          </div>
        )}
        <main className="flex-1 p-6">{children}</main>
      </div>
      {footer}
    </div>
  );
}
