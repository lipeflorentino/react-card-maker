// src/components/Card.js
import React from "react";
import "../styles/Card.css";

const Card = ({ card }) => {
    return (
        <div className="card">
            <h3>{card.name}</h3>
            <p>Tipo: {card.type}</p>
            <p>Cor: {card.color}</p>
            <p>Custo: {card.cost}</p>
            <p>Habilidades: {card.abilities}</p>
        </div>
    );
};

export default Card;
