import { getMondayDate, getSundayDate, formatDateRange } from "./date.utils";

describe("CandidateInfo component", () => {
  test("should correctly returns date format (AM))", () => {
    expect(
      formatDateRange({
        startDate: new Date(1660284000000),
        endDate: new Date(1660294800000),
      })
    ).toBe("Aug 12 6:0 - 9:0 GMT");
  });

  test("should correctly returns date format (AM-PM)", () => {
    expect(
      formatDateRange({
        startDate: new Date(1660994700000),
        endDate: new Date(1660998300000),
      })
    ).toBe("Aug 20 11:25 - 12:25 GMT");
  });

  test("should correctly returns date format (PM)", () => {
    expect(
      formatDateRange({
        startDate: new Date(1660328700000),
        endDate: new Date(1660339500000),
      })
    ).toBe("Aug 12 18:25 - 21:25 GMT");
  });

  test("should correctly returns monday of week", () => {
    expect(getMondayDate(new Date("2022.08.24")).getDate()).toBe(22);
  });

  test("should correctly returns monday of week if active date is monday", () => {
    expect(getMondayDate(new Date("2022.08.22")).getDate()).toBe(22);
  });

  test("should correctly returns monday of week if active date is sunday", () => {
    expect(getMondayDate(new Date("2022.08.28")).getDate()).toBe(22);
  });

  test("should correctly returns sunday of week", () => {
    expect(getSundayDate(new Date("2022.08.24")).getDate()).toBe(28);
  });

  test("should correctly returns sunday of week if active date is monday", () => {
    expect(getSundayDate(new Date("2022.08.22")).getDate()).toBe(28);
  });

  test("should correctly returns sunday of week if active date is sunday", () => {
    expect(getSundayDate(new Date("2022.08.28")).getDate()).toBe(28);
  });
});
