/**
 * Boot Scene - Initial scene for loading and setup
 */
class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Create simple graphics dynamically
        this.createGraphics();
    }

    create() {
        this.scene.start('PreloadScene');
    }

    createGraphics() {
        // Create dynamic textures for sprites

        // Ganesha player sprite
        const ganesha = this.make.graphics({ x: 0, y: 0, add: false });
        ganesha.fillStyle(0xFF6B35, 1);
        ganesha.fillCircle(20, 15, 15); // Head
        ganesha.fillCircle(10, 25, 5); // Left ear
        ganesha.fillCircle(30, 25, 5); // Right ear
        ganesha.fillStyle(0xFFD700, 1);
        ganesha.fillCircle(18, 12, 3); // Eye
        ganesha.fillStyle(0xFF6B35, 1);
        ganesha.fillRect(8, 28, 24, 12); // Body
        ganesha.fillRect(6, 40, 5, 12); // Left leg
        ganesha.fillRect(29, 40, 5, 12); // Right leg
        ganesha.generateTexture('ganesha', 40, 52);
        ganesha.destroy();

        // Modak offering sprite
        const modak = this.make.graphics({ x: 0, y: 0, add: false });
        modak.fillStyle(0xFFD700, 1);
        modak.fillCircle(15, 12, 12); // Main body
        modak.fillStyle(0xFFA500, 1);
        modak.fillCircle(15, 8, 3); // Top detail
        modak.generateTexture('modak', 30, 24);
        modak.destroy();

        // Flower offering sprite
        const flower = this.make.graphics({ x: 0, y: 0, add: false });
        flower.fillStyle(0xFF69B4, 1);
        flower.fillCircle(15, 10, 8); // Petals center
        flower.fillStyle(0xFF1493, 1);
        flower.fillCircle(8, 6, 4);
        flower.fillCircle(22, 6, 4);
        flower.fillCircle(15, 2, 4);
        flower.fillStyle(0x228B22, 1);
        flower.fillRect(13, 18, 4, 12); // Stem
        flower.generateTexture('flower', 30, 30);
        flower.destroy();

        // Incense offering sprite
        const incense = this.make.graphics({ x: 0, y: 0, add: false });
        incense.fillStyle(0x8B7355, 1);
        incense.fillCircle(15, 20, 5); // Base
        incense.fillRect(12, 5, 6, 15); // Stick
        incense.fillStyle(0xFFA500, 1);
        incense.fillCircle(15, 3, 3); // Smoke
        incense.generateTexture('incense', 30, 25);
        incense.destroy();

        // Obstacle sprite (demon/evil)
        const obstacle = this.make.graphics({ x: 0, y: 0, add: false });
        obstacle.fillStyle(0xFF0000, 1);
        obstacle.fillCircle(20, 15, 12); // Head
        obstacle.fillStyle(0xFFFFFF, 1);
        obstacle.fillCircle(15, 13, 3); // Left eye
        obstacle.fillCircle(25, 13, 3); // Right eye
        obstacle.fillStyle(0x000000, 1);
        obstacle.fillCircle(15, 13, 1.5); // Left pupil
        obstacle.fillCircle(25, 13, 1.5); // Right pupil
        obstacle.fillStyle(0xFF0000, 1);
        obstacle.fillRect(10, 26, 20, 15); // Body
        obstacle.fillRect(5, 40, 8, 12); // Left leg
        obstacle.fillRect(27, 40, 8, 12); // Right leg
        obstacle.generateTexture('obstacle', 40, 52);
        obstacle.destroy();

        // Particle sprite for effects
        const particle = this.make.graphics({ x: 0, y: 0, add: false });
        particle.fillStyle(0xFFD700, 1);
        particle.fillCircle(5, 5, 4);
        particle.generateTexture('particle', 10, 10);
        particle.destroy();
    }
}
