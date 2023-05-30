import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("Badge component", () => {
  test("Should correctly render count", async () => {
    render(<Badge count={25} />);
    expect(screen.getByText(/25/i)).toBeInTheDocument();
  });
});
