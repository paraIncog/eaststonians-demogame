function end_1() {
	end1Done = true;
	mainContent.innerHTML = `
	<div class="end-page">
		<div class="end-msg">

			<div class="end-cont-btn">
				<button onclick="endsDoneCount()">
					Continue
				</button>
			</div>

			"In fear of being besieged, the Crusaders and Aestonians agreed on a border. But to appease God, the Crusaders brought more divisions to the border,
			<span></span> just in case if Aestonians need special pontifical operation."

		</div>
		<div class="end-img-container">
			<img class="end-img" src="./img/endings/ancient_boundaries_4.png" alt="narrative pic" />
		</div>
	</div>
	`;
}