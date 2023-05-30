export interface ISlotProps {
  id: number;
  day: string;
  start: string;
  finish: string;
  name: string;
}

export interface ICalendarProps {
  date: Date;
  slots: ISlotProps[];
}
