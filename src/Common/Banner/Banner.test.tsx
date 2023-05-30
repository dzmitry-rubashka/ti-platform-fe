import { render, screen } from "@testing-library/react";
import Banner from ".";

describe("Banner component", () => {
  test("should correctly render banner text for warning message", async () => {
    render(<Banner type="warning" title="This is a warning" />);
    expect(screen.getByText(/This is a warning/i)).toBeInTheDocument();
  });

  test("should correctly render banner text for info message", async () => {
    render(<Banner type="info" title="This is some info" />);
    expect(screen.getByText(/This is some info/i)).toBeInTheDocument();
  });

  test("should correctly render banner text for error message", async () => {
    render(
      <Banner
        type="error"
        title="The apocalypse is coming and zombies are on the loose"
      />
    );
    expect(
      screen.getByText(/The apocalypse is coming and zombies are on the loose/i)
    ).toBeInTheDocument();
  });
});
