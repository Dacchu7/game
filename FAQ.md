# ❓ FAQ & Troubleshooting

## Frequently Asked Questions

### Getting Started

**Q: Can I play the game without internet?**
A: Yes! Deploy locally using `python -m http.server 8000` or convert to PWA for offline play.

**Q: Do I need to install anything?**
A: No! Just open `index.html` in a browser. Phaser is loaded from CDN.

**Q: How do I open the game?**
A: Double-click `index.html` or run a local server and visit http://localhost:8000

**Q: Can I play on mobile?**
A: Yes! The game is fully responsive and works on all phones and tablets.

**Q: Which browsers are supported?**
A: Chrome, Firefox, Safari, Edge, and all mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile).

---

### Gameplay Questions

**Q: How do I move Ganesha?**
A: Use Arrow Keys (↑ ↓ ← →) or WASD on desktop. On mobile, drag your finger.

**Q: Why can't I collect the offerings?**
A: Make sure Ganesha overlaps with the offering. The offerings fall from top.

**Q: What happens when I hit an obstacle?**
A: You lose 20 points and get knocked back. Avoid them!

**Q: How do I pause the game?**
A: Press the SPACE key on desktop.

**Q: Can I play with mouse?**
A: Yes! Click and drag on the desktop to move Ganesha. Mobile uses touch drag.

**Q: How many levels are there?**
A: 3 main levels with increasing difficulty. You can add more by editing `config.js`.

**Q: What's the maximum score?**
A: No limit! The higher you score, the better.

---

### Technical Issues

**Q: The game is not loading. What should I do?**
A: 
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Try a different browser
4. Check the browser console for errors (F12)

**Q: The game is very laggy. How do I fix it?**
A:
1. Close other browser tabs
2. Close other applications
3. Reduce visual effects by editing `GameScene.js`
4. Try a different browser
5. Update your graphics drivers

**Q: Sound is not working.**
A:
1. Check browser volume
2. Check if sound is muted in game
3. Some browsers require user interaction before playing sound
4. Try a different browser

**Q: Touch controls not working on mobile.**
A:
1. Make sure you're using latest browser
2. Try landscape orientation
3. Use mobile Chrome or Safari
4. Clear cache and reload

**Q: The game crashes when I open it.**
A:
1. Check browser console (F12) for errors
2. Try a different browser
3. Clear browser data
4. Update your browser

---

### Customization Questions

**Q: How do I change the difficulty?**
A: Edit `GAME_CONSTANTS.LEVELS` in `js/config.js`. Adjust offerings, obstacles, and time.

**Q: Can I add more levels?**
A: Yes! Add new level entries to `GAME_CONSTANTS.LEVELS` in `js/config.js`.

**Q: How do I change the game speed?**
A: Edit `PLAYER_SPEED`, `OFFERING_SPEED`, and `OBSTACLE_SPEED` in `js/config.js`.

**Q: Can I change the colors?**
A: Yes! Edit color codes in `js/scenes/BootScene.js` (hex format like 0xFF6B35).

**Q: How do I add new offerings?**
A: Create new sprite in `BootScene.js`, add to `OFFERINGS` config, and update `spawnOfferings()`.

**Q: Can I modify the sounds?**
A: Yes! Edit frequency values in `playCollectSound()` and `playHitSound()` functions in `GameScene.js`.

---

### Deployment Questions

**Q: How do I play on my phone?**
A: Deploy to web (GitHub Pages, Netlify) and open URL on phone, or create PWA.

**Q: Can I publish it to Play Store or App Store?**
A: Yes! See `MOBILE_DISTRIBUTION.md` for complete guide on converting to native app.

**Q: Which hosting is best?**
A: For beginners: Netlify (drag & drop). For free: GitHub Pages. For features: Firebase.

**Q: Do I need to pay for hosting?**
A: No! GitHub Pages, Netlify, and Firebase all have free tiers.

**Q: Can I use my own domain?**
A: Yes! All hosting platforms support custom domains.

**Q: How do I update the game after publishing?**
A: Simply update files and re-upload. Changes appear automatically.

---

## Troubleshooting Guide

### Issue: Game Won't Start

**Symptoms**: Blank screen when opening index.html

**Solutions**:
```
1. Open browser Developer Tools (F12)
2. Check Console tab for errors
3. Look for "Cannot find Phaser" error
   → Solution: Check internet connection (Phaser loaded from CDN)
4. Look for file path errors
   → Solution: Check all js/ files exist in correct locations
5. Try Hard Refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
6. Try different browser
```

---

### Issue: Controls Don't Work

**Symptoms**: Can't move Ganesha with keyboard/mouse

**Solutions**:
```
1. Check if game is paused (SPACE key)
   → Press SPACE to resume
2. Try different input method
   → Arrow keys vs WASD
   → Mouse drag vs click buttons
3. Click on game area first (activate focus)
4. Try different browser
5. Check browser console for input errors (F12)
```

---

### Issue: Offerings Not Appearing

**Symptoms**: No offerings on screen to collect

**Solutions**:
```
1. Wait a moment (offerings spawn with delay)
2. Check if game is paused (press SPACE)
3. Check browser console (F12) for JavaScript errors
4. Reload page (F5)
5. Try different browser
```

---

### Issue: Game Runs Slow/Lag

**Symptoms**: Choppy animation, low frame rate

**Solutions**:
```
1. Close other applications
2. Close other browser tabs
3. Reduce particle effects:
   → Edit js/scenes/GameScene.js
   → Reduce particle count in ambientParticles
4. Disable debugging:
   → Edit js/config.js
   → Set debug: false
5. Use hardware acceleration:
   → Browser settings → Enable GPU acceleration
6. Update graphics drivers
```

---

### Issue: Mobile Touch Controls Laggy

**Symptoms**: Delay in moving on mobile device

**Solutions**:
```
1. Close other apps
2. Use landscape orientation
3. Clear browser cache
4. Update mobile browser
5. Try mobile Chrome or Safari
6. Reduce game resolution:
   → Edit scale settings in config.js
```

---

### Issue: Sound Not Working

**Symptoms**: No audio when collecting or hitting obstacles

**Solutions**:
```
1. Check browser volume (not muted)
2. Check system volume (not muted)
3. Check browser permissions:
   → Some browsers require user interaction first
   → Click somewhere in game first
4. Try different browser
5. Some browsers block audio on non-HTTPS
   → Deploy to HTTPS or use localhost
6. Check browser console (F12) for audio errors
```

---

### Issue: Score Not Increasing

**Symptoms**: Collect offerings but score stays same

**Solutions**:
```
1. Check if offerings actually touched
   → Player must fully overlap offering
2. Check browser console for errors
3. Verify collectOffering function:
   → Edit GameScene.js and check physics.add.overlap
4. Try collecting different offering types
5. Reload page and try again
```

---

### Issue: Timer Doesn't Count Down

**Symptoms**: Timer stuck or not updating

**Solutions**:
```
1. Check if game is paused (press SPACE to resume)
2. Check browser console for errors (F12)
3. Verify timerEvent is created in create()
4. Try reloading page (F5)
5. Check browser's JavaScript is enabled
```

---

### Issue: Game Freezes Mid-Gameplay

**Symptoms**: Game becomes unresponsive

**Solutions**:
```
1. Check browser console (F12) for errors
2. Try pressing SPACE (might be paused)
3. Reload page (F5)
4. Close other applications
5. Restart browser
6. Clear browser cache
```

---

### Issue: Offerings Fall Too Fast

**Symptoms**: Can't collect enough before offerings disappear

**Solutions**:
```
Edit GAME_CONSTANTS in js/config.js:
- Decrease OFFERING_SPEED (e.g., 100 instead of 150)
- Increase level time (e.g., 90 instead of 60)
- Decrease required offerings (e.g., 8 instead of 10)
```

---

### Issue: Game Too Difficult

**Symptoms**: Can't complete levels

**Solutions**:
```
Edit GAME_CONSTANTS in js/config.js:

Option 1: Make easier
- Decrease obstacles count
- Increase time limit
- Reduce offering speed
- Increase player speed

Option 2: Create new difficulty level
- Edit LEVELS section
- Add Level 0 with easy settings
- Start game with level 0
```

---

### Issue: Game Too Easy

**Symptoms**: Completing levels instantly

**Solutions**:
```
Edit GAME_CONSTANTS in js/config.js:

Make harder:
- Increase offering speed
- Decrease time limit
- Increase required offerings
- Increase obstacle count
- Decrease player speed
```

---

## Performance Optimization

### If game runs slow:

1. **Reduce Particles**
```javascript
// In GameScene.js, reduce particle count
this.particles.emitParticleAt(offering.x, offering.y, 8); // was 15
```

2. **Disable Debug Mode**
```javascript
// In config.js
arcade: {
    debug: false // was true
}
```

3. **Reduce Animation Count**
```javascript
// Comment out some tweens in scenes
// this.tweens.add({...}) // disabled
```

4. **Optimize Sprite Creation**
```javascript
// Reuse sprites instead of creating new ones
```

---

## Browser Compatibility

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome | ✅ | ✅ | Best performance |
| Firefox | ✅ | ✅ | Good support |
| Safari | ✅ | ✅ | iOS support |
| Edge | ✅ | ✅ | Good performance |
| Opera | ✅ | ✅ | Works fine |

---

## Mobile Device Compatibility

| Device | iOS | Android | Notes |
|--------|-----|---------|-------|
| iPhone | ✅ | N/A | iOS 11+ |
| iPad | ✅ | N/A | iOS 11+ |
| Android Phone | N/A | ✅ | Android 5+ |
| Android Tablet | N/A | ✅ | Android 5+ |

---

## Common Error Messages

### "Uncaught TypeError: Cannot read property 'x' of undefined"
**Cause**: Sprite not created properly
**Solution**: Check BootScene.js sprite creation

### "Cannot find module 'phaser'"
**Cause**: Phaser CDN not loaded
**Solution**: Check internet connection, wait for CDN to load

### "CORS error"
**Cause**: File access restrictions
**Solution**: Use local server (`python -m http.server 8000`)

### "Blob error in service worker"
**Cause**: PWA cache issue
**Solution**: Clear browser cache, reload page

---

## Getting More Help

1. **Check Documentation**
   - README.md - Full overview
   - QUICKSTART.md - How to play
   - CONFIGURATION.md - Customization

2. **Browser DevTools (F12)**
   - Console tab - Check for errors
   - Network tab - Check resource loading
   - Performance tab - Check frame rate

3. **Code Comments**
   - Read code comments in JS files
   - Understand game flow

4. **Phaser Documentation**
   - https://photonstorm.github.io/phaser3-docs/

---

## Still Having Issues?

**Try these steps in order:**
1. ✅ Clear cache and reload (Ctrl+Shift+Delete, F5)
2. ✅ Try different browser
3. ✅ Check DevTools console (F12)
4. ✅ Read error message carefully
5. ✅ Check related documentation file
6. ✅ Try suggested solution
7. ✅ Reset to default settings

---

**Hope this helps! 🙏**

If you continue having issues, review the code comments in the source files for more details about how things work.
