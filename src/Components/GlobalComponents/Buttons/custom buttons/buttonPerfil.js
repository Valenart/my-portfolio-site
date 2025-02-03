import React from "react";
import { FaFileAlt } from "react-icons/fa";
import "./buttons.css";
import myResume from "../../../../Assets/PDF/Currículo Novo Richard São Paulo.pdf";

export default function ButtonPerfil({ text = "test" }) {

    const handleButtonClick = () => {
        window.open(myResume, '_blank')
    }

    return (
        <div id="divPerfil-button">
            <button id="buttonPerfil-button" onClick={handleButtonClick} style={{cursor: "pointer"}}>
                {text}
                <FaFileAlt id="iconButtonPerfil-button"/>
            </button>
        </div>
    );
}