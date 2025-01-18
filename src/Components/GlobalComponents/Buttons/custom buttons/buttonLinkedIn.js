import { FaLinkedinIn } from "react-icons/fa6";
import React from "react";


export default function GithubButton ({text}) {

    const handleOpenWindow = () => {
        window.open("https://www.linkedin.com/in/richardvalentim/", "_blank");
    }

    return (
        <div id="divIntroLinkedIn-button">
            <button id="buttonIntroLinkedIn-button" onClick={handleOpenWindow} style={{cursor: "pointer", marginInline: '5px'}}>
                {text}
                <FaLinkedinIn id="iconIntroLinkedIn-button"/>
            </button>
        </div>
    )
}