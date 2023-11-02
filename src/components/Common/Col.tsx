import { PropsWithChildren } from "react";

export function Col({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={`flex flex-col space-y-1 ${className}`}>{children}</section>;
}
