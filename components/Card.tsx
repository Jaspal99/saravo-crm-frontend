import React from "react";

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Card({
  children,
  className = "",
  title,
  footer,
}: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm p-6 ${className}`}
    >
      {title && (
        <div className="text-lg font-semibold text-gray-900 mb-3">{title}</div>
      )}
      <div className="text-sm text-gray-700">{children}</div>
      {footer && (
        <div className="mt-4 pt-3 border-t border-gray-100">{footer}</div>
      )}
    </div>
  );
}
