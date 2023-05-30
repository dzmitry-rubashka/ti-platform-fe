import React from "react";
import * as S from "./styles";
import { IBookedTimeProps } from "./types";

const BookedTime: React.FC<IBookedTimeProps> = ({
  start,
  finish,
  name,
}: IBookedTimeProps) => (
  <S.BookedTime data-testid="bookedTime">
    <p>
      {start} - {finish}
    </p>
    <p>{name}</p>
  </S.BookedTime>
);

export default BookedTime;
