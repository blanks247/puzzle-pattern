
        window.addEventListener('DOMContentLoaded', () => {
            if (typeof AdMobService !== 'undefined' && AdMobService.init) {
                AdMobService.init();
            }
        });

        const PALETTES = {
            classic: {
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
            },
            synth: {
                name: 'Neon Synthwave',
                boardBg: '#050510',
                frameBorder: '#475569',
                borderMotif: '#0f172a',
                motifs: [
                    { name: 'Neon Pink Circle', bg: '#ff007f', accent: '#ffb3d9', shape: 'circle' },
                    { name: 'Electric Cyan Diamond', bg: '#00f0ff', accent: '#b3faff', shape: 'diamond' },
                    { name: 'Purple Star', bg: '#9d00ff', accent: '#e2b3ff', shape: 'star' },
                    { name: 'Lime Triangle', bg: '#39ff14', accent: '#c4ffb8', shape: 'triangle' },
                    { name: 'Yellow Square', bg: '#ffe600', accent: '#fff7b3', shape: 'square' },
                    { name: 'Hot Orange Ring', bg: '#ff5500', accent: '#ffcbab', shape: 'ring' },
                ]
            },
            pastel: {
                name: 'Cozy Pastel',
                boardBg: '#18181b',
                frameBorder: '#3f3f46',
                borderMotif: '#27272a',
                motifs: [
                    { name: 'Sage Circle', bg: '#86efac', accent: '#dcfce7', shape: 'circle' },
                    { name: 'Coral Diamond', bg: '#fca5a5', accent: '#fee2e2', shape: 'diamond' },
                    { name: 'Soft Blue Triangle', bg: '#93c5fd', accent: '#dbeafe', shape: 'triangle' },
                    { name: 'Peach Star', bg: '#fdba74', accent: '#ffedd5', shape: 'star' },
                    { name: 'Lavender Square', bg: '#c084fc', accent: '#f3e8ff', shape: 'square' },
                    { name: 'Mint Ring', bg: '#6ee7b7', accent: '#d1fae5', shape: 'ring' },
                ]
            },
            obsidian: {
                name: 'Obsidian Gold',
                boardBg: '#0a0a0a',
                frameBorder: '#525252',
                borderMotif: '#171717',
                motifs: [
                    { name: 'Pure Gold Diamond', bg: '#eab308', accent: '#fef08a', shape: 'diamond' },
                    { name: 'Royal Emerald Circle', bg: '#059669', accent: '#6ee7b7', shape: 'circle' },
                    { name: 'Ruby Star', bg: '#dc2626', accent: '#fca5a5', shape: 'star' },
                    { name: 'Sapphire Triangle', bg: '#2563eb', accent: '#93c5fd', shape: 'triangle' },
                    { name: 'Silver Square', bg: '#9ca3af', accent: '#f3f4f6', shape: 'square' },
                    { name: 'Copper Ring', bg: '#ea580c', accent: '#ffedd5', shape: 'ring' },
                ]
            }
        };

        

        class SoundEngine {
            constructor() { this.ctx = null; this.muted = false; }
            init() { if (!this.ctx) { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } }
            playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
                if (this.muted) return;
                this.init();
                try {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = type;
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                    gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start();
                    osc.stop(this.ctx.currentTime + duration);
                } catch (e) { console.error(e); }
            }
            playSelect() { this.playTone(520, 'sine', 0.08, 0.1); }
            playSwap() {
                this.playTone(320, 'triangle', 0.12, 0.15);
                setTimeout(() => this.playTone(480, 'sine', 0.12, 0.12), 40);
            }
            playMatch() {
                this.playTone(659.25, 'sine', 0.15, 0.12);
                setTimeout(() => this.playTone(880, 'sine', 0.2, 0.1), 80);
            }
            playWin() {
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, i) => {
                    setTimeout(() => this.playTone(freq, 'triangle', 0.3, 0.2), i * 120);
                });
            }
        }

        const sound = new SoundEngine();

        let currentLevelIndex = 0;
        let isCustomMode = false;

        let currentSeed = 1;
        function getRand() {
            if (isCustomMode) return getRand();
            let t = currentSeed += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }

        let activeGridSize = 3;
        let activeNumMotifs = 3;
        let activePaletteKey = 'classic';
        
        let boardState = [];
        let solutionBoard = [];
        let selectedTileCoord = null;
        let moveCount = 0;
        let timerSeconds = 0;
        let timerInterval = null;
        let moveHistory = [];
        let userHasInteracted = false;
        let tutorialInterval = null;
        let isGameCleared = false;
        let customScrambleDiff = 'medium';
        let levelsBeatenThisSession = 0; // Integrated AdMob Logic

        
        let leaderboard = JSON.parse(localStorage.getItem('pattern_swap_leaderboard') || '[]');

        function updateCoinDisplay() {
            const counter = document.getElementById('coin-counter');
            if (counter) counter.textContent = totalCoins.toLocaleString();
            const lbCounter = document.getElementById('leaderboard-total-coins');
            if (lbCounter) lbCounter.textContent = totalCoins.toLocaleString();
        }

        function addCoins(amount) {
            totalCoins += amount;
            localStorage.setItem('pattern_swap_coins', totalCoins.toString());
            
        }

        function saveLeaderboardRecord(levelName, moves, timeSeconds, coinsEarned) {
            const record = {
                id: Date.now(),
                levelName,
                moves,
                timeSeconds,
                timeStr: document.getElementById('timer-display').textContent,
                coinsEarned,
                date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
            };
            leaderboard.unshift(record);
            if (leaderboard.length > 20) leaderboard.pop();
            localStorage.setItem('pattern_swap_leaderboard', JSON.stringify(leaderboard));
        }

        function populateLeaderboardUI() {
            const container = document.getElementById('leaderboard-list');
            if (!container) return;
            container.innerHTML = '';
            if (leaderboard.length === 0) {
                container.innerHTML = `<div class="text-center py-8 text-slate-500 text-xs"><i class="fa-solid fa-trophy text-2xl mb-2 text-slate-600 block"></i>No completed puzzles yet. Solve a puzzle to earn your spot!</div>`;
                return;
            }
            leaderboard.forEach((rec, idx) => {
                const item = document.createElement('div');
                item.className = 'flex items-center justify-between bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs';
                item.innerHTML = `<div class="flex items-center gap-3"><div class="w-7 h-7 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 font-extrabold flex items-center justify-center text-xs">#${idx + 1}</div><div><div class="font-bold text-white">${rec.levelName}</div><div class="text-[10px] text-slate-400">${rec.moves} moves • ${rec.timeStr}</div></div></div><div class="text-right"><div class="text-amber-400 font-bold">+${rec.coinsEarned}</div><div class="text-[10px] text-slate-500">${rec.date}</div></div>`;
                container.appendChild(item);
            });
        }

        function startTimer() {
            stopTimer();
            timerSeconds = 0;
            const timerEl = document.getElementById('timer-display');
            if (timerEl) timerEl.textContent = "00:00";
            timerInterval = setInterval(() => {
                timerSeconds++;
                const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
                const secs = String(timerSeconds % 60).padStart(2, '0');
                if (timerEl) timerEl.textContent = `${mins}:${secs}`;
            }, 1000);
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }

        function generateSolvableBoard(size, numMotifs, fixedCount = 0) {
            let board = [];
            for (let r = 0; r < size; r++) {
                board[r] = [];
                for (let c = 0; c < size; c++) {
                    board[r][c] = { id: `tile_${r}_${c}`, origR: r, origC: c, edges: [0, 0, 0, 0], isFixed: false };
                }
            }
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size - 1; c++) {
                    const motif = Math.floor(getRand() * numMotifs) + 1;
                    board[r][c].edges[1] = motif;
                    board[r][c+1].edges[3] = motif;
                }
            }
            for (let r = 0; r < size - 1; r++) {
                for (let c = 0; c < size; c++) {
                    const motif = Math.floor(getRand() * numMotifs) + 1;
                    board[r][c].edges[2] = motif;
                    board[r+1][c].edges[0] = motif;
                }
            }
            if (fixedCount > 0) {
                let fixedAssigned = 0;
                while (fixedAssigned < fixedCount) {
                    let randR = Math.floor(getRand() * size);
                    let randC = Math.floor(getRand() * size);
                    if (!board[randR][randC].isFixed) {
                        board[randR][randC].isFixed = true;
                        fixedAssigned++;
                    }
                }
            }
            return board;
        }

        function scrambleBoard(solBoard, size, scrambleDiff = 'medium') {
            let board = [];
            for (let r = 0; r < size; r++) {
                board[r] = [];
                for (let c = 0; c < size; c++) {
                    const cell = solBoard[r][c];
                    board[r][c] = { id: cell.id, origR: cell.origR, origC: cell.origC, edges: [...cell.edges], isFixed: cell.isFixed };
                }
            }
            let nonFixedPositions = [];
            let nonFixedTiles = [];
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    if (!board[r][c].isFixed) {
                        nonFixedPositions.push({ r, c });
                        nonFixedTiles.push(board[r][c]);
                    }
                }
            }
            let shuffleRounds = 3;
            if (scrambleDiff === 'easy') shuffleRounds = 1;
            if (scrambleDiff === 'hard') shuffleRounds = 5;
            for (let round = 0; round < shuffleRounds; round++) {
                for (let i = nonFixedTiles.length - 1; i > 0; i--) {
                    const j = Math.floor(getRand() * (i + 1));
                    const temp = nonFixedTiles[i];
                    nonFixedTiles[i] = nonFixedTiles[j];
                    nonFixedTiles[j] = temp;
                }
            }
            nonFixedPositions.forEach((pos, idx) => {
                board[pos.r][pos.c] = nonFixedTiles[idx];
            });
            if (checkVictoryCondition(board, size)) {
                if (nonFixedPositions.length >= 2) {
                    const p1 = nonFixedPositions[0];
                    const p2 = nonFixedPositions[1];
                    const temp = board[p1.r][p1.c];
                    board[p1.r][p1.c] = board[p2.r][p2.c];
                    board[p2.r][p2.c] = temp;
                }
            }
            return board;
        }

        function createTileSVG(tile, paletteKey) {
            const palette = PALETTES[paletteKey] || PALETTES.classic;
            const size = 100;
            let svgHTML = `<svg viewBox="0 0 ${size} ${size}" class="w-full h-full rounded-none select-none pointer-events-none">`;
            svgHTML += `<rect width="100" height="100" fill="${palette.boardBg}" rx="0" />`;
            const quadPolys = [`0,0 100,0 50,50`, `100,0 100,100 50,50`, `100,100 0,100 50,50`, `0,100 0,0 50,50`];
            tile.edges.forEach((motifIdx, edgeDir) => {
                let fill = palette.borderMotif;
                if (motifIdx > 0 && palette.motifs[motifIdx - 1]) { fill = palette.motifs[motifIdx - 1].bg; }
                
                // Solid colorful theme with opaque black borders
                if (paletteKey === 'classic' || !paletteKey) {
                    svgHTML += `<polygon points="${quadPolys[edgeDir]}" fill="${fill}" stroke="#111111" stroke-width="1.5" stroke-linejoin="miter" />`;
                } else {
                    svgHTML += `<polygon points="${quadPolys[edgeDir]}" fill="${fill}" opacity="0.32" />`;
                }
                
                if (motifIdx === 0) {
                    // For classic, edge pieces are solid gray, no extra lines
                    if (paletteKey !== 'classic' && paletteKey) {
                        if (edgeDir === 0) svgHTML += `<rect x="0" y="0" width="100" height="6" fill="${palette.frameBorder}" rx="1"/>`;
                        if (edgeDir === 1) svgHTML += `<rect x="94" y="0" width="6" height="100" fill="${palette.frameBorder}" rx="1"/>`;
                        if (edgeDir === 2) svgHTML += `<rect x="0" y="94" width="100" height="6" fill="${palette.frameBorder}" rx="1"/>`;
                        if (edgeDir === 3) svgHTML += `<rect x="0" y="0" width="6" height="100" fill="${palette.frameBorder}" rx="1"/>`;
                    }
                } else {
                    const motif = palette.motifs[motifIdx - 1] || palette.motifs[0];
                    const accent = motif.accent;
                    switch (edgeDir) {
                        case 0:
                            if (motif.shape === 'circle' || motif.shape === 'ring') svgHTML += `<path d="M 34 0 A 16 16 0 0 0 66 0 Z" fill="${accent}" />`;
                            else if (motif.shape === 'diamond') svgHTML += `<polygon points="50,18 36,0 64,0" fill="${accent}" />`;
                            else if (motif.shape === 'triangle') svgHTML += `<polygon points="50,16 38,0 62,0" fill="${accent}" />`;
                            else svgHTML += `<rect x="36" y="0" width="28" height="14" fill="${accent}" rx="2" />`;
                            break;
                        case 1:
                            if (motif.shape === 'circle' || motif.shape === 'ring') svgHTML += `<path d="M 100 34 A 16 16 0 0 0 100 66 Z" fill="${accent}" />`;
                            else if (motif.shape === 'diamond') svgHTML += `<polygon points="82,50 100,36 100,64" fill="${accent}" />`;
                            else if (motif.shape === 'triangle') svgHTML += `<polygon points="84,50 100,38 100,62" fill="${accent}" />`;
                            else svgHTML += `<rect x="86" y="36" width="14" height="28" fill="${accent}" rx="2" />`;
                            break;
                        case 2:
                            if (motif.shape === 'circle' || motif.shape === 'ring') svgHTML += `<path d="M 34 100 A 16 16 0 0 1 66 100 Z" fill="${accent}" />`;
                            else if (motif.shape === 'diamond') svgHTML += `<polygon points="50,82 36,100 64,100" fill="${accent}" />`;
                            else if (motif.shape === 'triangle') svgHTML += `<polygon points="50,84 38,100 62,100" fill="${accent}" />`;
                            else svgHTML += `<rect x="36" y="86" width="28" height="14" fill="${accent}" rx="2" />`;
                            break;
                        case 3:
                            if (motif.shape === 'circle' || motif.shape === 'ring') svgHTML += `<path d="M 0 34 A 16 16 0 0 1 0 66 Z" fill="${accent}" />`;
                            else if (motif.shape === 'diamond') svgHTML += `<polygon points="18,50 0,36 0,64" fill="${accent}" />`;
                            else if (motif.shape === 'triangle') svgHTML += `<polygon points="16,50 0,38 0,62" fill="${accent}" />`;
                            else svgHTML += `<rect x="0" y="36" width="14" height="28" fill="${accent}" rx="2" />`;
                            break;
                    }
                }
            });
            svgHTML += `<line x1="0" y1="0" x2="100" y2="100" stroke="${palette.boardBg}" stroke-width="2" opacity="0.6"/>`;
            svgHTML += `<line x1="100" y1="0" x2="0" y2="100" stroke="${palette.boardBg}" stroke-width="2" opacity="0.6"/>`;
            svgHTML += `<circle cx="50" cy="50" r="10" fill="${palette.boardBg}" stroke="${palette.frameBorder}" stroke-width="2" />`;
            if (tile.isFixed) {
                svgHTML += `<path d="M 46 47 L 46 44 A 4 4 0 0 1 54 44 L 54 47 M 44 47 L 56 47 L 56 55 L 44 55 Z" fill="none" stroke="#f59e0b" stroke-width="2" />`;
            } else {
                svgHTML += `<circle cx="50" cy="50" r="4" fill="${palette.frameBorder}" />`;
            }
            svgHTML += `</svg>`;
            return svgHTML;
        }

        function evaluateBoardMatches(board, size) {
            let totalConnections = 0;
            let matchedConnections = 0;
            let matchMap = [];
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size - 1; c++) {
                    totalConnections++;
                    if (board[r][c].edges[1] === board[r][c+1].edges[3]) {
                        matchedConnections++;
                        matchMap.push({ type: 'h', r, c });
                    }
                }
            }
            for (let r = 0; r < size - 1; r++) {
                for (let c = 0; c < size; c++) {
                    totalConnections++;
                    if (board[r][c].edges[2] === board[r+1][c].edges[0]) {
                        matchedConnections++;
                        matchMap.push({ type: 'v', r, c });
                    }
                }
            }
            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    if (r === 0) { totalConnections++; if (board[r][c].edges[0] === 0) matchedConnections++; }
                    if (c === size - 1) { totalConnections++; if (board[r][c].edges[1] === 0) matchedConnections++; }
                    if (r === size - 1) { totalConnections++; if (board[r][c].edges[2] === 0) matchedConnections++; }
                    if (c === 0) { totalConnections++; if (board[r][c].edges[3] === 0) matchedConnections++; }
                }
            }
            return { matchedConnections, totalConnections, matchMap };
        }

        function checkVictoryCondition(board, size) {
            const { matchedConnections, totalConnections } = evaluateBoardMatches(board, size);
            return matchedConnections === totalConnections;
        }

        function renderBoardUI() {
            const boardEl = document.getElementById('puzzle-board');
            if (!boardEl) return;
            boardEl.style.gridTemplateColumns = `repeat(${activeGridSize}, minmax(0, 1fr))`;
            boardEl.innerHTML = '';
            for (let r = 0; r < activeGridSize; r++) {
                for (let c = 0; c < activeGridSize; c++) {
                    const tile = boardState[r][c];
                    const tileDiv = document.createElement('div');
                    tileDiv.className = `tile-card relative flex items-center justify-center p-0 shadow-md ${
                        tile.isFixed ? 'fixed-tile' : ''
                    } ${selectedTileCoord && selectedTileCoord.r === r && selectedTileCoord.c === c ? 'selected' : ''}`;
                    tileDiv.dataset.row = r;
                    tileDiv.dataset.col = c;
                    tileDiv.innerHTML = createTileSVG(tile, activePaletteKey);
                    tileDiv.addEventListener('click', (e) => handleTileClick(r, c));
                    boardEl.appendChild(tileDiv);
                }
            }
            const { matchedConnections, totalConnections, matchMap } = evaluateBoardMatches(boardState, activeGridSize);
            const counterEl = document.getElementById('match-counter');
            if (counterEl) counterEl.textContent = `${matchedConnections}/${totalConnections}`;
            const moveCounterEl = document.getElementById('move-counter');
            if (moveCounterEl) moveCounterEl.textContent = moveCount;
            const undoBtn = document.getElementById('btn-undo');
            if (undoBtn) undoBtn.disabled = moveHistory.length === 0;
            renderEdgeGlowOverlays(matchMap);
            if (matchedConnections === totalConnections && !isGameCleared) {
                handleVictory();
            }
        }

        function renderEdgeGlowOverlays(matchMap) { return; // Disabled per user request
            const container = document.getElementById('edge-overlay-container');
            if (!container) return;
            container.innerHTML = '';
            const boardEl = document.getElementById('puzzle-board');
            if (!boardEl) return;
            const gap = 2;
            const padding = 8;
            const boardOffsetLeft = boardEl.offsetLeft;
            const boardOffsetTop = boardEl.offsetTop;
            const innerWidth = boardEl.clientWidth - (padding * 2);
            const innerHeight = boardEl.clientHeight - (padding * 2);
            const cellW = (innerWidth - ((activeGridSize - 1) * gap)) / activeGridSize;
            const cellH = (innerHeight - ((activeGridSize - 1) * gap)) / activeGridSize;
            matchMap.forEach(match => {
                const glow = document.createElement('div');
                if (match.type === 'h') {
                    const leftPos = boardOffsetLeft + padding + ((match.c + 1) * cellW) + (match.c * gap) + (gap / 2) - 2;
                    const topPos = boardOffsetTop + padding + (match.r * (cellH + gap)) + 4;
                    glow.className = 'edge-glow-v';
                    glow.style.top = `${topPos}px`;
                    glow.style.left = `${leftPos}px`;
                    glow.style.height = `${Math.max(0, cellH - 8)}px`;
                } else if (match.type === 'v') {
                    const topPos = boardOffsetTop + padding + ((match.r + 1) * cellH) + (match.r * gap) + (gap / 2) - 2;
                    const leftPos = boardOffsetLeft + padding + (match.c * (cellW + gap)) + 4;
                    glow.className = 'edge-glow-h';
                    glow.style.top = `${topPos}px`;
                    glow.style.left = `${leftPos}px`;
                    glow.style.width = `${Math.max(0, cellW - 8)}px`;
                }
                container.appendChild(glow);
            });
        }

        function handleTileClick(r, c) {
            if (isGameCleared) return;
            const clickedTile = boardState[r][c];
            if (clickedTile.isFixed) {
                sound.playTone(200, 'sawtooth', 0.1, 0.1);
                return;
            }
            if (!selectedTileCoord) {
                selectedTileCoord = { r, c };
                sound.playSelect();
                renderBoardUI();
                return;
            }
            if (selectedTileCoord.r === r && selectedTileCoord.c === c) {
                selectedTileCoord = null;
                sound.playSelect();
                renderBoardUI();
                return;
            }
            swapTiles(selectedTileCoord.r, selectedTileCoord.c, r, c);
        }

        function swapTiles(r1, c1, r2, c2) {
            if (boardState[r1][c1].isFixed || boardState[r2][c2].isFixed) return;
            selectedTileCoord = null;
            moveHistory.push({ from: { r: r1, c: c1 }, to: { r: r2, c: c2 } });
            const temp = boardState[r1][c1];
            boardState[r1][c1] = boardState[r2][c2];
            boardState[r2][c2] = temp;
            moveCount++;
            sound.playSwap();
            renderBoardUI();
        }

        function undoLastMove() {
            if (moveHistory.length === 0 || isGameCleared) return;
            selectedTileCoord = null;
            const lastMove = moveHistory.pop();
            const { from, to } = lastMove;
            const temp = boardState[from.r][from.c];
            boardState[from.r][from.c] = boardState[to.r][to.c];
            boardState[to.r][to.c] = temp;
            moveCount++;
            sound.playSwap();
            renderBoardUI();
        }

        // --- ADMOB INJECTED HINT LOGIC ---
        function provideHint() {
            if (isGameCleared) return;
            if (typeof AdMobService !== 'undefined' && AdMobService.showRewardedAd) {
                AdMobService.showRewardedAd(() => { executeHintLogic(); });
            } else {
                executeHintLogic();
            }
        }

        function executeHintLogic() {
            let misplaced = [];
            for (let r = 0; r < activeGridSize; r++) {
                for (let c = 0; c < activeGridSize; c++) {
                    const currentTile = boardState[r][c];
                    if (currentTile.origR !== r || currentTile.origC !== c) {
                        misplaced.push({ curR: r, curC: c, targetR: currentTile.origR, targetC: currentTile.origC });
                    }
                }
            }
            if (misplaced.length === 0) return;
            const hint = misplaced[0];
            let sourceR = -1, sourceC = -1;
            for (let r = 0; r < activeGridSize; r++) {
                for (let c = 0; c < activeGridSize; c++) {
                    if (boardState[r][c].origR === hint.curR && boardState[r][c].origC === hint.curC) {
                        sourceR = r; sourceC = c;
                        break;
                    }
                }
            }
            if (sourceR !== -1 && sourceC !== -1) {
                swapTiles(hint.curR, hint.curC, sourceR, sourceC);
                sound.playMatch();
            }
        }

        let dragSourceCoord = null;
        function initDragAndDrop() {
            const boardEl = document.getElementById('puzzle-board');
            if (!boardEl) return;
            
            const handleStart = (e) => {
                userHasInteracted = true;
                const hand = document.getElementById('tutorial-hand');
                if (hand) hand.style.opacity = '0';
                if (tutorialInterval) clearInterval(tutorialInterval);
                if (isGameCleared) return;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                const target = document.elementFromPoint(clientX, clientY);
                const tileCard = target ? target.closest('.tile-card') : null;
                if (tileCard) {
                    const r = parseInt(tileCard.dataset.row, 10);
                    const c = parseInt(tileCard.dataset.col, 10);
                    if (!boardState[r][c].isFixed) { dragSourceCoord = { r, c }; }
                }
            };
            
            const handleEnd = (e) => {
                if (!dragSourceCoord || isGameCleared) return;
                const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
                const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
                const target = document.elementFromPoint(clientX, clientY);
                const tileCard = target ? target.closest('.tile-card') : null;
                if (tileCard) {
                    const r = parseInt(tileCard.dataset.row, 10);
                    const c = parseInt(tileCard.dataset.col, 10);
                    if ((r !== dragSourceCoord.r || c !== dragSourceCoord.c) && !boardState[r][c].isFixed) {
                        swapTiles(dragSourceCoord.r, dragSourceCoord.c, r, c);
                        selectedTileCoord = null;
                    }
                }
                dragSourceCoord = null;
            };

            boardEl.addEventListener('touchstart', handleStart, { passive: true });
            boardEl.addEventListener('mousedown', handleStart, { passive: true });
            boardEl.addEventListener('touchend', handleEnd, { passive: true });
            window.addEventListener('mouseup', handleEnd, { passive: true });
        }

        function handleVictory() {
            isGameCleared = true;
            stopTimer();
            sound.playWin();
            const frame = document.getElementById('board-outer-frame');
            if (frame) frame.classList.add('victory-board-glow');
            const baseCoins = activeGridSize * 50;
            const speedBonus = Math.max(0, 300 - timerSeconds * 2);
            const moveBonus = Math.max(0, 200 - moveCount * 5);
            const totalEarned = baseCoins + speedBonus + moveBonus;
            if (typeof EconomyService !== "undefined") EconomyService.addCoins(totalEarned);
            const lvlName = isCustomMode ? `Custom ${activeGridSize}x${activeGridSize}` : `Campaign Level ${currentLevelIndex + 1}`;
            saveLeaderboardRecord(lvlName, moveCount, timerSeconds, totalEarned);
            if (!isCustomMode && currentLevelIndex < window.CAMPAIGN_LEVELS.length - 1) {
                let unlockedIndex = parseInt(localStorage.getItem('pattern_swap_unlocked') || '0', 10);
                if (currentLevelIndex + 1 > unlockedIndex) {
                    localStorage.setItem('pattern_swap_unlocked', (currentLevelIndex + 1).toString());
                }
            }
            triggerConfetti();
            
            // Calculate Stars based on time
            // 3 Stars: < (grid^2 * 3) seconds
            // 2 Stars: < (grid^2 * 6) seconds
            // 1 Star: otherwise
            const par3 = activeGridSize * activeGridSize * 3;
            const par2 = activeGridSize * activeGridSize * 6;
            let stars = 1;
            if (timerSeconds <= par3) stars = 3;
            else if (timerSeconds <= par2) stars = 2;
            
            let starsHtml = '';
            for(let i=1; i<=3; i++) {
                if(i <= stars) {
                    starsHtml += '<i class="fa-solid fa-star text-4xl text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] scale-110 transition-transform"></i>';
                } else {
                    starsHtml += '<i class="fa-solid fa-star text-4xl text-slate-700 opacity-50"></i>';
                }
            }
            const starContainer = document.getElementById('victory-stars');
            if(starContainer) starContainer.innerHTML = starsHtml;
            
            setTimeout(() => {
                document.getElementById('victory-subtitle').textContent = `${lvlName} Solved!`;
                document.getElementById('victory-time').textContent = document.getElementById('timer-display').textContent;
                document.getElementById('victory-moves').textContent = moveCount;
                document.getElementById('victory-coins').textContent = `+${totalEarned}`;
                const vo = document.getElementById('victory-overlay'); if (vo) { vo.classList.remove('hidden'); vo.style.display = 'flex'; setTimeout(() => vo.classList.add('active'), 10); }
            }, 1200);
        }

        function triggerConfetti() {
            const canvas = document.getElementById('particle-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            let particles = [];
            const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#34d399'];
            for (let i = 0; i < 70; i++) {
                particles.push({
                    x: canvas.width / 2, y: canvas.height / 2,
                    vx: (getRand() - 0.5) * 12, vy: (getRand() - 0.7) * 12,
                    size: getRand() * 7 + 4, color: colors[Math.floor(getRand() * colors.length)],
                    alpha: 1, decay: getRand() * 0.015 + 0.01
                });
            }
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let activeCount = 0;
                particles.forEach(p => {
                    if (p.alpha > 0) {
                        activeCount++;
                        p.x += p.vx; p.y += p.vy; p.vy += 0.25; p.alpha -= p.decay;
                        ctx.save(); ctx.globalAlpha = Math.max(0, p.alpha); ctx.fillStyle = p.color;
                        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
                    }
                });
                if (activeCount > 0) { requestAnimationFrame(animate); }
            }
            animate();
        }

        function startCampaignLevel(lvlIndex) {
            currentLevelIndex = lvlIndex;
            isCustomMode = false;
            const lvlData = window.CAMPAIGN_LEVELS[lvlIndex];
            activeGridSize = lvlData.size;
            activeNumMotifs = lvlData.numMotifs;
            document.getElementById('level-title-display').textContent = lvlData.title.toUpperCase();
            document.getElementById('grid-size-subtitle').textContent = `${lvlData.size} × ${lvlData.size} Grid • ${lvlData.difficulty}`;
            initNewPuzzleBoard(lvlData.size, lvlData.numMotifs, lvlData.fixedCount);
        }

        function startCustomGame() {
            const s = activeGridSize;
            if (s >= 6 && typeof EconomyService !== 'undefined') {
                if (!EconomyService.hasUnlocked('grid_' + s)) {
                    alert('You must unlock the ' + s + 'x' + s + ' grid in the shop first!');
                    return;
                }
            }
            isCustomMode = true;
            document.getElementById('level-title-display').textContent = "FREE PLAY";
            document.getElementById('grid-size-subtitle').textContent = `${activeGridSize} × ${activeGridSize} Grid • ${customScrambleDiff.toUpperCase()}`;
            const numMotifs = Math.min(7, activeGridSize + 1);
            initNewPuzzleBoard(activeGridSize, numMotifs, 0, customScrambleDiff);
        }

        
        function startTutorialWalkthrough() {
            if (tutorialInterval) clearInterval(tutorialInterval);
            
            setTimeout(() => {
                if (userHasInteracted || currentLevelIndex !== 0 || isCustomMode) return;
                
                let tutorialHand = document.getElementById('tutorial-hand');
                if (!tutorialHand) {
                    tutorialHand = document.createElement('div');
                    tutorialHand.id = 'tutorial-hand';
                    tutorialHand.className = 'fixed z-[100] pointer-events-none';
                    tutorialHand.style.width = '40px';
                    tutorialHand.style.height = '40px';
                    tutorialHand.style.transformOrigin = 'top left';
                    tutorialHand.innerHTML = '<i class="fa-solid fa-hand-pointer text-5xl text-blue-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] -rotate-12"></i>';
                    document.body.appendChild(tutorialHand);
                }
                
                let move = null;
                for (let r = 0; r < activeGridSize; r++) {
                    for (let c = 0; c < activeGridSize; c++) {
                        if (boardState[r][c].id !== solutionBoard[r][c].id) {
                            for (let sr = 0; sr < activeGridSize; sr++) {
                                for (let sc = 0; sc < activeGridSize; sc++) {
                                    if (boardState[sr][sc].id === solutionBoard[r][c].id) {
                                        move = { from: {r: sr, c: sc}, to: {r, c} };
                                        break;
                                    }
                                }
                                if (move) break;
                            }
                        }
                        if (move) break;
                    }
                }
                
                if (!move) return;
                
                const animateHand = () => {
                    if (userHasInteracted) {
                        tutorialHand.style.opacity = '0';
                        return;
                    }
                    
                    const tiles = document.querySelectorAll('.tile-card');
                    let fromEl, toEl;
                    tiles.forEach(t => {
                        if (parseInt(t.dataset.row) === move.from.r && parseInt(t.dataset.col) === move.from.c) fromEl = t;
                        if (parseInt(t.dataset.row) === move.to.r && parseInt(t.dataset.col) === move.to.c) toEl = t;
                    });
                    
                    if (!fromEl || !toEl) return;
                    
                    const r1 = fromEl.getBoundingClientRect();
                    const r2 = toEl.getBoundingClientRect();
                    
                    tutorialHand.style.transition = 'opacity 0.3s, transform 0.3s, left 0s, top 0s';
                    tutorialHand.style.opacity = '1';
                    tutorialHand.style.transform = 'scale(1) translate(0, 0)';
                    tutorialHand.style.left = (r1.left + r1.width/2 - 10) + 'px';
                    tutorialHand.style.top = (r1.top + r1.height/2) + 'px';
                    
                    setTimeout(() => {
                        if (userHasInteracted) return;
                        tutorialHand.style.transform = 'scale(0.85) translate(0, 0)'; 
                        
                        setTimeout(() => {
                            if (userHasInteracted) return;
                            tutorialHand.style.transition = 'opacity 0.3s, transform 0.3s, left 0.8s ease-in-out, top 0.8s ease-in-out';
                            tutorialHand.style.left = (r2.left + r2.width/2 - 10) + 'px';
                            tutorialHand.style.top = (r2.top + r2.height/2) + 'px';
                            
                            setTimeout(() => {
                                if (userHasInteracted) return;
                                tutorialHand.style.transform = 'scale(1) translate(0, 0)'; 
                                
                                setTimeout(() => {
                                    if (!userHasInteracted) tutorialHand.style.opacity = '0';
                                }, 500);
                            }, 800);
                        }, 300);
                    }, 100);
                };
                
                animateHand();
                tutorialInterval = setInterval(animateHand, 2500);
                
            }, 800);
        }

        function initNewPuzzleBoard(size, numMotifs, fixedCount = 0, scrambleDiff = 'medium') {
            if (!isCustomMode) { currentSeed = 1337 + currentLevelIndex * 999; }
            stopTimer();
            isGameCleared = false;
            moveCount = 0;
            moveHistory = [];
            selectedTileCoord = null;
            const frame = document.getElementById('board-outer-frame');
            if (frame) frame.classList.remove('victory-board-glow');
            solutionBoard = generateSolvableBoard(size, numMotifs, fixedCount);
            boardState = scrambleBoard(solutionBoard, size, scrambleDiff);
            renderBoardUI();
            startTimer();
        }

        function populateCampaignLevelsGrid() {
            const grid = document.getElementById('levels-grid');
            if (!grid) return;
            grid.innerHTML = '';
            const unlockedIndex = parseInt(localStorage.getItem('pattern_swap_unlocked') || '0', 10);
            window.CAMPAIGN_LEVELS.forEach((lvl, idx) => {
                const isUnlocked = idx <= unlockedIndex;
                const card = document.createElement('button');
                card.className = `flex flex-col items-center justify-center p-3 rounded-2xl border transition ${
                    isUnlocked ? 'bg-slate-900 border-amber-500/30 text-white hover:bg-slate-800 active:scale-95' : 'bg-slate-950 border-slate-800 text-slate-600 cursor-not-allowed opacity-60'
                }`;
                card.innerHTML = `<div class="font-display font-extrabold text-sm ${isUnlocked ? 'text-amber-400' : 'text-slate-600'}">${lvl.level}</div><div class="text-[10px] text-slate-400 mt-0.5">${lvl.size}×${lvl.size}</div><i class="fa-solid ${isUnlocked ? 'fa-puzzle-piece text-amber-500' : 'fa-lock text-slate-600'} text-xs mt-1.5"></i>`;
                if (isUnlocked) {
                    card.addEventListener('click', () => {
                        startCampaignLevel(idx);
                        document.getElementById('modal-menu').classList.add('hidden');
                    });
                }
                grid.appendChild(card);
            });
        }

        function populateThemePickerUI() {
            const container = document.getElementById('theme-options-container');
            if (!container) return;
            container.innerHTML = '';
            Object.keys(PALETTES).forEach(key => {
                const palette = PALETTES[key];
                const card = document.createElement('button');
                card.className = `w-full p-3 rounded-2xl border flex items-center justify-between text-left transition ${activePaletteKey === key ? 'bg-slate-800 border-amber-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'}`;
                let sampleDots = palette.motifs.slice(0, 4).map(m => `<div class="w-3.5 h-3.5 rounded-full" style="background-color: ${m.bg};"></div>`).join('');
                card.innerHTML = `<div class="flex items-center gap-3"><div class="flex gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800">${sampleDots}</div><span class="font-bold text-xs">${palette.name}</span></div>${activePaletteKey === key ? '<i class="fa-solid fa-check text-amber-400 text-sm"></i>' : ''}`;
                card.addEventListener('click', () => {
                    activePaletteKey = key;
                    renderBoardUI();
                    populateThemePickerUI();
                    document.getElementById('modal-theme').classList.add('hidden');
                });
                container.appendChild(card);
            });
        }

        
        window.renderShopUI = function() {
            const container = document.getElementById('shop-content-container');
            if (!container) return;
            let html = '';
            
            // Themes
            html += '<div class="mb-4"><h3 class="text-white font-bold tracking-widest mb-3"><i class="fa-solid fa-palette text-amber-400 mr-2"></i>THEMES</h3>';
            Object.keys(PALETTES).forEach(key => {
                const palette = PALETTES[key];
                const itemId = 'theme_' + key;
                const isUnlocked = EconomyService.hasUnlocked(itemId);
                let cost = 0;
                if (key === 'synth') cost = 1000;
                if (key === 'pastel') cost = 2500;
                if (key === 'obsidian') cost = 5000;
                const isEquipped = activePaletteKey === key;
                let btnHtml = '';
                if (isEquipped) {
                    btnHtml = '<span class="text-xs font-bold text-amber-400 border border-amber-400/50 px-3 py-1 rounded-full">EQUIPPED</span>';
                } else if (isUnlocked) {
                    btnHtml = `<button onclick="equipTheme('${key}')" class="text-xs font-bold bg-slate-700 text-white px-4 py-1.5 rounded-full active:scale-95">EQUIP</button>`;
                } else {
                    btnHtml = `<button onclick="buyItem('${itemId}', ${cost}, 'theme', '${key}')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> ${cost}</button>`;
                }
                html += `<div class="flex items-center justify-between p-3 rounded-2xl border ${isEquipped ? 'bg-slate-800 border-amber-500/50' : 'bg-slate-900 border-slate-700'} mb-2">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full" style="background: ${palette.boardBg}; border: 2px solid ${palette.frameBorder}"></div>
                        <span class="text-sm font-bold ${isUnlocked ? 'text-white' : 'text-slate-400'}">${palette.name}</span>
                    </div>
                    ${btnHtml}
                </div>`;
            });
            html += '</div>';

            // Grids
            html += '<div class="mb-4"><h3 class="text-white font-bold tracking-widest mb-3"><i class="fa-solid fa-grid-2 text-purple-400 mr-2"></i>CUSTOM GRIDS</h3>';
            const grids = [ { size: 6, name: '6x6 Expert', cost: 2000 }, { size: 7, name: '7x7 Master', cost: 5000 }, { size: 8, name: '8x8 Grandmaster', cost: 10000 } ];
            grids.forEach(g => {
                const itemId = 'grid_' + g.size;
                const isUnlocked = EconomyService.hasUnlocked(itemId);
                let btnHtml = '';
                if (isUnlocked) {
                    btnHtml = '<span class="text-xs font-bold text-slate-400 px-3 py-1">UNLOCKED</span>';
                } else {
                    btnHtml = `<button onclick="buyItem('${itemId}', ${g.cost}, 'grid', '')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> ${g.cost}</button>`;
                }
                html += `<div class="flex items-center justify-between p-3 rounded-2xl border bg-slate-900 border-slate-700 mb-2"><div class="flex items-center gap-3"><span class="text-sm font-bold ${isUnlocked ? 'text-white' : 'text-slate-400'}">${g.name}</span></div>${btnHtml}</div>`;
            });
            html += '</div>';

            // Badges
            html += '<div class="mb-4"><h3 class="text-white font-bold tracking-widest mb-3"><i class="fa-solid fa-award text-rose-400 mr-2"></i>BADGES</h3>';
            const badges = [ { id: 'badge_none', name: 'No Badge', cost: 0, icon: '' }, { id: 'badge_fire', name: 'Fire Badge', cost: 5000, icon: '<i class="fa-solid fa-fire text-rose-500"></i>' }, { id: 'badge_crown', name: 'Crown Badge', cost: 10000, icon: '<i class="fa-solid fa-crown text-amber-400"></i>' }, { id: 'badge_diamond', name: 'Diamond Badge', cost: 25000, icon: '<i class="fa-solid fa-gem text-cyan-400"></i>' } ];
            const currentBadge = EconomyService.getEquippedBadge();
            badges.forEach(b => {
                const isUnlocked = EconomyService.hasUnlocked(b.id);
                const isEquipped = currentBadge === b.id;
                let btnHtml = '';
                if (isEquipped) {
                    btnHtml = '<span class="text-xs font-bold text-rose-400 border border-rose-400/50 px-3 py-1 rounded-full">EQUIPPED</span>';
                } else if (isUnlocked) {
                    btnHtml = `<button onclick="equipBadge('${b.id}')" class="text-xs font-bold bg-slate-700 text-white px-4 py-1.5 rounded-full active:scale-95">EQUIP</button>`;
                } else {
                    btnHtml = `<button onclick="buyItem('${b.id}', ${b.cost}, 'badge', '${b.id}')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> ${b.cost}</button>`;
                }
                html += `<div class="flex items-center justify-between p-3 rounded-2xl border ${isEquipped ? 'bg-slate-800 border-rose-500/50' : 'bg-slate-900 border-slate-700'} mb-2"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center">${b.icon}</div><span class="text-sm font-bold ${isUnlocked ? 'text-white' : 'text-slate-400'}">${b.name}</span></div>${btnHtml}</div>`;
            });
            html += '</div>';

            container.innerHTML = html;
        };

        window.equipTheme = function(key) {
            activePaletteKey = key;
            if (typeof renderBoardUI !== 'undefined') renderBoardUI();
            if (typeof renderShopUI !== 'undefined') renderShopUI();
        };

        window.equipBadge = function(id) {
            if (typeof EconomyService !== 'undefined') EconomyService.equipBadge(id);
            if (typeof renderShopUI !== 'undefined') renderShopUI();
            if (typeof LeaderboardService !== 'undefined') LeaderboardService.syncProgress();
        };

        window.buyItem = function(itemId, cost, type, key) {
            if (typeof EconomyService !== 'undefined' && EconomyService.spendCoins(cost)) {
                EconomyService.unlockItem(itemId);
                if (type === 'theme') equipTheme(key);
                if (type === 'badge') equipBadge(key);
                if (typeof renderShopUI !== 'undefined') renderShopUI();
                sound.playWin();
            } else {
                alert("Not enough coins!");
            }
        };


        window.onload = function() {
            
            initDragAndDrop();

            const el_tab_btn_campaign = document.getElementById('tab-btn-campaign');
if (el_tab_btn_campaign) el_tab_btn_campaign.addEventListener('click', () => {
                document.getElementById('tab-btn-campaign').className = "flex-1 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 transition";
                document.getElementById('tab-btn-custom').className = "flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition";
                document.getElementById('tab-content-campaign').classList.remove('hidden');
                document.getElementById('tab-content-custom').classList.add('hidden');
            });
            const el_tab_btn_custom = document.getElementById('tab-btn-custom');
if (el_tab_btn_custom) el_tab_btn_custom.addEventListener('click', () => {
                document.getElementById('tab-btn-custom').className = "flex-1 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 transition";
                document.getElementById('tab-btn-campaign').className = "flex-1 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition";
                document.getElementById('tab-content-custom').classList.remove('hidden');
                document.getElementById('tab-content-campaign').classList.add('hidden');
            });

            document.querySelectorAll('.btn-custom-grid').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.btn-custom-grid').forEach(b => { b.className = "btn-custom-grid py-2.5 rounded-xl border border-slate-800 font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-300"; });
                    btn.className = "btn-custom-grid py-2.5 rounded-xl border border-slate-800 font-bold text-sm bg-amber-500 text-slate-950";
                    activeGridSize = parseInt(btn.dataset.size, 10);
                });
            });

            document.querySelectorAll('.btn-scramble-diff').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.btn-scramble-diff').forEach(b => { b.className = "btn-scramble-diff py-2 rounded-xl border border-slate-800 text-xs font-bold bg-slate-900 text-slate-300"; });
                    btn.className = "btn-scramble-diff py-2 rounded-xl border border-slate-800 text-xs font-bold bg-amber-500 text-slate-950";
                    customScrambleDiff = btn.dataset.scramble;
                });
            });

            const el_btn_start_custom = document.getElementById('btn-start-custom');
if (el_btn_start_custom) el_btn_start_custom.addEventListener('click', () => { startCustomGame(); document.getElementById('modal-menu').classList.add('hidden'); });
            const el_btn_back_menu = document.getElementById('btn-back-menu');
if (el_btn_back_menu) el_btn_back_menu.addEventListener('click', () => { populateCampaignLevelsGrid(); document.getElementById('modal-menu').classList.remove('hidden'); });
            const el_btn_sound_toggle = document.getElementById('btn-sound-toggle');
if (el_btn_sound_toggle) el_btn_sound_toggle.addEventListener('click', () => { sound.muted = !sound.muted; const icon = document.getElementById('sound-icon'); if (icon) { icon.className = sound.muted ? 'fa-solid fa-volume-xmark text-slate-500 text-sm' : 'fa-solid fa-volume-high text-sm'; } });
            const el_btn_how_to_play = document.getElementById('btn-how-to-play');
if (el_btn_how_to_play) el_btn_how_to_play.addEventListener('click', () => { document.getElementById('modal-howto').classList.remove('hidden'); });
            const el_btn_close_howto = document.getElementById('btn-close-howto');
if (el_btn_close_howto) el_btn_close_howto.addEventListener('click', () => { document.getElementById('modal-howto').classList.add('hidden'); });
            const el_btn_dismiss_howto = document.getElementById('btn-dismiss-howto');
if (el_btn_dismiss_howto) el_btn_dismiss_howto.addEventListener('click', () => { document.getElementById('modal-howto').classList.add('hidden'); });
            const el_btn_leaderboard = document.getElementById('btn-leaderboard');
if (el_btn_leaderboard) el_btn_leaderboard.addEventListener('click', () => { populateLeaderboardUI(); document.getElementById('modal-leaderboard').classList.remove('hidden'); });
            const el_btn_close_leaderboard = document.getElementById('btn-close-leaderboard');
if (el_btn_close_leaderboard) el_btn_close_leaderboard.addEventListener('click', () => { document.getElementById('modal-leaderboard').classList.add('hidden'); });
            const el_btn_dismiss_leaderboard = document.getElementById('btn-dismiss-leaderboard');
if (el_btn_dismiss_leaderboard) el_btn_dismiss_leaderboard.addEventListener('click', () => { document.getElementById('modal-leaderboard').classList.add('hidden'); });
            const el_btn_undo = document.getElementById('btn-undo');
if (el_btn_undo) el_btn_undo.addEventListener('click', undoLastMove);
            const el_btn_hint = document.getElementById('btn-hint');
if (el_btn_hint) el_btn_hint.addEventListener('click', provideHint);
            const el_btn_reset = document.getElementById('btn-reset');
if (el_btn_reset) el_btn_reset.addEventListener('click', () => { if (isCustomMode) startCustomGame(); else startCampaignLevel(currentLevelIndex); });
            const el_btn_theme = document.getElementById('btn-theme');
if (el_btn_theme) el_btn_theme.addEventListener('click', () => { populateThemePickerUI(); document.getElementById('modal-theme').classList.remove('hidden'); });
            const el_btn_close_theme = document.getElementById('btn-close-theme');
if (el_btn_close_theme) el_btn_close_theme.addEventListener('click', () => { document.getElementById('modal-theme').classList.add('hidden'); });
            
            const el_btn_victory_replay = document.getElementById('btn-victory-replay');
if (el_btn_victory_replay) el_btn_victory_replay.addEventListener('click', () => { const vo = document.getElementById('victory-overlay'); if (vo) { vo.classList.remove('active'); setTimeout(() => { vo.style.display = 'none'; vo.classList.add('hidden'); }, 300); } if (isCustomMode) startCustomGame(); else startCampaignLevel(currentLevelIndex); });

            // --- ADMOB INJECTED INTERSTITIAL LOGIC ---
            const el_btn_victory_next = document.getElementById('btn-victory-next');
if (el_btn_victory_next) el_btn_victory_next.addEventListener('click', () => {
                const vo = document.getElementById('victory-overlay'); if (vo) { vo.classList.remove('active'); setTimeout(() => { vo.style.display = 'none'; vo.classList.add('hidden'); }, 300); }
                
                const loadNext = () => {
                    if (!isCustomMode && currentLevelIndex < window.CAMPAIGN_LEVELS.length - 1) {
                        startCampaignLevel(currentLevelIndex + 1);
                    } else {
                        startCustomGame();
                    }
                };

                levelsBeatenThisSession++;
                if (levelsBeatenThisSession >= 5 && typeof AdMobService !== 'undefined' && AdMobService.showInterstitialAd) {
                    levelsBeatenThisSession = 0;
                    AdMobService.showInterstitialAd(loadNext);
                } else {
                    loadNext();
                }
            });

            startCampaignLevel(0);
        };
    

window.PuzzleGame = { startCampaignLevel, startCustomGame };
