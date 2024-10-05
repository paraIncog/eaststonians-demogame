import { mainMenu } from "../../pages/mainMenu.js";

export function end_1() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="end-page">
		<div class="end-msg">

			<div class="end-cont-btn">
				<button id="cont-btn">
					Continue
				</button>
			</div>

			"In fear of being besieged, a border was agreed upon. But to appease The Greatest, Crusaders brought more divisions to the border,
			<span></span> just in case if the opposers need special pontifical operation."

		</div>
		<div class="end-img-container">
			<img class="end-img" src="./img/endings/ancient_boundaries_4.png" alt="narrative pic" />

			<!-- Path is extended further, installed fences, borderposts, and border guards.
			On estonian side: cornflower and barnswallow, and a limestone "hill";
			Latvian side: oxeye daisy.; -->
			<!-- <img class="end-img" src="./img/end_img/border_est_liv.png" alt="Estonia-Livonia Border" /> -->
		</div>
	</div>
	`;
	const contBtn = document.getElementById("cont-btn");
    contBtn.addEventListener("click", mainMenu);
}
