import { PropsWithChildren } from "react";

interface SummarySectionProps extends PropsWithChildren {
  className?: string;
}

export function SummarySection({ children, className }: SummarySectionProps) {
  return <div className={`grid grid-cols-2 gap-8 ${className}`}>{children}</div>;
}
