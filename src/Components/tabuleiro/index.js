import React from "react";
import Card from '../../objects/Tabuleiro'
import Player from "../../objects/Player";
import './styles.css'

const Tabuleiro = () => {
    return (
            <Card>
                <ul className="hashtag">
                    <li className="item"><Player jogadorAtual='x'/></li>
                    <li className="item"><Player jogadorAtual='o'/></li>
                    <li className="item"><Player jogadorAtual='o'/></li>

                    <li className="item"><Player jogadorAtual='o'/></li>
                    <li className="item"><Player jogadorAtual='x'/></li>
                    <li className="item"><Player jogadorAtual='x'/></li>

                    <li className="item"><Player jogadorAtual='x'/></li>
                    <li className="item"><Player jogadorAtual='o'/></li>
                    <li className="item"><Player jogadorAtual='x'/></li>
                </ul>
            </Card>
    )
}

export default Tabuleiro