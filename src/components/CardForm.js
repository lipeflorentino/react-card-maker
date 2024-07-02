// src/components/CardForm.js
import React, { useState, useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import { createCard } from "../adapters/api";
import "../styles/CardForm.css";

const CardForm = () => {
    const { addCard } = useContext(CardContext);
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        color: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCard = await createCard(formData);
            addCard(newCard);
            setFormData({
                name: "",
                type: "",
                color: "",
            });
        } catch (error) {
            console.error("Error creating card:", error);
        }
    };

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="type"
                placeholder="Tipo"
                value={formData.type}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="color"
                placeholder="Cor"
                value={formData.color}
                onChange={handleChange}
                required
            />
            <button type="submit">Criar Carta</button>
        </form>
    );
};

export default CardForm;
