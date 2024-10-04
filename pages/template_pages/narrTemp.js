import { narrData } from "../../narration/narrData.js";

export function narrTemp(narrID) {
	const narr = narrData[narrID];
	mainContent.innerHTML = `
    <div class="cs-narr-page">
      <div class="cs-narr-pic-container">
        <img src="./img/csnarr_pics/${narr.narrImg}" alt="${narr.narrImg}" class="cs-narr-pic" />
      </div>
      <div class="cs-narr-story">
        ${narr.narrStory}
        <div class="cs-narr-cont-button">
          <button onclick="narr_${narr.narrNr}()">
            Continue
          </button>
        </div>
      </div>
    </div>
  `;
}
