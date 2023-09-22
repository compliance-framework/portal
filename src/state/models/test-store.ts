import { Instance, types } from "mobx-state-tree";

const { number, model, optional } = types;

export const TestStore = model("TestStore", {
  no: optional(number, 0),
}).actions(self => ({
  increment() {
    self.no += 1;
  },
}));

export type TestStore = Instance<typeof TestStore>;
