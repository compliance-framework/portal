import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { Drawer } from "../Drawer/Drawer";
import { Header } from "../Header/Header";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer = observer<AppContainerProps>(({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-row space-x-2 bg-base-300">
      <Drawer />
      <section className="flex flex-grow flex-col bg-base-200">
        <Header />
        <main className="flex flex-1 flex-grow flex-col p-2">{children}</main>
      </section>
    </div>
  );
});
