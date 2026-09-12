/**
 * Menu Scene - Main menu of the game
 */
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x87CEEB);

        // Title with glow effect
        const titleText = this.add.text(width / 2, 100, 'Ganesha Chaturthi', {
            fontSize: '48px',
            fontStyle: 'bold',
            fill: '#FF6B35',
            stroke: '#FFD700',
            strokeThickness: 3
        }).setOrigin(0.5);

        // Subtitle
        this.add.text(width / 2, 150, 'Divine Quest', {
            fontSize: '24px',
            fill: '#FFD700',
            fontStyle: 'italic'
        }).setOrigin(0.5);

        // Game description
        this.add.text(width / 2, 220, 'Collect offerings and blessings\nfrom Lord Ganesha!', {
            fontSize: '16px',
            fill: '#333333',
            align: 'center'
        }).setOrigin(0.5);

        // Display Ganesha sprite
        const ganesha = this.add.sprite(width / 2, 300, 'ganesha').setScale(3);

        // Animate Ganesha
        this.tweens.add({
            targets: ganesha,
            y: 280,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.inout'
        });

        // Start button
        const startBtn = this.add.rectangle(width / 2, 400, 200, 60, 0xFF6B35);
        startBtn.setInteractive({ useHandCursor: true });

        const startText = this.add.text(width / 2, 400, 'START GAME', {
            fontSize: '24px',
            fontStyle: 'bold',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        startBtn.on('pointerover', () => {
            startBtn.setFillStyle(0xFFD700);
            startText.setFill('#FF6B35');
        });

        startBtn.on('pointerout', () => {
            startBtn.setFillStyle(0xFF6B35);
            startText.setFill('#FFFFFF');
        });

        startBtn.on('pointerdown', () => {
            this.scene.start('GameScene', { level: 1 });
        });

        // Instructions
        this.add.text(width / 2, 480, 'Use Arrow Keys or Touch/Mouse to move\nCollect golden offerings to gain points\nAvoid red obstacles!', {
            fontSize: '14px',
            fill: '#333333',
            align: 'center'
        }).setOrigin(0.5);

        // Credits
        this.add.text(width / 2, height - 20, '🙏 Celebrating Ganesha Chaturthi 🙏', {
            fontSize: '12px',
            fill: '#FFD700',
            align: 'center'
        }).setOrigin(0.5);

        // Add floating animation to title
        this.tweens.add({
            targets: titleText,
            scale: 1.05,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.inout'
        });
    }
}
