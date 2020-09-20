import React, { FC } from "react";
import "./navigation.styles.scss";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <div className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>
      <Link className="navigation__link" to="/about-us">
        About Us
      </Link>
      <Link className="navigation__link" to="/contact-us">
        Contact Us
      </Link>
      <button className="navigation__link navigation__link--button">
        Login
      </button>
    </div>
  );
};

export default Navigation;
