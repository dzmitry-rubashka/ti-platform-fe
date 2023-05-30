import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import theme from "theme";
import { store } from "store/store";
import { Provider } from "react-redux";
import App from "./components/App/App";
import "./index.css";
import i18n from "./localization/i18n";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
