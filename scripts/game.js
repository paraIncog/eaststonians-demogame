import { loadingPage } from "../pages/loadingPage.js";
import { mainMenu } from "../pages/mainMenu.js";
import { aboutPage } from "../pages/aboutPage.js";
import { ty_msg } from "../pages/ty_msg.js";

import { endsDoneCount } from "../scripts/endScript.js";

import { firstNarr_0 } from "../narration/firstNarr_0.js";
window.firstNarr_0 = firstNarr_0;

import { firstNarr_1 } from "../narration/firstNarr_1.js";
window.firstNarr_1 = firstNarr_1;

import { firstNarr_2 } from "../narration/firstNarr_2.js";
window.firstNarr_2 = firstNarr_2;

// import { chs_0 } from "../narration/choices/chs_0.js";
// import { chs_1 } from "../narration/choices/chs_1.js";

// import { end_0 } from "../narration/endings/end_0.js";
// import { end_1 } from "../narration/endings/end_1.js";
// import { end_2 } from "../narration/endings/end_2.js";


function game() {
	
	let end0Done = false;
	let end1Done = false;
	let end2Done = false;
	
	const mainContent = document.getElementById("main-content");
	loadingPage()	
	setTimeout(() => {
		mainMenu();
  	}, 2000);
}

game();