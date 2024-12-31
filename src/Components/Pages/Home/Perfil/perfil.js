/*IMPORT COMPONENTS*/
import LinhaHorizontal from "./Components Perfil/LinhaHorizontal/LinhaHorizontalMoldura";
import LinhaVertical from "./Components Perfil/Linha Vertical/LinhaVerticalMoldura";
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import {Button} from "@mui/material";

/*IMAGE IMPORT*/
import RichardPerfil from "../../../../Assets/Images/PerfilENetworking/RichardPhotoPerfil.jpg";
import MySign from "../../../../Assets/Png/MySign/MySignWhite.png"

import "./perfil.css"
import 'aos/dist/aos.css';


function Perfil() {

    AOS.init();

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.4,
        });

        AOS.refresh();
    }, []);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>

            <div id="frame-Perfil"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-out">

                {!isSmallScreen && <LinhaHorizontal />}

                <div id="content-perfil">
                    {!isSmallScreen && <LinhaVertical intervalTime={0} />}

                    <div id="profile-photo-container">
                        <img alt={"Richard Foto"} src={RichardPerfil} id="richardPhoto"
                             data-aos="fade"
                             data-aos-offset="100"
                             data-aos-delay="400"
                             data-aos-duration="1000"
                             data-aos-easing="ease-out">
                        </img>
                    </div>

                    <div id="DarkSquare-Perfil" >
                        <h1 className="title">Escrevendo o meu futuro em designs e código.</h1>
                        <p className="description"
                           data-aos="fade"
                           data-aos-delay="1000"
                           data-aos-duration="1000"
                           data-aos-easing="ease-out">
                            Olá, Sou Richard Valentim da Silva, Desenvolvedor Full-stack.
                        </p>
                        <br/>
                        <p className="description"
                           data-aos="fade"
                           data-aos-delay="1500"
                           data-aos-duration="1000"
                           data-aos-easing="ease-out">
                            Estou focado em aprimorar minhas habilidades e atualmente estudo Kotlin, Git, JavaScript,
                            React,
                            Python e
                            MySQL, com o objetivo de me tornar um profissional Full-stack na área de desenvolvimento de
                            software. Além
                            disso, dedico meu tempo ao estudo de idiomas, aperfeiçoando meu inglês e aprendendo francês
                            e
                            espanhol.
                        </p>

                        <div id="darkSquare-perfil"></div>
                    </div>


                    {!isSmallScreen && <LinhaVertical intervalTime={0} />}
                </div>

                <div id='bottomLinesFrame'>
                    {!isSmallScreen && <LinhaHorizontal />}
                    <img alt={"PNG Minha Assinatura"} src={MySign} id="MySign"
                         data-aos="zoom-out"
                         data-aos-duration="1000"
                         data-aos-delay="400">
                    </img>
                    {!isSmallScreen && <LinhaHorizontal divWidth={'9%'} rotationLine={'rotate(180deg)'}/>}
                </div>

            </div>
        </div>
    );
}

export default Perfil;
