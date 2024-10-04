function end_0() {
	end0Done = true
	mainContent.innerHTML = `

	<div class="end-page">
		<div class="end-img-container">
			<img class="end-img" src="./img/endings/livonian_war_flag.png" alt="narrative pic" />
		</div>
		<div class="end-msg">

			"Crusaders left Aestonian lands back to Riga. The command from God discarded, papal orders burnt, now the military has truly become the State."

			<div class="end-cont-btn">
				<button onclick="endsDoneCount()">
					Continue
				</button>
			</div>
		</div>
	</div>
	`;
}