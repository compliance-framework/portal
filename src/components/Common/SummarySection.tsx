import { PropsWithChildren } from "react";

interface SummarySectionProps extends PropsWithChildren {}

export function SummarySection({ children }: SummarySectionProps) {
  return (
    <table className="">
      <tbody>{children}</tbody>
    </table>
  );
}
