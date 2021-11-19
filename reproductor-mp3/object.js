const Reproductor = {
    song: new Audio('Queen-Bohemian-Rhapsody.mp3'),
    playAudio: function () { 
        if (this.song.paused) {
            this.song.play();
            document.getElementById('control').innerHTML = '|&#160&#160|';
        } else {
            this.song.pause();
            document.getElementById('control').innerHTML = '▶';
        }
    }
}
