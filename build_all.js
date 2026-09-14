const fs = require('fs');

// --- 1. INDEX.HTML ---
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
    /<button id="btn-settings"[\s\S]*?<\/button>/,
    `<div class="flex gap-4">
                <button id="btn-shop" class="flex-1 py-3 rounded-2xl glass-btn text-emerald-100 font-bold tracking-wide flex items-center justify-center gap-2">
                    <i class="fa-solid fa-store text-emerald-400"></i> SHOP
                </button>
                <button id="btn-settings" class="flex-1 py-3 rounded-2xl glass-btn text-slate-200 font-bold tracking-wide flex items-center justify-center gap-2">
                    <i class="fa-solid fa-gear text-slate-400"></i> SETTINGS
                </button>
            </div>`
);
const shopModal = `
    <div id="shop-overlay" class="screen fixed inset-0 z-[60] flex flex-col bg-[#0f0c29] hidden">
        <header class="w-full px-6 pt-8 pb-4 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10">
            <button id="btn-shop-close" class="w-10 h-10 rounded-full glass-btn flex items-center justify-center text-white">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <h2 class="font-display font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">SHOP</h2>
            <div class="flex items-center gap-2 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <i class="fa-solid fa-coins text-emerald-400 text-sm"></i>
                <span class="font-bold text-emerald-100 text-sm coin-balance-display">0</span>
            </div>
        </header>
        <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-8" id="shop-content-container"></div>
    </div>
`;
html = html.replace('    <script src="src/js/levels.js"></script>', shopModal + '\n    <script src="src/js/economy_service.js"></script>\n    <script src="src/js/levels.js"></script>');
html = html.replace('<div id="menu-screen" class="screen flex-col items-center justify-between w-full h-full absolute inset-0 p-6 z-40 hidden">', 
`<div id="menu-screen" class="screen flex-col items-center justify-between w-full h-full absolute inset-0 p-6 z-40 hidden">
        <div class="absolute top-6 right-6 flex items-center gap-2 bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-500/30 z-[100]">
            <i class="fa-solid fa-coins text-emerald-400"></i>
            <span class="font-bold text-emerald-100 coin-balance-display">0</span>
        </div>`);
html = html.replace(/<button id="btn-hint"[\s\S]*?<\/button>/m, `<button id="btn-hint" class="flex-1 py-3 rounded-2xl glass-btn text-amber-100 font-bold tracking-wide flex flex-col items-center justify-center gap-1">
                <div class="flex items-center gap-2"><i class="fa-solid fa-lightbulb text-amber-400"></i> HINT</div>
                <div class="text-[10px] text-amber-400/80 font-medium flex items-center gap-1"><i class="fa-solid fa-coins"></i> 150</div>
            </button>`);
fs.writeFileSync('index.html', html, 'utf8');

// --- 2. MAIN.JS ---
let mainCode = fs.readFileSync('src/js/main.js', 'utf8');
const shopHandlers = `
        document.getElementById('btn-shop')?.addEventListener('click', () => {
            const so = document.getElementById('shop-overlay');
            if (so) {
                so.classList.remove('hidden');
                if (typeof renderShopUI !== 'undefined') renderShopUI();
                so.style.display = 'flex';
                setTimeout(() => so.classList.add('active'), 10);
            }
        });
        document.getElementById('btn-shop-close')?.addEventListener('click', () => {
            const so = document.getElementById('shop-overlay');
            if (so) {
                so.classList.remove('active');
                setTimeout(() => { so.style.display = 'none'; so.classList.add('hidden'); }, 300);
            }
        });
`;
mainCode = mainCode.replace(/\/\/ Settings Toggles/, shopHandlers + '\n        // Settings Toggles');
mainCode = mainCode.replace(/App = \{/, 'App = {\n    initEconomy: function() { if (typeof EconomyService !== "undefined") EconomyService.updateUI(); },');
mainCode = mainCode.replace(/this\.showScreen\('splash-screen'\);/, "this.showScreen('splash-screen');\n        this.initEconomy();");

const lbBadgeLogic = `
                    const avatar = item.avatar || '🤔';
                    let badgeIcon = '';
                    if (item.badge === 'badge_fire') badgeIcon = '<i class="fa-solid fa-fire text-rose-500 absolute -top-1 -right-1 drop-shadow-md text-[10px]"></i>';
                    if (item.badge === 'badge_crown') badgeIcon = '<i class="fa-solid fa-crown text-amber-400 absolute -top-1 -right-1 drop-shadow-md text-[10px]"></i>';
                    if (item.badge === 'badge_diamond') badgeIcon = '<i class="fa-solid fa-gem text-cyan-400 absolute -top-1 -right-1 drop-shadow-md text-[10px]"></i>';
                    div.innerHTML = \`
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-900 border \${isMe ? 'border-amber-500/50' : 'border-white/10'} flex items-center justify-center text-sm font-bold \${isMe ? 'text-amber-400' : 'text-slate-400'}">
                                \${rank}
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm relative">
                                    \${avatar}
                                    \${badgeIcon}
                                </div>
                                <div class="font-bold text-sm \${isMe ? 'text-amber-400' : 'text-slate-200'}">\${item.name}</div>
                            </div>\`;`;
mainCode = mainCode.replace(/const avatar = item\.avatar \|\| '🤔';[\s\S]*?<\/div>\s*<\/div>`/m, lbBadgeLogic.trim() + '`');
fs.writeFileSync('src/js/main.js', mainCode, 'utf8');

// --- 3. LEADERBOARD SERVICE ---
let lbCode = fs.readFileSync('src/js/leaderboard_service.js', 'utf8');
lbCode = lbCode.replace(/let avatar = localStorage\.getItem\('pattern_swap_player_avatar'\) \|\| '🤔';\n    return \{ playerId, playerName, avatar \};/, `let avatar = localStorage.getItem('pattern_swap_player_avatar') || '🤔';\n    let badge = localStorage.getItem('edges_equipped_badge') || 'badge_none';\n    return { playerId, playerName, avatar, badge };`);
lbCode = lbCode.replace(/avatar: avatar,\n      maxLevel: currentMax,/, `avatar: avatar,\n      badge: badge,\n      maxLevel: currentMax,`);
lbCode = lbCode.replace(/avatar: playersMap\[id\]\.avatar \|\| '🤔',/, `avatar: playersMap[id].avatar || '🤔',\n      badge: playersMap[id].badge || 'badge_none',`);
lbCode = lbCode.replace(/avatar: avatar,\n        maxLevel: currentMax,\n        totalCleared: clearedLevels\.length,/, `avatar: avatar,\n        badge: badge,\n        maxLevel: currentMax,\n        totalCleared: clearedLevels.length,`);
fs.writeFileSync('src/js/leaderboard_service.js', lbCode, 'utf8');

// --- 4. GAME.JS ---
let gameCode = fs.readFileSync('src/js/game.js', 'utf8');

// 4a. Remove old totalCoins logic completely
gameCode = gameCode.replace(/let totalCoins = parseInt\(localStorage\.getItem\('pattern_swap_coins'\) \|\| '0', 10\);/g, '');
gameCode = gameCode.replace(/function addCoins\(amount\) \{[\s\S]*?updateCoinDisplay\(\);\n        \}/g, '');
gameCode = gameCode.replace(/function updateCoinDisplay\(\) \{[\s\S]*?\}\n        \}/g, '');
gameCode = gameCode.replace(/updateCoinDisplay\(\);/g, ''); // Also removes it from window.onload

// 4b. Fix handleVictory
gameCode = gameCode.replace(/addCoins\(totalEarned\);/g, 'if (typeof EconomyService !== "undefined") EconomyService.addCoins(totalEarned);');

// 4c. Fix provideHint
const oldHint = `        function provideHint() {
            if (isGameCleared) return;
            if (typeof AdMobService !== 'undefined' && AdMobService.showRewardedAd) {
                AdMobService.showRewardedAd(() => { executeHintLogic(); });
            } else {
                executeHintLogic();
            }
        }`;
const newHint = `        function provideHint() {
            if (isGameCleared) return;
            if (typeof EconomyService !== 'undefined') {
                if (EconomyService.spendCoins(150)) {
                    executeHintLogic();
                    return;
                }
            }
            if (typeof AdMobService !== 'undefined' && AdMobService.showRewardedAd) {
                AdMobService.showRewardedAd(() => { 
                    if (typeof EconomyService !== 'undefined') EconomyService.addCoins(150);
                    executeHintLogic(); 
                });
            } else {
                alert("You need 150 coins for a hint!");
            }
        }`;
gameCode = gameCode.replace(oldHint, newHint);

// 4d. Custom Grid Logic
gameCode = gameCode.replace(/function startCustomGame\(\) \{/g, `function startCustomGame() {
            const s = activeGridSize;
            if (s >= 6 && typeof EconomyService !== 'undefined') {
                if (!EconomyService.hasUnlocked('grid_' + s)) {
                    alert('You must unlock the ' + s + 'x' + s + ' grid in the shop first!');
                    return;
                }
            }`);

// 4e. Add Shop Render Functions Before window.onload
const shopRenderLogic = `
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
                    btnHtml = \`<button onclick="equipTheme('\${key}')" class="text-xs font-bold bg-slate-700 text-white px-4 py-1.5 rounded-full active:scale-95">EQUIP</button>\`;
                } else {
                    btnHtml = \`<button onclick="buyItem('\${itemId}', \${cost}, 'theme', '\${key}')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> \${cost}</button>\`;
                }
                html += \`<div class="flex items-center justify-between p-3 rounded-2xl border \${isEquipped ? 'bg-slate-800 border-amber-500/50' : 'bg-slate-900 border-slate-700'} mb-2">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full" style="background: \${palette.boardBg}; border: 2px solid \${palette.frameBorder}"></div>
                        <span class="text-sm font-bold \${isUnlocked ? 'text-white' : 'text-slate-400'}">\${palette.name}</span>
                    </div>
                    \${btnHtml}
                </div>\`;
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
                    btnHtml = \`<button onclick="buyItem('\${itemId}', \${g.cost}, 'grid', '')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> \${g.cost}</button>\`;
                }
                html += \`<div class="flex items-center justify-between p-3 rounded-2xl border bg-slate-900 border-slate-700 mb-2"><div class="flex items-center gap-3"><span class="text-sm font-bold \${isUnlocked ? 'text-white' : 'text-slate-400'}">\${g.name}</span></div>\${btnHtml}</div>\`;
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
                    btnHtml = \`<button onclick="equipBadge('\${b.id}')" class="text-xs font-bold bg-slate-700 text-white px-4 py-1.5 rounded-full active:scale-95">EQUIP</button>\`;
                } else {
                    btnHtml = \`<button onclick="buyItem('\${b.id}', \${b.cost}, 'badge', '\${b.id}')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> \${b.cost}</button>\`;
                }
                html += \`<div class="flex items-center justify-between p-3 rounded-2xl border \${isEquipped ? 'bg-slate-800 border-rose-500/50' : 'bg-slate-900 border-slate-700'} mb-2"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center">\${b.icon}</div><span class="text-sm font-bold \${isUnlocked ? 'text-white' : 'text-slate-400'}">\${b.name}</span></div>\${btnHtml}</div>\`;
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
`;
gameCode = gameCode.replace(/window\.onload = function\(\) \{/, shopRenderLogic + '\n\n        window.onload = function() {');

fs.writeFileSync('src/js/game.js', gameCode, 'utf8');

// Also update dist output
fs.writeFileSync('dist/index.html', html, 'utf8');
fs.writeFileSync('dist/src/js/main.js', mainCode, 'utf8');
fs.writeFileSync('dist/src/js/leaderboard_service.js', lbCode, 'utf8');
fs.writeFileSync('dist/src/js/game.js', gameCode, 'utf8');
console.log('Build completed successfully.');
