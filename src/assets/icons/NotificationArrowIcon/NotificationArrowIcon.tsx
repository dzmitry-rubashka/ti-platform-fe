import React from "react";
import { NotificationArrowIconProps } from "./types";
import * as S from "./styles";

const NotificationArrowIcon: React.FC<NotificationArrowIconProps> = ({
  fill,
  isHidden,
  handleClick,
}) => (
  <S.Wrapper
    data-testid="arrow-button"
    onClick={handleClick}
    onKeyDown={() => {}}
    role="button"
    tabIndex={0}
    isHidden={isHidden}
  >
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.96134 0.429333L1.05601 4.36933C0.806934 4.62119 0.667236 4.96111 0.667236 5.31533C0.667236 5.66955 0.806934 6.00948 1.05601 6.26133C1.17834 6.38554 1.32415 6.48417 1.48495 6.5515C1.64576 6.61883 1.81835 6.6535 1.99268 6.6535C2.16701 6.6535 2.3396 6.61883 2.5004 6.5515C2.66121 6.48417 2.80702 6.38554 2.92934 6.26133L5.99334 3.172L9.06934 6.27467C9.19199 6.39879 9.33805 6.49734 9.49907 6.5646C9.66008 6.63186 9.83285 6.66649 10.0073 6.66649C10.1818 6.66649 10.3546 6.63186 10.5156 6.5646C10.6766 6.49734 10.8227 6.39879 10.9453 6.27467C11.1941 6.02264 11.3336 5.68278 11.3336 5.32867C11.3336 4.97455 11.1941 4.63469 10.9453 4.38267L7.02534 0.429333C6.7497 0.15505 6.37687 0.000744465 5.98801 0C5.61601 0 5.24534 0.142666 4.96134 0.429333Z"
        fill={fill || "white"}
      />
    </svg>
  </S.Wrapper>
);

export default NotificationArrowIcon;
