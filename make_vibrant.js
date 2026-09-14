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
                    { name: 'Crimson Orange', bg: '#901A1E', accent: '#F97316', shape: 'circle' }, // Dark red bg, orange accent
                    { name: 'Green Blue', bg: '#22C55E', accent: '#1D4ED8', shape: 'diamond' },    // Green bg, dark blue accent
                    { name: 'Pink Cyan', bg: '#EC4899', accent: '#38BDF8', shape: 'triangle' },    // Pink bg, light blue accent
                    { name: 'Yellow Blue', bg: '#FDE047', accent: '#1E3A8A', shape: 'star' },      // Yellow bg, navy accent
                    { name: 'Blue Yellow', bg: '#3B82F6', accent: '#FDE047', shape: 'square' },    // Blue bg, yellow accent
                    { name: 'Orange Yellow', bg: '#F97316', accent: '#FEF08A', shape: 'hexagon' }, // Orange bg, light yellow accent
                    { name: 'Purple Yellow', bg: '#9333EA', accent: '#FDE047', shape: 'ring' },    // Purple bg, yellow accent
                ]
            },`;

code = code.replace(oldClassic, newClassic);

// Modify createTileSVG
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
                
                // If it's a solid colorful theme like Vibrant Eternity, draw opaque with black borders
                if (paletteKey === 'classic' || !paletteKey) {
                    svgHTML += \`<polygon points="\${quadPolys[edgeDir]}" fill="\${fill}" stroke="#111111" stroke-width="1.5" stroke-linejoin="miter" />\`;
                } else {
                    svgHTML += \`<polygon points="\${quadPolys[edgeDir]}" fill="\${fill}" opacity="0.32" />\`;
                }
                
                if (motifIdx === 0) {
                    // For the vibrant theme, edge pieces are just solid gray triangles, no extra border lines needed
                    if (paletteKey !== 'classic' && paletteKey) {
                        if (edgeDir === 0) svgHTML += \`<rect x="0" y="0" width="100" height="6" fill="\${palette.frameBorder}" rx="1"/>\`;
                        if (edgeDir === 1) svgHTML += \`<rect x="94" y="0" width="6" height="100" fill="\${palette.frameBorder}" rx="1"/>\`;
                        if (edgeDir === 2) svgHTML += \`<rect x="0" y="94" width="100" height="6" fill="\${palette.frameBorder}" rx="1"/>\`;
                        if (edgeDir === 3) svgHTML += \`<rect x="0" y="0" width="6" height="100" fill="\${palette.frameBorder}" rx="1"/>\`;
                    }
                } else {`;

code = code.replace(oldSVG, newSVG);

// Remove the old diagonal lines, but ONLY for the classic theme
const oldLines = `            svgHTML += \`<line x1="0" y1="0" x2="100" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            svgHTML += \`<line x1="100" y1="0" x2="0" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            svgHTML += \`</svg>\`;`;

const newLines = `            if (paletteKey !== 'classic' && paletteKey) {
                svgHTML += \`<line x1="0" y1="0" x2="100" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
                svgHTML += \`<line x1="100" y1="0" x2="0" y2="100" stroke="\${palette.boardBg}" stroke-width="2" opacity="0.6"/>\`;
            }
            svgHTML += \`</svg>\`;`;

code = code.replace(oldLines, newLines);

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Updated tile SVG generation to match Vibrant Eternity style!');
