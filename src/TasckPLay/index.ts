interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
    playToggle(): void;
    stop(): void;
    iniciarEventos(): void;
}

export default class VidePlayer implements VideoPlayerProtocol {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(videoPlayerElements: VideoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }

    iniciarEventos(): void {   
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        })
        this.stop();
    }

    playToggle(): void {
        if(this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = 'Pause';
        } else {
            this.videoPlayer.pause();
            this.playButton.innerText = 'Play';
        }
    }

    stop(): void {
        this.stopButton.addEventListener('click', () => {
            this.videoPlayer.pause();// Apoś clicar no botão stop ira pausar o vídeo,
            this.videoPlayer.currentTime = 0; // e logo em seguida irá reiniciar o vídeo,
            this.playButton.innerText = 'Play';// depois o botão "Pause" ira se tornar "Play".
        })
    }
}

const videoPlayer = new VidePlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    playButton: document.querySelector('.play') as HTMLButtonElement,
    stopButton: document.querySelector('.stop') as HTMLButtonElement
})

videoPlayer.iniciarEventos()