import { forwardRef, PropsWithChildren } from "react";

type WidgetContentProps = PropsWithChildren<{ className?: string }>;

export const WidgetContent = forwardRef<HTMLDivElement, WidgetContentProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`m-2 ${className}`}>
      {children}
    </div>
  );
});
