import React, { FC } from "react";
import "./header.styles.scss";
import Logo from "./relatedComponents/Logo";
import Navigation from "./relatedComponents/Navigation/navigation.component";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
