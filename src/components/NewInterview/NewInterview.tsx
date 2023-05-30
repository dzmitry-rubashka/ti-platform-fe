import React, { useState } from "react";
import Dropdown from "Common/Dropdown";
import Button from "Common/Button";
import Tooltip from "Common/Tooltip";
import Input from "Common/Input";
import { UserInterviewProps } from "./types";
import * as S from "./styles";

const NewInterview: React.FC<UserInterviewProps> = ({
  technologies,
  interviewers,
}) => {
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputLevelValue, setInputLevelValue] = useState<string>("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedInterviewers, setSelectedInterviewers] = useState<string[]>(
    []
  );
  const [notes, setNotes] = useState("");
  const onChooseTechnologies = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.checked &&
      !selectedTechnologies.includes(event.target.value)
    ) {
      selectedTechnologies.push(event.target.value);
      setSelectedTechnologies(selectedTechnologies);
    } else {
      const newCheckedTechnologiesItems = selectedTechnologies.filter(
        (item) => item !== event.target.value
      );
      setSelectedTechnologies(newCheckedTechnologiesItems);
    }
  };
  const onChooseInterviewers = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.checked &&
      !selectedInterviewers.includes(event.target.value)
    ) {
      selectedInterviewers.push(event.target.value);
      setSelectedInterviewers(selectedInterviewers);
    } else {
      const newCheckedInterviewersItems = selectedInterviewers.filter(
        (item) => item !== event.target.value
      );
      setSelectedInterviewers(newCheckedInterviewersItems);
    }
  };
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };
  const onInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(event.target.value);
  };
  const onInputLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLevelValue(event.target.value);
  };
  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line no-console
    console.log("Candidate Name:", inputNameValue);
    // eslint-disable-next-line no-console
    console.log("Expected Level:", inputLevelValue);
    // eslint-disable-next-line no-console
    console.log("Technologies:", selectedTechnologies);
    // eslint-disable-next-line no-console
    console.log("Interviewers:", selectedInterviewers);
    // eslint-disable-next-line no-console
    console.log("HR Notes:", notes);
    event.preventDefault();
  };
  const isFormValid =
    !selectedTechnologies[0] ||
    !selectedInterviewers[0] ||
    !inputNameValue ||
    !inputLevelValue ||
    !notes ||
    inputNameValue[0] === " " ||
    inputLevelValue[0] === " " ||
    notes[0] === " ";
  return (
    <S.Wrapper data-testid="user-interview">
      <form onSubmit={onSubmitForm} data-testid="form">
        <S.GeneralInfo>
          <S.InputsWrapper>
            <Tooltip tooltipText="Candidate name is required">
              <S.Input>
                <Input
                  id="name"
                  data-testid="name-input"
                  onChange={onInputName}
                  type="text"
                  placeholder="Candidate Name"
                  required
                  title=""
                  icon=""
                />
              </S.Input>
            </Tooltip>
            <Tooltip tooltipText="Expected level is required">
              <S.Input>
                <Input
                  data-testid="level-input"
                  onChange={onInputLevel}
                  type="text"
                  placeholder="Expected Level"
                  required
                  title=""
                  icon=""
                />
              </S.Input>
            </Tooltip>
          </S.InputsWrapper>
          <S.Dropdown
            onClick={onChooseTechnologies}
            data-testid="technologies-dropdown"
          >
            <Dropdown
              data-testid="dropdown"
              type="checkbox"
              options={technologies}
              title="Technologies"
              selectedItems={selectedTechnologies}
            />
            <S.ListOfItems>
              {selectedTechnologies.map((technology) => (
                <S.ChosenItem key={technology}>{technology}</S.ChosenItem>
              ))}
            </S.ListOfItems>
          </S.Dropdown>
          <S.Dropdown
            onClick={onChooseInterviewers}
            data-testid="interviewers-dropdown"
          >
            <Dropdown
              data-testid="interviewers"
              type="checkbox"
              options={interviewers}
              title="Interviewers"
              selectedItems={selectedInterviewers}
            />
            <S.ListOfItems>
              {selectedInterviewers.map((interviewer) => (
                <S.ChosenItem key={interviewer}>{interviewer}</S.ChosenItem>
              ))}
            </S.ListOfItems>
          </S.Dropdown>
        </S.GeneralInfo>
        <S.Notes data-testid="notes">
          <Button
            type="button"
            size="small"
            variant="light"
            onClick={onClick}
            data-testid="notes-button"
          >
            HR Notes
          </Button>
          <S.Textarea onChange={handleNotesChange} data-testid="textarea" />
        </S.Notes>
        <S.Submit>
          {isFormValid ? (
            <Button size="small" variant="light" disabled>
              Submit
            </Button>
          ) : (
            <Button
              size="small"
              variant="light"
              type="submit"
              data-testid="button"
            >
              Submit
            </Button>
          )}
        </S.Submit>
      </form>
    </S.Wrapper>
  );
};

export default NewInterview;
