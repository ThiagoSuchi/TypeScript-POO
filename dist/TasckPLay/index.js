"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VidePlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stop();
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        this.stopButton.addEventListener('click', () => {
            this.videoPlayer.pause(); // Apoś clicar no botão stop ira pausar o vídeo,
            this.videoPlayer.currentTime = 0; // e logo em seguida irá reiniciar o vídeo,
            this.playButton.innerText = 'Play'; // depois o botão "Pause" ira se tornar "Play".
        });
    }
}
exports.default = VidePlayer;
const videoPlayer = new VidePlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop')
});
videoPlayer.iniciarEventos();
