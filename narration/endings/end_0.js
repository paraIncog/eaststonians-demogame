function end_0() {
	end0Done = true
	mainContent.innerHTML = `
	<div class="end-page">
		<img class="cs-narr-pic" src="./img/endings/livonian_war_flag.png" alt="Ending 0" />
		<div class="ty-msg">
			Crusaders left Aestonian lands back to Riga. The command from God discarded, papal orders burnt, now the military has truly become the State.
		</div>
		<div>
			<button onclick="endsDoneCount()">Continue</button>
		</div>
	</div>
	`;
}