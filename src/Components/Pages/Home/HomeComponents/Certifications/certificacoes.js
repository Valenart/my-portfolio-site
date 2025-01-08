/*IMPORTS CERTIFICATIONS*/
import FiapCert from '../../../../../Assets/Png/Certfications/Java_Fiap.png';
import CiscoCert from '../../../../../Assets/Png/Certfications/HardwareBasics_Cisco.png';
import Google1Cert from '../../../../../Assets/Png/Certfications/SuporteTecnico_Google.jpg';
import Google2Cert from '../../../../../Assets/Png/Certfications/Dados_Google.jpg';
import Cisco2Cert from '../../../../../Assets/Png/Certfications/JavaScriptEssentials_Cisco.jpg';
import MetaCert from '../../../../../Assets/Png/Certfications/React_Meta.jpeg';

/*IMPORT LOGOS*/
import AwsLogo from '../../../../../Assets/Png/Icons/AWS-Copia.png';
import CiscoLogo from '../../../../../Assets/Png/Icons/Cisco.png';
import MetaLogo from '../../../../../Assets/Png/Icons/Meta.png';
import FiapLogo from '../../../../../Assets/Png/Icons/Fiap.png';
import GoogleLogo from '../../../../../Assets/Png/Icons/google.png';
import MicrosoftLogo from '../../../../../Assets/Png/Icons/Microsoft.png';



/*IMPORT CSS*/
import "./certificacoes.css";

/*LIBRARIES REACT IMPORTS*/
import AOS from 'aos';
import React, { useState, useEffect } from 'react';

export default function Certificacoes() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1422);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 1422);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /*************************************************/

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.1,
        });

        AOS.refresh();
    }, []);

    /*************************************************/

    return (
        <div id="main-certifications" data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-out">

            <div id="containerText-certifications"
                 data-aos="fade"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-out">
                <h1 id="titleText-certifications"
                    data-aos="fade"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out">Certificações definem minha carreira</h1>

                <p className="description"
                   data-aos="fade"
                   data-aos-offset="200"
                   data-aos-delay="400"
                   data-aos-duration="1000"
                   data-aos-easing="ease-out">Estas são algumas das certificações que conquistei ao longo dos últimos anos.
                    Elas foram emitidas
                    por empresas de grande reconhecimento no mercado, o que reforça meu compromisso com a qualidade
                    e a busca constante por aprendizado e atualização profissional.
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    width: '100%',
                }}>

                    {!isSmallScreen && <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: "20px",
                        marginBlock: "5px",
                    }} className="div-certifications"
                                            data-aos="fade"
                                            data-aos-offset="200"
                                            data-aos-delay="300"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease-out">

                        <img src={GoogleLogo} alt={"LogoGoogle"}
                             style={{marginBlock: "10px", width: "130px", paddingRight: '2vw'}}></img>
                        <img src={FiapLogo} alt={"LogoAWS"} style={{marginBlock: "10px", width: "120px"}}></img>
                    </div>}

                    {!isSmallScreen && <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: "20px",
                        marginBlock: "5px",
                    }} className="div-certifications"
                                            data-aos="fade"
                                            data-aos-offset="200"
                                            data-aos-delay="500"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease-out">

                        <img src={MicrosoftLogo} alt={"LogoAWS"}
                             style={{marginBlock: "10px", width: "140px", paddingRight: '1vw'}}></img>
                        <img src={AwsLogo} alt={"LogoGoogle"} style={{marginBlock: "10px", width: "85px"}}></img>
                    </div>}

                    {!isSmallScreen && <div id="div-certifications" style={{
                        display: 'flex',
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: "20px",
                        marginBlock: "5px",
                    }}
                                            data-aos="fade"
                                            data-aos-offset="200"
                                            data-aos-delay="700"
                                            data-aos-duration="1000"
                                            data-aos-easing="ease-out">

                        <img src={CiscoLogo} alt={"LogoCisco"}
                             style={{width: "100px", marginBlock: "10px", paddingRight: '60px'}}></img>
                        <img src={MetaLogo} alt={"LogoMeta"} style={{marginBlock: "10px", width: "130px"}}></img>
                    </div>}

                </div>

            </div>

            <div id="containerCert-certifications"
                 data-aos="fade"
                 data-aos-offset="200"
                 data-aos-delay="400"
                 data-aos-duration="1000"
                 data-aos-easing="ease-out">
                <div id="div1-certifications">
                    <a href={Cisco2Cert} target="_blank" rel="noopener noreferrer" className="certLink-certifications">
                        <img className="certImages-certfications"
                             style={{width: '95%'}}
                             src={Cisco2Cert}
                             alt="Certificado Cisco2"
                        />
                    </a>

                    <a href={Google1Cert} target="_blank" rel="noopener noreferrer" className="certLink-certifications">
                        <img className="certImages-certfications"
                             style={{width: '95%'}}
                             src={Google1Cert}
                             alt="Certificado Google1"
                        />
                    </a>
                </div>

                <div id="div2-certifications">
                    <a href={Google2Cert} target="_blank" rel="noopener noreferrer" className="certLink-certifications">
                        <img className="certImages-certfications"
                             style={{width: '95%'}}
                             src={Google2Cert}
                             alt="Certificado Google2"
                        />
                    </a>

                    <a href={FiapCert} target="_blank" rel="noopener noreferrer" className="certLink-certifications">
                        <img className="certImages-certfications"
                             style={{width: '95%'}}
                             src={FiapCert}
                             alt="Certificado Java Fiap"
                        />
                    </a>
                </div>

                <div id="div3-certifications">
                    <a href={MetaCert} target="_blank" rel="noopener noreferrer" className="certLink-certifications">
                        <img className="certImages-certfications"
                             style={{width: '95%'}}
                             src={MetaCert}
                             alt="Certificado Meta"
                        />
                    </a>
                    <a href={CiscoCert} target="_blank" rel="noopener noreferrer" className="certLink-certifications">
                        <img className="certImages-certfications"
                             style={{width: '95%'}}
                             src={CiscoCert}
                             alt="Certificado Cisco1"
                        />
                    </a>
                </div>
            </div>
            <div id="darkSquare-certifications"></div>
        </div>
    )
}
