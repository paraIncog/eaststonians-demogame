function firstNarr_1() {
	mainContent.innerHTML = `
	<div class="cs-narr-page">
		<div class="cs-narr-pic-container">
			<img src="./img/csnarr_pics/ancient_boundaries_2.png" alt="narrative pic" class="cs-narr-pic" />
			
			<!-- Medieval map of terrain, with territories -->
			<!-- <img class="narr-img" src="./img/narr_img/ancient_polit_map.png" alt="Ancient Political Baltic Map" /> -->
		</div>
		<div class="cs-narr-story">

			"But then, conquerors - the Kalmarians, Hoarders, and Teutons - looked toward the Baltics and saw a world of opportunities."

			<div class="cs-narr-cont-button">
				<button onclick="firstNarr_2()">
					Continue
				</button>
			</div>
		</div>
	</div>
	`;
}
