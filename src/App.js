// src/App.js
import React from "react";
import { CardProvider } from "./contexts/CardContext";
import HomePage from "./pages/HomePage";
import "./styles/App.css";

const App = () => {
    return (
        <CardProvider>
            <HomePage />
        </CardProvider>
    );
};

export default App;
