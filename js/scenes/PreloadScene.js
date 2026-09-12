/**
 * Preload Scene - Loads assets before game starts
 */
class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Display loading progress
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            fontSize: '32px',
            fill: '#FFD700'
        }).setOrigin(0.5);

        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
            loadingText.setText(`Loading: ${Math.round(value * 100)}%`);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });

        // Load sounds (using Web Audio API)
        // We'll create these dynamically later
    }

    create() {
        // Create simple sound effects using Web Audio
        this.createSounds();
        this.scene.start('MenuScene');
    }

    createSounds() {
        // We'll create a simple audio context
        window.audioContext = window.audioContext || new (window.AudioContext || window.webkitAudioContext)();
    }
}
