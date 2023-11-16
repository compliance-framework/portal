import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { Button } from "./Button";
describe("Button", () => {
  it("Button label to be in document", () => {
    render(
      <StoreProvider>
        <Button label="Potato" onClick={() => {}} />
      </StoreProvider>,
    );
    expect(screen.getByText("Potato")).toBeInTheDocument();
  });
});
