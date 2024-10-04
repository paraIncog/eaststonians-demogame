function chs_1() {
	mainContent.innerHTML = `
	<div class="chs-page">
		<div class="choice-maker"> <!-- German Choices -->
			<div id="choices-area">
				<div id="choice1" class="choice-button">
					<button class="choice" onclick="end_1()">
						On the other hand. There could be many of them.
					</button>
				</div>
				<div id="choice2" class="choice-button">
					<button class="choice" onclick="end_2()">
						Aestonians.. What are they gonna do about it?
					</button>
				</div>
			</div>
			<div class="chs-story">
				For the God, we shall liberate the land from pagans!
			</div>
			<!-- <div class="chs-pic-container">
				<img src="./img/csh_pics/teutonic_order.png" alt="choices pic" class="chs-pic" />
			</div> -->
		</div>

		<!-- Choices/Results Divider -->
		<div class="chs-rslt-div"></div>

		<div class="results-courier"> <!-- Estonian Results -->
			<div class="chs-story">
				"Seriously? They want to fight? Heh. Christians."
			</div>
			<div class="chs-pic-container">
				<img src="./img/csh_pics/ancient_estonia.png" alt="results pic" class="chs-pic" />
			</div>
		</div>
	`;
}