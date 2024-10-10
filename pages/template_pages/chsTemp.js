import { chsData } from "../../narration/chsData.js";

export function chsTemp(chsID) {
	const chs = chsData[chsID];
    const mainContent = document.getElementById("main-content");

	mainContent.innerHTML = `
	<div class="chs-page">
		<div class="choice-maker">
			<div id="choices-area">
				<div id="choice1" class="choice-button">
					<button class="choice" id="choice1">
						${chs.chsBtn1}
					</button>
				</div>
				<div id="choice2" class="choice-button">
					<button class="choice" id="choice2">
						${chs.chsBtn2}
					</button>
				</div>
			</div>
			<div class="chs-story">
				${chs.chsStory1}
			</div>
		</div>

		<!-- Choices/Results Divider -->
		<div class="chs-rslt-div"></div>

		<div class="results-courier">
			<div class="chs-story">
				${chs.chsStory2}
			</div>
			<div class="chs-pic-container">
				<img src="../../img/chs_img/${chs.chsImg}" alt="${chs.chsImg}" class="chs-pic" />

				<!-- Path no longer visible; latvian guy standing closer, is darker and less focused -->
				<!-- <img class="chs-img" src="./img/chs_img/end_of_path.png" alt="No more Path" /> -->
			</div>
		</div>
	`;
	
	// Define the logic for choice buttons
	const choice1 = document.getElementById("choice1");
	choice1.addEventListener("click", () => {
		// Handle choice 1 logic, e.g., go to next narrative or ending
		if (chs.nextChoice1 !== undefined) {
			chsTemp(chs.nextChoice1);  // Go to the next choice based on data
		} else {
			end_0();  // or other action based on the game flow
		}
	});
	
	const choice2 = document.getElementById("choice2");
	choice2.addEventListener("click", () => {
		// Handle choice 2 logic
		if (chs.nextChoice2 !== undefined) {
			chsTemp(chs.nextChoice2);
		} else {
			end_1();  // or other action
		}
	});
}
	
// const choice1 = document.getElementById("choice1");
// choice1.addEventListener("click", end_1);

// const choice2 = document.getElementById("choice2");
// choice2.addEventListener("click", end_2);