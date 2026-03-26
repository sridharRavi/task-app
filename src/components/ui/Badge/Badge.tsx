import type { BadgeProps } from "./badge.types";
import { baseStyles, variantStyles } from "./badge.styles";

export const Badge = ({
  variant = "default",
  className = "",
  children,
}: BadgeProps) => {
  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};