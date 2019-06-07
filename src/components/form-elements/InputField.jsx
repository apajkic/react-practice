import React from "react";

function InputField(props) {
  const { name, placeholder, changeHandler, value } = props;

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} id={name} placeholder={placeholder} onChange={changeHandler} value={value}/>
    </div>
  );
}
export default InputField;
