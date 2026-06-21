"use client";
import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  className?: string;
};

export default function Input({
  label,
  error,
  className = "",
  ...rest
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <input {...rest} className="border px-2 py-1 rounded" />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
