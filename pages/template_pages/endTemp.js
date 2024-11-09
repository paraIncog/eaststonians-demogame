import { endData } from "../../narration/endData.js";
import { mainMenu } from "../mainMenu.js";
import { applyGlobalButtonSounds } from "../../scripts/game.js";

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

    const contBtn = document.getElementById("cont-btn");
    contBtn.addEventListener("click", mainMenu);  // Return to main menu after ending
	applyGlobalButtonSounds();
}
