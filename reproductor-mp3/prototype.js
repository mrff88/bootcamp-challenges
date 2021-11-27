const Reproductor = function () {
    this.song = new Audio('Queen-Bohemian-Rhapsody.mp3');
};

Reproductor.prototype.playAudio = function () {
    if (this.song.paused) {
        this.song.play();
        document.getElementById('control').innerHTML = '|&#160&#160|';
    } else {
        this.song.pause();
        document.getElementById('control').innerHTML = '▶';
    }
}

const miReproductor = new Reproductor();