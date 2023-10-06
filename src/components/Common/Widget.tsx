import { observer } from "mobx-react-lite";
import {ReactNode} from "react";

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

export const Widget = observer<WidgetProps>(({title, children, buttonConfigs, onButtonClick}) => {
    return (
        <div className="flex flex-col rounded-lg p-2 bg-[#222545]">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl text-[#E8E8E8] mb-2">{title}</h1>
                <div>
                    {buttonConfigs.map((config, index) => (
                        <button key={index} onClick={() => onButtonClick(config.id)} className="flex flex-row justify-center items-center border-[#303465] border px-2 py-1 rounded">
                            <img src={config.icon} alt={config.title} className="w-4 mr-2" />
                            {config.title}
                        </button>
                    ))}
                </div>
            </div>
            <hr className="border-[#4C5190]" />
            <div className="bg-blue-200 h-128 w-64 my-2">{children}</div>
        </div>
    );
});
