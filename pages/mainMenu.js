import { aboutPage } from "./aboutPage.js";

export function mainMenu() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
		<div class="title-page">
			<div class="title-logo">
				<div class="title-logo">East-stonians</div>
				<div class="demo-marker">Demo</div>
				<!-- <img src="./img/logo/aestonia_demo_logo.png" alt="gametitle" class="title-logo" /> -->
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
    playButton.addEventListener("click", firstNarr_0);
	const aboutButton = document.getElementById("about-page");
    aboutButton.addEventListener("click", aboutPage);
}
