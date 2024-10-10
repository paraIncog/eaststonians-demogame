// Main Pages
import { loadingPage } from "../pages/loadingPage.js";
import { mainMenu } from "../pages/mainMenu.js";
import { aboutPage } from "../pages/aboutPage.js";

import { narrTemp } from "../pages/template_pages/narrTemp.js"; // Narration
import { chsTemp } from "../pages/template_pages/chsTemp.js"; // Choices
import { endTemp } from "../pages/template_pages/endTemp.js"; // Endings

// Endings
// import { end_0 } from "../narration/endings/end_0.js";
// window.end_0 = end_0;
// import { end_1 } from "../narration/endings/end_1.js";
// window.end_1 = end_1;
// import { end_2 } from "../narration/endings/end_2.js";
// window.end_2 = end_2;

function game() {
	const mainContent = document.getElementById("main-content");
	loadingPage()	
	setTimeout(() => {
		mainMenu();
  	}, 2000);
}

game();
