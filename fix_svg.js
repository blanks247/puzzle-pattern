const fs = require('fs');
let code = fs.readFileSync('src/js/game.js', 'utf8');

code = code.replace(/class="w-full h-full rounded-lg select-none/g, 'class="w-full h-full rounded-none select-none');
code = code.replace(/rx="8"/g, 'rx="0"');

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Fixed SVG rounded corners');
