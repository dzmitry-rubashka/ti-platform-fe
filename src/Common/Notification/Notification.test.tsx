import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getColorByType, getBackgroundColorByType } from "./utils";
import Notification from ".";

describe("Notification component", () => {
  test("should correctly renders text for info notification", async () => {
    render(
      <Notification
        type="info"
        variant="light"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for warning notification", async () => {
    render(
      <Notification
        type="warning"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for error notification", async () => {
    render(
      <Notification
        type="error"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for success notification", async () => {
    render(
      <Notification
        type="success"
        variant="light"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly returns color", () => {
    expect(getColorByType("info")).toBe("#FFFFFF");
  });

  test("should correctly returns background color", () => {
    expect(getBackgroundColorByType("info")).toBe("#42526E");
  });

  test("should correctly returns color", () => {
    expect(getColorByType("warning")).toBe("#253858");
  });

  test("should correctly returns background color", () => {
    expect(getBackgroundColorByType("success")).toBe("#00875A");
  });

  test("should correctly hides nodes", async () => {
    render(
      <Notification
        type="success"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    const element = screen.getByTestId("arrow-button");
    userEvent.click(element);
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
  });

  test("should correctly renders text for light info notification", async () => {
    render(
      <Notification
        type="info"
        variant="light"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for colored info notification", async () => {
    render(
      <Notification
        type="info"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for colored warning notification", async () => {
    render(
      <Notification
        type="warning"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for light warning notification", async () => {
    render(
      <Notification
        type="warning"
        variant="light"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for colored error notification", async () => {
    render(
      <Notification
        type="error"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for light error notification", async () => {
    render(
      <Notification
        type="error"
        variant="light"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for light success notification", async () => {
    render(
      <Notification
        type="success"
        variant="light"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });

  test("should correctly renders text for colored success notification", async () => {
    render(
      <Notification
        type="success"
        variant="colored"
        title="Hey, did you know..."
        description="This alert needs your attention, but its not super important."
        confirmButtonTitle="Understood"
        rejectButtonTitle="No thanks"
        confirmButtonHandleClick={() => {}}
        rejectButtonHandleClick={() => {}}
      />
    );
    expect(screen.getByText(/Hey, did you know.../i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /This alert needs your attention, but its not super important./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Understood/i)).toBeInTheDocument();
    expect(screen.getByText(/No thanks/i)).toBeInTheDocument();
  });
});
