export type DropdownTypes = "general select" | "checkbox" | "radio";

export interface DropdownProps {
  type: DropdownTypes;
  options: string[];
  title?: string;
  selectedItems?: string[];
}
