import { RxGithubLogo } from "react-icons/rx";
import React from "react";


export default function GithubButton ({text}) {

    const handleOpenWindow = () => {
        window.open("https://github.com/Valenart", "_blank");
    }

    return (
        <div id="divIntroGitHub-button">
            <button id="buttonIntroGitHub-button" onClick={handleOpenWindow} style={{cursor: "pointer"}}>
                {text}
                <RxGithubLogo id="iconIntroGitHub-button"/>
            </button>
        </div>
    )
}