import React from "react";

export type LoaderProps = {
  size?: number;
  className?: string;
};

export default function Loader({ size = 24, className = "" }: LoaderProps) {
  const style = { width: size, height: size } as React.CSSProperties;
  return (
    <div style={style} className={`animate-spin border-2 border-t-transparent rounded-full border-gray-300 ${className}`} />
  );
}
