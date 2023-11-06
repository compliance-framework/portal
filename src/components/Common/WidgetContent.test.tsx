import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { WidgetContent } from "./WidgetContent";
describe("WidgetContent", () => {
  it("WidgetContent label to be in document", () => {
    render(
      <StoreProvider>
        <WidgetContent>Tomato</WidgetContent>
      </StoreProvider>,
    );
    expect(screen.getByText("Tomato")).toBeInTheDocument();
  });
});
