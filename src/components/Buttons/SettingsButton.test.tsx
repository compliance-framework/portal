import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { SettingsButton } from "./SettingsButton";
describe("SettingsButton", () => {
  it("SettingsButton label to be in document", () => {
    render(
      <StoreProvider>
        <SettingsButton onClick={() => {}} />
      </StoreProvider>,
    );
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
