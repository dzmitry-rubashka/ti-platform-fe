import React from "react";
import { MentionProps } from "./types";
import * as S from "./styles";

const Mention: React.FC<MentionProps> = ({ type, username }) => (
  <S.Wrapper type={type}>{`@${username}`}</S.Wrapper>
);

export default Mention;
