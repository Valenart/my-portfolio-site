

import Fiap from '../../../../../Assets/Png/Certfications/Java_Fiap.png';
import Senai from '../../../../../Assets/Png/Certfications/PowerBI_Senai.jpg';
import Cisco from '../../../../../Assets/Png/Certfications/HardwareBasics_Cisco.png';
import Google1 from '../../../../../Assets/Png/Certfications/SuporteTecnico_Google.jpg';
import Google2 from '../../../../../Assets/Png/Certfications/Dados_Google.jpg';
import Cisco2 from '../../../../../Assets/Png/Certfications/JavaScriptEssentials_Cisco.jpg';
import Meta from '../../../../../Assets/Png/Certfications/React_Meta.jpeg';

import ModalImage from 'react-modal-image';

import "./certificacoes.css";

export default function Certificacoes() {
    return (
        <div id="main-certifications">
            <p>Essas são algumas das minhas certificações que tenho nos últimos anos</p>

            <div id="containerCert-certifications">
                <div id="div1-certifications">
                    <ModalImage className="certImages-certfications"
                                style={{width: '50px'}}
                                small={Cisco2}
                                large={Cisco2}
                                alt="Certificado Cisco2"
                    />

                    <ModalImage className="certImages-certfications"
                        style={{width: '50px'}}
                        small={Google1}
                        large={Google1}
                        alt="Certificado Google1"
                    />

                </div>

                <div id="div2-certifications">
                    <ModalImage className="certImages-certfications"
                                style={{width: '50px'}}
                                small={Google2}
                                large={Google2}
                                alt="Certificado Google2"
                    />

                    <ModalImage className="certImages-certfications"
                                style={{width: '50px'}}
                                small={Fiap}
                                large={Fiap}
                                alt="Certificado Java Fiap"
                    />
                </div>

                <div id="div3-certifications">

                    <ModalImage className="certImages-certfications"
                        style={{width: '50px'}}
                        small={Meta}
                        large={Meta}
                        alt="Certificado Meta"
                    />
                    <ModalImage className="certImages-certfications"
                        style={{width: '50px'}}
                        small={Cisco}
                        large={Cisco}
                        alt="Certificado Cisco1"
                    />
                </div>
            </div>

        </div>
    )
}