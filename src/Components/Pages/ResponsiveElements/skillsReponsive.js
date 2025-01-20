import { motion } from "motion/react";
import './skillsResponsive.css';
import {useState,useEffect, useRef} from "react";
import AOS from 'aos';

import ImageFront from '../../../Assets//SVG Icons/Images SVG/Front-End.svg'
import ImageBack from '../../../Assets/SVG Icons/Images SVG/Programming.svg'
import ImageLanguages from '../../../Assets/SVG Icons/Images SVG/Conversation.svg'

import Brazil from '../../../Assets/Images/Skills/Flags/brazilFlag.jpg'
import USA from '../../../Assets/Images/Skills/Flags/USAFlag.png'
import France from '../../../Assets/Images/Skills/Flags/FranceFlag.svg'
import Spain from '../../../Assets/Images/Skills/Flags/SpainFlag.png'

import World from '../../../Assets/SVG Icons/World.svg';

/*ICONS*/
import React from '../../../Assets/SVG Icons/React.svg';
import CSS from '../../../Assets/SVG Icons/CSS.svg';
import HTML from '../../../Assets/SVG Icons/HTML.svg';
import SASS from '../../../Assets/SVG Icons/SASS.svg';
import JS from '../../../Assets/SVG Icons/JS.svg';

/*ICONS2*/
import Git from '../../../Assets/SVG Icons/Git.svg';
import Java from '../../../Assets/SVG Icons/Java.svg';
import Kotlin from '../../../Assets/SVG Icons/Kotlin.svg';
import Python from '../../../Assets/SVG Icons/Python.svg';
import MySQL from '../../../Assets/SVG Icons/MySQL.svg';
import PostgreSQL from '../../../Assets/SVG Icons/PostgreSQL.svg';

export default function SkillsReponsive() {

    const carousel= useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

    /*************************************/

    useEffect(() => {

        AOS.init({
            once: true,
            offset: 100,
            threshold: 0.1,
        });

        AOS.refresh();
    }, []);

    return (
        <section id="main-skillsResponsive">

            <motion.div ref={carousel} whileTap={{cursor: "grabbing"}} id="gridIntroduction-skillsResponsive"
                        style={{cursor: 'grab'}} drag="x" dragConstraints={{right: width, left: -width}}>

                <motion.div whileTap={{cursor: "grabbing"}} id="divCard-skillsResponsive">
                    <motion.div className="contentCard-skillsResponsive" whileTap={{cursor: "grabbing"}}>

                        <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
                            <img src={ImageFront} alt="imagem Front" className="photoCard-skillsResponsive"></img>
                        </div>

                        <div className="divTextCards-skillsResponsive">
                            <h4 className="lowerTextCard-skillsResponsive"
                                style={{display: 'flex', alignItems: "center"}}>
                                <svg width="20" height="20" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}}>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.03125 3.125C6.6 3.125 6.25 3.475 6.25 3.90625C6.25 4.33828 6.6 4.6875 7.03125 4.6875C7.4625 4.6875 7.8125 4.33828 7.8125 3.90625C7.8125 3.475 7.4625 3.125 7.03125 3.125ZM10.1562 3.125C9.725 3.125 9.375 3.475 9.375 3.90625C9.375 4.33828 9.725 4.6875 10.1562 4.6875C10.5875 4.6875 10.9375 4.33828 10.9375 3.90625C10.9375 3.475 10.5875 3.125 10.1562 3.125ZM23.4375 6.25H1.5625V3.125C1.5625 2.2625 2.2625 1.5625 3.125 1.5625H21.875C22.7375 1.5625 23.4375 2.2625 23.4375 3.125V6.25ZM23.4375 21.875C23.4375 22.7375 22.7375 23.4375 21.875 23.4375H3.125C2.2625 23.4375 1.5625 22.7375 1.5625 21.875V7.8125H23.4375V21.875ZM21.875 0H3.125C1.39922 0 0 1.39922 0 3.125V21.875C0 23.6008 1.39922 25 3.125 25H21.875C23.6008 25 25 23.6008 25 21.875V3.125C25 1.39922 23.6008 0 21.875 0ZM3.90625 3.125C3.475 3.125 3.125 3.475 3.125 3.90625C3.125 4.33828 3.475 4.6875 3.90625 4.6875C4.3375 4.6875 4.6875 4.33828 4.6875 3.90625C4.6875 3.475 4.3375 3.125 3.90625 3.125Z"
                                          fill="white"/>
                                </svg>
                                FRONT-END
                            </h4>

                            <h3 className='upperTextCard-skillsResponsive'>Desenvolvendo interfaces modernas com ótimas
                                experiências visuais e usabilidade.</h3>
                        </div>

                        <svg width="500" height="500" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                             id="IconBackgroundCard-skillsResponsive">
                            <path
                                d="M33.7454 36.2789C37.1394 36.2789 39.8907 33.5276 39.8907 30.1336C39.8907 26.7396 37.1394 23.9883 33.7454 23.9883C30.3514 23.9883 27.6001 26.7396 27.6001 30.1336C27.6001 33.5276 30.3514 36.2789 33.7454 36.2789Z"
                                fill="#61DAFB"/>
                            <path
                                d="M57.0867 19.9992C55.9008 19.568 54.6609 19.1367 53.3672 18.7594C53.6906 17.4656 53.9602 16.1719 54.1758 14.932C55.3078 7.81641 54.068 2.80312 50.618 0.8625C49.5938 0.269531 48.4617 0 47.168 0C43.3945 0 38.5969 2.80312 33.7453 7.49297C28.8937 2.80312 24.0961 0 20.3227 0C19.0289 0 17.8969 0.269531 16.8727 0.8625C13.4227 2.85703 12.1828 7.87031 13.3148 14.932C13.5305 16.1719 13.8 17.4656 14.1234 18.7594C12.8297 19.1367 11.5898 19.5141 10.4039 19.9992C3.66563 22.5867 0 26.1445 0 30.1336C0 34.1227 3.71953 37.6805 10.4039 40.268C11.5898 40.6992 12.8297 41.1305 14.1234 41.5078C13.8 42.8016 13.5305 44.0953 13.3148 45.3352C12.1828 52.4508 13.4227 57.4641 16.8727 59.4047C17.8969 59.9977 19.0289 60.2672 20.3227 60.2672C24.15 60.2672 28.9477 57.4641 33.7453 52.7742C38.5969 57.4641 43.3945 60.2672 47.168 60.2672C48.4617 60.2672 49.5938 59.9977 50.618 59.4047C54.068 57.4102 55.3078 52.3969 54.1758 45.3352C53.9602 44.0953 53.6906 42.8016 53.3672 41.5078C54.6609 41.1305 55.9008 40.7531 57.0867 40.268C63.825 37.6805 67.4906 34.1227 67.4906 30.1336C67.4906 26.1445 63.825 22.5867 57.0867 19.9992ZM49.1086 3.55781C51.3187 4.85156 52.0734 8.84062 51.157 14.5008C50.9953 15.6328 50.7258 16.8188 50.4023 18.0586C47.5992 17.4117 44.6344 16.9805 41.5078 16.7109C39.675 14.1234 37.7883 11.8055 35.9016 9.70312C39.8906 5.76797 43.9336 3.07266 47.2219 3.07266C47.9227 3.07266 48.5695 3.23437 49.1086 3.55781ZM43.0711 35.5242C42.1008 37.2492 40.9687 38.9742 39.7828 40.6992C37.7883 40.8609 35.7938 40.9148 33.7453 40.9148C31.643 40.9148 29.6484 40.8609 27.7078 40.6992C26.5219 38.9742 25.4437 37.2492 24.4734 35.5242C23.4492 33.7453 22.4789 31.9125 21.6164 30.1336C22.4789 28.3547 23.4492 26.5219 24.4734 24.743C25.4437 23.018 26.5758 21.293 27.7617 19.568C29.7563 19.4063 31.7508 19.3523 33.7992 19.3523C35.9016 19.3523 37.8961 19.4063 39.8367 19.568C41.0227 21.293 42.1008 23.018 43.0711 24.743C44.0953 26.5219 45.0656 28.3547 45.9281 30.1336C45.0117 31.9125 44.0953 33.6914 43.0711 35.5242ZM47.5453 33.7453C48.3539 35.632 49.0008 37.4648 49.5938 39.2977C47.7609 39.7289 45.8203 40.0523 43.7719 40.3219C44.4187 39.2977 45.1195 38.2195 45.7125 37.0875C46.3594 35.9555 46.9523 34.8234 47.5453 33.7453ZM33.7453 48.3539C32.4516 46.9523 31.2117 45.443 30.0258 43.8797C31.2656 43.9336 32.5055 43.9875 33.7453 43.9875C34.9852 43.9875 36.225 43.9336 37.4648 43.8797C36.2789 45.443 35.0391 46.9523 33.7453 48.3539ZM23.7188 40.268C21.6703 39.9984 19.7297 39.675 17.8969 39.2438C18.4898 37.4648 19.1367 35.5781 19.9453 33.6914C20.5383 34.7695 21.1312 35.9016 21.7781 36.9797C22.425 38.1656 23.0719 39.1898 23.7188 40.268ZM19.9453 26.5219C19.1367 24.6352 18.4898 22.8023 17.8969 20.9695C19.7297 20.5383 21.6703 20.2148 23.7188 19.9453C23.0719 20.9695 22.3711 22.0477 21.7781 23.1797C21.1312 24.3117 20.5383 25.4437 19.9453 26.5219ZM33.7453 11.9133C35.0391 13.3148 36.2789 14.8242 37.4648 16.3875C36.225 16.3336 34.9852 16.2797 33.7453 16.2797C32.5055 16.2797 31.2656 16.3336 30.0258 16.3875C31.2117 14.8242 32.4516 13.3148 33.7453 11.9133ZM45.7125 23.2336L43.7719 19.9992C45.8203 20.2687 47.7609 20.5922 49.5938 21.0234C49.0008 22.8023 48.3539 24.6891 47.5453 26.5758C46.9523 25.4438 46.3594 24.3117 45.7125 23.2336ZM16.3336 14.5008C15.4172 8.84062 16.1719 4.85156 18.382 3.55781C18.9211 3.23437 19.568 3.07266 20.2687 3.07266C23.5031 3.07266 27.5461 5.71406 31.5891 9.70312C29.7023 11.7516 27.8156 14.1234 25.9828 16.7109C22.8562 16.9805 19.8914 17.4656 17.0883 18.0586C16.7648 16.8188 16.5492 15.6328 16.3336 14.5008ZM3.01875 30.1336C3.01875 27.6 6.09141 24.9047 11.482 22.9102C12.5602 22.4789 13.7461 22.1016 14.932 21.7781C15.7945 24.4734 16.8727 27.3305 18.1664 30.1875C16.8727 33.0445 15.7406 35.8477 14.932 38.543C7.49297 36.3867 3.01875 33.1523 3.01875 30.1336ZM18.382 56.7094C16.1719 55.4156 15.4172 51.4266 16.3336 45.7664C16.4953 44.6344 16.7648 43.4484 17.0883 42.2086C19.8914 42.8555 22.8562 43.2867 25.9828 43.5563C27.8156 46.1438 29.7023 48.4617 31.5891 50.5641C27.6 54.4992 23.557 57.1945 20.2687 57.1945C19.568 57.1945 18.9211 57.0328 18.382 56.7094ZM51.157 45.7664C52.0734 51.4266 51.3187 55.4156 49.1086 56.7094C48.5695 57.0328 47.9227 57.1945 47.2219 57.1945C43.9875 57.1945 39.9445 54.5531 35.9016 50.5641C37.7883 48.5156 39.675 46.1438 41.5078 43.5563C44.6344 43.2867 47.5992 42.8016 50.4023 42.2086C50.7258 43.4484 50.9414 44.6344 51.157 45.7664ZM56.0086 37.357C54.9305 37.7883 53.7445 38.1656 52.5586 38.4891C51.6961 35.7938 50.618 32.9367 49.3242 30.0797C50.618 27.2227 51.75 24.4195 52.5586 21.7242C59.9977 23.8805 64.4719 27.1148 64.4719 30.1336C64.4719 32.6672 61.3453 35.3625 56.0086 37.357Z"
                                fill="#61DAFB"/>
                        </svg>

                        <div className="divIconsCards-skillsResponsive">
                            <img alt="React Icon" src={React}/>
                            <img alt="JS Icon" src={JS}/>
                            <img alt="SASS Icon" src={SASS}/>
                            <img alt="CSS Icon" src={CSS}/>
                            <img alt="HMTL Icon" src={HTML}/>
                        </div>

                    </motion.div>
                </motion.div>

                <motion.div whileTap={{cursor: "grabbing"}} id="divCard-skillsResponsive">
                    <motion.div className="contentCard-skillsResponsive" whileTap={{cursor: "grabbing"}}>

                        <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
                            <img src={ImageBack} alt="imagem Back" className="photoCard-skillsResponsive"></img>
                        </div>

                        <div className="divTextCards-skillsResponsive">
                            <h4 className="lowerTextCard2-skillsResponsive"
                                style={{display: 'flex', alignItems: "center"}}>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}}>
                                    <path
                                        d="M10.0126 0.0732422L7.51257 17.5733L9.98745 17.9268L12.4874 0.42679L10.0126 0.0732422Z"
                                        fill="white"/>
                                    <path
                                        d="M15.625 13.375L13.8573 11.6073L16.4646 9L13.8573 6.39277L15.625 4.625L20 9L15.625 13.375Z"
                                        fill="white"/>
                                    <path
                                        d="M3.53554 9L6.14276 11.6073L4.375 13.375L0 9L4.375 4.625L6.14276 6.39277L3.53554 9Z"
                                        fill="white"/>
                                </svg>
                                BACK-END e DBs
                            </h4>
                            <h3 className='upperTextCard-skillsResponsive'>Desenvolvendo APIs e bancos de dados
                                robustos para intregrações com front-end.</h3>
                        </div>

                        <img src={Kotlin} alt="Kotlin Icon" className="IconBackgroundCard2-skillsResponsive"
                             style={{width: '400px'}}></img>

                        <div className="divIconsCards-skillsResponsive">
                            <img alt="Git Icon" src={Git}/>
                            <img alt="Java Icon" src={Java}/>
                            <img alt="Kotlin Icon" src={Kotlin}/>
                            <img alt="Python Icon" src={Python}/>
                            <img alt="MySQL Icon" src={MySQL}/>
                            <img alt="Postgre Icon" src={PostgreSQL}/>
                        </div>

                    </motion.div>
                </motion.div>

                <motion.div whileTap={{cursor: "grabbing"}} id="divCard-skillsResponsive">
                    <motion.div className="contentCard-skillsResponsive" whileTap={{cursor: "grabbing"}}>
                        <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
                            <img src={ImageLanguages} alt="imagem Idiomas" className="photoCard-skillsResponsive"></img>
                        </div>

                        <div className="divTextCards-skillsResponsive">
                            <h4 className="lowerTextCard3-skillsResponsive"
                                style={{display: 'flex', alignItems: "center"}}>

                                <svg width="26" height="21" viewBox="0 0 26 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}}>
                                    <path
                                        d="M15.6831 14.2984C17.1048 13.7379 18.3602 12.8246 19.3311 11.6445C20.1936 10.6245 20.6667 9.33206 20.6667 7.9964C20.6667 6.66073 20.1936 5.36826 19.3311 4.34834C18.3591 3.17156 17.1038 2.2614 15.6831 1.70349C14.0923 1.05133 12.3861 0.727163 10.667 0.750438C8.9466 0.732945 7.24042 1.06332 5.65091 1.72173C4.22926 2.27786 2.97346 3.18832 2.00285 4.36658C1.14606 5.3898 0.673494 6.68009 0.666748 8.01464C0.666719 9.15693 1.0186 10.2715 1.67452 11.2067C2.39157 12.2444 3.33691 13.1039 4.43793 13.7193C4.35294 13.9323 4.25705 14.1408 4.15065 14.344C4.05728 14.526 3.94899 14.6998 3.82688 14.8639L3.50768 15.2743C3.39261 15.421 3.26929 15.5611 3.13831 15.6938C2.96959 15.8716 2.86014 15.9902 2.81454 16.0495C2.76894 16.1088 2.81454 16.0495 2.75526 16.1133C2.69598 16.1772 2.69598 16.1863 2.69142 16.1817C2.68686 16.1772 2.69142 16.1817 2.6367 16.2547L2.58654 16.3322L2.55006 16.4006C2.53745 16.4283 2.52826 16.4574 2.5227 16.4873C2.52022 16.5176 2.52022 16.5481 2.5227 16.5785C2.51586 16.6085 2.51586 16.6396 2.5227 16.6697C2.53801 16.7859 2.59467 16.8927 2.6823 16.9706C2.76307 17.0419 2.86645 17.0823 2.97415 17.0846H3.01519C3.4712 17.0162 3.89528 16.9387 4.23729 16.8566C5.6508 16.4939 6.98606 15.8757 8.17719 15.0326C8.99793 15.1919 9.83106 15.2788 10.667 15.2925C12.389 15.3028 14.0952 14.9646 15.6831 14.2984Z"
                                        fill="white"/>
                                    <path
                                        d="M25.0942 14.6616C25.6926 13.6436 26.0093 12.4263 25.9998 11.1811C25.9902 9.93593 25.6549 8.72575 25.041 7.72116C24.3622 6.58537 23.4727 5.65388 22.4426 5C22.7086 6.02498 22.796 7.10455 22.6994 8.17171C22.6029 9.23887 22.3243 10.2709 21.8811 11.2036C21.2647 12.4816 20.4261 13.5856 19.4221 14.4405C18.4002 15.3135 17.2646 15.9774 16.0615 16.4053C14.7837 16.8627 13.4565 17.0911 12.1229 17.0831C11.8689 17.0831 11.4959 17.0831 11 17.0193C12.8007 18.3984 14.9047 19.0998 17.041 19.0331C17.7927 19.0315 18.5428 18.951 19.2828 18.7924C20.3533 19.7006 21.5534 20.3664 22.8237 20.7572C23.1862 20.8596 23.5528 20.9399 23.9221 20.9978C23.9719 21.0037 24.0223 20.9976 24.0701 20.9799C24.118 20.9622 24.1624 20.9332 24.2008 20.8947C24.2874 20.8088 24.3456 20.6886 24.3647 20.5558C24.3647 20.4968 24.3647 20.4625 24.3647 20.4575C24.3647 20.4526 24.3647 20.4183 24.3647 20.3593L24.3401 20.266L24.3073 20.1923L24.2623 20.1088C24.2472 20.0814 24.2308 20.0552 24.2131 20.0302L24.1557 19.9565C24.1398 19.9316 24.122 19.9086 24.1024 19.8878C24.0614 19.8239 23.9631 19.6962 23.8114 19.5047C23.6937 19.3617 23.5829 19.2108 23.4795 19.0528L23.1885 18.591C23.0669 18.4069 22.9599 18.2096 22.8688 18.0016C22.7828 17.8002 22.6926 17.5743 22.6106 17.3336C23.5949 16.677 24.4437 15.7638 25.0942 14.6616Z"
                                        fill="white"/>
                                </svg>

                                IDIOMAS
                            </h4>
                            <h3 className='upperTextCard-skillsResponsive'>Tenho o desejo de aprimorar meu inglês,
                                francês e
                                espanhol, expandindo minhas habilidades.</h3>
                        </div>

                        <img src={World} alt="World Icon" className="IconBackgroundCard2-skillsResponsive"
                             style={{width: '400px'}}></img>


                        <div className="divIconsCards-skillsResponsive">
                            <img alt="Brazil Flag" src={Brazil}/>
                            <img alt="USA Flag" src={USA}/>
                            <img alt="France Flag" src={France}/>
                            <img alt="Spain Flag" src={Spain}/>
                        </div>

                    </motion.div>
                </motion.div>

            </motion.div>

        </section>
    )
}