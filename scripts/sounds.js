function sounds() {
	const sound = new Audio('horse.mp3'); // Ensure path is correct
	sound.load();

	document.getElementById('play-sound-button').addEventListener('click', () => {
		sound.currentTime = 0;
		sound.play().catch(error => console.log("Error playing sound:", error));
		console.log("Played tune")
	});
}

export default sounds();