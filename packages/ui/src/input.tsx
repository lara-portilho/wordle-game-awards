"use client";

import { cn2 } from "./utils/cn2";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input = ({
  label,
  name,
  inputClassName,
  labelClassName,
}: InputProps) => {
  const standardInputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] max-h-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const standardLabelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  return (
    <div>
      <label
        htmlFor={name}
        className={cn2(standardLabelClassName, labelClassName)}
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={cn2(standardInputClassName, inputClassName)}
      />
    </div>
  );
};
