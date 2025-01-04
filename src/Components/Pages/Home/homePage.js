/*IMPORT IMAGES AND COMPONENTS*/
import Perfil from './HomeComponents/Perfil/perfil';
import Networking from "./HomeComponents/Networking/networking";
import Footer from "./HomeComponents/Footer/footer";
import Certificacao from "./HomeComponents/Certifications/certificacoes";


/*LIBRARIES REACT IMPORTS*/
import FramerMotion from "./HomeComponents/Certifications/Scroll Motion/framerMotion";
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Perfil/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="titleContent-Home">HABILIDADES</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="titleContent-Home">CERTIFICAÇÕES</h1>
            <Certificacao/>
            {!isSmallScreen && <FramerMotion/>}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Networking/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </main>
    )
}

export default Home;