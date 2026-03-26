import { forwardRef, useId } from "react";
import type { TextAreaProps } from "./textarea.types";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = "", id, rows = 4, ...props }, ref) => {
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

        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={`
            border rounded-lg px-3 py-2 text-sm
            focus:outline-none focus:ring-2 resize-none
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
          <span id={errorId} className="text-xs text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";