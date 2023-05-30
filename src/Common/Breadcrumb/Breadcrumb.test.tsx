import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from ".";

const steps = [
  { id: 1, name: "page 1", path: "/1" },
  { id: 2, name: "page 2", path: "/2" },
  { id: 3, name: "page 3", path: "/3" },
];

describe("Breadcrumb component", () => {
  test("should correctly render breadcrumb text", async () => {
    render(
      <BrowserRouter>
        <Breadcrumb steps={steps} />
      </BrowserRouter>
    );
    expect(screen.getByText(/page 1/i)).toBeInTheDocument();
    expect(screen.getByText(/page 2/i)).toBeInTheDocument();
    expect(screen.getByText(/page 3/i)).toBeInTheDocument();
  });

  test("should render the correct amount of anchor elements", async () => {
    render(
      <BrowserRouter>
        <Breadcrumb steps={steps} />
      </BrowserRouter>
    );

    const anhorElements = await screen.findAllByRole("link");
    expect(anhorElements.length).toBe(steps.length);
  });
});
