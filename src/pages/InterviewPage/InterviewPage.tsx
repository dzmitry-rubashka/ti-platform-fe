import React from "react";
import NewInterview from "components/NewInterview";
import * as S from "./styles";

const InterviewPage: React.FC = () => (
  <S.InterviewWrapper>
    <S.InterviewTitle>Empty calendar</S.InterviewTitle>
    <NewInterview
      technologies={[
        "JavaScript",
        "Java",
        "TypeScript",
        "Node.js",
        "Python",
        "C#",
        "C++",
        "C",
        "PHP",
        "Swift",
        "Kotlin",
        "Go",
        "Ruby",
        "Rust",
        "Elixir",
        "SQL",
        "Delphi",
      ]}
      interviewers={[
        "Yanina Kamianetskaya",
        "Volha Novikava",
        "Dzianis Pryshchep",
      ]}
    />
  </S.InterviewWrapper>
);

export default InterviewPage;
