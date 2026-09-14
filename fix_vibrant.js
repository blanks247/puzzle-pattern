const fs = require('fs');
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
                boardBg: '#090d16',
                frameBorder: '#334155',
                borderMotif: '#9ca3af', // Solid Gray for edges
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
console.log('Fixed opacity issue! The tiles are now perfectly solid and vibrant.');
