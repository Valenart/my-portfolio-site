import Test from '../../../../GlobalComponents/Test/test'
import { motion } from "motion/react";
import './skills.css';
import {useEffect, useState} from "react";
import AOS from 'aos';
import axios from "axios";

import ImageFront from '../../../../../Assets/Images/Skills/pexels-format-380633-1029757.jpg'
import ImageBack from '../../../../../Assets/Images/Skills/pexels-pixabay-270557.jpg'
import ImageHobbies from '../../../../../Assets/Images/Skills/pexels-tirachard-kumtanom-112571-574283.jpg'

import Brazil from '../../../../../Assets/Images/Skills/pexels-format-380633-1029757.jpg'
import USA from '../../../../../Assets/Images/Skills/pexels-format-380633-1029757.jpg'
import France from '../../../../../Assets/Images/Skills/pexels-pixabay-270557.jpg'
import Spain from '../../../../../Assets/Images/Skills/pexels-tirachard-kumtanom-112571-574283.jpg'

import World from '../../../../../Assets/SVG Icons/World.svg';

/*ICONS*/
import React from '../../../../../Assets/SVG Icons/React.svg';
import CSS from '../../../../../Assets/SVG Icons/CSS.svg';
import HTML from '../../../../../Assets/SVG Icons/HTML.svg';
import SASS from '../../../../../Assets/SVG Icons/SASS.svg';
import JS from '../../../../../Assets/SVG Icons/JS.svg';

/*ICONS2*/
import Git from '../../../../../Assets/SVG Icons/Git.svg';
import Java from '../../../../../Assets/SVG Icons/Java.svg';
import Kotlin from '../../../../../Assets/SVG Icons/Kotlin.svg';
import Python from '../../../../../Assets/SVG Icons/Python.svg';
import MySQL from '../../../../../Assets/SVG Icons/MySQL.svg';
import PostgreSQL from '../../../../../Assets/SVG Icons/PostgreSQL.svg';

export default function Skills() {


    const [dados, setDados] = useState([]);
    const [porcentagens, setPorcentagens] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get('https://api.github.com/users/valenart/repos');
                const repos = resposta.data;

                let arrayLinguagens = []; // Array para armazenar as linguagens de todos os repositórios

                // Passo 1: Extrair linguagens de todos os repositórios
                for (const valoresRepositorios of repos) {
                    const linguagensRepositorios = await axios.get(
                        `https://api.github.com/repos/${valoresRepositorios.full_name}/languages`
                    );
                    const respostasLinguagens = linguagensRepositorios.data;
                    arrayLinguagens.push(respostasLinguagens);
                }

                // Passo 2: Somar os valores de cada linguagem
                let somatorioLinguagens = {}; // Objeto para armazenar a soma das linguagens

                arrayLinguagens.forEach(linguagem => {
                    for (const [lingua, bytes] of Object.entries(linguagem)) {
                        somatorioLinguagens[lingua] = (somatorioLinguagens[lingua] || 0) + bytes;
                    }
                });

                // Passo 3: Somar todos os valores para obter o total
                const totalLinguagens = Object.values(somatorioLinguagens).reduce((acc, curr) => acc + curr, 0);

                // Passo 4: Calcular a porcentagem de cada linguagem
                const porcentagensCalculadas = {};
                for (const [lingua, total] of Object.entries(somatorioLinguagens)) {
                    porcentagensCalculadas[lingua] = ((total / totalLinguagens) * 100).toFixed(3);
                }

                // Passo 5: Verificar a soma das porcentagens (deve ser 100)
                const somaPorcentagens = Object.values(porcentagensCalculadas).reduce((acc, curr) => acc + parseFloat(curr), 0);
                if (somaPorcentagens !== 100) {
                    console.error("A soma das porcentagens não é igual a 100%. Algo deu errado.");
                }


                setDados(somatorioLinguagens); // Armazena o somatório de linguagens
                setPorcentagens(porcentagensCalculadas); // Armazena as porcentagens calculadas

                console.log("Porcentagens:", porcentagensCalculadas);

                // Passo 6: Você pode passar os dados para um gráfico ou fazer outras operações conforme necessário.

            } catch (erro) {
                console.error('Erro ao buscar dados:', erro);
            }
        };

        fetchData();
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
        <section id="main-skills">
            <div id="divIntroduction-skills">

                <div id="divCard-skills">
                    <div className="contentCard-skills">
                        <img src={ImageFront} className="photoCard-skills"></img>

                        <div className="divTextCards-skills">
                            <h4 className="lowerTextCard-skills">FRONT-END</h4>
                            <h3 className='upperTextCard-skills'>Desenvolvendo interfaces modernas com ótimas
                                experiências visuais e usabilidade.</h3>
                        </div>

                        <svg width="500" height="500" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                             id="IconBackgroundCard-skills">
                            <path
                                d="M33.7454 36.2789C37.1394 36.2789 39.8907 33.5276 39.8907 30.1336C39.8907 26.7396 37.1394 23.9883 33.7454 23.9883C30.3514 23.9883 27.6001 26.7396 27.6001 30.1336C27.6001 33.5276 30.3514 36.2789 33.7454 36.2789Z"
                                fill="#61DAFB"/>
                            <path
                                d="M57.0867 19.9992C55.9008 19.568 54.6609 19.1367 53.3672 18.7594C53.6906 17.4656 53.9602 16.1719 54.1758 14.932C55.3078 7.81641 54.068 2.80312 50.618 0.8625C49.5938 0.269531 48.4617 0 47.168 0C43.3945 0 38.5969 2.80312 33.7453 7.49297C28.8937 2.80312 24.0961 0 20.3227 0C19.0289 0 17.8969 0.269531 16.8727 0.8625C13.4227 2.85703 12.1828 7.87031 13.3148 14.932C13.5305 16.1719 13.8 17.4656 14.1234 18.7594C12.8297 19.1367 11.5898 19.5141 10.4039 19.9992C3.66563 22.5867 0 26.1445 0 30.1336C0 34.1227 3.71953 37.6805 10.4039 40.268C11.5898 40.6992 12.8297 41.1305 14.1234 41.5078C13.8 42.8016 13.5305 44.0953 13.3148 45.3352C12.1828 52.4508 13.4227 57.4641 16.8727 59.4047C17.8969 59.9977 19.0289 60.2672 20.3227 60.2672C24.15 60.2672 28.9477 57.4641 33.7453 52.7742C38.5969 57.4641 43.3945 60.2672 47.168 60.2672C48.4617 60.2672 49.5938 59.9977 50.618 59.4047C54.068 57.4102 55.3078 52.3969 54.1758 45.3352C53.9602 44.0953 53.6906 42.8016 53.3672 41.5078C54.6609 41.1305 55.9008 40.7531 57.0867 40.268C63.825 37.6805 67.4906 34.1227 67.4906 30.1336C67.4906 26.1445 63.825 22.5867 57.0867 19.9992ZM49.1086 3.55781C51.3187 4.85156 52.0734 8.84062 51.157 14.5008C50.9953 15.6328 50.7258 16.8188 50.4023 18.0586C47.5992 17.4117 44.6344 16.9805 41.5078 16.7109C39.675 14.1234 37.7883 11.8055 35.9016 9.70312C39.8906 5.76797 43.9336 3.07266 47.2219 3.07266C47.9227 3.07266 48.5695 3.23437 49.1086 3.55781ZM43.0711 35.5242C42.1008 37.2492 40.9687 38.9742 39.7828 40.6992C37.7883 40.8609 35.7938 40.9148 33.7453 40.9148C31.643 40.9148 29.6484 40.8609 27.7078 40.6992C26.5219 38.9742 25.4437 37.2492 24.4734 35.5242C23.4492 33.7453 22.4789 31.9125 21.6164 30.1336C22.4789 28.3547 23.4492 26.5219 24.4734 24.743C25.4437 23.018 26.5758 21.293 27.7617 19.568C29.7563 19.4063 31.7508 19.3523 33.7992 19.3523C35.9016 19.3523 37.8961 19.4063 39.8367 19.568C41.0227 21.293 42.1008 23.018 43.0711 24.743C44.0953 26.5219 45.0656 28.3547 45.9281 30.1336C45.0117 31.9125 44.0953 33.6914 43.0711 35.5242ZM47.5453 33.7453C48.3539 35.632 49.0008 37.4648 49.5938 39.2977C47.7609 39.7289 45.8203 40.0523 43.7719 40.3219C44.4187 39.2977 45.1195 38.2195 45.7125 37.0875C46.3594 35.9555 46.9523 34.8234 47.5453 33.7453ZM33.7453 48.3539C32.4516 46.9523 31.2117 45.443 30.0258 43.8797C31.2656 43.9336 32.5055 43.9875 33.7453 43.9875C34.9852 43.9875 36.225 43.9336 37.4648 43.8797C36.2789 45.443 35.0391 46.9523 33.7453 48.3539ZM23.7188 40.268C21.6703 39.9984 19.7297 39.675 17.8969 39.2438C18.4898 37.4648 19.1367 35.5781 19.9453 33.6914C20.5383 34.7695 21.1312 35.9016 21.7781 36.9797C22.425 38.1656 23.0719 39.1898 23.7188 40.268ZM19.9453 26.5219C19.1367 24.6352 18.4898 22.8023 17.8969 20.9695C19.7297 20.5383 21.6703 20.2148 23.7188 19.9453C23.0719 20.9695 22.3711 22.0477 21.7781 23.1797C21.1312 24.3117 20.5383 25.4437 19.9453 26.5219ZM33.7453 11.9133C35.0391 13.3148 36.2789 14.8242 37.4648 16.3875C36.225 16.3336 34.9852 16.2797 33.7453 16.2797C32.5055 16.2797 31.2656 16.3336 30.0258 16.3875C31.2117 14.8242 32.4516 13.3148 33.7453 11.9133ZM45.7125 23.2336L43.7719 19.9992C45.8203 20.2687 47.7609 20.5922 49.5938 21.0234C49.0008 22.8023 48.3539 24.6891 47.5453 26.5758C46.9523 25.4438 46.3594 24.3117 45.7125 23.2336ZM16.3336 14.5008C15.4172 8.84062 16.1719 4.85156 18.382 3.55781C18.9211 3.23437 19.568 3.07266 20.2687 3.07266C23.5031 3.07266 27.5461 5.71406 31.5891 9.70312C29.7023 11.7516 27.8156 14.1234 25.9828 16.7109C22.8562 16.9805 19.8914 17.4656 17.0883 18.0586C16.7648 16.8188 16.5492 15.6328 16.3336 14.5008ZM3.01875 30.1336C3.01875 27.6 6.09141 24.9047 11.482 22.9102C12.5602 22.4789 13.7461 22.1016 14.932 21.7781C15.7945 24.4734 16.8727 27.3305 18.1664 30.1875C16.8727 33.0445 15.7406 35.8477 14.932 38.543C7.49297 36.3867 3.01875 33.1523 3.01875 30.1336ZM18.382 56.7094C16.1719 55.4156 15.4172 51.4266 16.3336 45.7664C16.4953 44.6344 16.7648 43.4484 17.0883 42.2086C19.8914 42.8555 22.8562 43.2867 25.9828 43.5563C27.8156 46.1438 29.7023 48.4617 31.5891 50.5641C27.6 54.4992 23.557 57.1945 20.2687 57.1945C19.568 57.1945 18.9211 57.0328 18.382 56.7094ZM51.157 45.7664C52.0734 51.4266 51.3187 55.4156 49.1086 56.7094C48.5695 57.0328 47.9227 57.1945 47.2219 57.1945C43.9875 57.1945 39.9445 54.5531 35.9016 50.5641C37.7883 48.5156 39.675 46.1438 41.5078 43.5563C44.6344 43.2867 47.5992 42.8016 50.4023 42.2086C50.7258 43.4484 50.9414 44.6344 51.157 45.7664ZM56.0086 37.357C54.9305 37.7883 53.7445 38.1656 52.5586 38.4891C51.6961 35.7938 50.618 32.9367 49.3242 30.0797C50.618 27.2227 51.75 24.4195 52.5586 21.7242C59.9977 23.8805 64.4719 27.1148 64.4719 30.1336C64.4719 32.6672 61.3453 35.3625 56.0086 37.357Z"
                                fill="#61DAFB"/>
                        </svg>

                        <div className="divIconsCards-skills">
                            <img src={React}/>
                            <img src={JS}/>
                            <img src={SASS}/>
                            <img src={CSS}/>
                            <img src={HTML}/>
                        </div>

                    </div>
                </div>

                <div id="divCard-skills">
                    <div className="contentCard-skills">
                        <img src={ImageBack} className="photoCard-skills"></img>

                        <div className="divTextCards-skills">
                            <h4 className="lowerTextCard2-skills">BACK-END e DBs</h4>
                            <h3 className='upperTextCard-skills'>Desenvolvendo APIs e bancos de dados
                                robustos para intregrações com front-end.</h3>
                        </div>

                        <img src={Kotlin} className="IconBackgroundCard2-skills" style={{width:'400px'}}></img>

                        <div className="divIcons2Cards-skills">
                            <img src={Git}/>
                            <img src={Java}/>
                            <img src={Kotlin}/>
                            <img src={Python}/>
                            <img src={MySQL}/>
                            <img src={PostgreSQL}/>
                        </div>

                    </div>
                </div>

                <div id="divCard-skills">
                    <div className="contentCard-skills">
                        <img src={ImageHobbies} className="photoCard-skills"></img>

                        <div className="divTextCards-skills">
                            <h4 className="lowerTextCard3-skills">IDIOMAS</h4>
                            <h3 className='upperTextCard-skills'>Tenho o desejo de aprimorar meu inglês, francês e
                                espanhol, expandindo minhas habilidades.</h3>
                        </div>

                        <img src={World} className="IconBackgroundCard2-skills" style={{width:'400px'}}></img>


                        <div className="divIconsCards-skills">
                            <img src={React}/>
                            <img src={JS}/>
                            <img src={SASS}/>
                            <img src={CSS}/>
                        </div>

                    </div>
                </div>


            </div>















            <p id="textLineFlow-skills">Dominar habilidades técnicas é importante, mas saber aplicá-las para
                resolver problemas é essencial. No desenvolvimento, cada desafio exige estratégia e prática.
                Aqui está como encaro problemas de programação no dia a dia:
            </p>

            <div id="divLineFlow-skills"
                 data-aos="fade"
                 data-aos-offset="100"
                 data-aos-delay="400"
                 data-aos-duration="1000"
                 data-aos-easing="ease-out">

                <svg width="3120" height="505" viewBox="0 0 3120 505" fill="none" xmlns="http://www.w3.org/2000/svg"
                     id='svgLine-skills'>
                    <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}}
                                 transition={{duration: 4, ease: 'easeInOut'}}
                                 d="M1 300.392C124.5 301.726 342.824 304.106 407.5 247.892C461 201.392 428 102.846 366 113.892C279 129.392 264.5 279.892 336 357.392C407.5 434.892 537 337.892 526 225.892C515 113.892 510 39.3925 423 10.8925C336 -17.6075 190.725 60.8653 137 168.892C90.5 262.392 89.1 409.392 198 431.392C297 451.392 455.666 432.329 541.5 339.892C606.5 269.892 641.5 147.051 590.5 94.8924C557.744 61.3924 502.693 74.8921 489.5 168.892C473.5 282.892 469.765 342.409 428 350.892C396 357.392 347 330.392 356.5 233.892C366 137.392 573 50.8924 619 211.892C665 372.892 603.745 462.489 568.5 482.392C526 506.392 491 499.392 480 439.392C469 379.392 461 61.3924 356.5 61.3924C297.456 61.3924 275 113.892 287 156.392C311.915 244.633 463 320.892 739.5 300.392C772.167 298.559 938.272 293.816 978 300.392C1083.72 317.892 1090.5 409.392 1167.5 409.392C1244.5 409.392 1306.03 384.611 1304.5 309.392C1302.97 234.174 1401.5 206.892 1446.5 262.392C1491.5 317.892 1521 445.892 1418.5 451.392C1316 456.892 1216 404.892 1218 326.392C1220 247.892 1277.5 191.892 1253 139.392C1228.5 86.8924 1170.5 76.3924 1135.5 100.892C1100.5 125.392 1046 205.392 1100.5 233.892C1155 262.392 1201.5 223.392 1253 211.892C1304.5 200.392 1425.58 258.549 1378 317.892C1322.04 387.694 1191.6 411.178 1135.5 381.892C1079.4 352.607 1053.38 276.923 1135.5 269.892C1208.26 263.663 1491 304.5 1540.5 300.392C1642.33 300.392 1847.3 300.392 1852.5 300.392C1859 300.392 1962.5 317.892 1962.5 262.392C1962.5 206.892 1974 170.392 2029.5 160.892C2085 151.392 2114.35 226.092 2085 262.392C2047 309.392 2060 270.892 1985.5 381.892C1911 492.892 2132.5 544.392 2175 451.392C2217.5 358.392 2104 341.892 2131 298.392C2158 254.892 2196.5 300.392 2263.5 300.392C2330.5 300.392 2835.33 301 3107 301L3099 312.5C3103.67 308.833 3114.6 302.5 3115 300.5C3115.4 298.5 3102.17 291.333 3097.5 288.5L3110.5 297"
                                 stroke="white" stroke-width="10"/>
                </svg>
                <ul data-aos="fade"
                    data-aos-delay="2000">

                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{margin: '8px'}}>
                            <path
                                d="M10 20L8.79483 13.7091L4.12215 18.0902L6.84483 12.2924L0.489435 13.0902L6.1 10L0.489435 6.90983L6.84483 7.70764L4.12215 1.90983L8.79483 6.29088L10 0L11.2052 6.29088L15.8779 1.90983L13.1552 7.70764L19.5106 6.90983L13.9 10L19.5106 13.0902L13.1552 12.2924L15.8779 18.0902L11.2052 13.7091L10 20Z"
                                fill="#D9D9D9"/>
                        </svg>


                        <h4>Encontre</h4>
                        <p>Identifique o problema analisando logs e comportamentos anômalos.</p>
                    </li>

                    <li>
                        <svg width="30" height="30" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{margin: '7px'}}>
                            <path
                                d="M13.957 14.8389C13.9765 15.6294 13.1141 16.1288 12.4382 15.7183L11.2758 15.0124C10.9096 14.7899 10.4424 14.8256 10.1141 15.1009L9.07217 15.9748C8.46627 16.483 7.53813 16.12 7.43766 15.3356L7.26488 13.9868C7.21044 13.5618 6.8913 13.2187 6.47135 13.1337L5.13847 12.8639C4.36339 12.7071 4.06846 11.7551 4.61907 11.1875L5.56594 10.2114C5.86428 9.90388 5.93353 9.44045 5.73815 9.05913L5.11802 7.84884C4.75741 7.14506 5.31777 6.32095 6.10484 6.39754L7.45836 6.52924C7.88481 6.57074 8.29031 6.33595 8.46662 5.94544L9.02621 4.706C9.35162 3.98526 10.3453 3.90954 10.7762 4.57266L11.5171 5.71299C11.7505 6.07228 12.1869 6.24292 12.6022 6.13729L13.9201 5.80202C14.6865 5.60706 15.3652 6.33675 15.1154 7.08705L14.6858 8.37732C14.5505 8.78385 14.6892 9.23143 15.0307 9.49021L16.1145 10.3116C16.7448 10.7892 16.5975 11.7748 15.8551 12.0473L14.5785 12.5159C14.1763 12.6636 13.9128 13.0511 13.9234 13.4794L13.957 14.8389Z"
                                fill="#D9D9D9"/>
                        </svg>
                        <h4>Planeje</h4>
                        <p>Após localizar a causa, trace as ações corretivas.</p>
                    </li>

                    <li>
                        <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{margin: '15px'}}>
                            <circle cx="25" cy="25" r="25" fill="#FFFFFF"/>
                        </svg>
                        <h4>Desenvolva</h4>
                        <p>Implemente a solução e realize os testes necessários.</p>
                    </li>

                    <li>
                        <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                             style={{margin: '15px'}}>
                            <circle cx="25" cy="25" r="15" fill="#D9D9D9"/>
                            <circle cx="25" cy="25" r="23.5" stroke="white" stroke-width="3"/>
                        </svg>

                        <h4>Finalize</h4>
                        <p>Com a solução validada, documente e encerre o processo.</p>
                    </li>
                </ul>


            </div>


        </section>
    )
}