import { render, screen } from "@testing-library/react";
import Tooltip from ".";

describe("Tooltip component testing", () => {
  test("Should correctly render tooltip", () => {
    render(
      <Tooltip tooltipText="Lorem Ipsum is simply dummy text of the printing" />
    );
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
  test("Should correctly render tooltip text", () => {
    render(
      <Tooltip tooltipText="Lorem Ipsum is simply dummy text of the printing">
        Tooltip
      </Tooltip>
    );
    expect(
      screen.getByText(/Lorem Ipsum is simply dummy text of the printing/i)
    ).toBeInTheDocument();
  });

  test("Should correctly render DefaultTooltip", () => {
    render(
      <Tooltip tooltipText="Lorem Ipsum is simply dummy text of the printing" />
    );
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
  test("Should correctly render DefaultTooltipImg", () => {
    render(
      <Tooltip tooltipText="Lorem Ipsum is simply dummy text of the printing" />
    );
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
  test("Should correctly render LargeTooltip", () => {
    render(
      <Tooltip tooltipText="Lorem Ipsum is simply dummy text of the printing" />
    );
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
  test("Should correctly render LargeTooltipImg", () => {
    render(
      <Tooltip tooltipText="Lorem Ipsum is simply dummy text of the printing" />
    );
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
});
