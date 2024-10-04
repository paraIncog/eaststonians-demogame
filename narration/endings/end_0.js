function end_0() {
	end0Done = true
	mainContent.innerHTML = `
	<div class="end-page">
		<div class="end-msg">

			<div class="end-cont-btn">
				<button onclick="endsDoneCount()">
					Continue
				</button>
			</div>

			"The Crusaders left the Eastern Lands and returned to Riga. With God's command discarded and papal orders burned,
			<span></span> the military had now truly become the State."

		</div>
		<div class="end-img-container">
			<img class="end-img" src="./img/endings/livonian_war_flag.png" alt="narrative pic" />

			<!-- Livonian war flag on a castle -->
			<!-- <img class="end-img" src="./img/end_img/castle_liv_war_flag.png" alt="Livonian War Flag on Castle" /> -->
		</div>
	</div>
	`;
}
