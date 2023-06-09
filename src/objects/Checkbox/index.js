import React from "react";
import './styles.css'
import Input from '../Input'
import Label from "../Label";

const Checkbox = ({id = "show", value = "show", content = "Mostrar Eventos"}) => {
    return(
        <>
            <Input id={id} value={value} content={content} type="checkbox"/>
            <Label htmlFor={id} content={content}/>
        </>
    )
}

export default Checkbox