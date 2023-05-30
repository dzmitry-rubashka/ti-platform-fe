import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button component", () => {
  test("Should correctly render small secondary button", async () => {
    render(
      <Button size="small" variant="secondary">
        Click me
      </Button>
    );
    const element = screen.getByRole("button");
    userEvent.click(element);
    expect(element).toHaveFocus();
  });

  test("Should correctly render large secondary button", async () => {
    render(
      <Button size="large" variant="secondary">
        Click me
      </Button>
    );
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  test("Should correctly render small primary button", async () => {
    render(
      <Button size="small" variant="primary" disabled>
        Click me
      </Button>
    );
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  test("Should correctly render large primary button", async () => {
    render(
      <Button size="large" variant="primary" disabled>
        Click me
      </Button>
    );
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});
