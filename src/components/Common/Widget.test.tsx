import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { Widget } from "./Widget";
describe("Widget", () => {
  it("Widget to be in document", () => {
    render(
      <StoreProvider>
        <Widget title="Potato">Tomato</Widget>
      </StoreProvider>,
    );
    expect(screen.getByText("Potato")).toBeInTheDocument();
    expect(screen.getByText("Tomato")).toBeInTheDocument();
  });
});
