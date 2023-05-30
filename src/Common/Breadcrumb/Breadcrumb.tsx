import React from "react";
import { BreadcrumbProps } from "./types";
import { isLast } from "./utils";
import * as S from "./styles";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ steps }) => (
  <S.StepsWrapper>
    {steps.map((item, index, array) => (
      <S.StepItemWrapper key={item.id}>
        <S.Link to={item.path}>{item.name}</S.Link>
        {isLast(index, array) ? "" : <S.Separator>/</S.Separator>}
      </S.StepItemWrapper>
    ))}
  </S.StepsWrapper>
);

export default Breadcrumb;
