import React from "react";

function InputField(props) {
  const { name, placeholder, changeHandler, value } = props;

  return (
    <div>
      <input type="text" name={name} id={name} placeholder={placeholder} onChange={changeHandler} value={value}/>
    </div>
  );
}
export default InputField;
