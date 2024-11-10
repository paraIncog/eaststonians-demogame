import { aboutPage } from "./aboutPage.js";
import { narrTemp } from "../pages/template_pages/narrTemp.js";
import { btnSnd, mainMenuSound } from "../scripts/sounds.js";

export function mainMenu() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
		<div class="title-page">
			<div class="title-logo">
				<img class="title-logo" src="../img/logo/east-stonians_logo_pixel.png" alt="east-stonians">
			</div>

			<div class="title-buttons">
				<div>
					<button class="title-button" id="play-button">Play</button>
				</div>

				<div>
					<button class="title-button" id="about-page">About</button>
				</div>
			</div>
		</div>
	`;

	const menuMusic = mainMenuSound();
	
	const playButton = document.getElementById("play-button");

	playButton.addEventListener("click", () => {
		menuMusic.pause();
		menuMusic.currentTime = 0;
		narrTemp(0);
	});  // Start from the first narrative

	const aboutButton = document.getElementById("about-page");

    aboutButton.addEventListener("click", () => {
		menuMusic.pause();
		menuMusic.currentTime = 0;
		aboutPage();
	});

	btnSnd();
}
