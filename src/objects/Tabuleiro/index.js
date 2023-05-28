import React from "react";
import './styles.css'

const Card = ({children}) => {
    return(
        <div className="tabuleiro">{children}</div>
    )
}

export default Card