import type { ReactNode } from "react";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "success"
  | "destructive";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}