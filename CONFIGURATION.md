# Advanced Configuration Guide

## 🎮 Game Configuration

This guide helps you customize the game to your preferences.

## 📁 File Locations

All configuration is in: `js/config.js`

## ⚙️ Configuration Options

### 1. Canvas Size

Edit in `js/config.js`:
```javascript
scale: {
    mode: Phaser.Scale.FIT,
    width: 800,              // Default width
    height: 600,             // Default height
    min: {
        width: 320,
        height: 240
    },
    max: {
        width: 1920,
        height: 1440
    }
}
```

**Recommended Sizes:**
- Desktop: 800x600, 1024x768, 1280x720
- Mobile: 480x640, 540x960
- Tablet: 768x1024, 1024x768

### 2. Level Difficulty

Modify in `GAME_CONSTANTS.LEVELS`:

```javascript
LEVELS: {
    1: { 
        offerings: 10,      // Number to collect
        obstacles: 3,       // Number of obstacles
        time: 60            // Seconds available
    },
    2: { 
        offerings: 15, 
        obstacles: 5, 
        time: 50 
    },
    3: { 
        offerings: 20, 
        obstacles: 8, 
        time: 40 
    }
}
```

**Add More Levels:**
```javascript
4: { offerings: 25, obstacles: 10, time: 35 },
5: { offerings: 30, obstacles: 12, time: 30 }
```

### 3. Game Speed

Modify in `GAME_CONSTANTS`:

```javascript
PLAYER_SPEED: 200,           // How fast player moves (higher = faster)
OFFERING_SPEED: 150,         // How fast offerings fall
OBSTACLE_SPEED: 100          // How fast obstacles fall
```

**Speed Guidelines:**
- Very Easy: Player: 250, Offering: 100, Obstacle: 50
- Easy: Player: 200, Offering: 150, Obstacle: 100
- Normal: Player: 200, Offering: 150, Obstacle: 100
- Hard: Player: 150, Offering: 200, Obstacle: 150
- Expert: Player: 150, Offering: 250, Obstacle: 200

### 4. Scoring System

Modify in `GAME_CONSTANTS.OFFERINGS`:

```javascript
OFFERINGS: {
    MODAK: { score: 10, color: 0xFFD700 },    // Golden
    FLOWER: { score: 5, color: 0xFF69B4 },    // Pink
    INCENSE: { score: 8, color: 0x8B7355 }    // Brown
}
```

## 🎨 Color Customization

Edit `js/scenes/BootScene.js` to change sprite colors:

### Ganesha Colors
```javascript
ganesha.fillStyle(0xFF6B35, 1);  // Body color
ganesha.fillStyle(0xFFD700, 1);  // Eye color
```

### Offering Colors
```javascript
modak.fillStyle(0xFFD700, 1);    // Modak color
flower.fillStyle(0xFF69B4, 1);   // Flower color
incense.fillStyle(0x8B7355, 1);  // Incense color
```

### Obstacle Colors
```javascript
obstacle.fillStyle(0xFF0000, 1); // Red (demon)
```

**Hex Color Examples:**
- 0xFF0000 = Red
- 0x00FF00 = Green
- 0x0000FF = Blue
- 0xFFFF00 = Yellow
- 0xFFD700 = Gold
- 0xFF69B4 = Pink
- 0x8B7355 = Brown
- 0xFFFFFF = White
- 0x000000 = Black

## 🔊 Sound Customization

Edit `js/scenes/GameScene.js`:

```javascript
playCollectSound() {
    osc.frequency.value = 800;      // Change pitch (higher = higher sound)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1); // Duration
}

playHitSound() {
    osc.frequency.value = 400;      // Lower pitch for hit
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
}
```

**Frequency Values:**
- C (low): 262
- E: 330
- G: 392
- C (high): 523
- 800: High beep
- 400: Low warning

## 🎯 Sprite Size Customization

Edit `js/scenes/GameScene.js`:

```javascript
this.player.setScale(2);              // Player size
offering.setScale(1.5);               // Offering size
obstacle.setScale(1.8);               // Obstacle size
ganesha.setScale(3);                  // Menu ganesha size
```

## 🌈 UI Customization

Edit respective scene files to change:

### Font Sizes
```javascript
fontSize: '48px'    // Change to any size
```

### Colors
```javascript
fill: '#FF6B35'     // Hex color code
stroke: '#FFFFFF'   // Stroke color
strokeThickness: 3  // Line thickness
```

### Text Styles
```javascript
fontStyle: 'bold'   // bold, italic, normal
```

## ✨ Animation Customization

### Ganesha Float Animation
In `MenuScene.js`:
```javascript
this.tweens.add({
    targets: ganesha,
    y: 280,         // Movement distance
    duration: 1000, // Speed (milliseconds)
    repeat: -1,     // -1 = infinite
    ease: 'Sine.inout'
});
```

**Easing Options:**
- 'Linear'
- 'Sine.in', 'Sine.out', 'Sine.inout'
- 'Quad.in', 'Quad.out', 'Quad.inout'
- 'Cubic.in', 'Cubic.out', 'Cubic.inout'
- 'Bounce.in', 'Bounce.out', 'Bounce.inout'
- 'Elastic.in', 'Elastic.out', 'Elastic.inout'

## 📱 Responsive Design

Edit `styles.css` for mobile optimization:

```css
@media (max-width: 768px) {
    /* Tablet and mobile styles */
}

@media (max-width: 480px) {
    /* Small mobile styles */
}

@media (orientation: landscape) and (max-height: 500px) {
    /* Landscape mobile */
}
```

## 🔧 Physics Customization

Edit in `js/config.js`:

```javascript
physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },  // Change gravity
        debug: false        // Set to true for debug view
    }
}
```

## 📊 Adding New Features

### Add New Level
1. Edit `GAME_CONSTANTS.LEVELS` in `config.js`
2. Add new level configuration
3. Game automatically scales

### Add New Offering Type
1. Edit `GAME_CONSTANTS.OFFERINGS` in `config.js`
2. Create sprite in `BootScene.js`
3. Update `spawnOfferings()` in `GameScene.js`

### Add New Scene
1. Create new file in `js/scenes/`
2. Extend `Phaser.Scene`
3. Add to `gameConfig.scene` array in `config.js`
4. Start with `this.scene.start('SceneName')`

## 🐛 Debug Mode

Edit in `js/config.js`:
```javascript
arcade: {
    debug: true  // Shows collision boxes
}
```

## 🎯 Performance Tips

1. **Reduce Particles**: Lower particle count in effects
2. **Optimize Physics**: Set `debug: false`
3. **Use SpriteBatching**: Group similar objects
4. **Limit Tweens**: Reduce simultaneous animations
5. **Cache Graphics**: Pre-generate textures

## 📝 Example Custom Configuration

```javascript
// Easy Game with Larger Sprites
LEVELS: {
    1: { offerings: 5, obstacles: 1, time: 90 }
},
PLAYER_SPEED: 250,
OFFERING_SPEED: 80,
OBSTACLE_SPEED: 40

// Hard Game with Small Sprites
LEVELS: {
    1: { offerings: 25, obstacles: 15, time: 30 }
},
PLAYER_SPEED: 150,
OFFERING_SPEED: 300,
OBSTACLE_SPEED: 200
```

## 🔗 Phaser 3 Documentation

For more advanced customization:
- Visit: https://photonstorm.github.io/phaser3-docs/
- Check: Phaser Scene API, Physics, Tweens, Input

## 💾 Save Your Changes

Always backup `config.js` before major changes:
1. Copy original file to `config.js.backup`
2. Make your changes
3. Test thoroughly
4. Keep backup for reference

---

**Happy Customizing! 🙏**
