import { Instance, types } from "mobx-state-tree";

const { number, model, optional } = types;

const TestStore = model("TestStore", {
  no: optional(number, 0),
}).actions(self => ({
  increment() {
    self.no += 1;
  },
}));

const Store = types.model({
  test: optional(TestStore, {}),
});
export type RootStoreType = Instance<typeof Store>;

export const store = Store.create({});
