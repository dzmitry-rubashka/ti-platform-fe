import React, { useState, ChangeEvent } from "react";
import theme from "theme";
import StarIcon from "assets/icons/StarIcon";
import { TechFeedbackProps } from "./types";
import * as S from "./styles";

const TechFeedback: React.FC<TechFeedbackProps> = ({ technology }) => {
  const stars = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState<number>(0);
  const [hoverRate, setHoverRate] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleClick = (value: number) => {
    setRate(value);
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverRate(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverRate(0);
  };

  const handleFeedbackChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.Title>{technology}</S.Title>
      <S.FeedbackWrapper>
        <S.TextArea
          data-testid="textarea"
          placeholder="Feedback"
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <S.StarsWrapper>
          {stars.map((index) => (
            <StarIcon
              fill={
                (hoverRate || rate) >= index
                  ? theme.colors.webOrange
                  : theme.colors.downriver13
              }
              dataTestId={`star-button-${index}`}
              size="25px"
              key={index}
              handleClick={() => handleClick(index)}
              handleMouseOver={() => handleMouseOver(index)}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </S.StarsWrapper>
      </S.FeedbackWrapper>
    </S.Wrapper>
  );
};

export default TechFeedback;
