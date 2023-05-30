import { render, screen } from "@testing-library/react";
import BookedTime from ".";

describe("BookedTime component", () => {
  test("renders Calendar component", () => {
    render(
      <BookedTime
        key="1"
        id={1}
        start="14:00"
        finish="15:00"
        name="Middle JS"
      />
    );
    const element = screen.getByText(/Middle JS/i);
    expect(element).toBeInTheDocument();
  });
});
