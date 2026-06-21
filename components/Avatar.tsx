import React from "react";

export type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  src,
  alt = "avatar",
  size = 40,
  className = "",
}: AvatarProps) {
  const style = { width: size, height: size } as React.CSSProperties;
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={style}
      className={`rounded-full object-cover ${className}`}
    />
  ) : (
    <div
      style={style}
      className={`rounded-full bg-gray-300 flex items-center justify-center ${className}`}
    >
      <span className="text-sm text-white">
        {alt?.[0]?.toUpperCase() ?? "U"}
      </span>
    </div>
  );
}
