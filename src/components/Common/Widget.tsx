import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface WidgetProps {
  title: string;
  children: ReactNode;
  toolbar?: ReactNode;
}

export const Widget = observer<WidgetProps>(({ title, children, toolbar }) => {
  return (
    <section className="flex flex-col rounded-lg bg-base-300 px-2">
      <header className="mx-2 mt-2 flex flex-row justify-between">
        <h2>{title}</h2>
        <div>{toolbar}</div>
      </header>
      <hr className="mx-2 border-indigo-550" />
      {children}
    </section>
  );
});
