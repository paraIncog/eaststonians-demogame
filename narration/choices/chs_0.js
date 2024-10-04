function chs_0() {
	mainContent.innerHTML = `
	<div class="chs-page">
		<div class="choice-maker"> <!-- German Choices -->
			<div id="choices-area">
				<div id="choice1" class="choice-button">
					<button class="choice" onclick="end_0()">
						Let's go back to Riga. Leave them be.
					</button>
				</div>
				<div id="choice2" class="choice-button">
					<button class="choice" onclick="chs_1()">
						That will not stand. Deus Vult!
					</button>
				</div>
			</div>
			<div class="chs-story">
				You have entered into Aestonian lands.
			</div>
			<!-- <div class="chs-pic-container">
				<img src="./img/csh_pics/teutonic_order.png" alt="choices pic" class="chs-pic" />
			</div> -->
		</div>

		<!-- Choices/Results Divider -->
		<div class="chs-rslt-div"></div>

		<div class="results-courier"> <!-- Estonian Results -->
			<div class="chs-story">
			"You are not welcome here."
			</div>
			<div class="chs-pic-container">
				<img src="./img/csh_pics/ancient_estonia.png" alt="results pic" class="chs-pic" />
			</div>
		</div>
	`;
}
