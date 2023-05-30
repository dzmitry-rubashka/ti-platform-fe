import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TechFeedback from ".";

describe("TechFeedback component", () => {
  test("should correctly render section title", async () => {
    render(<TechFeedback technology="JavaScript" />);
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
  });

  test("should correctly set value for controlled textarea", () => {
    render(<TechFeedback technology="JavaScript" />);
    const textarea = screen.getByTestId("textarea");
    expect(textarea).toHaveValue("");
    fireEvent.change(textarea, { target: { value: "feedback" } });
    expect(textarea).toHaveValue("feedback");
  });

  test("should correctly render rate - 2/5", () => {
    render(<TechFeedback technology="JavaScript" />);
    const firstButton = screen.getByTestId("star-button-1");
    const secondButton = screen.getByTestId("star-button-2");
    userEvent.click(secondButton);
    const firstStarIcon = firstButton.querySelector("svg");
    const secondStarIcon = secondButton.querySelector("svg");
    expect(firstStarIcon).toHaveAttribute("fill", "#FFAB00");
    expect(secondStarIcon).toHaveAttribute("fill", "#FFAB00");
  });

  test("should correctly render rate 2/5 on mouse over event", () => {
    render(<TechFeedback technology="JavaScript" />);
    const firstButton = screen.getByTestId("star-button-1");
    const secondButton = screen.getByTestId("star-button-2");
    fireEvent.mouseOver(secondButton);
    const firstStarIcon = firstButton.querySelector("svg");
    const secondStarIcon = secondButton.querySelector("svg");
    expect(firstStarIcon).toHaveAttribute("fill", "#FFAB00");
    expect(secondStarIcon).toHaveAttribute("fill", "#FFAB00");
  });

  test("should correctly render rate on mouse leave event", () => {
    render(<TechFeedback technology="JavaScript" />);
    const firstButton = screen.getByTestId("star-button-1");
    const secondButton = screen.getByTestId("star-button-2");
    const thirdButton = screen.getByTestId("star-button-3");
    const fourthButton = screen.getByTestId("star-button-4");
    const fifthButton = screen.getByTestId("star-button-5");
    fireEvent.mouseLeave(firstButton);
    const firstStarIcon = firstButton.querySelector("svg");
    const secondStarIcon = secondButton.querySelector("svg");
    const thirdStarIcon = thirdButton.querySelector("svg");
    const fourthStarIcon = fourthButton.querySelector("svg");
    const fifthStarIcon = fifthButton.querySelector("svg");
    expect(firstStarIcon).toHaveAttribute("fill", "rgba(9, 30, 66, 0.13)");
    expect(secondStarIcon).toHaveAttribute("fill", "rgba(9, 30, 66, 0.13)");
    expect(thirdStarIcon).toHaveAttribute("fill", "rgba(9, 30, 66, 0.13)");
    expect(fourthStarIcon).toHaveAttribute("fill", "rgba(9, 30, 66, 0.13)");
    expect(fifthStarIcon).toHaveAttribute("fill", "rgba(9, 30, 66, 0.13)");
  });
});
