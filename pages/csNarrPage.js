function csNarrPage() {
	mainContent.innerHTML = `
	<div class="cs-narr-page">
		<div class="cs-narr-pic-container">
			<img src="./img/csnarr_pics/castle.jpg" alt="narrative pic" class="cs-narr-pic" />
		</div>
		<div class="cs-narr-story">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper.
		</div>
		<div class="cs-narr-cont-button">
			<button disabled>
				Continue
			</button>
		</div>
		<div class="cs-narr-skip-button" disabled>
			Skip
		</div>
	</div>
	`;
}

activeDebugPage.innerText = `csNarrPage`;