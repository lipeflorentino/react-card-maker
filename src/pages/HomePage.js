// src/pages/HomePage.js
import React, { useContext } from "react";
import CardForm from "../components/CardForm";
import Card from "../components/Card";
import { CardContext } from "../contexts/CardContext";
import "../styles/HomePage.css";

const HomePage = () => {
    const { cards } = useContext(CardContext);

    return (
        <div className="home-page">
            <h1>Gerador de Cartas RPG</h1>
            <CardForm />
            <div className="cards-list">
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
