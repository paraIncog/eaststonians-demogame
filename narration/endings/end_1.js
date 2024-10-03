function end_1() {
	end1Done = true;
	mainContent.innerHTML = `
	<div class="end-page">
		<img class="cs-narr-pic" src="./img/endings/ancient_boundaries_4.png" alt="Ending 1" />
		<div class="ty-msg">
			In fear of being besieged, the Crusaders and Aestonians agreed on a border. But to appease God, the Crusaders brought more divisions to the border,
			<span></span> just in case if Aestonians need special pontifical operation.
		</div>
		<div>
			<button onclick="endsDoneCount()">Continue</button>
		</div>
	</div>
	`;
}