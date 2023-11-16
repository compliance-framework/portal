import { createContext, PropsWithChildren } from "react";
import { Store } from "./store";

const store = Store.create({});
export const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = (props: PropsWithChildren) => <StoreContext.Provider {...props} value={store} />;
