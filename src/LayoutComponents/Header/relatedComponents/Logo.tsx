import React, { FC } from "react";
import LogoSrc from "../../../assets/Logo.svg";
import "./logo.styles.scss";

const Logo: FC = () => {
  return (
    <img
      className="logo"
      src={(LogoSrc as unknown) as string}
      alt="Company Logo"
    />
  );
};

export default Logo;
