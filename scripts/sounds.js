let soundEnabled = true;
let activeSounds = [];

export function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundIcon = document.getElementById('sound-icon');

    if (soundEnabled) {
        soundIcon.src = './img/ui/buttons/sound_on.png';
        soundIcon.alt = 'Sound On';
    } else {
        soundIcon.src = './img/ui/buttons/sound_off.png';
        soundIcon.alt = 'Sound Off';
    }

    activeSounds.forEach(audio => {
        if (soundEnabled) {
            audio.play().catch(error => console.log("Error resuming sound:", error));
        } else {
            audio.pause();
        }
    });
}

export function playSound(audio) {
    if (soundEnabled) {
        audio.currentTime = 0;
        audio.play().catch((error) => console.log("Error playing sound:", error));
        if (!activeSounds.includes(audio)) {
            activeSounds.push(audio);
        }
    }
}

// Stop tracking a sound when it's no longer needed
export function stopSound(audio) {
    if (activeSounds.includes(audio)) {
        const index = activeSounds.indexOf(audio);
        if (index > -1) activeSounds.splice(index, 1);
    }
    audio.pause();
    audio.currentTime = 0;
}

export function btnSnd() {
    const btnClickSound = new Audio('../audio/ui/btn-click.mp3');
    const btnHoverSound = new Audio('../audio/ui/btn-hover.mp3');
    btnClickSound.load();

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => playSound(btnClickSound));
        button.addEventListener('mouseover', () => playSound(btnHoverSound));
    });
}

export function mainMenuSound() {
    const mmSound = new Audio('./audio/wind_winter.mp3');
    mmSound.loop = true;
    mmSound.load();
    playSound(mmSound);
    return mmSound;
}

export function end0_Sound() {
    const endSound = new Audio('./audio/end-sfx/village_farm.mp3');
    endSound.loop = true;
    endSound.load();
    playSound(endSound);
    return endSound;
}

export function end1_Sound() {
    const endSound = new Audio('./audio/end-sfx/ichhabmi.mp3');
    endSound.loop = true;
    endSound.load();
    playSound(endSound);
    return endSound;
}

export function end2_Sound() {
    const endSound = new Audio('./audio/end-sfx/fire_crackle.mp3');
    endSound.loop = true;
    endSound.load();
    playSound(endSound);
    return endSound;
}
