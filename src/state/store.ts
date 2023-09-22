import { Instance, types } from "mobx-state-tree";
import { TestStore } from "./models";

const { optional } = types;

export const Store = types.model({
  test: optional(TestStore, {}),
});
export type Store = Instance<typeof Store>;
