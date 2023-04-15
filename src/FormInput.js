import React, { useState } from "react";
import "./FormInput.css";

const FormInput = ({ data }) => {
  const {
    label,
    type,
    id,
    errorMessage,
    handleChange,
    options,
    ...inputProps
  } = data;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form__section">
      <label htmlFor={id} className="form__label font-lead-text">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          {...inputProps}
          className="form__select font-paragraph-text"
          defaultValue={options[0].value}
          onChange={handleChange}
        >
          {options.map(({ text, value }) => {
            return (
              <option
                key={value}
                className="form__option font-paragraph-text"
                value={value}
              >
                {text}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          {...inputProps}
          className="form__input font-lead-text"
          onChange={handleChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
      )}
      <p className="form__error-message font-paragraph-text">{errorMessage}</p>
    </div>
  );
};

export default FormInput;
