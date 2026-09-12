/**
 * Game Scene - Main gameplay
 */
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    init(data) {
        this.currentLevel = data.level || 1;
        this.levelConfig = GAME_CONSTANTS.LEVELS[this.currentLevel];
        this.score = 0;
        this.offeringsCollected = 0;
        this.gameTime = this.levelConfig.time;
        this.isPaused = false;
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x87CEEB);

        // Create groups for sprites
        this.offerings = this.physics.add.group();
        this.obstacles = this.physics.add.group();
        this.particles = this.add.particles('particle');

        // Create player (Ganesha)
        this.player = this.physics.add.sprite(width / 2, height - 80, 'ganesha');
        this.player.setScale(2);
        this.player.setCollideWorldBounds(true);
        this.player.setDrag(100, 0);

        // Input handling
        this.createInputHandlers();

        // Create offerings
        this.spawnOfferings();

        // Create obstacles
        this.spawnObstacles();

        // Physics colliders
        this.physics.add.overlap(this.player, this.offerings, this.collectOffering, null, this);
        this.physics.add.overlap(this.player, this.obstacles, this.hitObstacle, null, this);

        // UI
        this.createUI();

        // Level start animation
        this.showLevelStart();

        // Timer
        this.timerEvent = this.time.addTimer({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // Add particle emitter for ambient effect
        this.ambientParticles = this.particles.createEmitter({
            x: width / 2,
            y: 0,
            speed: { min: -100, max: 100 },
            gravityY: 50,
            lifespan: 3000,
            emitZone: {
                type: 'random',
                source: new Phaser.Geom.Rectangle(0, 0, width, 100)
            }
        });
    }

    createInputHandlers() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });

        // Mouse/Touch input
        this.input.on('pointermove', (pointer) => {
            if (pointer.isDown) {
                this.player.x = Phaser.Math.Clamp(pointer.x, 30, this.cameras.main.width - 30);
            }
        });

        // Space to pause
        this.input.keyboard.on('keydown-SPACE', () => {
            this.togglePause();
        });
    }

    spawnOfferings() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        for (let i = 0; i < this.levelConfig.offerings; i++) {
            const x = Phaser.Math.Between(30, width - 30);
            const y = Phaser.Math.Between(-500, -50);

            const offeringTypes = ['modak', 'flower', 'incense'];
            const type = offeringTypes[Phaser.Math.Between(0, 2)];

            const offering = this.offerings.create(x, y, type);
            offering.setVelocityY(GAME_CONSTANTS.OFFERING_SPEED + (this.currentLevel * 20));
            offering.offeringType = type;
            offering.setScale(1.5);
        }
    }

    spawnObstacles() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        for (let i = 0; i < this.levelConfig.obstacles; i++) {
            const x = Phaser.Math.Between(30, width - 30);
            const y = Phaser.Math.Between(-400, -50);

            const obstacle = this.obstacles.create(x, y, 'obstacle');
            obstacle.setVelocityY(GAME_CONSTANTS.OBSTACLE_SPEED + (this.currentLevel * 15));
            obstacle.setScale(1.8);

            // Add horizontal movement
            obstacle.setVelocityX(Phaser.Math.Between(-50, 50));
        }
    }

    update() {
        const width = this.cameras.main.width;

        if (this.isPaused) return;

        // Player movement
        this.player.setVelocity(0, 0);

        if (this.cursors.left.isDown || this.wasd.A.isDown) {
            this.player.setVelocityX(-GAME_CONSTANTS.PLAYER_SPEED);
        } else if (this.cursors.right.isDown || this.wasd.D.isDown) {
            this.player.setVelocityX(GAME_CONSTANTS.PLAYER_SPEED);
        }

        if (this.cursors.up.isDown || this.wasd.W.isDown) {
            this.player.setVelocityY(-GAME_CONSTANTS.PLAYER_SPEED);
        } else if (this.cursors.down.isDown || this.wasd.S.isDown) {
            this.player.setVelocityY(GAME_CONSTANTS.PLAYER_SPEED);
        }

        // Constrain player to bounds
        this.player.x = Phaser.Math.Clamp(this.player.x, 30, width - 30);
        this.player.y = Phaser.Math.Clamp(this.player.y, 30, this.cameras.main.height - 30);

        // Remove offerings/obstacles that went off screen
        this.offerings.children.entries.forEach(offering => {
            if (offering.y > this.cameras.main.height + 50) {
                offering.destroy();
            }
        });

        this.obstacles.children.entries.forEach(obstacle => {
            if (obstacle.y > this.cameras.main.height + 50) {
                obstacle.destroy();
            }

            // Keep obstacles in horizontal bounds
            if (obstacle.x < 0 || obstacle.x > width) {
                obstacle.setVelocityX(-obstacle.body.velocity.x);
            }
        });

        // Spawn new offerings if needed
        if (this.offerings.children.entries.length < this.levelConfig.offerings) {
            const x = Phaser.Math.Between(30, width - 30);
            const y = -50;

            const offeringTypes = ['modak', 'flower', 'incense'];
            const type = offeringTypes[Phaser.Math.Between(0, 2)];

            const offering = this.offerings.create(x, y, type);
            offering.setVelocityY(GAME_CONSTANTS.OFFERING_SPEED + (this.currentLevel * 20));
            offering.offeringType = type;
            offering.setScale(1.5);
        }

        // Spawn new obstacles if needed
        if (this.obstacles.children.entries.length < this.levelConfig.obstacles) {
            const x = Phaser.Math.Between(30, width - 30);
            const y = -50;

            const obstacle = this.obstacles.create(x, y, 'obstacle');
            obstacle.setVelocityY(GAME_CONSTANTS.OBSTACLE_SPEED + (this.currentLevel * 15));
            obstacle.setVelocityX(Phaser.Math.Between(-50, 50));
            obstacle.setScale(1.8);
        }
    }

    collectOffering(player, offering) {
        const pointsAwarded = GAME_CONSTANTS.OFFERINGS[offering.offeringType.toUpperCase()] || GAME_CONSTANTS.OFFERINGS.MODAK;
        this.score += pointsAwarded.score;
        this.offeringsCollected++;

        // Particle effect
        this.particles.emitParticleAt(offering.x, offering.y, 15);

        // Score popup
        this.showScorePopup(offering.x, offering.y, `+${pointsAwarded.score}`);

        // Play sound effect
        this.playCollectSound();

        // Update UI
        this.updateScoreDisplay();

        // Animation
        this.tweens.add({
            targets: offering,
            scale: 0,
            duration: 200,
            onComplete: () => {
                offering.destroy();
            }
        });

        // Check level complete
        if (this.offeringsCollected >= this.levelConfig.offerings) {
            this.completeLevel();
        }
    }

    hitObstacle(player, obstacle) {
        // Knockback effect
        this.player.setVelocityX((this.player.x - obstacle.x) * 2);
        this.player.setVelocityY((this.player.y - obstacle.y) * 2);

        // Damage effect
        this.score = Math.max(0, this.score - 20);
        this.updateScoreDisplay();

        this.playHitSound();

        // Flash effect
        this.tweens.add({
            targets: this.player,
            alpha: 0.5,
            duration: 100,
            yoyo: true,
            repeat: 3
        });
    }

    showScorePopup(x, y, text) {
        const popup = this.add.text(x, y, text, {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#FFD700',
            stroke: '#FF6B35',
            strokeThickness: 2
        }).setOrigin(0.5);

        this.tweens.add({
            targets: popup,
            y: y - 40,
            alpha: 0,
            duration: 800,
            onComplete: () => {
                popup.destroy();
            }
        });
    }

    createUI() {
        const width = this.cameras.main.width;

        // Level display
        this.levelText = this.add.text(20, 20, `Level: ${this.currentLevel}`, {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#FF6B35',
            stroke: '#FFFFFF',
            strokeThickness: 2
        });

        // Score display
        this.scoreText = this.add.text(width - 20, 20, `Score: ${this.score}`, {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#FF6B35',
            stroke: '#FFFFFF',
            strokeThickness: 2
        }).setOrigin(1, 0);

        // Timer display
        this.timerText = this.add.text(width / 2, 20, `Time: ${this.gameTime}s`, {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#FF6B35',
            stroke: '#FFFFFF',
            strokeThickness: 2
        }).setOrigin(0.5, 0);

        // Offerings counter
        this.offeringsText = this.add.text(20, 50, `Offerings: ${this.offeringsCollected}/${this.levelConfig.offerings}`, {
            fontSize: '16px',
            fill: '#FF6B35'
        });

        // Pause hint
        this.add.text(width / 2, this.cameras.main.height - 20, 'Press SPACE to pause', {
            fontSize: '12px',
            fill: '#666666',
            align: 'center'
        }).setOrigin(0.5);
    }

    updateScoreDisplay() {
        this.scoreText.setText(`Score: ${this.score}`);
        this.offeringsText.setText(`Offerings: ${this.offeringsCollected}/${this.levelConfig.offerings}`);
    }

    updateTimer() {
        if (this.isPaused) return;

        this.gameTime--;
        this.timerText.setText(`Time: ${this.gameTime}s`);

        if (this.gameTime <= 0) {
            this.endGame();
        }
    }

    showLevelStart() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const levelStart = this.add.text(width / 2, height / 2, `LEVEL ${this.currentLevel}`, {
            fontSize: '48px',
            fontStyle: 'bold',
            fill: '#FFD700',
            stroke: '#FF6B35',
            strokeThickness: 3
        }).setOrigin(0.5);

        this.tweens.add({
            targets: levelStart,
            scale: 0.5,
            alpha: 0,
            duration: 1500,
            onComplete: () => {
                levelStart.destroy();
            }
        });
    }

    completeLevel() {
        this.isPaused = true;
        this.time.removeEvent(this.timerEvent);
        this.scene.start('LevelCompleteScene', {
            level: this.currentLevel,
            score: this.score,
            time: this.gameTime
        });
    }

    endGame() {
        this.isPaused = true;
        this.time.removeEvent(this.timerEvent);
        this.scene.start('GameOverScene', {
            level: this.currentLevel,
            score: this.score
        });
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.physics.pause();
            this.timerText.setText(`PAUSED - ${this.gameTime}s`);
        } else {
            this.physics.resume();
        }
    }

    playCollectSound() {
        // Create a beep sound
        if (window.audioContext) {
            const ctx = window.audioContext;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.1);
        }
    }

    playHitSound() {
        // Create a warning sound
        if (window.audioContext) {
            const ctx = window.audioContext;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 400;
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.2);
        }
    }
}
