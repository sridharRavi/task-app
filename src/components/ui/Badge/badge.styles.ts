import type { BadgeVariant } from "./badge.types";

export const baseStyles =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

export const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-800",
  secondary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  destructive: "bg-red-100 text-red-800",
};