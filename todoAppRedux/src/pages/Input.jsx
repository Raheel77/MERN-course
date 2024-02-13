import React from "react";


const Input = (props) => {


  return (
    <div className="input-container">
      <input id={props.id} type={props.type} placeholder={props.placeholder}
             onChange={(e) => props.onChangeHandle(e.target.value, props.id)} value={props.value}/>
      <label htmlFor="myInput">{props.placeholder}</label>
    </div>
  )
};

export default Input;