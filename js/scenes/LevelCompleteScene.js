/**
 * Level Complete Scene - Shows when player completes a level
 */
class LevelCompleteScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LevelCompleteScene' });
    }

    init(data) {
        this.level = data.level || 1;
        this.score = data.score || 0;
        this.time = data.time || 0;
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x87CEEB);

        // Title
        this.add.text(width / 2, 80, 'Level Complete!', {
            fontSize: '48px',
            fontStyle: 'bold',
            fill: '#FFD700',
            stroke: '#FF6B35',
            strokeThickness: 3
        }).setOrigin(0.5);

        // Display Ganesha blessing
        const ganesha = this.add.sprite(width / 2, 180, 'ganesha').setScale(4);

        // Animate Ganesha
        this.tweens.add({
            targets: ganesha,
            y: 160,
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.inout'
        });

        // Stats
        this.add.text(width / 2, 280, `Level: ${this.level}`, {
            fontSize: '24px',
            fill: '#FF6B35',
            stroke: '#FFFFFF',
            strokeThickness: 2
        }).setOrigin(0.5);

        this.add.text(width / 2, 320, `Final Score: ${this.score}`, {
            fontSize: '24px',
            fill: '#FF6B35',
            stroke: '#FFFFFF',
            strokeThickness: 2
        }).setOrigin(0.5);

        this.add.text(width / 2, 360, `Remaining Time: ${this.time}s`, {
            fontSize: '20px',
            fill: '#333333'
        }).setOrigin(0.5);

        // Blessing message
        const maxLevel = Object.keys(GAME_CONSTANTS.LEVELS).length;
        if (this.level < maxLevel) {
            // Next button
            const nextBtn = this.add.rectangle(width / 2 - 120, 450, 200, 60, 0xFF6B35);
            nextBtn.setInteractive({ useHandCursor: true });

            const nextText = this.add.text(width / 2 - 120, 450, 'NEXT LEVEL', {
                fontSize: '20px',
                fontStyle: 'bold',
                fill: '#FFFFFF'
            }).setOrigin(0.5);

            nextBtn.on('pointerover', () => {
                nextBtn.setFillStyle(0xFFD700);
                nextText.setFill('#FF6B35');
            });

            nextBtn.on('pointerout', () => {
                nextBtn.setFillStyle(0xFF6B35);
                nextText.setFill('#FFFFFF');
            });

            nextBtn.on('pointerdown', () => {
                this.scene.start('GameScene', { level: this.level + 1 });
            });
        } else {
            this.add.text(width / 2, 420, '🙏 YOU COMPLETED ALL LEVELS! 🙏', {
                fontSize: '20px',
                fontStyle: 'bold',
                fill: '#FFD700',
                align: 'center'
            }).setOrigin(0.5);
        }

        // Menu button
        const menuBtn = this.add.rectangle(width / 2 + 120, 450, 200, 60, 0x8B7355);
        menuBtn.setInteractive({ useHandCursor: true });

        const menuText = this.add.text(width / 2 + 120, 450, 'MAIN MENU', {
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

        // Blessings
        this.add.text(width / 2, height - 40, 'May Lord Ganesha bless you with wisdom and prosperity!', {
            fontSize: '14px',
            fill: '#FFD700',
            align: 'center',
            fontStyle: 'italic'
        }).setOrigin(0.5);
    }
}
