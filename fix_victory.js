const fs = require('fs');
let code = fs.readFileSync('src/js/game.js', 'utf8');

code = code.replace(/document\.getElementById\('victory-overlay'\)\.classList\.remove\('hidden'\);/g, 
"const vo = document.getElementById('victory-overlay'); if (vo) { vo.classList.remove('hidden'); vo.style.display = 'flex'; setTimeout(() => vo.classList.add('active'), 10); }");

code = code.replace(/document\.getElementById\('victory-overlay'\)\.classList\.add\('hidden'\);/g, 
"const vo = document.getElementById('victory-overlay'); if (vo) { vo.classList.remove('active'); setTimeout(() => { vo.style.display = 'none'; vo.classList.add('hidden'); }, 300); }");

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Fixed victory overlay visibility');
