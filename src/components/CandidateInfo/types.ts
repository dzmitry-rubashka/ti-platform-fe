export interface IDate {
  startDate: Date;
  endDate: Date;
}

export interface CandidateInfoProps {
  name: string;
  technologies: string[];
  expectedLevel: string;
  interviewers: string[];
  date: IDate;
}
