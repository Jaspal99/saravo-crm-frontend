"use client";
import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const sizeClass = (s: ButtonProps["size"]) => {
  switch (s) {
    case "sm":
      return "px-2 py-1 text-sm";
    case "lg":
      return "px-4 py-2 text-lg";
    default:
      return "px-3 py-1.5 text-base";
  }
};

const variantClass = (v: ButtonProps["variant"]) => {
  switch (v) {
    case "secondary":
      return "bg-gray-200 text-gray-900";
    case "ghost":
      return "bg-transparent text-inherit";
    default:
      return "bg-blue-600 text-white";
  }
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
  className={`inline-flex items-center justify-center ${variantClass(variant)} ${sizeClass(size)} rounded-md font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
}
