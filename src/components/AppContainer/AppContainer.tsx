import {observer} from "mobx-react-lite";
import {ReactNode} from "react";
import {Drawer} from "../Drawer/Drawer";
import {Header} from "../Header/Header";

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = observer<AppContainerProps>(({children}) => {
    return (
        <div className="flex h-screen w-screen flex-row bg-cloud-burst-500 p-2">
            <Drawer/>
            <section className="flex flex-grow flex-col ml-2">
                <Header/>
                <main className="flex flex-1 flex-grow flex-col my-2">{children}</main>
            </section>
        </div>
    );
});
