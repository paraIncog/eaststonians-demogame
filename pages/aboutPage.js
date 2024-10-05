import { mainMenu } from "./mainMenu.js";

export function aboutPage() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="title-page">
		<div class="about-game">
			Aestonia: First Contact is a choice-based RPG game, based in 13th century Estonian lands.
			For this demo version of the game, you play as the Livonian Brothers of the Sword (under Saxons) trying to conquer all of East-stonian lands.
		</div>
		<div>
			<button id="mm-btn">Back to Main Menu</button>
		</div>
	</div>
	`;

	const mmBtn = document.getElementById("mm-btn");
    mmBtn.addEventListener("click", mainMenu);
}
