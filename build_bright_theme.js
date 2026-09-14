const fs = require('fs');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

// Background
html = html.replace('<div id="level-screen" class="screen flex-col w-full h-full absolute inset-0 z-10 hidden bg-[#090d16]">',
                    '<div id="level-screen" class="screen flex-col w-full h-full absolute inset-0 z-10 hidden bg-slate-50">');

// Top Header
html = html.replace(/<button id="btn-back" class="w-12 h-12 rounded-2xl glass-btn flex items-center justify-center text-slate-300 hover:text-white transition">/g,
                    '<button id="btn-back" class="w-12 h-12 rounded-2xl bg-white border-2 border-slate-200 text-slate-600 font-bold shadow-sm active:scale-95 transition flex items-center justify-center">');
html = html.replace(/<button id="btn-pause" class="w-12 h-12 rounded-2xl glass-btn flex items-center justify-center text-slate-300 hover:text-white transition">/g,
                    '<button id="btn-pause" class="w-12 h-12 rounded-2xl bg-white border-2 border-slate-200 text-slate-600 font-bold shadow-sm active:scale-95 transition flex items-center justify-center">');

// Level Title
html = html.replace(/<h2 id="level-title-display" class="font-display font-black text-2xl tracking-widest text-amber-400">/g,
                    '<h2 id="level-title-display" class="font-display font-black text-2xl tracking-widest text-slate-800">');
html = html.replace(/<p id="grid-size-subtitle" class="text-xs text-slate-400 font-bold tracking-wide uppercase mt-1">/g,
                    '<p id="grid-size-subtitle" class="text-xs text-slate-500 font-bold tracking-wide uppercase mt-1">');

// Stats row wrappers
html = html.replace(/class="flex-1 bg-slate-800\/40 border border-slate-700\/50 rounded-2xl p-3 flex flex-col items-center justify-center"/g,
                    'class="flex-1 bg-white border-2 border-slate-200 rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm"');

// Stats text colors
html = html.replace(/id="tiles-placed" class="text-white font-bold text-lg leading-tight"/g,
                    'id="tiles-placed" class="text-slate-800 font-bold text-lg leading-tight"');
html = html.replace(/id="swap-count" class="text-white font-bold text-lg leading-tight"/g,
                    'id="swap-count" class="text-slate-800 font-bold text-lg leading-tight"');
html = html.replace(/id="timer-display" class="text-white font-bold text-lg leading-tight font-mono tracking-wider"/g,
                    'id="timer-display" class="text-slate-800 font-bold text-lg leading-tight font-mono tracking-wider"');

// Puzzle Board Container
html = html.replace(/id="puzzle-board-container" class="w-full aspect-square max-w-lg mx-auto p-2 rounded-3xl border border-slate-700\/50 bg-slate-900\/50 shadow-2xl"/g,
                    'id="puzzle-board-container" class="w-full aspect-square max-w-lg mx-auto p-2 rounded-3xl border-4 border-slate-200 bg-white shadow-xl"');

// Action Buttons
// Undo
html = html.replace(/<button id="btn-undo" class="flex-1 py-3 rounded-2xl glass-btn text-slate-400 font-bold tracking-wide flex flex-col items-center justify-center gap-1">/g,
                    '<button id="btn-undo" class="flex-1 py-3 rounded-2xl bg-blue-100 border-2 border-blue-200 text-blue-700 font-bold tracking-wide flex flex-col items-center justify-center gap-1 active:scale-95">');
html = html.replace(/<i class="fa-solid fa-rotate-left text-slate-500"><\/i>/g,
                    '<i class="fa-solid fa-rotate-left text-blue-500"></i>');

// Hint
html = html.replace(/<button id="btn-hint" class="flex-1 py-3 rounded-2xl glass-btn text-amber-100 font-bold tracking-wide flex flex-col items-center justify-center gap-1">/g,
                    '<button id="btn-hint" class="flex-1 py-3 rounded-2xl bg-amber-100 border-2 border-amber-200 text-amber-700 font-bold tracking-wide flex flex-col items-center justify-center gap-1 active:scale-95">');
html = html.replace(/<div class="text-\[10px\] text-amber-400\/80/g,
                    '<div class="text-[10px] text-amber-600/80');

// Restart
html = html.replace(/<button id="btn-restart" class="flex-1 py-3 rounded-2xl glass-btn text-rose-100 font-bold tracking-wide flex flex-col items-center justify-center gap-1">/g,
                    '<button id="btn-restart" class="flex-1 py-3 rounded-2xl bg-rose-100 border-2 border-rose-200 text-rose-700 font-bold tracking-wide flex flex-col items-center justify-center gap-1 active:scale-95">');
html = html.replace(/<i class="fa-solid fa-rotate-right text-rose-400"><\/i>/g,
                    '<i class="fa-solid fa-rotate-right text-rose-500"></i>');

// Victory Overlay
html = html.replace(/<div id="victory-overlay" class="screen fixed inset-0 z-50 flex items-center justify-center bg-\[\#090d16\]\/95 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">/g,
                    '<div id="victory-overlay" class="screen fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">');
html = html.replace(/<div class="bg-slate-900 border border-slate-700 p-8 rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-2xl relative overflow-hidden">/g,
                    '<div class="bg-white border-4 border-slate-200 p-8 rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-2xl relative overflow-hidden">');
html = html.replace(/<h2 class="font-display font-black text-3xl mb-1 text-white">/g,
                    '<h2 class="font-display font-black text-3xl mb-1 text-slate-800">');
html = html.replace(/<p class="text-slate-400 font-medium text-sm mb-6">/g,
                    '<p class="text-slate-600 font-medium text-sm mb-6">');
html = html.replace(/<div class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Time<\/div>/g,
                    '<div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Time</div>');
html = html.replace(/<div id="victory-time" class="text-white font-bold text-2xl font-mono"><\/div>/g,
                    '<div id="victory-time" class="text-slate-800 font-bold text-2xl font-mono"></div>');

// Write index.html
fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('dist/index.html', html, 'utf8');

// 2. UPDATE game.js
let code = fs.readFileSync('src/js/game.js', 'utf8');

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
                boardBg: '#f8fafc', // Light slate for gaps
                frameBorder: '#e2e8f0', // Light slate frame
                borderMotif: '#94a3b8', // Solid flat gray for edges
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

code = code.replace(oldClassic, newClassic);

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

code = code.replace(oldSVG, newSVG);

// Remove diagonal lines for classic
const oldLines = `            svgHTML += \`<line x1="0" y1="0" x2="100" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            svgHTML += \`<line x1="100" y1="0" x2="0" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;`;

const newLines = `            if (paletteKey !== 'classic' && paletteKey) {
                svgHTML += \`<line x1="0" y1="0" x2="100" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
                svgHTML += \`<line x1="100" y1="0" x2="0" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            }`;

code = code.replace(oldLines, newLines);

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Applied bright theme UI and vibrant opaque tiles!');
