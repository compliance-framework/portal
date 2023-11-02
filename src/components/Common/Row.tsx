import { PropsWithChildren } from "react";

export function Row({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`flex flex-row space-x-1 ${className}`}>{children}</div>;
}
