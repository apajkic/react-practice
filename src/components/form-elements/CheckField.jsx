import React from "react";

function CheckField(props) {
  const { name, label, changeHandler, value } = props;
  return (
    <div>
      <input type="checkbox" name={name} id={name} onChange={changeHandler} value={value}/>
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
export default CheckField;
