function csNarrPage() {
	mainContent.innerHTML = `
	<div class="narr-page">
		<div class="narr-pic-container">
			<img src="./img/csnarr_pics/castle.jpg" alt="narrative pic" class="narr-pic" />
		</div>
		<div class="narr-story">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper.
		</div>
		<div class="narr-cont-button">
			<button disabled>
				Continue
			</button>
		</div>
		<div class="narr-skip-button" disabled>
			Skip
		</div>
	</div>
	`;
}

activeDebugPage.innerText = `csNarrPage`;