const fs = require('fs');

// Fix index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/gap-\[1px\]/g, 'gap-0');
fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('dist/index.html', html, 'utf8');

// Fix game.js
let game = fs.readFileSync('src/js/game.js', 'utf8');
game = game.replace(/p-0\.5/g, 'p-0');
fs.writeFileSync('src/js/game.js', game, 'utf8');
fs.writeFileSync('dist/src/js/game.js', game, 'utf8');

console.log('Removed all tile gaps and padding!');
