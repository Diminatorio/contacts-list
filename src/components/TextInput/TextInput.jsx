import React from "react";
import './TextInput.css'

function TextInput (props) {
    return (
        <input type="text"
               name={props.name}
               placeholder={props.placeholder}
               required
               value={props.value}
               onChange={props.onInputChange}
               className="form-text-input"/>
    )
}

export default TextInput