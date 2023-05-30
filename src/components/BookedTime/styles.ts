import styled from "styled-components";
import theme from "theme";

export const BookedTime = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.scienceBlue};
  background-color: ${theme.colors.downriver08};
  border-radius: 10px;
  padding: 5px;
  text-align: left;
  cursor: pointer;
  font-size: ${theme.fontSizes.smallxs};
  line-height: ${theme.lineHeight.smallxs};
`;
