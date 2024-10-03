function end_2() {
	end2Done = true;
	mainContent.innerHTML = `
	<div class="end-page">
		<img class="cs-narr-pic" src="./img/endings/ancient_boundaries_5.png" alt="Ending 2" />
		<div class="ty-msg">
			Aestonians did many. Firstly, God's army was wiped out; Secondly, in favor of true peace, the Balts joined together to push Crusaders back
			<span></span> to Poland and Brandenburg. And finally, Balts agreed upon forming a Baltic Confederation, so that
			<span></span> they would no longer be threatened by anyone.
		</div>
		<div>
			<button onclick="endsDoneCount()">Continue</button>
		</div>
	</div>
	`;
}