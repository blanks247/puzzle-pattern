const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Background of Gameplay Screen
html = html.replace('<div id="gameplay-screen" class="screen flex-col w-full h-full absolute inset-0 z-40 hidden">',
                    '<div id="gameplay-screen" class="screen flex-col w-full h-full absolute inset-0 z-40 hidden bg-slate-50">');

// 2. Header Buttons
html = html.replace('<button id="btn-game-back" class="w-12 h-12 glass-btn rounded-xl flex items-center justify-center text-white">',
                    '<button id="btn-game-back" class="w-12 h-12 bg-white border-2 border-slate-200 rounded-xl shadow-sm text-slate-600 font-bold active:scale-95 transition flex items-center justify-center">');
html = html.replace('<i class="fa-solid fa-arrow-left text-lg"></i>',
                    '<i class="fa-solid fa-arrow-left text-lg text-slate-600"></i>');

html = html.replace('<button id="btn-game-settings" class="w-12 h-12 glass-btn rounded-xl flex items-center justify-center text-white">',
                    '<button id="btn-game-settings" class="w-12 h-12 bg-white border-2 border-slate-200 rounded-xl shadow-sm text-slate-600 font-bold active:scale-95 transition flex items-center justify-center">');
html = html.replace('<i class="fa-solid fa-pause text-lg"></i>',
                    '<i class="fa-solid fa-pause text-lg text-slate-600"></i>');

// 3. Level Title
html = html.replace('<span id="level-title-display" class="font-display font-bold text-lg tracking-wide text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">',
                    '<span id="level-title-display" class="font-display font-black text-xl tracking-wide text-slate-800">');
html = html.replace('<span id="grid-size-subtitle" class="text-xs text-slate-300 font-medium">',
                    '<span id="grid-size-subtitle" class="text-xs text-slate-500 font-bold">');

// 4. Stats Row
html = html.replace('<section class="w-full px-4 py-3 flex items-center justify-between text-xs font-semibold text-slate-200 gap-2">',
                    '<section class="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-500 gap-2">');
                    
// Placed
html = html.replace('<div class="flex-1 flex flex-col items-center glass-panel rounded-xl py-2 border-emerald-500/30">',
                    '<div class="flex-1 flex flex-col items-center bg-white rounded-xl py-2 border-2 border-slate-200 shadow-sm">');
html = html.replace('<strong id="match-counter" class="text-white text-sm">',
                    '<strong id="match-counter" class="text-slate-800 text-sm">');
// Swaps
html = html.replace('<div class="flex-1 flex flex-col items-center glass-panel rounded-xl py-2 border-amber-500/30">',
                    '<div class="flex-1 flex flex-col items-center bg-white rounded-xl py-2 border-2 border-slate-200 shadow-sm">');
html = html.replace('<strong id="move-counter" class="text-white text-sm">',
                    '<strong id="move-counter" class="text-slate-800 text-sm">');
// Timer
html = html.replace('<div class="flex-1 flex flex-col items-center glass-panel rounded-xl py-2 border-sky-500/30">',
                    '<div class="flex-1 flex flex-col items-center bg-white rounded-xl py-2 border-2 border-slate-200 shadow-sm">');
html = html.replace('<strong id="timer-display" class="text-white text-sm">',
                    '<strong id="timer-display" class="text-slate-800 text-sm">');

// 5. Board Outer Frame
html = html.replace('<div id="board-outer-frame" class="relative p-3 rounded-3xl glass-panel shadow-[0_0_40px_rgba(0,0,0,0.3)] border-white/20 transition-all w-full max-w-[380px] aspect-square flex items-center justify-center">',
                    '<div id="board-outer-frame" class="relative p-3 rounded-3xl bg-white shadow-xl border-4 border-slate-200 transition-all w-full max-w-[380px] aspect-square flex items-center justify-center">');
html = html.replace('<div id="puzzle-board" class="relative w-full h-full grid gap-1 bg-black/40 p-1 rounded-2xl border border-white/10 overflow-hidden">',
                    '<div id="puzzle-board" class="relative w-full h-full grid gap-0 bg-slate-300 p-1 rounded-2xl border-4 border-slate-300 overflow-hidden">');

// 6. Footer Action Buttons
// Undo
html = html.replace('<button id="btn-undo" class="flex-1 py-3 flex flex-col items-center justify-center rounded-2xl glass-btn text-slate-300 disabled:opacity-40 disabled:pointer-events-none">',
                    '<button id="btn-undo" class="flex-1 py-3 flex flex-col items-center justify-center rounded-2xl bg-blue-100 border-2 border-blue-200 text-blue-700 shadow-sm font-bold tracking-wide active:scale-95 disabled:opacity-40 disabled:pointer-events-none">');
html = html.replace('<i class="fa-solid fa-rotate-left text-lg mb-1"></i>',
                    '<i class="fa-solid fa-rotate-left text-lg mb-1 text-blue-500"></i>');
// Hint
html = html.replace('<button id="btn-hint" class="flex-1 py-3 rounded-2xl bg-amber-100 border-2 border-amber-200 text-amber-700 font-bold tracking-wide flex flex-col items-center justify-center gap-1 active:scale-95">',
                    '<button id="btn-hint" class="flex-1 py-3 rounded-2xl bg-amber-100 border-2 border-amber-200 text-amber-700 font-bold tracking-wide flex flex-col items-center justify-center gap-1 active:scale-95 shadow-sm">');
// Reset
html = html.replace('<button id="btn-reset" class="flex-1 py-3 flex flex-col items-center justify-center rounded-2xl glass-btn text-slate-300">',
                    '<button id="btn-reset" class="flex-1 py-3 flex flex-col items-center justify-center rounded-2xl bg-rose-100 border-2 border-rose-200 text-rose-700 shadow-sm font-bold tracking-wide active:scale-95">');
html = html.replace('<i class="fa-solid fa-arrow-rotate-right text-lg mb-1"></i>',
                    '<i class="fa-solid fa-arrow-rotate-right text-lg mb-1 text-rose-500"></i>');

fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('dist/index.html', html, 'utf8');
console.log('Fixed index.html gameplay screen UI!');

// ============================================
// GAME.JS UPDATES (VIBRANT TILES)
// ============================================

let gameCode = fs.readFileSync('src/js/game.js', 'utf8');

const oldClassic = `            classic: {
                name: 'Eternity Classic',
                boardBg: '#090d16',
                frameBorder: '#334155',
                borderMotif: '#1e293b',
                motifs: [
                    { name: 'Red Circle', bg: '#ef4444', accent: '#fca5a5', shape: 'circle' },
                    { name: 'Amber Diamond', bg: '#f59e0b', accent: '#fef08a', shape: 'diamond' },
                    { name: 'Emerald Triangle', bg: '#10b981', accent: '#a7f3d0', shape: 'triangle' },
                    { name: 'Indigo Star', bg: '#6366f1', accent: '#c7d2fe', shape: 'star' },
                    { name: 'Cyan Square', bg: '#06b6d4', accent: '#a5f3fc', shape: 'square' },
                    { name: 'Pink Hexagon', bg: '#ec4899', accent: '#fbcfe8', shape: 'hexagon' },
                    { name: 'Violet Ring', bg: '#8b5cf6', accent: '#ddd6fe', shape: 'ring' },
                ]
            },`;

const newClassic = `            classic: {
                name: 'Vibrant Eternity',
                boardBg: '#cbd5e1', // Slate 300 to match board background gap
                frameBorder: '#e2e8f0', 
                borderMotif: '#9ca3af', // Solid flat gray for edge pieces
                motifs: [
                    { name: 'Crimson Orange', bg: '#e81c24', accent: '#f58220', shape: 'circle' }, 
                    { name: 'Green Blue', bg: '#8bc53f', accent: '#0054a6', shape: 'diamond' },
                    { name: 'Pink Cyan', bg: '#ec008c', accent: '#00b7f1', shape: 'triangle' },
                    { name: 'Yellow Blue', bg: '#fff200', accent: '#0054a6', shape: 'star' },
                    { name: 'Blue Yellow', bg: '#0054a6', accent: '#fff200', shape: 'square' },
                    { name: 'Orange Yellow', bg: '#f58220', accent: '#fff200', shape: 'hexagon' },
                    { name: 'Purple Yellow', bg: '#662d91', accent: '#fff200', shape: 'ring' },
                ]
            },`;

gameCode = gameCode.replace(oldClassic, newClassic);

// Modify createTileSVG properly
const oldSVG = `                let fill = palette.borderMotif;
                if (motifIdx > 0 && palette.motifs[motifIdx - 1]) { fill = palette.motifs[motifIdx - 1].bg; }
                svgHTML += \`<polygon points="\${quadPolys[edgeDir]}" fill="\${fill}" opacity="0.32" />\`;
                if (motifIdx === 0) {
                    if (edgeDir === 0) svgHTML += \`<rect x="0" y="0" width="100" height="6" fill="\${palette.frameBorder}" rx="1"/>\`;
                    if (edgeDir === 1) svgHTML += \`<rect x="94" y="0" width="6" height="100" fill="\${palette.frameBorder}" rx="1"/>\`;
                    if (edgeDir === 2) svgHTML += \`<rect x="0" y="94" width="100" height="6" fill="\${palette.frameBorder}" rx="1"/>\`;
                    if (edgeDir === 3) svgHTML += \`<rect x="0" y="0" width="6" height="100" fill="\${palette.frameBorder}" rx="1"/>\`;
                } else {`;

const newSVG = `                let fill = palette.borderMotif;
                if (motifIdx > 0 && palette.motifs[motifIdx - 1]) { fill = palette.motifs[motifIdx - 1].bg; }
                
                // Solid colorful theme with opaque black borders
                if (paletteKey === 'classic' || !paletteKey) {
                    svgHTML += \`<polygon points="\${quadPolys[edgeDir]}" fill="\${fill}" stroke="#111111" stroke-width="1.5" stroke-linejoin="miter" />\`;
                } else {
                    svgHTML += \`<polygon points="\${quadPolys[edgeDir]}" fill="\${fill}" opacity="0.32" />\`;
                }
                
                if (motifIdx === 0) {
                    // For classic, edge pieces are solid gray, no extra lines
                    if (paletteKey !== 'classic' && paletteKey) {
                        if (edgeDir === 0) svgHTML += \`<rect x="0" y="0" width="100" height="6" fill="\${palette.frameBorder}" rx="1"/>\`;
                        if (edgeDir === 1) svgHTML += \`<rect x="94" y="0" width="6" height="100" fill="\${palette.frameBorder}" rx="1"/>\`;
                        if (edgeDir === 2) svgHTML += \`<rect x="0" y="94" width="100" height="6" fill="\${palette.frameBorder}" rx="1"/>\`;
                        if (edgeDir === 3) svgHTML += \`<rect x="0" y="0" width="6" height="100" fill="\${palette.frameBorder}" rx="1"/>\`;
                    }
                } else {`;

gameCode = gameCode.replace(oldSVG, newSVG);

// Remove diagonal lines for classic
const oldLines = `            svgHTML += \`<line x1="0" y1="0" x2="100" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            svgHTML += \`<line x1="100" y1="0" x2="0" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;`;

const newLines = `            if (paletteKey !== 'classic' && paletteKey) {
                svgHTML += \`<line x1="0" y1="0" x2="100" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
                svgHTML += \`<line x1="100" y1="0" x2="0" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            }`;

gameCode = gameCode.replace(oldLines, newLines);

fs.writeFileSync('src/js/game.js', gameCode, 'utf8');
fs.writeFileSync('dist/src/js/game.js', gameCode, 'utf8');
console.log('Fixed game.js tiles!');
