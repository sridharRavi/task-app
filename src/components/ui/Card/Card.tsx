import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-sm border p-4
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <div className="mb-2 font-semibold text-gray-900">
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  return (
    <div className="text-sm text-gray-600">
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return (
    <div className="mt-3 flex items-center justify-between">
      {children}
    </div>
  );
};