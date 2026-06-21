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
    <div className={`border rounded bg-white p-4 ${className}`}>
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
