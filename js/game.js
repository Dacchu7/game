/**
 * Main Game Initialization
 */
const game = new Phaser.Game(gameConfig);

// Handle window resize for responsive design
window.addEventListener('resize', () => {
    game.scale.refresh();
});

// Game title for browser tab
document.title = 'Ganesha Chaturthi - Divine Quest';
