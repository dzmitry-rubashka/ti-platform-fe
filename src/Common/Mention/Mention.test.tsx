import { render, screen } from "@testing-library/react";
import Mention from ".";

describe("Mention component", () => {
  test("Should correctly renders Mention text for primary type", async () => {
    render(<Mention type="primary" username="User Name" />);
    expect(screen.getByText(/@User Name/i)).toBeInTheDocument();
  });

  test("Should correctly renders Mention text for secondary type", async () => {
    render(<Mention type="secondary" username="User Name" />);
    expect(screen.getByText(/@User Name/i)).toBeInTheDocument();
  });
});
