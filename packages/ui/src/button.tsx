"use client";

import { ReactNode } from "react";
import { cn2 } from "./utils/cn2";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => {};
}

export const Button = ({ children, type, className, onClick }: ButtonProps) => {
  const standardClassName =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
  return (
    <button
      type={type || "button"}
      className={cn2(standardClassName, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
