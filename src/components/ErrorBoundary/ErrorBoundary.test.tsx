import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "localization/i18n";
import ErrorBoundary from ".";

describe("ErrorBoundary component", () => {
  test("should correctly render fallback text", async () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ErrorBoundary>
            <ThrowError />
          </ErrorBoundary>
        </BrowserRouter>
      </I18nextProvider>
    );
    expect(
      screen.getByText(/Something went wrong, please try to reload page./i)
    ).toBeInTheDocument();
  });
});
