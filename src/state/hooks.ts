import { useContext } from "react";
import { StoreContext } from "./context";

export function useStore() {
  return useContext(StoreContext);
}
