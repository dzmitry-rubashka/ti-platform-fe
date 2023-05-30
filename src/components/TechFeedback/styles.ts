import styled from "styled-components";
import theme from "theme";

export const Wrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FeedbackWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

export const TextArea = styled.textarea`
  padding: 12px 20px;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  border: 2px solid ${theme.colors.downriver13};
  border-radius: 4px;
  font-family: ${theme.fonts.SFProText};
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeight.normal};
  background-color: ${theme.colors.downriver04};
  color: ${theme.colors.downriver};
  resize: none;
  outline: none;
`;

export const Title = styled.p`
  font-family: ${theme.fonts.SFProText};
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.small};
  color: ${theme.colors.downriver};
`;

export const StarsWrapper = styled.div`
  display: flex;
  margin: 0 10px;
`;
