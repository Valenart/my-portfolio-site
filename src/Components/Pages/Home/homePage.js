/*IMPORT IMAGES AND COMPONENTS*/
import Navbar from "./HomeComponents/Navbar/Navbar";
import Perfil from './HomeComponents/Perfil/perfil';
import Certification from "./HomeComponents/Certifications/certificacoes";
import Networking from "./HomeComponents/Networking/networking";
import Footer from "./HomeComponents/Footer/footer";


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
            <Navbar/>
            <Perfil/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Certification/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Networking/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </main>
    )
}

export default Home;