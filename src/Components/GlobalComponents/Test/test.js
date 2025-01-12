import './test.css';
import Terra from '../../../Assets/Icons/SVG/Terra.svg'

export default function test() {
    return (
        <section id="bentoGrid-skills">

            <div id="upperDivGrid-skills">
                <div id='card1Grid-skills'>
                    <img src={Terra} alt="EarthIcon" id="smallEarthIcon-skills"/>
                    <img src={Terra} alt="EarthIcon" id="largeEarthIcon-skills"/>
                    <h3></h3>
                    <p></p>
                </div>

                <div id='card2Grid-skills'>
                    <h3></h3>
                    <p></p>
                </div>
            </div>

            <div id="lowerDivGrid-skills">
                <div id='card3Grid-skills'>
                    <h3></h3>
                    <p></p>
                </div>

                <div id='card4Grid-skills'>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </section>
    )
}