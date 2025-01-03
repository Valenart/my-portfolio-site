import LinhaHorizontal from "../../../GlobalComponents/Components Perfil/LinhaHorizontal/linhaHorizontalMoldura";
import LinhaVertical from "../../../GlobalComponents/Components Perfil/Linha Vertical/LinhaVerticalMoldura";
import { IconName } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import React, { useState, useEffect } from 'react';

/*IMPORT PHOTOS*/
import LogoCasaOracle from '../../../../Assets/Images/PerfilENetworking/LogoCasaOracle.jpeg'
import OraclePhoto1 from '../../../../Assets/Images/PerfilENetworking/OracleOffice1.jpeg'
import OraclePhoto2 from '../../../../Assets/Images/PerfilENetworking/OracleOffice2.jpeg'
import PowerBISENAI from '../../../../Assets/Images/PerfilENetworking/PowerBISENAI.jpeg'
import VivoMeet from '../../../../Assets/Images/PerfilENetworking/VivoMeetPhoto.jpeg'
import VivoPhotoOnLogo from '../../../../Assets/Images/PerfilENetworking/VivoPhoto.jpeg'

/*IMPORT CSS*/
import './networking.css';


export default function Networking() {

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.2,
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
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}} id='main-networking'>

            <div id="frame-networking"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-out">

                {!isSmallScreen && <LinhaHorizontal/>}

                <div id="content-networking">
                    {!isSmallScreen && <LinhaVertical heightLine={'535px'}/>}

                    <div id="containerTexts-networking">
                        <h1 className="title">Conexões profissionais,  resultados futuros.</h1>
                        <p className="description"
                           data-aos="fade"
                           data-aos-delay="1000"
                           data-aos-duration="700"
                           data-aos-easing="ease-out">
                            Palestras, visitas técnicas e cursos representam uma parte significativa da minha
                            trajetória acadêmica e profissional. Durante meu período na faculdade, essas experiências
                            não apenas ampliaram meu conhecimento, mas também foram oportunidades valiosas para
                            construir conexões estratégicas e fortalecer meu networking no mercado de trabalho.
                        </p>

                        <button id="buttons"
                                data-aos="fade"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                                data-aos-easing="ease-out">Publicações
                        </button>

                    </div>

                    <div id="photosContainer-networking">
                        <div id='photoColumn1-networking'>
                            <img alt={"Photo on Oracle's Building"} src={OraclePhoto2} className="normalImage-networking"
                                 data-aos="fade-up"
                                 data-aos-offset="200"
                                 data-aos-delay="100"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-out">

                            </img>

                            <img alt={"Casa Oracle Logo"} src={LogoCasaOracle} className="smallImage-networking"
                                 data-aos="fade-up"
                                 data-aos-offset="200"
                                 data-aos-delay="300"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-out">
                            </img>

                            <img alt={"Photo with DEV's and Leaders Vivo"} src={VivoMeet}
                                 className="normalImage-networking"
                                 data-aos="fade-up"
                                 data-aos-offset="200"
                                 data-aos-delay="500"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-out">
                            </img>

                        </div>
                        <div id='photoColumn2-networking'>
                            <img alt={"Photo SENAI group course"} src={PowerBISENAI}
                                 className="smallImage-networking"
                                 data-aos="fade-up"
                                 data-aos-offset="200"
                                 data-aos-delay="200"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-out">

                            </img>

                            <img alt={"Photo in front of Vivo Logo"} src={VivoPhotoOnLogo} className="normalImage-networking"
                                 data-aos="fade-up"
                                 data-aos-offset="200"
                                 data-aos-delay="400"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-out">
                            </img>

                            <img alt={"Photo on Oracle's Office"} src={OraclePhoto1}
                                 className="smallImage-networking"
                                 data-aos="fade-up"
                                 data-aos-offset="200"
                                 data-aos-delay="600"
                                 data-aos-duration="1000"
                                 data-aos-easing="ease-out">

                            </img>

                        </div>
                        <div id="darkSquare-networking"></div>
                    </div>

                    {!isSmallScreen && <LinhaVertical heightLine={'535px'} style={{display:'none'}}/>}
                </div>

                <div id='bottomLinesFrame'>
                    {!isSmallScreen && <LinhaHorizontal divWidth={"949px"} style={{display:'none'}}/>}
                </div>

            </div>
        </div>
    )
}

