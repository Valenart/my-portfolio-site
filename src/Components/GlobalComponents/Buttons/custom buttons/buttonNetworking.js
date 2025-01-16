import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import "./buttons.css";

export default function ButtonNetworking ({ text = "" }) {

    const handleOpenWindow = () => {
        window.open("https://www.linkedin.com/in/richardvalentim/recent-activity/all/", "_blank");
    }

    return (
        <div id="divNetworking-button">
            <button id="buttonNetworking-button" onClick={handleOpenWindow} style={{cursor: "pointer"}}>
                {text}
                <FaLinkedinIn id="iconNetworkingButton-button"/>
            </button>
        </div>
    );
}