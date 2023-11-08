import { getSnapshot, Instance, types } from "mobx-state-tree";
import { DomainResult } from "../../services/configuration-service";

const { number, model, optional, string } = types;

export const DomainResultModel = model("DomainResult").props({
  description: optional(string, ""),
});

export type DomainResultModel = Instance<typeof DomainResultModel>;

export function guardDomainResult(): DomainResult {
  return getSnapshot(DomainResultModel.create({} as DomainResult));
}

export const TestStore = model("TestStore", {
  no: optional(number, 0),
}).actions(self => ({
  increment() {
    self.no += 1;
  },
}));

interface APITestModel {
  no: number;
  potato: string;
}

export type TestStore = Instance<typeof TestStore>;
export function guardTest(t: typeof TestStore): APITestModel {
  return getSnapshot(t.create({} as APITestModel));
}
