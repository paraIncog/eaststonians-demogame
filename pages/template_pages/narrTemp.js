import { narrData } from "../../narration/narrData.js";
import { chsTemp } from "./chsTemp.js";  // Import chsTemp to handle choices

export function narrTemp(narrID) {
    const narr = narrData[narrID];
    const mainContent = document.getElementById("main-content");

    mainContent.innerHTML = `
    <div class="narr-page">
      <div class="narr-pic-container">
        <img src="../../img/narr_img/${narr.narrImg}" alt="${narr.narrImg}" class="narr-pic" />
      </div>
      <div class="narr-story">
        ${narr.narrStory}
        <div class="narr-cont-button">
          <button id="next-narr">Continue</button>
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
}
