import { render, screen } from "@testing-library/react";
import Modal from ".";

describe("Modal component", () => {
  test("Should correctly renders Warning title for warning type", () => {
    render(
      <Modal
        type="warning"
        size="medium"
        title="Warning"
        text="This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks. If you find that the number of required elements for your design are making the dialog excessively large, then try a different design solution."
        textButton="Warning"
      />
    );
    const linkElement = screen.getByTestId("warning-button");
    expect(linkElement).toHaveTextContent("Warning");
  });
  test("Should correctly renders Warning Modal", () => {
    render(
      <Modal
        type="warning"
        size="medium"
        title="Warning"
        text="This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks."
        textButton="Warning"
      />
    );
    expect(screen.getByTestId("warning-button")).toBeInTheDocument();
  });
  test("Should correctly renders Danger Modal", () => {
    render(
      <Modal
        type="danger"
        size="medium"
        title="Danger"
        text="This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks."
        textButton="Danger"
      />
    );
    expect(screen.getByTestId("warning-button")).toBeInTheDocument();
  });
  test("Should correctly renders Scrollable Modal", () => {
    render(
      <Modal
        type="scrollable"
        size="medium"
        title="Scrollable"
        text="This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks."
        textButton="Scrollable"
      />
    );
    expect(screen.getByTestId("warning-button")).toBeInTheDocument();
  });
  test("Should correctly renders Default Modal", () => {
    render(
      <Modal
        type="default"
        size="medium"
        title="Default"
        text="This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks."
        textButton="Default"
      />
    );
    expect(screen.getByTestId("warning-button")).toBeInTheDocument();
  });
});
