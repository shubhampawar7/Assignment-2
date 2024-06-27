import React from "react";
import "./Input.scss";
import Select from "react-select";

const Input = ({
  type = "text", // Default input type is "text"
  value = "", // Default input value is empty string
  onChange = () => {},
  options = [], // Default options array for select input
  checked = false,
  style = {},
}) => {
  // const handleInputChange = (e) => {
  //   onChange(e.target.value);
  // };

  // const handleCheckboxChange = () => {
  //   onChange(!checked);
  // };

  // const handleRadioBtnChange = () => {
  //   onChange(!checked);
  // };

  // const handleMultiSelectChange = (selectedOptions) => {
  //   onChange(selectedOptions);
  // };

  // const handleSliderChange = (e) => {
  //   onChange(e.target.value);
  // };

  const handleInputChange = (selectedOptions,e ) => {
    if (type === "text" || type === "slider") {
      onChange(e.target.value);
    } else if (type === "checkbox" || type === "radio") {
      console.log(type, "type---");
      onChange(!checked);
    } else if (type === "select" || type === "multiSelect") {
      onChange(selectedOptions);
    }
  };

  return (
    <div>
      {type === "text" && (
        <input
          className="input-comp-text"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
      )}

      {/* {type === "select" && (
        <select
          className="input-comp-text"
          value={value}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )} */}

      {type === "select" && (
        <div className="input-comp-text">
          <Select
            options={options}
            value={value}
            onChange={handleInputChange}
          />
        </div>
      )}

      {type === "multiSelect" && (
        <div className="input-comp-text">
          <Select
            options={options}
            value={value}
            onChange={handleInputChange}
            isMulti
          />
        </div>
      )}

      {type === "checkbox" && (
        <input
          className="input-comp-checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleInputChange}
        />
      )}

      {type === "radio" && (
        <input
          className="input-comp-radio"
          type="radio"
          checked={checked}
          onClick={handleInputChange}
        />
      )}

      {type === "slider" && (
        <div className="input-comp-slider">
          <input
            type="range"
            value={value}
            onChange={handleInputChange}
            min={0}
            max={100}
          />
          <span>{value}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
