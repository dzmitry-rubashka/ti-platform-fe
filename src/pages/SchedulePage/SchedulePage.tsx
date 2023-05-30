import React from "react";
import Calendar from "components/Calendar";
import { BookedTimeSlot } from "components/Calendar/mock-data";
import * as S from "./styles";

const SchedulePage: React.FC = () => (
  <S.ScheduleWrapper>
    <Calendar date={new Date()} slots={BookedTimeSlot} />
  </S.ScheduleWrapper>
);

export default SchedulePage;
