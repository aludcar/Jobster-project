import React from "react";

const FormRowSelect = ({ name, labelText, value, optionsSource, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {optionsSource?.map((optionValue, index) => (
          <option key={index} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
