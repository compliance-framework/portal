import { PropsWithChildren } from "react";

export function DashboardColumn({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <section className={`flex flex-col space-y-1 ${className}`}>{children}</section>;
}
