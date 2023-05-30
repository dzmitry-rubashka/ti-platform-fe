import React from "react";
import { GlobeIconProps } from "./types";

const GlobeIcon: React.FC<GlobeIconProps> = ({ fill }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C10.1819 18 11.3522 17.7672 12.4442 17.3149C13.5361 16.8626 14.5282 16.1997 15.364 15.364C16.1997 14.5282 16.8626 13.5361 17.3149 12.4442C17.7672 11.3522 18 10.1819 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 -1.76116e-08 9 0C6.61305 3.55683e-08 4.32387 0.948211 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM8.1 16.137C6.36032 15.92 4.75986 15.0748 3.59966 13.7605C2.43945 12.4461 1.79944 10.7532 1.8 9C1.8 8.442 1.872 7.911 1.989 7.389L6.3 11.7V12.6C6.3 13.59 7.11 14.4 8.1 14.4V16.137ZM14.31 13.851C14.1958 13.4873 13.9682 13.1696 13.6605 12.9445C13.3529 12.7195 12.9812 12.5987 12.6 12.6H11.7V9.9C11.7 9.405 11.295 9 10.8 9H5.4V7.2H7.2C7.695 7.2 8.1 6.795 8.1 6.3V4.5H9.9C10.89 4.5 11.7 3.69 11.7 2.7V2.331C14.337 3.402 16.2 5.985 16.2 9C16.2 10.872 15.48 12.573 14.31 13.851Z"
      fill={fill || "#42526E"}
    />
  </svg>
);

export default GlobeIcon;