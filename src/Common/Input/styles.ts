import styled from "styled-components";
import theme from "theme";
import { IInputProps } from "./types";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapperWithIcon = styled.div`
  position: relative;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 11px;
`;

export const Input = styled.input<IInputProps>`
  padding: 10px 10px 10px 38px;
  background-color: ${theme.colors.athensGray};
  border: 2px solid ${theme.colors.mischka};
  border-radius: 3px;
  outline: none;
  color: ${theme.colors.nileBlue};
  width: 100%;

  ::placeholder {
    font-style: ${theme.fontStyle.normal};
    font-weight: ${theme.fontWeight.regular};
    font-size: ${theme.fontSizes.small};
    line-height: ${theme.lineHeight.small};
    color: ${theme.colors.slateGray};
  }

  :hover {
    background-color: ${theme.colors.athensGray};
  }

  :focus {
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.dodgerBlue};
  }

  ${(props: { disabled: boolean }) =>
    props.disabled &&
    `
    background-color: ${theme.colors.athensGray};
    border: none;
    color: ${theme.colors.hitGray};
    `}

  ${(props: { error: boolean }) =>
    props.error &&
    `
    border-color: ${theme.colors.cloudBurst};
    `}
`;

export const InputLabel = styled.p<IInputProps>`
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.xsSmall};
  line-height: ${theme.lineHeight.xsSmall};
  display: flex;
  align-items: center;
  color: ${theme.colors.slateGray};
  margin-top: 4px;

  ${(props: { error: boolean }) =>
    props.error &&
    `
    color: ${theme.colors.cloudBurst};
    margin-left: 2px;
    `}

  ${(props: { success: boolean }) =>
    props.success &&
    `
    color: ${theme.colors.deepSea};
    margin-left: 2px;
    `}
`;
