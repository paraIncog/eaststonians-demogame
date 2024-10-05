// Main Pages
import { loadingPage } from "../pages/loadingPage.js";
import { mainMenu } from "../pages/mainMenu.js";
import { aboutPage } from "../pages/aboutPage.js";

// Narrative (for demo it is just intro)
import { firstNarr_0 } from "../narration/firstNarr_0.js";
window.firstNarr_0 = firstNarr_0;
import { firstNarr_1 } from "../narration/firstNarr_1.js";
window.firstNarr_1 = firstNarr_1;
import { firstNarr_2 } from "../narration/firstNarr_2.js";
window.firstNarr_2 = firstNarr_2;

// Choices
import { chs_0 } from "../narration/choices/chs_0.js";
window.chs_0 = chs_0;
import { chs_1 } from "../narration/choices/chs_1.js";
window.chs_1 = chs_1;

// Endings
import { end_0 } from "../narration/endings/end_0.js";
window.end_0 = end_0;
import { end_1 } from "../narration/endings/end_1.js";
window.end_1 = end_1;
import { end_2 } from "../narration/endings/end_2.js";
window.end_2 = end_2;

function game() {
	
	const mainContent = document.getElementById("main-content");
	loadingPage()	
	setTimeout(() => {
		mainMenu();
  	}, 2000);
}

game();