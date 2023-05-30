export type NotificationVariant = "colored" | "light";
export type NotificationType = "info" | "success" | "warning" | "error";

export interface NotificationProps {
  variant: NotificationVariant;
  type: NotificationType;
  title: string;
  description: string;
  confirmButtonTitle: string;
  confirmButtonHandleClick: () => void;
  rejectButtonTitle: string;
  rejectButtonHandleClick: () => void;
}
