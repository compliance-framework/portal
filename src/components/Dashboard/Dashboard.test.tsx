import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StoreProvider } from "../../state";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  it("Vite to be in document", () => {
    render(
      <StoreProvider>
        <Dashboard />
      </StoreProvider>,
    );
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
