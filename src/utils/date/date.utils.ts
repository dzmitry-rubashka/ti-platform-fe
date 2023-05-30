import { IDate } from "components/CandidateInfo/types";

export const formatDateRange = (date: IDate) => {
  const { startDate, endDate } = date;
  const month = startDate.toLocaleString("en-US", { month: "short" });
  const day = startDate.getDate();
  const hoursStart = startDate.getUTCHours();
  const minutesStart = startDate.getUTCMinutes();
  const hoursEnd = endDate.getUTCHours();
  const minutesEnd = startDate.getUTCMinutes();

  return `${month} ${day} ${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd} GMT`;
};

export const getMondayDate = (date: Date) =>
  new Date(
    new Date(date).setDate(
      date.getDate() - date.getDay() + Number(date.getDay() === 0 ? -6 : 1)
    )
  );

export const getSundayDate = (date: Date) =>
  new Date(
    new Date(date).setDate(
      date.getDate() - date.getDay() + Number(date.getDay() !== 0 && 7)
    )
  );
