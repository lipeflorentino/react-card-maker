// src/adapters/api.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api", // URL da sua API
});

export const createCard = async (cardData) => {
    try {
        const response = await api.post("/cards", cardData);
        return response.data;
    } catch (error) {
        console.error("Error creating card:", error);
        alert("Ocorreu um erro!");
        throw error;
    }
};

export default api;
