import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { StoreProvider } from "../../state";
import { Drawer } from "./Drawer";

describe("Navigation", () => {
  it("Hello world to be in document", () => {
    render(
      <StoreProvider>
        <Drawer />
      </StoreProvider>,
    );
  });
});
