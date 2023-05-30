import { render, screen } from "@testing-library/react";
import ProgressBar from ".";

describe("ProgressBar component testing", () => {
  test("Should correctly render progress line", () => {
    render(<ProgressBar progress={93} />);
    expect(screen.getByTestId("progress-bar-progress")).toBeInTheDocument();
  });
  test("Should correctly render ProgressBar container", () => {
    render(<ProgressBar progress={93} />);
    expect(screen.getByTestId("progress-bar-container")).toBeInTheDocument();
  });
});
