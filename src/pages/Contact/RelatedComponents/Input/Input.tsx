import React, { FC, ChangeEvent } from "react";
import "./Input.styles.scss";
import { FormSubmission } from "../../interfaces";

export interface InputProps<T> {
  title: string;
  optional?: boolean;
  additionalText?: string;
  textArea?: boolean;
  inputType?: HTMLInputElement["type"];
  id: string;
  classes?: string[];
  pattern?: HTMLInputElement["pattern"];
  required?: HTMLInputElement["required"];
  currentFormData: FormSubmission;
  handleFormData: (newData: string) => void;
}

function Input<T>(props: InputProps<T>) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.handleFormData(e.target.value);
  };
  const {
    id,
    inputType,
    title,
    optional,
    additionalText,
    textArea,
    classes,
    required,
    pattern,
  } = props;
  const inputEl = textArea ? (
    <textarea
      onChange={handleChange}
      id={id}
      maxLength={500}
      className="input__inner input__inner-textArea"
      minLength={1}
      required={required}
    />
  ) : (
    <input
      onChange={handleChange}
      minLength={1}
      id={id}
      className="input__inner input__inner-text"
      type={inputType}
      pattern={pattern}
      required={required}
    />
  );

  return (
    <div className={`${classes && classes.join(" ")} input`}>
      <div className="input__labels">
        <label className="input__label" htmlFor={id}>
          {title}
          {optional && (
            <span className="input__label input__label--optional">
              {" "}
              - optional
            </span>
          )}
        </label>
        {additionalText && (
          <p className="input__label__additional">{additionalText}</p>
        )}
      </div>
      {inputEl}
    </div>
  );
}

export default Input;
