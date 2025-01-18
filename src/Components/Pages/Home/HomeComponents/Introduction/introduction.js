import React from "react";
import { useSpring, animated } from "@react-spring/web";
import ButtonGitHub from "../../../../GlobalComponents/Buttons/custom buttons/buttonGitHub";
import ButtonLinkedIn from "../../../../GlobalComponents/Buttons/custom buttons/buttonLinkedIn";

import HelloImage from '../../../../../Assets/SVG Icons/Images SVG/IntroImage.svg';

import './introduction.css';

export default function Introduction() {

    const styles = useSpring({
        from: { transform: "translateY(0px)" },
        to: async (next) => {
            while (true) {
                await next({ transform: "translateY(-20px)" }); // Sobe 20px
                await next({ transform: "translateY(0px)" });  // Volta ao normal
            }
        },
        config: { duration: 2000 },
    });


    return (
        <section id="main-introduction">
            <div
                id="divTextArea-introduction"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h1 id="mainText-introduction"><span style={{color: '#2B5189'}} >Bem Vindo</span> ao meu site Portfólio!</h1>
                <p style={{color:'#D9D9D9'}} id="secondText-introduction">Descubra mais sobre meus projetos, habilidades e experiências profissionais.
                   Conheça os detalhes do meu trabalho e conecte-se comigo através do meu perfil no LinkedIn.</p>
                <div id="divButtons-introduction">
                    <ButtonGitHub text={"GitHub"} />
                    <ButtonLinkedIn text={"LinkedIn"} />
                </div>
            </div>

            <div id="divImage-introduction">
                <animated.img src={HelloImage} alt="Hello" style={styles} />
            </div>
        </section>
    );
}
