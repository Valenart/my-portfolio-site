// noinspection JSValidateTypes

import BradescoLogo from '../../../../../../Assets/Png/Icons/Banco.png';
import AWSLogo from '../../../../../../Assets/Png/Icons/Amazon_Web_Services_Logo.svg.png';
import CiscoLogo from '../../../../../../Assets/Png/Icons/cisco.png';
import CourseraLogo from '../../../../../../Assets/Png/Icons/coursera.png';
import SenaiLogo from '../../../../../../Assets/Png/Icons/download.png';
import FiapLogo from '../../../../../../Assets/Png/Icons/FIAP-Apoiador (1).png';
import GoogleLogo from '../../../../../../Assets/Png/Icons/google.png';
import MetaLogo from '../../../../../../Assets/Png/Icons/meta-platforms-inc-4096 (2).png';
import SantanderLogo from '../../../../../../Assets/Png/Icons/santander.png';
import MicrosoftLogo from '../../../../../../Assets/Png/Icons/logo-microsoft-4096 (1).png';

/**/
import "./framerMotion.css";

/**/
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export default function FramerMotion() {
    return (
        <section>
            {/* Substituímos texto por imagens */}
            <ParallaxText baseVelocity={0.5} className="teste1">
                <img src={AWSLogo} style={{height:'50px',paddingInline:'16px',filter:'brightness(0.8)',}}></img>
                <img src={GoogleLogo} style={{height:'50px',paddingInline:'15px',filter:'brightness(0.8)'}}></img>
                <img src={MetaLogo} style={{height:'40px',paddingInline:'16px',filter:'brightness(0.8)'}}></img>
                <img src={BradescoLogo} style={{height:'50px',paddingInline:'15px',filter:'brightness(0.8)'}}></img>
                <img src={FiapLogo} style={{height:'30px',paddingInline:'16px',filter:'brightness(0.8)'}}></img>
                <img src={SantanderLogo} style={{height:'40px',paddingInline:'16px',filter:'brightness(0.8)'}}></img>
                <img src={MicrosoftLogo} style={{height:'40px',paddingInline:'16px',filter:'brightness(0.8)'}}></img>
                <img src={SenaiLogo} style={{height:'40px',paddingInline:'15px',filter:'brightness(0.8)'}}></img>
                <img src={CiscoLogo} style={{height:'60px',paddingInline:'15px',filter:'brightness(0.8)'}}></img>
                <img src={CourseraLogo} style={{height:'30px',paddingInline:'15px',filter:'brightness(0.8)'}}></img>
            </ParallaxText>
        </section>
    );
}
