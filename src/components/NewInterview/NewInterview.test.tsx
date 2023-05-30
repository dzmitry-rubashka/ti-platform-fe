import { fireEvent, render, screen } from "@testing-library/react";
import NewInterview from ".";

describe("NewInterview component testing", () => {
  test("Should correctly render NewInterview component", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    expect(screen.getByTestId("user-interview")).toBeInTheDocument();
  });

  test("Should correctly click on button", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const button = screen.getByTestId("notes");
    const click = fireEvent.click(button);
    expect(click).toEqual(true);
  });
  test("Should correctly render button", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const button = screen.getByText("HR Notes");
    const click = fireEvent.click(button);
    expect(click).toEqual(false);
  });

  test("Should correctly render Technologies", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    expect(screen.getByText("Technologies")).toBeInTheDocument();
  });
  test("Should correctly click on Technologies Dropdown", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const dropdown = screen.getByTestId("technologies-dropdown");
    const click = fireEvent.click(dropdown);
    expect(click).toEqual(true);
  });
  test("Should correctly click on Dropdown", () => {
    render(
      <NewInterview interviewers={["Volha"]} technologies={["JavaScript"]} />
    );
    const dropdown = screen.getByText("Technologies");
    fireEvent.click(dropdown);
    const checkbox = screen.getByTestId("JavaScript");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("Should correctly render Interviewers", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    expect(screen.getByText("Interviewers")).toBeInTheDocument();
  });
  test("Should correctly click on Interviewers Dropdown", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const dropdown = screen.getByTestId("interviewers-dropdown");
    const click = fireEvent.click(dropdown);
    expect(click).toEqual(true);
  });
  test("Should correctly click on Dropdown", () => {
    render(
      <NewInterview
        interviewers={["Yanina Kamianetskaya"]}
        technologies={["JS"]}
      />
    );
    const dropdown = screen.getByText("Interviewers");
    fireEvent.click(dropdown);
    const checkbox = screen.getByTestId("Yanina Kamianetskaya");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  test("Should correctly type on Name Input", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const input = screen.getByPlaceholderText("Candidate Name");
    expect(screen.getByPlaceholderText("Candidate Name")).toHaveValue("");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(screen.getByPlaceholderText("Candidate Name")).toHaveValue("hello");
  });
  test("Should correctly type on Level Input", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const input = screen.getByPlaceholderText("Expected Level");
    expect(screen.getByPlaceholderText("Expected Level")).toHaveValue("");
    fireEvent.change(input, { target: { value: "world" } });
    expect(screen.getByPlaceholderText("Expected Level")).toHaveValue("world");
  });
  test("Should correctly type on Textarea", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const textArea = screen.getByTestId("textarea");
    expect(screen.getByTestId("textarea")).toHaveValue("");
    fireEvent.change(textArea, { target: { value: "world" } });
    expect(screen.getByTestId("textarea")).toHaveValue("world");
  });
  test("Should correctly render form", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const form = screen.getByTestId("form");
    fireEvent.submit(form);
  });
  test("Should correctly click on submit button", () => {
    render(<NewInterview interviewers={["Volha"]} technologies={["JS"]} />);
    const button = screen.getByText("Submit");
    const click = fireEvent.click(button);
    expect(click).toEqual(true);
  });
});
