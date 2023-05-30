import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "store/store";
import { Provider } from "react-redux";
import Users from ".";

describe("Users component", () => {
  test("should correctly render names text", async () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    setTimeout(() => {
      expect(screen.getByText(/Siarhei Korbut/i)).toBeInTheDocument();
      expect(screen.getByText(/Dzianis Pryshchep/i)).toBeInTheDocument();
    }, 0);
  });

  test("should correctly add new user", async () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    const element = screen.getByTestId("add");
    userEvent.click(element);
    expect(screen.getByText(/test name/i)).toBeInTheDocument();
  });

  test("should correctly remove user", async () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    const element = screen.getByTestId("remove");
    userEvent.click(element);
    setTimeout(() => {
      expect(screen.getByText(/Siarhei Korbut/i)).toBeInTheDocument();
      expect(screen.getByText(/Dzianis Pryshchep/i)).toBeInTheDocument();
    }, 0);
  });
});
