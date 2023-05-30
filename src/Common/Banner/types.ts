export type BannerType = "warning" | "info" | "error";

export interface BannerProps {
  title: string;
  type: BannerType;
}
