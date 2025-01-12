import Test from '../../../../GlobalComponents/Test/test'
import { motion } from "motion/react";
import './skills.css';
import {useEffect, useState} from "react";
import AOS from 'aos';
import axios from "axios";

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

/*<div id="containerCards-skills">
                <div className="cards-skills">
                    <h3>Back-end</h3>
                    <p></p>
                    <img src={"/"} alt={"/"}></img>
                </div>

                <div className="cards-skills">
                    <h3>Front-End</h3>
                    <p></p>
                    <img src={"/"} alt={"/"}></img>
                </div>

                <div className="cards-skills">
                    <h3>Data Bases</h3>
                    <p></p>
                    <img src={"/"} alt={"/"}></img>
                </div>
            </div>*/