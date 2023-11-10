import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  it("Hello world to be in document", () => {
    render(
      <StoreProvider>
        <Dashboard>Hello world</Dashboard>
      </StoreProvider>,
    );
  });
});
