import { PropsWithChildren } from "react";

export function DashboardRow({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <section className={`flex flex-row space-x-1 ${className}`}>{children}</section>;
}
