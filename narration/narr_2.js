export function narr_2() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="narr-page">
		<div class="narr-pic-container">
			<img src="./img/csnarr_pics/ancient_boundaries_3.png" alt="narrative pic" class="narr-pic" />

			<!-- Medieval map of terrain, with territories, paper teared up -->
			<!-- <img class="narr-img" src="./img/narr_img/ancient_polit_map_teared.png" alt="Ancient Teared Political Baltic Map" /> -->
		</div>
		<div class="narr-story">

			"The Teutons, with the Livonian Brothers of the Sword, had already planned a crusade to 'liberate' the land from 'pagans',
			<span></span> intending to educate them on their 'covenant with God'."

			<div class="narr-cont-button">
				<button id="next-narr">
					Continue
				</button>
			</div>
		</div>
	</div>
	`;
	const nextNarr = document.getElementById("next-narr");
    nextNarr.addEventListener("click", chs_0);
}
