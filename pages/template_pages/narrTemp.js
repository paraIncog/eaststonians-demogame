import { narrData } from "../../narration/narrData.js";
import { chsTemp } from "./chsTemp.js";
import { btnSnd } from "../../scripts/sounds.js";

export function narrTemp(narrID) {
    const narr = narrData[narrID];
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
    <div class="narr-page">
      <div class="narr-img-container">
        <img src="/img/narr_img/${narr.narrImg}" alt="${narr.narrImg}" class="narr-img" />
      </div>
      <div class="narr-story">
        ${narr.narrStory}
        <div class="narr-cont-button">
          <button id="next-narr">Continue</button>
        </div>
        <div id="skip-narr-btn" class="clickable">
          Skip
        </div>
      </div>
    </div>
    `;

    const nextNarr = document.getElementById("next-narr");
    nextNarr.addEventListener("click", () => {
        const nextNarrID = narrID + 1;
        if (nextNarrID < narrData.length) {
          narrTemp(nextNarrID);
        } else {
          chsTemp(0);
        }
    });

    const skipButton = document.getElementById("skip-narr-btn");
    skipButton.addEventListener("click", () => {
        chsTemp(0);
    });

	btnSnd();
}
