import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface ButtonConfig {
  id: string;
  icon: string;
  title: string;
  onClick: (id?: string) => void;
}

interface WidgetProps {
  title: string;
  children: ReactNode;
  buttonConfigs?: ButtonConfig[];
}

export const Widget = observer<WidgetProps>(({ title, children, buttonConfigs = [] }) => {
  return (
    <section className="flex flex-col rounded-lg bg-[#222545] px-2">
      <header className="mx-2 mt-2 flex flex-row justify-between">
        <h2 className="mb-2 text-lg text-[#E8E8E8]">{title}</h2>
        <div>
          {buttonConfigs.map((config, index) => (
            <button
              key={index}
              onClick={() => config.onClick(config.id)}
              className="flex flex-row items-center justify-center rounded border border-[#303465] px-2 py-1">
              <img src={config.icon} alt={config.title} className="mr-2 w-4" />
              {config.title}
            </button>
          ))}
        </div>
      </header>
      <hr className="mx-2 border-[#4C5190]" />
      {children}
    </section>
  );
});
