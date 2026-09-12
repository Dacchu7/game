# 🚀 npm Setup Guide

Your Ganesha Chaturthi game is now configured for npm!

## ✅ What's Been Set Up

- **package.json** - npm configuration with useful scripts
- **.gitignore** - Git ignore rules for clean version control
- **Dev dependencies** - http-server for local testing
- **npm scripts** - Quick commands to run and develop the game

---

## 📋 Available npm Commands

### 🎮 Run the Game

#### Option 1: Start with auto-open (Recommended)
```bash
npm start
```
- Starts server on http://localhost:8000
- Automatically opens game in your browser
- Rebuilds on file changes

#### Option 2: Start server only
```bash
npm run dev
```
- Starts server on http://localhost:8000
- You manually open browser to http://localhost:8000

#### Option 3: Python server (no dependencies needed)
```bash
npm run serve
```
- Uses Python's built-in server
- Open http://localhost:8000 in browser

### 📝 Other Commands

```bash
npm run test
# Shows testing instructions

npm run build
# No build needed (info message)

npm run minify
# Minifies JS files (optional optimization)

npm run deploy:github
# Deploy to GitHub (requires git setup)

npm run deploy:netlify
# Deploy to Netlify (requires netlify-cli)

npm run preview
# Opens game in browser
```

---

## 🔧 Installation Steps

### Step 1: Install Node.js (if not already installed)
- Download from: https://nodejs.org/
- Choose LTS version (recommended)
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### Step 2: Install Dependencies
Navigate to game folder and run:
```bash
cd d:\game
npm install
```

This will:
- Create `node_modules/` folder
- Install http-server for local testing
- Install terser for code minification (optional)
- Install netlify-cli for deployment (optional)

### Step 3: Run the Game
```bash
npm start
```

**That's it!** Game will open automatically in your browser. 🎮

---

## 📦 What Gets Installed

### Dev Dependencies (for development)
- **http-server** - Local web server for testing
- **terser** - JavaScript minifier (optional)
- **netlify-cli** - Deployment tool (optional)

### Regular Dependencies
- **phaser** - Game framework (loaded from CDN in game, but available locally)

---

## 🎯 Quick Start After npm Setup

```bash
# Install dependencies once
npm install

# Start playing
npm start

# Browser opens automatically to: http://localhost:8000
```

---

## 📁 Project Structure After npm Setup

```
game/
├── node_modules/          ← Created by npm install (ignore in git)
├── package.json           ← npm configuration (NEW)
├── package-lock.json      ← npm dependencies lock (NEW)
├── .gitignore             ← Git ignore rules (NEW)
├── index.html
├── styles.css
├── js/
│   ├── config.js
│   ├── game.js
│   └── scenes/
└── [documentation files]
```

---

## 🌐 Deployment with npm

### Deploy to Netlify
```bash
npm run deploy:netlify
```

### Deploy to GitHub Pages
```bash
npm run deploy:github
```

---

## 💡 Tips

- **No build needed** - This is a web game, no compilation required
- **npm start is easiest** - Auto-opens browser
- **Keep node_modules in .gitignore** - Don't commit to git
- **Game still works without npm** - Just open index.html directly

---

## 🆘 Troubleshooting

### npm install fails
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Port 8000 already in use
```bash
# Use different port
http-server -p 8001
```

### Command not found (npm, node)
- Node.js not installed
- Add to PATH environment variable
- Restart terminal after installing Node.js

---

## 🎉 You're Ready!

Run this to get started:
```bash
npm install
npm start
```

Your game will open in the browser automatically! 🎮🙏

---

**Happy developing!**
