import React from "react";

const Input = ({id = "", value, type}) => {
    return(
        <>
            <input className="input" type={type} value={value} id={id}></input>
        </>
    )
}

export default Input