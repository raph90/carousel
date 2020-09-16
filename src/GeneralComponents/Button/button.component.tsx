import React, { FC } from "react";
import "./button.styles.scss";

export interface ButtonProps {
  classes?: string[];
}

export const mergeClassNames = (classes: string[]) => {
  let returnStr = "";
  classes.forEach((str) => {
    returnStr = `${returnStr} ${str}`;
  });
  return returnStr;
};

const Button: FC<ButtonProps> = (props) => {
  const classes = props.classes || [];
  return (
    <button type="button" className={`button ${classes.join(" ")}`}>
      {props.children}
    </button>
  );
};

export default Button;
