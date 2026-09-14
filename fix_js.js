const fs = require('fs');

// Fix main.js
let code = fs.readFileSync('src/js/main.js', 'utf8');
code = code.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/js/main.js', code, 'utf8');
console.log('Fixed main.js syntax');

// Fix leaderboard_service.js encoding
let lb = fs.readFileSync('src/js/leaderboard_service.js');
if (lb[0] === 0xFF && lb[1] === 0xFE) {
    lb = lb.toString('utf16le');
    fs.writeFileSync('src/js/leaderboard_service.js', lb, 'utf8');
    console.log('Fixed leaderboard encoding');
} else {
    // maybe it doesn't have BOM but is UTF-16?
    let text = lb.toString('utf8');
    if (text.indexOf('\0') !== -1) {
        lb = Buffer.from(lb).toString('utf16le');
        fs.writeFileSync('src/js/leaderboard_service.js', lb, 'utf8');
        console.log('Fixed leaderboard encoding (no BOM)');
    } else {
        console.log('Leaderboard encoding seems fine');
    }
}
