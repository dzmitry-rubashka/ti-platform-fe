import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CandidateInfo from ".";

describe("CandidateInfo component", () => {
  test("should correctly renders text", async () => {
    render(
      <BrowserRouter>
        <CandidateInfo
          name="Nastassia Savenka"
          technologies={["nodeJS, JavaScript"]}
          expectedLevel="Middle"
          interviewers={[
            "Dzianis Pryshchep",
            "Veronika Radkevich",
            "Dzmitry Rubashka",
          ]}
          date={{
            startDate: new Date(1660994700000),
            endDate: new Date(1660998300000),
          }}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/Nastassia Savenka/i)).toBeInTheDocument();
    expect(screen.getByText(/nodeJS, JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Middle/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Dzianis Pryshchep, Veronika Radkevich, Dzmitry Rubashka/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Aug 20 11:25 - 12:25 GMT/i)).toBeInTheDocument();
  });
});
