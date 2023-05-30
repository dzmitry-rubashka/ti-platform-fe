import styled from "styled-components";
import theme from "theme";

export const ScheduleWrapper = styled.div`
  padding: 20px 50px 0;
  border: 1px solid ${theme.colors.black};
  max-width: 1000px;
  width: 100%;
  margin: 50px auto 0;
  text-align: center;
`;

export const ScheduleText = styled.p`
  text-align: center;
`;
export const ScheduleHeader = styled.div`
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  padding: 20px 50px;
`;

export const ScheduleTitle = styled.p`
  width: 250px;
`;

export const ScheduleIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ScheduleDate = styled.table`
  align-items: center;
`;

export const ScheduleDay = styled.th`
  width: 200px;
  height: 60px;
  border: 1px solid ${theme.colors.black};
  padding: 10px;
`;

export const ScheduleTime = styled.td`
  border: 1px solid ${theme.colors.black};
  padding: 10px;
  height: 60px;
`;

export const BookedTimeBlock = styled.td`
  border: 1px solid ${theme.colors.black};
  padding: 10px;
  height: 60px;
`;
