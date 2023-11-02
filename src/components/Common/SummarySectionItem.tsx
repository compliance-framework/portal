import { PropsWithChildren } from "react";

interface SummarySectionItemProps extends PropsWithChildren {
  label: string;
}
export function SummarySectionItem({ label, children }: SummarySectionItemProps) {
  return (
    <tr>
      <td className="w-48 text-neutral-content">{label}</td>
      <td>{children}</td>
    </tr>
  );
}
