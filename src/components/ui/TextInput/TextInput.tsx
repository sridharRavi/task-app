import { forwardRef, useId } from "react";
import type { TextInputProps } from "./textinput.types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={`
            border rounded-lg px-3 py-2 text-sm
            focus:outline-none focus:ring-2
            ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }
            ${className}
          `}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />

        {error && (
          <span
            id={errorId}
            className="text-xs text-red-600"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";