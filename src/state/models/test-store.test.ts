import { describe, expect, it } from "vitest";
import { TestStore } from "./test-store";

describe("TestStore", () => {
  it("TestStore to be initialised", () => {
    const testStore = TestStore.create();
    expect(testStore.no).toBe(0);
  });

  it("TestStore.inc to work", () => {
    const testStore = TestStore.create();
    expect(testStore.no).toBe(0);
    testStore.increment();
    expect(testStore.no).toBe(1);
  });
});
