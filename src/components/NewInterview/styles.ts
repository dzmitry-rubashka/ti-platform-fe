import styled from "styled-components";
import theme from "theme";

export const Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 20px;
  border: 1px solid ${theme.colors.black};
  margin: 50px auto;
  text-align: left;
  position: relative;
`;

export const GeneralInfo = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid ${theme.colors.black};
  text-align: left;
  margin-bottom: 15px;
  position: relative;
`;

export const Notes = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid ${theme.colors.black};
  text-align: left;
`;

export const Dropdown = styled.div`
  padding-left: 10px;
  display: flex;
`;

export const Input = styled.div`
  padding: 0 10px;
`;

export const Textarea = styled.textarea`
  font-size: ${theme.fontSizes.small};
  display: block;
  width: 100%;
  height: 150px;
  margin: 10px 0 30px;
  padding: 10px;
  resize: none;
`;

export const Submit = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

export const ListOfItems = styled.div`
  display: flex;
`;

export const InputsWrapper = styled.div`
  display: flex;
`;

export const ChosenItem = styled.div`
  position: relative;
  display: flex;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 3px;
  background-color: ${theme.colors.downriver31};
  color: ${theme.colors.white};
  height: 32px;
  font-size: ${theme.fontSizes.small};
  align-items: center;
`;
