import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "../../i18n";
import { StoreProvider } from "../../state";
import { Header } from "./Header";

describe("Header", () => {
  it("Hello world to be in document", () => {
    render(
      <StoreProvider>
        <Header></Header>
      </StoreProvider>,
    );
    expect(screen.getByText("Project Argus")).toBeInTheDocument();
  });
});
