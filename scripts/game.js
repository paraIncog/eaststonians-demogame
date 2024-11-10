// Main Pages
import { loadingPage } from "../pages/loadingPage.js";
import { mainMenu } from "../pages/mainMenu.js";
import { aboutPage } from "../pages/aboutPage.js";

import { narrTemp } from "../pages/template_pages/narrTemp.js"; // Narration
import { chsTemp } from "../pages/template_pages/chsTemp.js"; // Choices
import { endTemp } from "../pages/template_pages/endTemp.js"; // Endings

function game() {
	const mainContent = document.getElementById("main-content");
	loadingPage()	
	setTimeout(() => {
		mainMenu();
  	}, 2000);
}

game();
