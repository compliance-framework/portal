import { PropsWithChildren } from "react";

interface SummarySectionProps extends PropsWithChildren {
  className?: string;
}

export function SummarySection({ children, className }: SummarySectionProps) {
  return (
    <table className={className}>
      <tbody>{children}</tbody>
    </table>
  );
}
