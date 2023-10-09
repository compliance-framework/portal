import { observer } from "mobx-react-lite";
import {ReactNode} from "react";

interface WidgetProps {
    title: string;
    children: ReactNode;
    toolbar?: ReactNode; // Now this prop is optional
}

export const Widget = observer<WidgetProps>(({title, children, toolbar}) => {
    return (
        <div className="flex flex-col rounded-lg p-4 bg-cloud-burst-600">
            <div className="flex flex-row justify-between">
                <h1>{title}</h1>
                <div>
                    {toolbar}
                </div>
            </div>
            <hr className="border-[#4C5190]" />
            <div className="my-2">{children}</div>
        </div>
    );
});
