import theme from "theme";
import { NotificationType } from "./types";

export const getBackgroundColorByType = (type: NotificationType) => {
  if (type === "info") {
    return theme.colors.fiord;
  }
  if (type === "success") {
    return theme.colors.deepSea;
  }
  if (type === "error") {
    return theme.colors.cloudBurst;
  }

  return theme.colors.webOrange;
};

export const getColorByType = (type: NotificationType) => {
  if (type === "warning") {
    return theme.colors.cloudBurst;
  }

  return theme.colors.white;
};
