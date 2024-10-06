import { narrData } from "../../narration/narrData.js";

export function narrTemp(narrID) {
	const narr = narrData[narrID];
	mainContent.innerHTML = `
    <div class="narr-page">
      <div class="narr-pic-container">
        <img src="./img/narr_img/${narr.narrImg}" alt="${narr.narrImg}" class="narr-pic" />
      </div>
      <div class="narr-story">
        ${narr.narrStory}
        <div class="narr-cont-button">
          <button id="next-narr">
            Continue
          </button>
        </div>
      </div>
    </div>
  `;
}
