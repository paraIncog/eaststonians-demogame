function mainMenu() {
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
					<button class="title-button" onclick="firstNarr_0()">Play</button>
				</div>

				<div>
					<button class="title-button" onclick="aboutPage()">About</button>
				</div>
			</div>
		</div>
	`;
}
