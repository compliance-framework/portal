import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { Field } from "./Field";
describe("Field", () => {
  it("Field label to be in document", () => {
    render(
      <StoreProvider>
        <Field label="Potato">Tomato</Field>
      </StoreProvider>,
    );
    expect(screen.getByText("Potato")).toBeInTheDocument();
    expect(screen.getByText("Tomato")).toBeInTheDocument();
  });
});
