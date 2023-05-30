export interface TabInterface {
  name: string;
  component: JSX.Element;
}

export interface TabProps {
  options: TabInterface[];
}
