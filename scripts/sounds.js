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

export function mainMenuSound() {
    const mmSound = new Audio('../audio/wind_winter.mp3');
    mmSound.loop = true;
    mmSound.load();
    mmSound.play().catch(error => console.log("Error playing sound: ", error));

    return mmSound;
}

export function end0_Sound() {
    const endSound = new Audio('../audio/end-sfx/village_farm.mp3');
    endSound.loop = true;
    endSound.load();
    endSound.play().catch(error => console.log("Error playing sound: ", error));

    return endSound;
}

export function end1_Sound() {
    const endSound = new Audio('../audio/end-sfx/ichhabmi.mp3');
    endSound.loop = true;
    endSound.load();
    endSound.play().catch(error => console.log("Error playing sound: ", error));

    return endSound;
}

export function end2_Sound() {
    const endSound = new Audio('../audio/end-sfx/fire_crackle.mp3');
    endSound.loop = true;
    endSound.load();
    endSound.play().catch(error => console.log("Error playing sound: ", error));

    return endSound;
}