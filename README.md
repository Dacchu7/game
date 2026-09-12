# 🙏 Ganesha Chaturthi - Divine Quest 🙏

A festive game celebrating the sacred festival of Ganesha Chaturthi with Lord Ganesha as the theme!

## 📱 Game Features

### Platforms
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablet (iPad, Android Tablets)
- ✅ Responsive Design (Auto-scales to any screen size)

### Gameplay Features
- **3 Challenging Levels** with increasing difficulty
- **Multiple Offerings to Collect**:
  - 🏆 Modak (Golden Sweets) - 10 Points
  - 🌸 Flowers - 5 Points
  - 🔱 Incense - 8 Points
- **Obstacles** (Evil forces to avoid)
- **Score System** with point multipliers
- **Timer-based Challenges** (60s → 40s per level)
- **Smooth Animations** and particle effects
- **Sound Effects** (Web Audio API)
- **Pause Mechanism** (Press SPACE)

### Visual Design
- Ganesha Chaturthi themed sprites and colors
- Orange/Gold color scheme (festival colors)
- Dynamic particle effects
- Smooth animations and transitions
- Animated Lord Ganesha character

### Controls

**Desktop/Laptop:**
- Arrow Keys → Move Ganesha
- W/A/S/D → Alternative movement
- SPACE → Pause/Resume
- Mouse → Click buttons

**Mobile/Tablet:**
- Touch & Drag → Move Ganesha
- Tap Buttons → Navigate menus

## 🎮 How to Play

1. **Start Game** - Click "START GAME" from the menu
2. **Collect Offerings** - Navigate Ganesha to collect golden offerings
3. **Avoid Obstacles** - Don't collide with red obstacles
4. **Complete Level** - Collect all offerings before time runs out
5. **Advance** - Complete all 3 levels to finish the quest

## 📊 Level Details

### Level 1 (Easy)
- Offerings to collect: 10
- Obstacles: 3
- Time: 60 seconds

### Level 2 (Medium)
- Offerings to collect: 15
- Obstacles: 5
- Time: 50 seconds

### Level 3 (Hard)
- Offerings to collect: 20
- Obstacles: 8
- Time: 40 seconds

## 🛠️ Technical Stack

- **Framework**: Phaser 3.55.2 (Game Development Framework)
- **Language**: Vanilla JavaScript (ES6+)
- **Graphics**: Canvas with dynamic sprite generation
- **Physics**: Arcade Physics Engine
- **Audio**: Web Audio API
- **Responsive Design**: CSS Media Queries + Phaser Scale Manager

## 📁 Project Structure

```
game/
├── index.html              # Main HTML file
├── styles.css              # Styling and responsive design
├── js/
│   ├── config.js           # Game configuration and constants
│   ├── game.js             # Game initialization
│   └── scenes/
│       ├── BootScene.js    # Sprite and asset creation
│       ├── PreloadScene.js # Asset loading
│       ├── MenuScene.js    # Main menu
│       ├── GameScene.js    # Main gameplay
│       ├── LevelCompleteScene.js    # Level completion screen
│       └── GameOverScene.js         # Time's up screen
└── README.md               # This file
```

## 🚀 How to Run

### Option 1: Direct File Open
1. Extract the game folder
2. Double-click `index.html` to open in your browser

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```
Then open: `http://localhost:8000`

### Option 3: Online Deployment
- Upload files to web hosting (Netlify, GitHub Pages, Vercel, etc.)
- Game will work on any device with a modern browser

## 🎨 Customization

### Change Level Difficulty
Edit `js/config.js`:
```javascript
LEVELS: {
    1: { offerings: 10, obstacles: 3, time: 60 },
    2: { offerings: 15, obstacles: 5, time: 50 },
    3: { offerings: 20, obstacles: 8, time: 40 }
}
```

### Modify Sprite Colors
Edit `js/scenes/BootScene.js` - Modify hex color codes:
```javascript
ganesha.fillStyle(0xFF6B35, 1);  // Ganesha color
modak.fillStyle(0xFFD700, 1);    // Offering color
```

### Adjust Game Speed
Edit `js/config.js`:
```javascript
PLAYER_SPEED: 200,           // Player movement speed
OFFERING_SPEED: 150,         // Offering fall speed
OBSTACLE_SPEED: 100          // Obstacle fall speed
```

## 📱 Mobile Optimization

- Responsive canvas scaling
- Touch-friendly interface
- Auto-orientation detection
- Optimized performance for mobile devices
- Portrait and landscape support

## 🌟 Features Highlights

✨ **Smooth 60 FPS Gameplay**
✨ **Particle Effects** for visual feedback
✨ **Score Popups** showing points earned
✨ **Ambient Particles** for atmosphere
✨ **Dynamic Sprite Generation** (no external assets needed)
✨ **Sound Effects** with Web Audio API
✨ **Level Progression System**
✨ **Collision Detection** with physics
✨ **State Management** (Scene-based)

## 🙏 Spiritual Theme

The game celebrates the festival of Ganesha Chaturthi by incorporating:
- Lord Ganesha as the protagonist
- Festival offerings (Modak, Flowers, Incense)
- Festive color scheme (Orange, Gold)
- Motivational messages about blessings
- Spiritual atmosphere with animations

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (Chrome Mobile, Safari iOS, Firefox Mobile)

## ⚡ Performance Notes

- All graphics generated dynamically (no asset files needed)
- Optimized particle effects
- Efficient collision detection
- Responsive scaling without lag
- Works on low-end devices

## 📝 License

This game is created for festive celebration and educational purposes. Feel free to modify and share!

## 🎉 Enjoy the Game!

May Lord Ganesha bless you with wisdom, prosperity, and joy! 🙏

For support or suggestions, feel free to modify the game as per your needs.

---

**Created with ❤️ for Ganesha Chaturthi Festival**
