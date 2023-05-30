import { render, screen } from "@testing-library/react";
import App from ".";

test("header is presented on the page", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
});
