import React from "react";

function SelectField(props) {
  const { name, label, option, changeHandler, value } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={changeHandler} value={value}>
        {option.map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default SelectField;
