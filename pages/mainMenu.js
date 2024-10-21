import { aboutPage } from "./aboutPage.js";
import { narrTemp } from "../pages/template_pages/narrTemp.js";

export function mainMenu() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
		<div class="title-page">
			<div class="title-logo">
				<img class="title-logo" src="../img/ui/east-stonians_logo.png" alt="east-stonians">
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
	
	const playButton = document.getElementById("play-button");
	playButton.addEventListener("click", () => narrTemp(0));  // Start from the first narrative
	const aboutButton = document.getElementById("about-page");
    aboutButton.addEventListener("click", aboutPage);
}
