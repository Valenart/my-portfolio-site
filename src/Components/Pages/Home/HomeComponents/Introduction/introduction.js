import ButtonGitHub from "../../../../GlobalComponents/Buttons/custom buttons/buttonGitHub";
import ButtonLinkedIn from "../../../../GlobalComponents/Buttons/custom buttons/buttonLinkedIn";
import './introduction.css';

export default function Introduction () {
    return (
        <section id="main-introduction">
            <div id='divTextArea-introduction'>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ButtonGitHub text={"GitHub"}/>
                    <ButtonLinkedIn text={"LinkedIn"}/>
                </div>
            </div>
        </section>
    )
}