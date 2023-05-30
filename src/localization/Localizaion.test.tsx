import { fireEvent, render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Localization from ".";
import enTranslations from "./translations/en/translation.json";
import ruTranslations from "./translations/ru/translation.json";

const enTranslation = JSON.parse(JSON.stringify(enTranslations));
const ruTranslation = JSON.parse(JSON.stringify(ruTranslations));

describe("Localization component testing", () => {
  test("Should correctly render Localization example", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Localization />
      </I18nextProvider>
    );
    expect(screen.getByTestId("localization-example")).toBeInTheDocument();
  });
  test("Should correctly render EN button", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Localization />
      </I18nextProvider>
    );
    const button = screen.getByText(/EN/i);
    expect(button).toBeInTheDocument();
    const click = fireEvent.click(button);
    expect(click).toEqual(true);
  });
  test("Should correctly render RU button", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Localization />
      </I18nextProvider>
    );
    const button = screen.getByText(/RU/i);
    expect(button).toBeInTheDocument();
    const click = fireEvent.click(button);
    expect(click).toEqual(true);
  });
  test("EN and RU translations files should have the same structure", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Localization />
      </I18nextProvider>
    );
    // @ts-ignore
    const recursiveKeys = (obj, result, arr) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          result.push(key);
          arr.push({ obj: obj[key], root: `${key}.` });
        } else {
          result.push(key);
        }
      });
      if (arr.length > 0) {
        const todoItem = arr.pop();
        return recursiveKeys(todoItem.obj, result, arr);
      }
      return result;
    };
    const getKeys = (obj: object) => recursiveKeys(obj, [], []);
    const isStructureEqual = (obj1: object, obj2: object) => {
      const arrOfKeys1 = getKeys(obj1).sort();
      const arrOfKeys2 = getKeys(obj2).sort();

      if (arrOfKeys1.length !== arrOfKeys2.length) return false;

      return !arrOfKeys1.find(
        (item: string, index: number) => arrOfKeys2[index] !== item
      );
    };
    const result = isStructureEqual(enTranslation, ruTranslation);
    expect(result).toEqual(true);
  });
});
