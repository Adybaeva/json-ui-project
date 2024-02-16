import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ViewToComponentRenderer from "./ViewToComponentRenderer";

describe("ViewToComponentRenderer", () => {
  it('should render Container component for type "container"', () => {
    const view = { type: "container", style: {}, children: [] };
    const { getByTestId } = render(<ViewToComponentRenderer view={view} />);
    expect(getByTestId("container")).toBeInTheDocument();
  });

  it('should render Text component for type "text"', () => {
    const view = { type: "text", style: {}, data: { value: "Hello" } };
    const { getByTestId } = render(<ViewToComponentRenderer view={view} />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  it('should render Button component for type "button"', () => {
    const view = { type: "button", style: {}, data: { value: "Button" } };
    const { getByTestId } = render(<ViewToComponentRenderer view={view} />);
    expect(getByTestId("button")).toBeInTheDocument();
  });

  it('should render Image component for type "image"', () => {
    const view = { type: "image", style: {} };
    const { getByTestId } = render(<ViewToComponentRenderer view={view} />);
    expect(getByTestId("image")).toBeInTheDocument();
  });

  it('should render TextField component for type "textfield"', () => {
    const view = { type: "textfield", style: {} };
    const { getByTestId } = render(<ViewToComponentRenderer view={view} />);
    expect(getByTestId("textfield")).toBeInTheDocument();
  });

  it('should render TextArea component for type "textarea"', () => {
    const view = { type: "textarea", style: {} };
    const { getByTestId } = render(<ViewToComponentRenderer view={view} />);
    expect(getByTestId("textarea")).toBeInTheDocument();
  });

  it("should return null for unknown type", () => {
    const view = { type: "unknown", style: {} };
    const { container } = render(<ViewToComponentRenderer view={view} />);
    expect(container.firstChild).toBeNull();
  });
});
