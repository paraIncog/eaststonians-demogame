import { chsData } from "../../narration/chsData.js";
import { endTemp } from "./endTemp.js";  // Import endTemp for handling endings

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
			<div class="chs-img-container">
				<img src="../../img/chs_img/${chs.chsImg}" alt="${chs.chsImg}" class="chs-img" />

				<!-- Path no longer visible; latvian guy standing closer, is darker and less focused -->
				<!-- <img class="chs-img" src="./img/chs_img/end_of_path.png" alt="No more Path" /> -->
			</div>
		</div>
	`;
	
	// Handle choice 1
    const choice1 = document.getElementById("choice1");
    choice1.addEventListener("click", () => {
        if (chs.nextChoice1.startsWith("end")) {
            endTemp(parseInt(chs.nextChoice1.slice(-1)));  // Go to the specified ending
        } else {
            chsTemp(parseInt(chs.nextChoice1.match(/\d+/)[0]));  // Go to the next choice
        }
    });

    // Handle choice 2
    const choice2 = document.getElementById("choice2");
    choice2.addEventListener("click", () => {
        if (chs.nextChoice2.startsWith("end")) {
            endTemp(parseInt(chs.nextChoice2.slice(-1)));  // Go to the specified ending
        } else {
            chsTemp(parseInt(chs.nextChoice2.match(/\d+/)[0]));  // Go to the next choice
        }
	});
}
	
// const choice1 = document.getElementById("choice1");
// choice1.addEventListener("click", end_1);

// const choice2 = document.getElementById("choice2");
// choice2.addEventListener("click", end_2);