import React, { FC } from "react";

import "./checkbox.styles.scss";
import { FormSubmission } from "../../interfaces";

export interface CheckboxProps {
  title: string;
  id: string;
  formSubmission: FormSubmission;
  handleFormSubmission: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  title,
  id,
  formSubmission,
  handleFormSubmission,
}) => {
  const handleChange = () => {
    handleFormSubmission(!formSubmission.bIncludeAddressDetails);
  };
  return (
    <label className="checkbox" htmlFor={id}>
      <p> {title} </p>
      <input
        id={id}
        className="checkbox__input"
        type="checkbox"
        checked={formSubmission.bIncludeAddressDetails}
        onChange={handleChange}
      />
      <span className="checkbox__span" />
    </label>
  );
};

export default Checkbox;
