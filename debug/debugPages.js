const debugpages = document.getElementById("debug-pages");

function debugPages() {
	debugpages.innerHTML = `
		<div id="debug-pages">
			<div>Pages</div>
			<div id="debug-list">
				<button onclick="loadingPage()">
					Loading Page
				</button>
				<button onclick="mainMenu()">
					Main Menu
				</button>
				<button onclick="csNarrPage()">
					Cutscene Narration
				</button>
				<button onclick="chsPage()">
					Choices Page
				</button>
				<button onclick="theEndPage()">
					The End Page
				</button>
				<button onclick="aboutPage()">
					About Page
				</button>
			</div>
		</div>
	`;
}

// debugPages()
