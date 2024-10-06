export function narr_1() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="narr-page">
		<div class="narr-pic-container">
			<img src="./img/csnarr_pics/ancient_boundaries_2.png" alt="narrative pic" class="narr-pic" />
			
			<!-- Medieval map of terrain, with territories -->
			<!-- <img class="narr-img" src="./img/narr_img/ancient_polit_map.png" alt="Ancient Political Baltic Map" /> -->
		</div>
		<div class="narr-story">

			"But then, conquerors - the Kalmarians, Hoarders, and Teutons - looked toward the Baltics and saw a world of opportunities."

			<div class="narr-cont-button">
				<button id="next-narr">
					Continue
				</button>
			</div>
		</div>
	</div>
	`;
	const nextNarr = document.getElementById("next-narr");
    nextNarr.addEventListener("click", narr_2);
}
