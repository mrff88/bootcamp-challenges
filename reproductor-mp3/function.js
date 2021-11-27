const song = new Audio('Queen-Bohemian-Rhapsody.mp3');

const playAudio = () => { 
    if (song.paused) {
        song.play();
        document.getElementById('control').innerHTML = '|&#160&#160|';
    } else {
        song.pause();
        document.getElementById('control').innerHTML = '▶';
    }
}