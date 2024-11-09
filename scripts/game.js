// Main Pages
import { loadingPage } from "../pages/loadingPage.js";
import { mainMenu } from "../pages/mainMenu.js";
import { aboutPage } from "../pages/aboutPage.js";

import { narrTemp } from "../pages/template_pages/narrTemp.js"; // Narration
import { chsTemp } from "../pages/template_pages/chsTemp.js"; // Choices
import { endTemp } from "../pages/template_pages/endTemp.js"; // Endings

// import { sounds } from "../scripts/sounds.js" // Sounds file

function game() {
	const mainContent = document.getElementById("main-content");
	loadingPage()	
	setTimeout(() => {
		mainMenu();
  	}, 2000);
}

function initButtonSounds() {
    const sound = new Audio('../horse.mp3'); // Ensure the path is correct
    sound.load();

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            sound.currentTime = 0; // Reset sound for repeated clicks
            sound.play().catch(error => console.log("Error playing sound:", error));
        });
    });
}

// Call this function whenever a new page is rendered
export function applyGlobalButtonSounds() {
    initButtonSounds();
}

game();
