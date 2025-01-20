import './undeline.css'
import { Link } from 'react-scroll';

export default function Underline ({textNavbar = '', linkRef = ""}) {


    return (
        <div id='main-underline' style={{cursor: 'pointer'}}>
            <Link to={linkRef} smooth={true} duration={500}>{textNavbar}</Link>
            <div id="line-underline"></div>
        </div>
    )
};