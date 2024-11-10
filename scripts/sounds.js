function initButtonSounds() {
    const sound = new Audio('../audio/ui/btn-click.mp3');
    sound.load();

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            sound.currentTime = 0; // Reset sound for repeated clicks
            sound.play().catch(error => console.log("Error playing sound:", error));
        });
    });
}

// Call this function whenever a new page is rendered
export function applyGlobalButtonSounds() {
    initButtonSounds();
}
