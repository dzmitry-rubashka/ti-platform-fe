export interface IModalProps {
  title: string;
  size: "xLarge" | "large" | "medium" | "small";
  type: "warning" | "danger" | "scrollable" | "default";
  text: string;
  textButton: string;
}
