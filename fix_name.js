const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update Title
html = html.replace('<title>Pattern Swap</title>', '<title>Edges</title>');

// Update Splash Screen
html = html.replace(/<h1 class="font-display font-extrabold text-4xl tracking-widest text-transparent bg-clip-text \n?bg-gradient-to-r from-amber-200 to-purple-400">PATTERN<\/h1>\s*<h1 class="font-display font-extrabold text-4xl tracking-widest text-transparent bg-clip-text \n?bg-gradient-to-r from-purple-400 to-amber-200">SWAP<\/h1>/m, 
    '<h1 class="font-display font-extrabold text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-purple-400">EDGES</h1>');

// Update Main Menu Screen
html = html.replace(/<h1 class="font-display font-black text-5xl tracking-wider text-transparent bg-clip-text \n?bg-gradient-to-br from-white via-amber-100 to-purple-300">PATTERN<\/h1>\s*<h1 class="font-display font-black text-4xl tracking-wider text-white drop-shadow-md">SWAP<\/h1>/m, 
    '<h1 class="font-display font-black text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-100 to-purple-300">EDGES</h1>');

fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('dist/index.html', html, 'utf8');
console.log('Updated Game Name to Edges in HTML');
