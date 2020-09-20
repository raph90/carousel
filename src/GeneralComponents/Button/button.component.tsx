import React, { FC, ComponentProps } from "react";
import "./button.styles.scss";

export interface ButtonProps {
  classes?: string[];
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({ classes, type, children }) => {
  return (
    /* eslint-disable react/button-has-type */
    <button
      type={type || "button"}
      className={`button ${classes && classes.join(" ")}`}
    >
      {children}
    </button>
  );
};

export default Button;
