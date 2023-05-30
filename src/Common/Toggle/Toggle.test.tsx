import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from ".";

describe("Toggle component testing", () => {
  test("Should correctly render toggle with regular size", () => {
    render(<Toggle size="regular" />);
    expect(screen.getByTestId("toggle-container")).toBeInTheDocument();
  });
  test("Should correctly switch toggle", () => {
    render(<Toggle size="regular" />);
    const checkbox = screen.getByTestId("checkbox");
    const click = fireEvent.click(checkbox);
    expect(click).toEqual(true);
  });
  test("Should be checked after click", () => {
    render(<Toggle size="regular" />);
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("Should correctly render Regular", () => {
    render(<Toggle size="regular" />);
    expect(screen.getByTestId("toggle-container")).toBeInTheDocument();
  });
  test("Should correctly render Large", () => {
    render(<Toggle size="large" />);
    expect(screen.getByTestId("toggle-container")).toBeInTheDocument();
  });
});
