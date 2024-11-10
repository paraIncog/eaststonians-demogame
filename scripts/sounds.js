export function btnSnd() {
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

function mainMenuSound() {
    const mmSound = new Audio('../audio/wind_winter.mp3');
    mmSound.load();
}

// export function applyGlobalButtonSounds() {
//     buttonSounds();
// }
