const fs = require('fs');
let code = fs.readFileSync('src/js/game.js', 'utf8');

// Insert PRNG definition
const prngCode = `
        let currentSeed = 1;
        function getRand() {
            if (isCustomMode) return Math.random();
            let t = currentSeed += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
`;
// Inject at the beginning of PuzzleGame closure
code = code.replace(/let isCustomMode = false;/, 'let isCustomMode = false;\n' + prngCode);

// Seed it in initNewPuzzleBoard
code = code.replace(/function initNewPuzzleBoard\(size, numMotifs, fixedCount = 0, scrambleDiff = 'medium'\) \{/, 
    "function initNewPuzzleBoard(size, numMotifs, fixedCount = 0, scrambleDiff = 'medium') {\n            if (!isCustomMode) { currentSeed = 1337 + currentLevelIndex * 999; }");

// Replace Math.random() with getRand() for board generation and scrambling
// Note: We only want to replace it for generateSolvableBoard and scrambleBoard, 
// but it's safe to replace it globally since getRand handles custom mode natively.
code = code.replace(/Math\.random\(\)/g, 'getRand()');

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Made campaign levels deterministic');
