/*IMPORT IMAGES AND COMPONENTS*/

import LinhaHorizontal from "../../../../GlobalComponents/Components Perfil/LinhaHorizontal/linhaHorizontalMoldura";
import LinhaVertical from "../../../../GlobalComponents/Components Perfil/Linha Vertical/LinhaVerticalMoldura";
import LogoCasaOracle from '../../../../../Assets/Images/PerfilENetworking/LogoCasaOracle.jpeg';
import OraclePhoto1 from '../../../../../Assets/Images/PerfilENetworking/OracleOffice1.jpeg';
import OraclePhoto2 from '../../../../../Assets/Images/PerfilENetworking/OracleOffice2.jpeg';
import PowerBISENAI from '../../../../../Assets/Images/PerfilENetworking/PowerBISENAI.jpeg';
import VivoMeet from '../../../../../Assets/Images/PerfilENetworking/VivoMeetPhoto.jpeg';
import VivoPhotoOnLogo from '../../../../../Assets/Images/PerfilENetworking/VivoPhoto.jpeg';
import FramerMotion from '../Certifications/Scroll Motion/framerMotion';
import ButtonNetworking from "../../../../GlobalComponents/Buttons/custom buttons/buttonNetworking";

/*LIBRARIES REACT IMPORTS*/
import AOS from 'aos';
import React, { useState, useEffect } from 'react';

/*IMPORT CSS*/
import './networking.css';


export default function Networking() {

    const linksPosts = [
        "https://www.linkedin.com/posts/richardvalentim_oracle-inovaaexaeto-tecnologia-activity-7134217622664994816-TKQE?utm_source=share&utm_medium=member_desktop"
        ,"https://www.linkedin.com/posts/richardvalentim_fundaaexaetotelefaeknicavivo-inovaaexaetotecnolaejgica-activity-7225624648531513344-MSsW?utm_source=share&utm_medium=member_desktop"
        ,"https://www.linkedin.com/posts/richardvalentim_powerbi-dataanalytics-senai-activity-7101045755632611328-tRkG?utm_source=share&utm_medium=member_desktop"]

    const handleOpenPost = (numlink) => {
        window.open(`${linksPosts[numlink]}`, "_blank");
    };

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.1,
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

    return (
        <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}} id='main-networking'>

            <FramerMotion/>

            <div id="frame-networking"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-out">

                {!isSmallScreen && <LinhaHorizontal/>}

                <div id="content-networking">
                    {!isSmallScreen && <LinhaVertical heightLine={'100%'}/>}

                    <div id="containerTexts-networking">
                        <h1 className="title">Conexões profissionais,  resultados futuros.</h1>
                        <p className="description"
                           data-aos="fade"
                           data-aos-delay="1000"
                           data-aos-duration="700"
                           data-aos-easing="ease-out" style={{marginBlock:'20px'}}>
                            Palestras, visitas técnicas e cursos representam uma parte significativa da minha
                            trajetória acadêmica e profissional. Durante meu período na faculdade, essas experiências
                            não apenas ampliaram meu conhecimento, mas também foram oportunidades valiosas para
                            construir conexões estratégicas e fortalecer meu networking no mercado de trabalho.
                        </p>

                    <div id="divNetworking-button" data-aos="fade"
                         data-aos-delay="1300"
                         data-aos-duration="1000"
                         data-aos-easing="ease-out">
                        <ButtonNetworking text="Publicações"/>
                    </div>

                    </div>

                    <div id="photosContainer-networking">

                        <div id='photoColumn1-networking'>

                                <img onClick={() => handleOpenPost(0)} alt="Photo on Oracle's Building" src={OraclePhoto2}
                                     className="normalImage-networking"/>



                                <img onClick={() => handleOpenPost(0)} alt="Casa Oracle Logo" src={LogoCasaOracle} className="smallImage-networking"/>



                                <img onClick={() => handleOpenPost(1)} alt="Photo with DEV's and Leaders Vivo" src={VivoMeet} className="normalImage-networking"/>



                        </div>
                        <div id='photoColumn2-networking'>


                                <img onClick={() => handleOpenPost(2)} alt="Photo SENAI group course" src={PowerBISENAI}
                                     className="smallImage-networking"/>




                                <img onClick={() => handleOpenPost(1)} alt="Photo in front of Vivo Logo" src={VivoPhotoOnLogo}
                                     className="normalImage-networking"/>



                                <img onClick={() => handleOpenPost(0)} alt="Photo on Oracle's Office" src={OraclePhoto1}
                                     className="smallImage-networking"/>


                        </div>
                        <div id="darkSquare-networking"></div>
                    </div>

                    {!isSmallScreen && <LinhaVertical heightLine={'100%'} style={{display: 'none'}}/>}
                </div>

                <div id='bottomLinesFrame'>
                {!isSmallScreen && <LinhaHorizontal divWidth={"949px"} style={{display:'none'}}/>}
                </div>

            </div>
        </section>
    )
}

