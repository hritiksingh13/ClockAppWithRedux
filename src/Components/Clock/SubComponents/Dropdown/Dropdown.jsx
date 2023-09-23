import React from "react";
import "./index.css";

const Dropdown = ({
  title = "Am/Pm",
  limitValue = null,
  dropDownValue,
  setDropdown
}) => {
  const optionArray = [];
  if (limitValue) {
    for (let val = 0; val <= limitValue; val++) {
      optionArray.push(val < 10 ? `0${val}` : `${val}`);
    }
  } else {
    optionArray.push("AM");
    optionArray.push("PM");
  }
  return (
    <div className="drop-down">
      <select value={`${dropDownValue}`} onChange={setDropdown}>
        <option disabled value={`${title}`}>
          {title}
        </option>
        {optionArray.map((optionValue) => {
          return <option value={optionValue}>{optionValue}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
