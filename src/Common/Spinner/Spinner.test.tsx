import { render, screen } from "@testing-library/react";
import Spinner from ".";

describe("Spinner component", () => {
  test("Should correctly render Spinner", async () => {
    render(<Spinner size="xlarge" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("Should correctly render XLarge Spinner", async () => {
    render(<Spinner size="xlarge" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  test("Should correctly render Large Spinner", async () => {
    render(<Spinner size="large" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  test("Should correctly render Medium Spinner", async () => {
    render(<Spinner size="medium" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  test("Should correctly render Small Spinner", async () => {
    render(<Spinner size="small" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  test("Should correctly render XSmall Spinner", async () => {
    render(<Spinner size="xsmall" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
