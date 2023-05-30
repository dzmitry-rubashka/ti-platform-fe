import React, { useState } from "react";
import ArrowLeft from "assets/icons/arrow-left.png";
import ArrowRight from "assets/icons/arrow-right.png";
import {
  months,
  weekDays,
  numberDaysInWeek,
  time,
} from "utils/date/date.constants";
import BookedTime from "components/BookedTime";
import { useTranslation } from "react-i18next";
import { getMondayDate, getSundayDate } from "utils/date/date.utils";
import * as S from "./styles";
import { ICalendarProps } from "./types";

const Calendar: React.FC<ICalendarProps> = ({
  date,
  slots,
}: ICalendarProps) => {
  const { t } = useTranslation();
  const weekDaysLocal = weekDays.map((day) =>
    day === "" ? day : t(`calendar.days.${day.toLowerCase()}`)
  );
  const monthsLocal = months.map((month) =>
    t(`calendar.months.${month.toLowerCase()}`)
  );
  const [activeDate, setActiveDate] = useState(date);
  const [monday, setMonday] = useState(getMondayDate(activeDate).getDate());
  const [sunday, setSunday] = useState(getSundayDate(activeDate).getDate());
  const currentYear = activeDate.getFullYear();
  const currentMonth = activeDate.getMonth();

  const changeWeek = (n: number) => {
    const newActiveDate = new Date(
      activeDate.setDate(activeDate.getDate() + n)
    );
    setActiveDate(newActiveDate);
    setMonday(getMondayDate(newActiveDate).getDate());
    setSunday(getSundayDate(newActiveDate).getDate());
  };

  const getDaysOfWeek = () => {
    const result = [];
    for (let i = 0; i <= 7; i += 1) {
      result.push(new Date(currentYear, currentMonth, monday + i));
    }
    return result;
  };

  const arrayWithDayAndDate = Object.entries(
    getDaysOfWeek().reduce(
      (obj, value, index) => ({ ...obj, [weekDaysLocal[index]]: value }),
      {}
    )
  );
  return (
    <S.ScheduleWrapper>
      <S.ScheduleHeader>
        <S.ScheduleIcon
          src={ArrowLeft}
          alt="Arrow Left"
          onClick={() => changeWeek(-numberDaysInWeek)}
        />
        <S.ScheduleTitle data-testid="titleOfDate">
          {monthsLocal[getMondayDate(activeDate).getMonth()]} {monday} -{" "}
          {monthsLocal[getSundayDate(activeDate).getMonth()]} {sunday}
        </S.ScheduleTitle>
        <S.ScheduleIcon
          src={ArrowRight}
          alt="Arrow Right"
          onClick={() => changeWeek(+numberDaysInWeek)}
        />
      </S.ScheduleHeader>
      <S.ScheduleDate>
        <thead>
          <tr>
            {arrayWithDayAndDate.map((el) => (
              <S.ScheduleDay key={el}>{el[0]}</S.ScheduleDay>
            ))}
          </tr>
        </thead>
        <tbody>
          {time.map((el) => (
            <tr key={el}>
              <S.ScheduleTime>{el}</S.ScheduleTime>
              {arrayWithDayAndDate.map(
                (item, index) =>
                  Number(index) !== Number(7) && (
                    <S.BookedTimeBlock key={item}>
                      {slots
                        .sort(
                          (a, b) =>
                            Number(a.start.substr(3, 4)) -
                            Number(b.start.substr(3, 4))
                        )
                        .map(
                          (slot: any) =>
                            [item[1]].toString() ===
                              new Date(slot.day).toString() &&
                            el.substr(0, 2) === slot.start.substr(0, 2) && (
                              <BookedTime
                                key={slot.id}
                                id={slot.id}
                                start={slot.start}
                                finish={slot.finish}
                                name={slot.name}
                              />
                            )
                        )}
                    </S.BookedTimeBlock>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </S.ScheduleDate>
    </S.ScheduleWrapper>
  );
};
export default Calendar;
