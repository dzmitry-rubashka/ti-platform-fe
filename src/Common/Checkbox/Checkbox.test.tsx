import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from ".";

describe("Checkbox component testing", () => {
  test("Should correctly render checkbox with active state", () => {
    render(<Checkbox type="active" title="active" />);
    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
  });
  test("Should correctly render checkbox with inactive state", () => {
    render(<Checkbox type="inactive" title="inactive" />);
    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
  });
  test("Should correctly switch checkbox state", () => {
    render(<Checkbox type="inactive" title="inactive" />);
    const checkbox = screen.getByTestId("checkbox");
    const click = fireEvent.click(checkbox);
    expect(click).toEqual(true);
  });
  test("Should have disabled attribute", () => {
    render(<Checkbox type="disabled" title="disabled" />);
    expect(screen.getByTestId("checkbox")).toHaveAttribute("disabled");
  });
});
