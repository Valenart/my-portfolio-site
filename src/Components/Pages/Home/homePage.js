/*IMPORT IMAGES AND COMPONENTS*/
import Perfil from './Perfil/perfil';
import Networking from "./Networking/networking";
import Footer from "./Footer/footer";

/*LIBRARIES REACT IMPORTS*/
import FramerMotion from "./Certifications/framerMotion";
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
            <h1 className="titleContent-Home">Sobre mim</h1>
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
            <h1 className="titleContent-Home">NETWORKING</h1>
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