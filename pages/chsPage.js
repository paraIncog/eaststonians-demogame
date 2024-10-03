function chsPage() {
	mainContent.innerHTML = `
	<div class="chs-page">
		<div class="choice-maker"> <!-- German Choices -->
			<div id="choices-area">
				<div id="choice1" class="choice-button">
					<button class="choice">
						Consectetur adipiscing elit. Quisque ullamcorper.
					</button>
				</div>
				<div id="choice2" class="choice-button">
					<button class="choice">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</button>
				</div>
			</div>
			<div class="chs-story">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper.
			</div>
			<div class="chs-pic-container">
				<img src="./img/csh_pics/teutonic_order.png" alt="choices pic" class="chs-pic" />
			</div>
		</div>

		<!-- Choices/Results Divider -->
		<div class="chs-rslt-div"></div>

		<div class="results-courier"> <!-- Estonian Results -->
			<div class="recent-choice">
				Last choice: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</div>
			<div class="chs-pic-container">
				<img src="./img/csh_pics/ancient_estonia.png" alt="results pic" class="chs-pic" />
			</div>
			<div class="chs-story">
				Donec sodales suscipit metus ut maximus. Cras mi ligula, vestibulum ut diam sit amet
			</div>
		</div>
	`;
}

activeDebugPage.innerText = `chsPage`;