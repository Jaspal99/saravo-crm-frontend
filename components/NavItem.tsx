import React from "react";

export type NavItemProps = {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function NavItem({
  children,
  active,
  onClick,
  className = "",
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-gray-100 focus:outline-none ${active ? "bg-white border border-gray-200 shadow-sm" : "text-gray-700"} ${className}`}
    >
      {children}
    </button>
  );
}
