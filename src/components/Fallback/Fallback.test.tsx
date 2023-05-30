import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "localization/i18n";
import { BrowserRouter } from "react-router-dom";
import Fallback from ".";

describe("Fallback component", () => {
  test("should correctly render fallback text", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Fallback />
        </BrowserRouter>
      </I18nextProvider>
    );
    expect(
      screen.getByText(/Something went wrong, please try to reload page./i)
    ).toBeInTheDocument();
  });
});
