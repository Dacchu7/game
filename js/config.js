// Game Configuration
const gameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
        min: {
            width: 320,
            height: 240
        },
        max: {
            width: 1920,
            height: 1440
        }
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [BootScene, PreloadScene, MenuScene, GameScene, LevelCompleteScene, GameOverScene],
    render: {
        pixelArt: false,
        antialias: true,
        antialiasGL: true
    }
};

// Game Constants
const GAME_CONSTANTS = {
    PLAYER_SPEED: 200,
    OFFERING_SPEED: 150,
    OBSTACLE_SPEED: 100,
    OFFERINGS: {
        MODAK: { score: 10, color: 0xFFD700 },
        FLOWER: { score: 5, color: 0xFF69B4 },
        INCENSE: { score: 8, color: 0x8B7355 }
    },
    LEVELS: {
        1: { offerings: 10, obstacles: 3, time: 60 },
        2: { offerings: 15, obstacles: 5, time: 50 },
        3: { offerings: 20, obstacles: 8, time: 40 }
    }
};

// Asset URLs (we'll create graphics dynamically)
const ASSETS = {
    COLORS: {
        GANESHA: 0xFF6B35,
        OFFERING: 0xFFD700,
        OBSTACLE: 0xFF0000,
        BACKGROUND: 0x87CEEB
    }
};
