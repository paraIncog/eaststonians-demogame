export function firstNarr_0() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="cs-narr-page">
		<div class="cs-narr-pic-container">
			<img src="./img/csnarr_pics/ancient_boundaries.png" alt="narrative pic" class="cs-narr-pic" />

			<!-- Medieval map of terrain -->
			<!-- <img class="narr-img" src="./img/narr_img/ancient_terr_map.png" alt="Ancient Baltic Terrain Map" /> -->
		</div>
		<div class="cs-narr-story">

			"In the beginning, there were the Saxons, Latgalians, Samogitians, Kievans, and <span class="eastston-blue">East-stonians</span>."

			<div class="cs-narr-cont-button">
				<button id="next-narr">
					Continue
				</button>
			</div>
		</div>
	</div>
	`;
	const nextNarr = document.getElementById("next-narr");
    nextNarr.addEventListener("click", firstNarr_1);
}
