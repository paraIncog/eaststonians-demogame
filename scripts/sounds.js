function buttonSounds() {
    const btnClickSound = new Audio('../audio/ui/btn-click.mp3');
    const btnHoverSound = new Audio('../audio/ui/btn-hover.mp3');
    btnClickSound.load();

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            btnClickSound.currentTime = 0;
            btnClickSound.play().catch(error => console.log("Error playing sound:", error));
        });
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            btnHoverSound.currentTime = 0;
            btnHoverSound.play().catch(error => console.log("Error playing sound:", error));
        });
    });
}

export function applyGlobalButtonSounds() {
    buttonSounds();
}
