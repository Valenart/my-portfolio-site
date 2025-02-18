/*IMPORT IMAGES AND COMPONENTS*/
import Navbar from "./HomeComponents/Navbar/Navbar";
import Introduction from './HomeComponents/Introduction/introduction';
import Perfil from './HomeComponents/Perfil/perfil';
import Skills from './HomeComponents/Skills/Skills.js';
import Certification from "./HomeComponents/Certifications/certificacoes";
import Networking from "./HomeComponents/Networking/networking";
import Footer from "./HomeComponents/Footer/footer";
import SkillsResponsive from '../ResponsiveElements/skillsReponsive'
/*LIBRARIES REACT IMPORTS*/
import {useEffect, useState} from "react";

/*IMPORT CSS*/
import './homePage.css';


function Home() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    /*************************************************/

    return (
        <main id="home">
            <Navbar/>
            <Introduction/>
            <Perfil/>
            <h1 id="titleCards-skillsResponsive">As habilidades que moldam meu trabalho</h1>
            <SkillsResponsive/>
            <Skills/>
            <Certification/>
            <Networking/>
            <Footer/>
        </main>
    )
}

export default Home;