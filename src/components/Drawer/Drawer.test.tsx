import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { Drawer } from "./Drawer";

describe("Drawer", () => {
  it("Dashboard menu item to exist", () => {
    render(
      <StoreProvider>
        <Drawer />
      </StoreProvider>,
    );
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
