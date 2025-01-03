/*IMPORT COMPONENTS*/
import LinhaHorizontal from "../../../GlobalComponents/Components Perfil/LinhaHorizontal/linhaHorizontalMoldura";
import LinhaVertical from "../../../GlobalComponents/Components Perfil/Linha Vertical/LinhaVerticalMoldura";
import AOS from 'aos';
import React, { useState, useEffect } from 'react';

/*IMAGE IMPORT*/
import RichardPerfil from "../../../../Assets/Images/PerfilENetworking/RichardPhotoPerfil.jpg";
import MySign from "../../../../Assets/Png/MySign/MySignWhite.png"
import myResume from "../../../../Assets/PDF/Richard Valentim da Silva.pdf"

import "./perfil.css"
import 'aos/dist/aos.css';


function Perfil() {

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.4,
        });

        AOS.refresh();
    }, []);

    /*************************************************/

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /*************************************************/

    const myCV = '../../../../Assets/PDF/Richard Valentim da Silva.pdf'

    const handleButtonClick = () => {
        window.open(myCV, '_blank')
    }

    /*************************************************/

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}} id="main-perfil">

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

                    <div id="squarePerfil">
                        <h1 className="title"
                            data-aos="fade"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-out">
                            Escrevendo o meu futuro em designs e código.
                        </h1>

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

                        <button id="buttons"
                                data-aos="fade"
                                data-aos-delay="1500"
                                data-aos-duration="1000"
                                data-aos-easing="ease-out">Meu resumo</button>
                        <div id="darkSquare-perfil"></div>
                    </div>


                    {!isSmallScreen && <LinhaVertical intervalTime={0}/>}
                </div>

                <div id='bottomLinesFrame'>
                    {!isSmallScreen && <LinhaHorizontal/>}
                    <img alt={"PNG Minha Assinatura"} src={MySign} id="mySign-perfil"
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
