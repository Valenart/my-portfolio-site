import React from "react";
import { MdEmail } from "react-icons/md";
import "./buttons.css";

export default function ButtonFooter ({ text = "test" }) {

    const handleEmailClick = () => {
        window.location.href = "mailto:valentimrichard@example.com?subject=Contato%20pelo%20site&body=Olá%20Richard,%20gostaria%20de%20entrar%20em%20contato";
    }

    return (
        <div id="divFooter-button">
            <button id="buttonFooter-button" onClick={handleEmailClick} style={{cursor: "pointer"}}>
                {text}
                <MdEmail id="iconButtonFooter-button"/>
            </button>
        </div>
    );
}