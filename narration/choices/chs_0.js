function chs_0() {
	mainContent.innerHTML = `
	<div class="chs-page">
		<div class="choice-maker">
			<div id="choices-area">
				<div id="choice1" class="choice-button">
					<button class="choice" onclick="end_0()">
						Let's go back to Riga!
					</button>
				</div>
				<div id="choice2" class="choice-button">
					<button class="choice" onclick="chs_1()">
						That will not stand. Deus Vult!
					</button>
				</div>
			</div>
			<div class="chs-story">
				You have entered the Eastern Lands.
			</div>
		</div>

		<!-- Choices/Results Divider -->
		<div class="chs-rslt-div"></div>

		<div class="results-courier">
			<div class="chs-story">
			"Not to be rude, but I'm warning you: You're not welcome there."
			</div>
			<div class="chs-pic-container">
				<img src="./img/csh_pics/ancient_estonia.png" alt="results pic" class="chs-pic" />

				<!-- Paved path road towards forest, and latvian guy standing next to it -->
				<!-- <img class="chs-img" src="./img/chs_img/ending_path.png" alt="Ending of the path" /> -->
			</div>
		</div>
	`;
}
