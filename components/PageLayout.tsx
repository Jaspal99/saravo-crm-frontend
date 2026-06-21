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
    <div className={`min-h-screen flex flex-col ${className}`}>
      {header}
      <div className="flex flex-1">
        {sidebar && <Sidebar>{sidebar}</Sidebar>}
        <main className="flex-1 p-4">{children}</main>
      </div>
      {footer}
    </div>
  );
}
