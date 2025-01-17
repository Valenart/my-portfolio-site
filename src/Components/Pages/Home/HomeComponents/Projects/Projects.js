import './Projects.css';
import {useEffect, useState} from "react";
import axios from "axios";

import { IoLogoGithub } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

import RichardPhoto from "../../../../../Assets/Images/PerfilENetworking/RichardPhotoPerfil.jpg"
import Jokempo from "../../../../../Assets/Images/Projects/Jokempo2.jpg"
import Mith from "../../../../../Assets/Images/Projects/Mith.jpg"
import README from "../../../../../Assets/Images/Projects/README.jpg"

export default function Projects() {

    const arrayLinks = [
        'https://github.com/Valenart/Valenart',
        'https://lnkd.in/dUTvGfYa',
        'https://github.com/Valenart/jokenpo'
    ];

    const handleOpenWindow2 = (numlink) => {
        window.open(`${arrayLinks[numlink]}`, "_blank");
    };

    const handleOpenWindow = () => {
        window.open("https://github.com/Valenart", "_blank");
    }

    const handleOpenWindowRep = (linkRep = '') => {
        window.open(`${linkRep}`, "_blank");
    }

        const getEstilos = (porcentagem) => {

            return {
                width: `${porcentagem}%`,
                height: '8px',
                backgroundColor: '#F5C648',
                marginBottom: '5px',
            };
        };

    const [dados, setDados] = useState([]);
    const [porcentagens, setPorcentagens] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            const token = "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";
            const headers = { Authorization: `Bearer ${token}` };

            try {
                const resposta = await axios.get(
                    'https://api.github.com/users/valenart/repos',
                    { headers }
                );
                const repos = resposta.data;

                const linguagens = await Promise.all(
                    repos.map(async (valoresRepositorios) => {
                        const linguagensRepositorios = await axios.get(
                            `https://api.github.com/repos/${valoresRepositorios.full_name}/languages`,
                            { headers }
                        );
                        return linguagensRepositorios.data;
                    })
                );

                const arrayLinguagens = linguagens.filter(
                    (linguagem) => Object.keys(linguagem).length > 0
                );

                let somatorioLinguagens = {};
                arrayLinguagens.forEach((linguagem) => {
                    for (const [lingua, bytes] of Object.entries(linguagem)) {
                        somatorioLinguagens[lingua] =
                            (somatorioLinguagens[lingua] || 0) + bytes;
                    }
                });

                const totalLinguagens = Object.values(somatorioLinguagens).reduce(
                    (acc, curr) => acc + curr,
                    0
                );

                const porcentagensCalculadas = {};
                for (const [lingua, total] of Object.entries(somatorioLinguagens)) {
                    porcentagensCalculadas[lingua] = (
                        (total / totalLinguagens) *
                        100
                    ).toFixed(1);
                }

                const somaPorcentagens = Object.values(porcentagensCalculadas).reduce(
                    (acc, curr) => acc + parseFloat(curr),
                    0
                );

                if (Math.abs(somaPorcentagens - 100) > 0.01) {
                    console.warn(
                        `A soma das porcentagens (${somaPorcentagens}) não é exatamente 100%.`
                    );
                }

                setDados(somatorioLinguagens);
                setPorcentagens(porcentagensCalculadas);

                console.log("Porcentagens:", porcentagensCalculadas);
            } catch (erro) {
                console.error("Erro ao buscar dados:", erro);
            }
        };

        fetchData();
    }, []);



    return (
        <section id="main-projects">
            <div id="divPerfilGithub-projects">

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={RichardPhoto} id="photoPerfilGithub-projects" alt="PhotoRichard"></img>

                    <h1 style={{marginBlock: '10px', fontSize: '20px'}}> Richard Valentim da Silva</h1>
                    <p style={{marginBottom: '10px', color: '#D9D9D9'}}>Valenart · He/Him</p>

                    <button id="buttonGitHubFollow-projects" onClick={handleOpenWindow}
                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <IoLogoGithub fontSize="20px" style={{marginInline: '5px'}}/>Follow
                    </button>

                    <h1 style={{fontWeight: '700', marginTop: '20px'}} id="mainTextPerfilGitHub">· Estatísticas de Linguagens ·</h1>
                    <h1 style={{fontWeight: '700', marginTop: '20px'}} id="altTextPerfilGitHub">· Conheça meus Projetos ·</h1>

                </div>

                <div>
                    <h3 style={{fontWeight: '500', fontSize: '14px', color: '#D9D9D9', textAlign: "center"}} id="mainTextPerfilGitHub">Porcentagem
                        das 5 Linguagens que mais uso em meu GitHub:</h3>
                    <h3 style={{fontWeight: '500', fontSize: '14px', color: '#D9D9D9', textAlign: "center"}} id="altTextPerfilGitHub">Conheça
                        alguns Projetos que estão no GitHub</h3>
                    <ul id="listLanguagesAPI-projects">
                        {Object.entries(porcentagens).map(([lingua, porcentagem]) => (
                            <li key={lingua}>
                                <p><strong>{lingua}</strong> - {porcentagem}%</p>
                                <div style={getEstilos(porcentagem)}></div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div id="divRepGithub-projects">

                <div className="repsGithub-projects">
                    <div className="textRepsGithub-projects">
                        <a href='https://github.com/Valenart/Valenart' target="_blank"
                           rel="noopener noreferrer">Valenart <MdArrowOutward style={{marginInline:'5px'}}/> </a>
                        <p>Meu README</p>
                    </div>

                    <img src={README} onClick={() => handleOpenWindow2(0)}></img>
                </div>

                <div className="repsGithub-projects">
                    <div className="textRepsGithub-projects">
                        <a href='https://github.com/Valenart/my-portfolio-site' target="_blank"
                           rel="noopener noreferrer">my-portfolio-site <MdArrowOutward style={{marginInline:'5px'}}/></a>
                        <p>Meu site portfólio</p>
                    </div>

                    <img src={'/'}></img>
                </div>

                <div className="repsGithub-projects">
                    <div className="textRepsGithub-projects">
                        <a href='https://github.com/Valenart/Mith-Influencers' target="_blank"
                           rel="noopener noreferrer">Mith-Influencers <MdArrowOutward style={{marginInline:'5px'}}/></a>
                        <p>Sites dos influencers da Mith</p>
                    </div>

                    <img src={Mith} onClick={() => handleOpenWindow2(1)}></img>
                </div>

                <div className="repsGithub-projects">
                    <div className="textRepsGithub-projects">
                        <a href='https://github.com/Valenart/Mith-Influencers' target="_blank"
                           rel="noopener noreferrer">jokenpo <MdArrowOutward style={{marginInline:'5px'}}/></a>
                        <p>Meu projeto da Faculdade: Jogo Jokempô usando cliente/servidor!</p>
                    </div>

                    <img src={Jokempo} onClick={() => handleOpenWindow2(2)}></img>
                </div>

            </div>
        </section>
)
}