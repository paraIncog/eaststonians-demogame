export function loadingPage() {
	const mainContent = document.getElementById("main-content");

	mainContent.innerHTML = `
	<div class="loading-page">
		<div id="sprite">
		</div>
		<div class="loading-msg">
			Loading..
		</div>
	</div>
	`;
}
