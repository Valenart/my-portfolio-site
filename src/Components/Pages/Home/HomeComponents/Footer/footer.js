/*IMPORT IMAGES AND COMPONENTS*/

import MyLogo from '../../../../../Assets/Png/MySign/MyLogoWhite.png'
import ButtonFooter from "../../../../GlobalComponents/Buttons/custom buttons/buttonFooter";


/*REACT LIBRARIES IMPORTS*/
import { Link } from 'react-scroll';

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
import MySign from "../../../../../Assets/Png/MySign/MySignWhite.png";


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

                <ButtonFooter text="Contate-me"/>

                <div id='divIcons-footer'>
                    <a href="https://www.instagram.com/valentimrichardd/" target="_blank" rel="noopener noreferrer"
                    style={{display: "inline-flex", width: '25px', height: '25px', marginRight:'5px'}}>
                        <IoLogoInstagram style={{fontSize: "25px", width: '100%', color: 'white'}}/>
                    </a>

                    <a href="https://wa.me/5511988335962" target="_blank" rel="noopener noreferrer"
                    style={{display: "inline-flex", width: '25px', height: '25px', marginInline:'5px'}}>
                        <IoLogoWhatsapp style={{fontSize: "25px", width: '100%', color: 'white'}}/>
                    </a>

                    <a href="https://www.linkedin.com/in/richardvalentim/" target="_blank" rel="noopener noreferrer"
                    style={{display: "inline-flex", width: '25px', height: '25px', marginInline:'5px'}}>
                        <IoLogoLinkedin style={{fontSize: "25px", width: '100%', color: 'white'}}/>
                    </a>

                    <a href="https://github.com/Valenart" target="_blank" rel="noopener noreferrer"
                    style={{display: "inline-flex", width: '25px', height: '25px', marginInline:'5px'}}>
                        <IoLogoGithub style={{fontSize: "25px", width: '100%', color: 'white'}}/>
                    </a>
                </div>
            </div>

            <div id="containerMiddle-footer">
                <img alt="MyLogo" src={MyLogo} id="mylogo"></img>
            </div>


            <div id="containerContact-footer">
                <ul>
                    <li><Link to="main-navbar" smooth={true} duration={500}>Home <MdOutlineKeyboardArrowRight/></Link></li>
                    <li><Link to="frame-Perfil" smooth={true} duration={500}>Sobre mim <MdOutlineKeyboardArrowRight/></Link></li>
                    <li><Link to="main-skills" smooth={true} duration={500}>Habilidades <MdOutlineKeyboardArrowRight/></Link></li>
                    <li><Link to="main-certifications" smooth={true} duration={500}>Certificações <MdOutlineKeyboardArrowRight/></Link></li>
                    <li><Link to="main-networking" smooth={true} duration={500}>Networking <MdOutlineKeyboardArrowRight/></Link></li>
                </ul>
                <img alt={"PNG Minha Assinatura"} src={MySign} id="mySign-footer">
                </img>
                <p style={{color: 'white'}}>2025 - Richard Valentim, Full-Stack Dev © All rights reserved.</p>
            </div>
        </footer>
    )
}