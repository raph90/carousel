import React, { FC } from "react";
import "./button.styles.scss";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  classes?: string[];
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({ classes, type, children, ...props }) => {
  return (
    /* eslint-disable react/button-has-type */
    <button
      type={type || "button"}
      className={`button ${classes && classes.join(" ")}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
