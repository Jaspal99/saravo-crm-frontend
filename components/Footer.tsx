import React from "react";

export type FooterProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Footer({ children, className = "" }: FooterProps) {
  return (
    <footer className={`w-full bg-white border-t py-4 ${className}`}>
      <div className="mx-auto px-4 max-w-7xl text-sm text-gray-600">
        {children}
      </div>
    </footer>
  );
}
