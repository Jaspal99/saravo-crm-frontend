import React from "react";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  max?: "sm" | "md" | "lg" | "xl" | "full";
};

const maxClass = (max?: ContainerProps["max"]) => {
  switch (max) {
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-md";
    case "lg":
      return "max-w-lg";
    case "xl":
      return "max-w-xl";
    default:
      return "max-w-7xl";
  }
};

export default function Container({
  children,
  className = "",
  max = "xl",
}: ContainerProps) {
  return (
    <div className={`mx-auto px-6 py-6 w-full ${maxClass(max)} ${className}`}>
      {children}
    </div>
  );
}
