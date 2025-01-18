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
                    <Underline textNavbar="Sobre mim" linkRef="/"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Habilidades" linkRef="/"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Projetos" linkRef="/"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Certificações" linkRef="/"
                               style={{margin: '200px'}}/>
                </li>

                <li>
                    <Underline textNavbar="Networking" linkRef="/"
                               style={{margin: '200px'}}/>
                </li>
            </ul>


            <div id="divButton-navbar">
                <ButtonFooter text="Contate-me"/>
            </div>


        </nav>
    );
}