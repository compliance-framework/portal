import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { ValueField } from "./ValueField";
describe("Field", () => {
  it("Field label to be in document", () => {
    render(
      <StoreProvider>
        <ValueField label="Potato" value="Tomato" />
      </StoreProvider>,
    );
    expect(screen.getByText("Potato")).toBeInTheDocument();
    expect(screen.getByText("Tomato")).toBeInTheDocument();
  });
});
