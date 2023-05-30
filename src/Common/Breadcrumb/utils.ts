import { BreadcrumbItemProps } from "./types";

export const isLast = (index: number, items: BreadcrumbItemProps[]) =>
  items.length - 1 === index;
