import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { DrawerItem } from "./DrawerItem";
import icon from "./logo.png";
describe("DrawerItem", () => {
  it("DrawerItem label to be in document", () => {
    render(
      <StoreProvider>
        <DrawerItem route="/" label="Potato" icon={icon} />
      </StoreProvider>,
    );
    expect(screen.getByText("Potato")).toBeInTheDocument();
  });
});
