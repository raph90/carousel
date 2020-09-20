import React, { FC } from "react";
import "./Input.styles.scss";

export interface InputProps {
  title: string;
  optional?: boolean;
  additionalText?: string;
  textArea?: boolean;
  type?: HTMLInputElement["type"];
  id: string;
  classes?: string[];
  pattern?: HTMLInputElement["pattern"];
  required?: HTMLInputElement["required"];
}

const Input: FC<InputProps> = ({
  id,
  type,
  title,
  optional,
  additionalText,
  textArea,
  classes,
  required,
  pattern,
}) => {
  const inputEl = textArea ? (
    <textarea
      id={id}
      maxLength={500}
      className="input__inner input__inner-textArea"
      minLength={1}
    />
  ) : (
    <input
      minLength={1}
      id={id}
      className="input__inner input__inner-text"
      type={type}
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
};

export default Input;
