import { render, screen } from "@testing-library/react";
import GlobeIcon from "assets/icons/GlobeIcon";
import theme from "theme";
import Input from ".";

describe("Input component", () => {
  test("Should correctly render disabled input", async () => {
    render(<Input icon={GlobeIcon} placeholder="Text" disabled />);
    const element = screen.getByTestId("input");
    expect(element).toHaveAttribute("disabled");
  });
  test("Should correctly render styles for error input", async () => {
    render(<Input icon={GlobeIcon} placeholder="Text" error />);
    const element = screen.getByTestId("input");
    expect(element).toHaveStyle({
      borderColor: `${theme.colors.cloudBurst}`,
    });
  });
});
