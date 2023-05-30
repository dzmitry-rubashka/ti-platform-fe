import { fireEvent, render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "localization/i18n";
import { BookedTimeSlot } from "./mock-data";
import Calendar from ".";

describe("Calendar component", () => {
  test("renders Calendar component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Calendar date={new Date()} slots={BookedTimeSlot} />
      </I18nextProvider>
    );
    const linkMonday = screen.getByText(/Monday/i);
    expect(linkMonday).toBeInTheDocument();
  });

  test("renders date in component", () => {
    render(<Calendar date={new Date()} slots={BookedTimeSlot} />);
    const linkElement = screen.getByAltText("Arrow Left");
    fireEvent.click(linkElement);
    const dateElement = screen.getByTestId("titleOfDate");
    expect(dateElement).toBeInTheDocument();
  });

  test("renders date in component", () => {
    render(<Calendar date={new Date()} slots={BookedTimeSlot} />);
    const linkElement = screen.getByAltText("Arrow Right");
    fireEvent.click(linkElement);
    const dateElement = screen.getByTestId("titleOfDate");
    expect(dateElement).toBeInTheDocument();
  });

  test("renders correct date in october", () => {
    render(<Calendar date={new Date("2022.10.31")} slots={BookedTimeSlot} />);
    const dayInWeek = screen.getByText(/October 31 - November 6/i);
    expect(dayInWeek).toBeInTheDocument();
  });
  test("renders correct date in week in february", () => {
    render(<Calendar date={new Date("2023.02.31")} slots={BookedTimeSlot} />);
    const dayInWeek = screen.getByText(/February 27 - March 5/i);
    expect(dayInWeek).toBeInTheDocument();
  });
});
