/**
 * Game Over Scene - Shows when player runs out of time
 */
class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    init(data) {
        this.level = data.level || 1;
        this.score = data.score || 0;
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Background with darker overlay
        this.add.rectangle(width / 2, height / 2, width, height, 0x4A4A4A).setAlpha(0.8);

        // Title
        this.add.text(width / 2, 80, 'Time\'s Up!', {
            fontSize: '48px',
            fontStyle: 'bold',
            fill: '#FF6B35',
            stroke: '#FFFFFF',
            strokeThickness: 3
        }).setOrigin(0.5);

        // Message
        this.add.text(width / 2, 150, 'Level not completed', {
            fontSize: '24px',
            fill: '#FFD700'
        }).setOrigin(0.5);

        // Display Ganesha with sad animation
        const ganesha = this.add.sprite(width / 2, 260, 'ganesha').setScale(4);
        ganesha.setTint(0x888888); // Darken the sprite

        // Slow animation
        this.tweens.add({
            targets: ganesha,
            y: 280,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.inout'
        });

        // Stats
        this.add.text(width / 2, 350, `Level: ${this.level}`, {
            fontSize: '22px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        this.add.text(width / 2, 390, `Final Score: ${this.score}`, {
            fontSize: '22px',
            fill: '#FFD700',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        // Retry button
        const retryBtn = this.add.rectangle(width / 2 - 120, 460, 200, 60, 0xFF6B35);
        retryBtn.setInteractive({ useHandCursor: true });

        const retryText = this.add.text(width / 2 - 120, 460, 'RETRY LEVEL', {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        retryBtn.on('pointerover', () => {
            retryBtn.setFillStyle(0xFFD700);
            retryText.setFill('#FF6B35');
        });

        retryBtn.on('pointerout', () => {
            retryBtn.setFillStyle(0xFF6B35);
            retryText.setFill('#FFFFFF');
        });

        retryBtn.on('pointerdown', () => {
            this.scene.start('GameScene', { level: this.level });
        });

        // Menu button
        const menuBtn = this.add.rectangle(width / 2 + 120, 460, 200, 60, 0x8B7355);
        menuBtn.setInteractive({ useHandCursor: true });

        const menuText = this.add.text(width / 2 + 120, 460, 'MAIN MENU', {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        menuBtn.on('pointerover', () => {
            menuBtn.setFillStyle(0xFFD700);
            menuText.setFill('#8B7355');
        });

        menuBtn.on('pointerout', () => {
            menuBtn.setFillStyle(0x8B7355);
            menuText.setFill('#FFFFFF');
        });

        menuBtn.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });

        // Message
        this.add.text(width / 2, height - 40, 'Try again! Lord Ganesha\'s blessings are always with you!', {
            fontSize: '14px',
            fill: '#FFD700',
            align: 'center',
            fontStyle: 'italic'
        }).setOrigin(0.5);
    }
}
