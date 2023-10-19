import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface ButtonConfig {
  id: string;
  icon: string;
  title: string;
}

interface WidgetProps {
  title: string;
  children: ReactNode;
  buttonConfigs: ButtonConfig[];
  onButtonClick: (id: string) => void;
}

export const Widget = observer<WidgetProps>(({ title, children, buttonConfigs, onButtonClick }) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#222545] p-2">
      <div className="flex flex-row justify-between">
        <h1 className="mb-2 text-xl text-[#E8E8E8]">{title}</h1>
        <div>
          {buttonConfigs.map((config, index) => (
            <button
              key={index}
              onClick={() => onButtonClick(config.id)}
              className="flex flex-row items-center justify-center rounded border border-[#303465] px-2 py-1">
              <img src={config.icon} alt={config.title} className="mr-2 w-4" />
              {config.title}
            </button>
          ))}
        </div>
      </div>
      <hr className="border-[#4C5190]" />
      <div className="h-128 my-2 w-64 bg-blue-200">{children}</div>
    </div>
  );
});
