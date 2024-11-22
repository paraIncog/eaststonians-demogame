// Main Pages
import { loadingPage } from "../pages/loadingPage.js";
import { mainMenu } from "../pages/mainMenu.js";
import { aboutPage } from "../pages/aboutPage.js";

// Game Pages
import { narrTemp } from "../pages/template_pages/narrTemp.js"; // Narration
import { chsTemp } from "../pages/template_pages/chsTemp.js"; // Choices
import { endTemp } from "../pages/template_pages/endTemp.js"; // Endings

// Other Functionality
import { toggleSound } from "./sounds.js";

function setupSoundToggle() {
    const soundToggleButton = document.getElementById('sound-toggle');
    soundToggleButton.addEventListener('click', toggleSound);
}

function game() {
	const mainContent = document.getElementById("main-content");
	loadingPage()
	setupSoundToggle();
	setTimeout(() => {
		mainMenu();
  	}, 2000);
}

game();
