import './undeline.css'

export default function Underline ({textNavbar = '', linkRef = ""}) {
    return (
        <div id='main-underline'>
            <a href={linkRef}>{textNavbar}</a>
            <div id="line-underline"></div>
        </div>
    )
};