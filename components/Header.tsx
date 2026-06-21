"use client";
import React from "react";
import TopNav from "./TopNav";
import Avatar from "./Avatar";
import Button from "./Button";

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Header({ children, className = "" }: HeaderProps) {
  return (
    <header className={`w-full bg-white border-b py-3 shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Saravo CRM</div>
              <div className="flex items-center gap-3">
                <TopNav>
                  <div className="flex items-center gap-2">
                    <Avatar alt="JS" />
                    <Button variant="ghost">Sign out</Button>
                  </div>
                </TopNav>
              </div>
            </div>
    </header>
  );
}
