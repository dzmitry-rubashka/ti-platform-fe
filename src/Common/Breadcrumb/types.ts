export interface BreadcrumbItemProps {
  id: number;
  name: string;
  path: string;
}

export interface BreadcrumbProps {
  steps: BreadcrumbItemProps[];
}
