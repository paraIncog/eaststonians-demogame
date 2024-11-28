import { aboutPage } from "./aboutPage.js";
import { narrTemp } from "../pages/template_pages/narrTemp.js";
import { btnSnd, mainMenuSound, playSound, stopSound } from "../scripts/sounds.js";

export function mainMenu() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
		<div class="title-page">
			<div class="title-logo">
				<img class="title-logo" src='./img/logo/east-stonians_logo_pixel.png' alt="east-stonians">
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
    playSound(menuMusic);

    const playButton = document.getElementById("play-button");

    playButton.addEventListener("click", () => {
        stopSound(menuMusic);
        narrTemp(0);
    });

    const aboutButton = document.getElementById("about-page");
    aboutButton.addEventListener("click", () => {
        stopSound(menuMusic);
        aboutPage();
    });

	btnSnd();
}
