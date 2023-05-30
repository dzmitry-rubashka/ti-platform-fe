import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from ".";

describe("Dropdown component testing", () => {
  test("Should correctly render dropdown with general select state", () => {
    render(<Dropdown type="general select" options={["123"]} />);
    expect(screen.getByTestId("dropdown-container")).toBeInTheDocument();
  });
  test("Should correctly render dropdown with checkbox state", () => {
    render(<Dropdown type="checkbox" options={["123"]} />);
    expect(screen.getByTestId("dropdown-container")).toBeInTheDocument();
  });
  test("Should correctly render dropdown with radio state", () => {
    render(<Dropdown type="radio" options={["123"]} />);
    expect(screen.getByTestId("dropdown-container")).toBeInTheDocument();
  });
  test("Should correctly render items list", () => {
    render(<Dropdown type="radio" options={["123"]} />);
    expect(screen.getByTestId("items-list")).toBeInTheDocument();
  });
  test("Should correctly click on dropdown button", () => {
    render(<Dropdown type="radio" options={["123"]} />);
    const tabItem = screen.getByTestId("dropdown-button");
    const click = fireEvent.click(tabItem);
    expect(click).toEqual(false);
  });
});
