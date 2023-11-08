import { Instance, types } from "mobx-state-tree";

const { optional } = types;

export const Store = types.model({
  test: optional(TestStore, {}),
});
export type Store = Instance<typeof Store>;
