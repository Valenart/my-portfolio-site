import Perfil from './Perfil/perfil';
import Networking from "./Networking/networking";
import FramerMotion from "./Certifications/framerMotion";
import {useEffect, useState} from "react";

function Home() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <main >
                <Perfil/>
                <br></br>
                <br></br>
                <br></br>
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

        </main>
    )
}

export default Home;