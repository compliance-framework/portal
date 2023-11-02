import { PropsWithChildren } from "react";

export function WidgetContent({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={`m-2 ${className}`}>{children}</div>;
}
