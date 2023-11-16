import { Instance, types } from "mobx-state-tree";

const { number, model, optional, string } = types;

export const DomainResult = model("DomainResult").props({
  id: string,
  description: optional(string, ""),
  // potato: number,
});

type DomainResultModel = typeof DomainResult;
export type DomainResult = Instance<DomainResultModel>;

// const dataFromAPI = {
//   id: "1234",
//   description: "blah",
//   potato: 4,
// };
// const mod = DomainResult.create(dataFromAPI) satisfies configurationService.DomainResult;
// Object() as configurationService.DomainResult satisfies DomainResult;

// export function guardDomainResult(): DomainResult {
//   return getSnapshot(DomainResult.create({} as DomainResult));
// }

export const TestStore = model("TestStore", {
  no: optional(number, 0),
}).actions(self => ({
  increment() {
    self.no += 1;
  },
}));

type TestStoreModel = typeof TestStore;
export type TestStore = Instance<TestStoreModel>;
