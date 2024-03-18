import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`border-2 border-gray-900 bg-blue-600 rounded w-full p-2 text-white font-bold hover:bg-blue-500 focus-blue-400 transition-colors disabled:bg-gray-500 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});
