import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  margin-right: 16px;
  outline: none;
  cursor: pointer;
  ${(props: { isHidden: boolean }) =>
    props.isHidden === true
      ? `
      transform: rotate(180deg);
    `
      : `
    transform: rotate(0);
    `}
`;
