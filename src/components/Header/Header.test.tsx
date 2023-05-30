import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "localization/i18n";
import { BrowserRouter } from "react-router-dom";
import Header from ".";

test("renders Header component", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </I18nextProvider>
  );
  const linkElement = screen.getByText(/User Profile/i);
  expect(linkElement).toBeInTheDocument();
});
