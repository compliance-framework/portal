import { observer } from "mobx-react-lite";
import {ReactNode} from "react";

interface WidgetProps {
    title: string;
    children: ReactNode;
    toolbar?: ReactNode; // Now this prop is optional
}

export const Widget = observer<WidgetProps>(({title, children, toolbar}) => {
    return (
        <div className="flex flex-col rounded-lg p-2 bg-[#222545]">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl text-[#E8E8E8] mb-2">{title}</h1>
                <div>
                    {toolbar}
                </div>
            </div>
            <hr className="border-[#4C5190]" />
            <div className="my-2">{children}</div>
        </div>
    );
});
