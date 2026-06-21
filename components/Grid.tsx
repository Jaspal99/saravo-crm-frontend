import React from "react";

export type GridProps = {
  children?: React.ReactNode;
  cols?: number;
  gap?: number | string;
  className?: string;
};

export default function Grid({
  children,
  cols = 2,
  gap = 16,
  className = "",
}: GridProps) {
  const style = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gap,
  } as React.CSSProperties;
  return (
    <div style={style} className={`grid ${className}`}>
      {children}
    </div>
  );
}
