import { endData } from "../../narration/endData.js";
import { mainMenu } from "../mainMenu.js";
import { btnSnd, end0_Sound, end1_Sound, end2_Sound, playSound, stopSound } from "../../scripts/sounds.js";

export function endTemp(endID) {
    const end = endData[endID];
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
    <div class="end-page">
        <div class="end-msg">
            <div class="end-cont-btn">
                <button id="cont-btn">Continue</button>
            </div>
            ${end.endStory}
        </div>
        <div class="end-img-container">
            <img class="end-img" src="../../img/end_img/${end.endImg}" alt="${end.endImg}" />
        </div>
    </div>
    `;

    // Choose and play the ending sound based on endID
    let endingSound;
    if (endID === 0) {
        endingSound = end0_Sound();
    } else if (endID === 1) {
        endingSound = end1_Sound();
    } else if (endID === 2) {
        endingSound = end2_Sound();
    }

    playSound(endingSound);

    // Add event listener to stop sound and return to main menu on button click
    const contBtn = document.getElementById("cont-btn");
    contBtn.addEventListener("click", () => {
        if (endingSound) stopSound(endingSound);
        mainMenu();
    });
	
    btnSnd();
}
