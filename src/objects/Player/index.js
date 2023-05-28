import React from "react";
import './styles.css'
import jogadorX from '../../images/jogador-x.png'
import jogadorO from '../../images/jogador-o.png'

const Player = ({jogadorAtual}) => {
    const jogadores = [];
    jogadores['x']= jogadorX;
    jogadores['o']= jogadorO;

    return(
        <button className="player">
            <img src={jogadores[jogadorAtual]} alt={`Jogador ${jogadorAtual.toUpperCase()}`} ></img>
        </button>
    )
}

export default Player