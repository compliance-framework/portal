import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
