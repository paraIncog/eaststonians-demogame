function end_2() {
	end2Done = true;
	mainContent.innerHTML = `
	<div class="end-page">
		<div class="end-msg">

			<div class="end-cont-btn">
				<button onclick="endsDoneCount()">
					Continue
				</button>
			</div>

			"But they did many. Firstly, God's army was wiped out; Secondly, in favor of true peace, the Balts joined together to push Crusaders back
			<span></span> to Flatlands and Wildfire. And finally, t'was agreed upon forming a confederation, so that
			<span></span> there would be no threats ever again."

		</div>
		<div class="end-img-container">
			<img class="end-img" src="./img/endings/ancient_boundaries_5.png" alt="narrative pic" />

			<!-- Map. Representing estonia: wolf, herrings in mouth. Representing latvia: hedgehog. Representing lithuania: white stork. -->
			<!-- <img class="end-img" src="./img/end_img/balt_conf.png" alt="Baltic Confederacy" /> -->
		</div>
	</div>
	`;
}
