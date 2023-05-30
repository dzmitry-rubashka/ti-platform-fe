import { render, screen } from "@testing-library/react";
import InterviewDetailsPage from ".";

describe("InterviewDetails page", () => {
  test("candidate info is displayed on the page", () => {
    render(<InterviewDetailsPage />);
    expect(screen.getByTestId("candidate-info")).toBeInTheDocument();
  });

  test("tabs is displayed on the page", () => {
    render(<InterviewDetailsPage />);
    expect(screen.getByTestId("tab-container")).toBeInTheDocument();
  });
});
