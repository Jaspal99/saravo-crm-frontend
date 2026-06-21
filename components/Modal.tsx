"use client";
import React from "react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export default function Modal({ open, onClose, title, children, className = "" }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={`relative bg-white rounded shadow-lg p-4 max-w-lg w-full ${className}`}>
        {title && <div className="text-lg font-semibold mb-2">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
