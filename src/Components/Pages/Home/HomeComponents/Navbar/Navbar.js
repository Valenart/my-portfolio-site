import "./Navbar.css";
import MyLogo from "../../../../../Assets/Png/MySign/MyLogoWhite.png";
import React, {useEffect, useState} from "react";

import ButtonFooter from "../../../../GlobalComponents/Buttons/custom buttons/buttonFooter";
import Underline from "../../../../GlobalComponents/Underline/underline";

export default function Navbar () {

    return (
        <nav id="main-navbar">
            <img alt="MyLogo" src={MyLogo} id="mylogo-navbar"></img>

            <ul
                id="list-navbar">
                <li>
                    <Underline textNavbar="Sobre mim" linkRef="frame-Perfil"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Habilidades" linkRef="main-skills"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Projetos" linkRef="main-projects"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Certificações" linkRef="main-certifications"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Networking" linkRef="frame-networking"
                               style={{margin: '200px'}}/>
                </li>
            </ul>


            <div id="divButton-navbar">
                <ButtonFooter text="Contate-me"/>
            </div>


        </nav>
    );
}