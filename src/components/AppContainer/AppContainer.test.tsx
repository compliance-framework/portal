import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { AppContainer } from "./AppContainer";

describe("AppContainer", () => {
  it("Hello world to be in document", () => {
    render(
      <StoreProvider>
        <AppContainer>
          <span>App Hello World</span>
        </AppContainer>
      </StoreProvider>,
    );
    expect(screen.getByText("App Hello World")).toBeInTheDocument();
  });
});
