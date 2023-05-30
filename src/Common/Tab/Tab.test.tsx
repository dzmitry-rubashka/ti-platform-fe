import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tab from ".";

describe("Tab component testing", () => {
  test("Should correctly render tab container", () => {
    render(
      <Tab
        options={[
          { name: "HR Notes", component: <div>content 1</div> },
          { name: "CV", component: <div>content 2</div> },
          { name: "TechFeedback", component: <div>content 3</div> },
          { name: "FinalFeedback", component: <div>content 4</div> },
        ]}
      />
    );
    expect(screen.getByTestId("tab-container")).toBeInTheDocument();
  });
  test("Should correctly render tab item", () => {
    render(
      <Tab options={[{ name: "HR Notes", component: <div>content 1</div> }]} />
    );
    expect(screen.getByTestId("tab-item")).toBeInTheDocument();
  });
  test("Should correctly render button", () => {
    render(
      <Tab options={[{ name: "HR Notes", component: <div>content 1</div> }]} />
    );
    const element = screen.getByRole("button");
    expect(element).not.toHaveFocus();
    userEvent.click(element);
    expect(element).toHaveFocus();
  });
});
