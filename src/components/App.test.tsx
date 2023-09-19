import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("Vite to be in document", () => {
    render(<App />);
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
