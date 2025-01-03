/*IMPORT IMAGES AND COMPONENTS*/
import MyLogo from '../../../../Assets/Png/MySign/MyLogoWhite.png'


/*REACT LIBRARIES IMPORTS*/
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { BsFillTelephoneFill } from "react-icons/bs";


import AOS from 'aos';

/*IMPORT CSS*/
import './footer.css'
import React, {useEffect} from "react";
import MySign from "../../../../Assets/Png/MySign/MySignWhite.png";


export default function Footer () {

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.1,
        });

        AOS.refresh();
    }, []);

    return (
        <footer id='main-footer'
                data-aos="fade"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-out">

            <div id='iconsContainer-footer'>
                <ul>
                    <li><MdEmail className={"iconsContact"}/> Richardvalentim.corp@gmail.com</li>
                    <li><BsFillTelephoneFill className={"iconsContact"}/> (11) 98833-5962</li>
                </ul>

                <button id="buttons">
                    Contato
                </button>


                <div id='divIcons-footer'>
                    <IoLogoInstagram style={{fontSize: "25px", paddingRight: '5px'}}/>
                    <IoLogoWhatsapp style={{fontSize: "25px", paddingInline: '5px'}}/>
                    <IoLogoLinkedin style={{fontSize: "25px", paddingInline: '5px'}}/>
                    <IoLogoGithub style={{fontSize: "25px", paddingInline: '5px'}}/>
                </div>
            </div>

            <div id="containerMiddle-footer">
                <img alt="MyLogo" src={MyLogo} id="mylogo"></img>
            </div>


            <div id="containerContact-footer">
                <ul>
                    <li>Home <MdOutlineKeyboardArrowRight/></li>
                    <li>Sobre mim <MdOutlineKeyboardArrowRight/></li>
                    <li>Habilidades <MdOutlineKeyboardArrowRight/></li>
                    <li>Certificações <MdOutlineKeyboardArrowRight/></li>
                    <li>Networking <MdOutlineKeyboardArrowRight/></li>
                </ul>
                <img alt={"PNG Minha Assinatura"} src={MySign} id="mySign-footer"
                     data-aos="zoom-out"
                     data-aos-duration="1000"
                     data-aos-delay="500">
                </img>
                <p data-aos="zoom-out"
                   data-aos-duration="1000"
                   data-aos-delay="700">2025 - Richard Valentim, Full-Stack Dev © All rights reserved.</p>
            </div>
        </footer>
    )
}