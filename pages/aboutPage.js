import { mainMenu } from "./mainMenu.js";
import { applyGlobalButtonSounds } from "../scripts/game.js";

export function aboutPage() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="title-page">
		<div class="about-game">
			A choice-based RPG set in 13th-century Estonia.
			In this demo version, you play as a commander of the Divinian Brothers of the Sword, attempting to conquer the Eastern Lands.
			Will the Crusade succeed, or will you be forced back to Saintnican?
			The wisest decisions are yours to make.
		</div>
		<div>
			<button id="mm-btn">Back to Main Menu</button>
		</div>
	</div>
	`;

	const mmBtn = document.getElementById("mm-btn");
    mmBtn.addEventListener("click", mainMenu);

	applyGlobalButtonSounds();
}
