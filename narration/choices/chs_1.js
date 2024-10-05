export function chs_1() {
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML = `
	<div class="chs-page">
		<div class="choice-maker">
			<div id="choices-area">
				<div id="choice1" class="choice-button">
					<button class="choice" onclick="end_1()" id="choice1">
						On the other hand, there might be many of them.
					</button>
				</div>
				<div id="choice2" class="choice-button">
					<button class="choice" onclick="end_2()" id="choice2">
						East-stonians.. What they gon' do 'bout it?
					</button>
				</div>
			</div>
			<div class="chs-story">
				For The Greatest, we shall liberate the land from pagans!
			</div>
		</div>

		<!-- Choices/Results Divider -->
		<div class="chs-rslt-div"></div>

		<div class="results-courier"> <!-- Estonian Results -->
			<div class="chs-story">
				"Only warned ya'. Good luck!"
			</div>
			<div class="chs-pic-container">
				<img src="./img/csh_pics/ancient_estonia.png" alt="results pic" class="chs-pic" />

				<!-- Path no longer visible; latvian guy standing closer, is darker and less focused -->
				<!-- <img class="chs-img" src="./img/chs_img/end_of_path.png" alt="No more Path" /> -->
			</div>
		</div>
	`;

	const choice1 = document.getElementById("choice1");
    choice1.addEventListener("click", end_1);
	
	const choice2 = document.getElementById("choice2");
    choice2.addEventListener("click", end_2);
}
