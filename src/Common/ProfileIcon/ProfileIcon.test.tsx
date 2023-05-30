import { render, screen } from "@testing-library/react";
import DefaultIcon from "assets/images/DeafaultProfileIcon.jpg";
import ProfileIcon from ".";

describe("ProfileIcon component", () => {
  test("Should correctly render XXLarge ProfileIcon", async () => {
    render(<ProfileIcon size="xxlarge" alt="xxlarge" src={DefaultIcon} />);
    expect(screen.getByTestId("profileIcon")).toBeInTheDocument();
  });
  test("Should correctly render XLarge ProfileIcon", async () => {
    render(<ProfileIcon size="xlarge" alt="xlarge" src={DefaultIcon} />);
    expect(screen.getByTestId("profileIcon")).toBeInTheDocument();
  });
  test("Should correctly render Large ProfileIcon", async () => {
    render(<ProfileIcon size="large" alt="large" src={DefaultIcon} />);
    expect(screen.getByTestId("profileIcon")).toBeInTheDocument();
  });
  test("Should correctly render Normal ProfileIcon", async () => {
    render(<ProfileIcon size="normal" alt="normal" src={DefaultIcon} />);
    expect(screen.getByTestId("profileIcon")).toBeInTheDocument();
  });
  test("Should correctly render Small ProfileIcon", async () => {
    render(<ProfileIcon size="small" alt="small" src={DefaultIcon} />);
    expect(screen.getByTestId("profileIcon")).toBeInTheDocument();
  });
});
