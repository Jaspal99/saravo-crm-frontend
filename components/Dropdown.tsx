"use client";
import React from "react";

export type DropdownProps = {
  trigger: React.ReactElement;
  children?: React.ReactNode;
  open?: boolean;
};

export default function Dropdown({ trigger, children }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative inline-block" onBlur={() => setOpen(false)} tabIndex={0}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      {open && <div className="absolute mt-2 right-0 bg-white border rounded shadow p-2">{children}</div>}
    </div>
  );
}
