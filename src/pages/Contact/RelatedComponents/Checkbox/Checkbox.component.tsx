import React, { FC } from "react";

import "./checkbox.styles.scss";

export interface CheckboxProps {
  title: string;
  id: string;
}

const Checkbox: FC<CheckboxProps> = ({ title, id }) => {
  return (
    <label className="checkbox" htmlFor={id}>
      <p> {title} </p>
      <input id={id} className="checkbox__input" type="checkbox" />
      <span className="checkbox__span" />
    </label>
  );
};

export default Checkbox;
