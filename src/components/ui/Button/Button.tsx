import { forwardRef } from "react";
import type { ButtonProps } from "./button.types";
import { baseStyles, variantStyles, sizeStyles } from "./button.styles";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            isLoading = false,
            className = "",
            children,
            disabled,
            ...props
        }, ref
    ) => {
        return (
            <button 
            ref={ref}
            className={`
                ${baseStyles}
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${className} `}
            disabled={disabled || isLoading}
            {...props}
            >
            {isLoading ? "Loading..." : children}
            </button>
        );
    }
);

Button.displayName = "Button";
