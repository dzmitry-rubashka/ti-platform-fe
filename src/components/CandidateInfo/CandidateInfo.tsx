import React from "react";
import { useTranslation } from "react-i18next";
import { formatDateRange } from "utils/date/date.utils";
import { CandidateInfoProps } from "./types";
import * as S from "./styles";

const CandidateInfo: React.FC<CandidateInfoProps> = ({
  name,
  technologies,
  expectedLevel,
  interviewers,
  date,
}) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper data-testid="candidate-info">
      <S.Title>{name}</S.Title>
      <S.Subtitle>
        {t("interviewInfo.technologies")}:{" "}
        <span>{technologies.join(", ")}</span>
      </S.Subtitle>
      <S.Subtitle>
        {t("interviewInfo.expectedLevel")}: <span>{expectedLevel}</span>
      </S.Subtitle>
      <S.Subtitle>
        {t("interviewInfo.interviewers")}:{" "}
        <span>{interviewers.join(", ")}</span>
      </S.Subtitle>
      <S.Subtitle>
        {t("interviewInfo.date")}: <span>{formatDateRange(date)}</span>
      </S.Subtitle>
    </S.Wrapper>
  );
};

export default CandidateInfo;
