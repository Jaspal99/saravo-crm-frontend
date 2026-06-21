"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";

export type PageLayoutProps = {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export default function PageLayout({
  children,
  className = "",
}: PageLayoutProps) {
  const sidebar = (
    <div className="flex flex-col gap-2">
      <Button variant="ghost" className="w-full text-left">
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full text-left">
        Contacts
      </Button>
      <Button variant="ghost" className="w-full text-left">
        Reports
      </Button>
      <Button variant="ghost" className="w-full text-left">
        Settings
      </Button>
    </div>
  );

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50 text-gray-900 ${className}`}
    >
      <Header />
      <div className="flex flex-1">
        {sidebar && (
          <div className="hidden md:block">
            <Sidebar>{sidebar}</Sidebar>
          </div>
        )}
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
