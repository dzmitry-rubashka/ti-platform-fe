import React from "react";
import Tab from "Common/Tab";
import CandidateInfo from "components/CandidateInfo";
import TechFeedback from "components/TechFeedback";
import { candidateInfo } from "./mock-data";
import * as S from "./styles";

const InterviewDetailsPage: React.FC = () => {
  const { name, technologies, expectedLevel, interviewers, date } =
    candidateInfo;
  return (
    <S.Wrapper>
      <CandidateInfo
        name={name}
        technologies={technologies}
        expectedLevel={expectedLevel}
        interviewers={interviewers}
        date={date}
      />
      <S.TabsWrapper>
        <Tab
          options={[
            { name: "HR Notes", component: <div>content 1</div> },
            { name: "CV", component: <div>content 2</div> },
            {
              name: "TechFeedback",
              component: (
                <>
                  {technologies.map((technology) => (
                    <TechFeedback key={technology} technology={technology} />
                  ))}
                </>
              ),
            },
            { name: "FinalFeedback", component: <div>content 4</div> },
          ]}
        />
      </S.TabsWrapper>
    </S.Wrapper>
  );
};

export default InterviewDetailsPage;
