const fs = require('fs');
let code = fs.readFileSync('src/js/game.js', 'utf8');

// 1. Remove totalCoins logic
code = code.replace(/let totalCoins = parseInt\(localStorage\.getItem\('pattern_swap_coins'\) \|\| '0', 10\);/, '');
code = code.replace(/function addCoins\(amount\) \{[\s\S]*?\}/, '');
code = code.replace(/function updateCoinDisplay\(\) \{[\s\S]*?\}/, '');

// 2. Fix handleVictory
code = code.replace(/addCoins\(totalEarned\);/, 'if (typeof EconomyService !== "undefined") EconomyService.addCoins(totalEarned);');

// 3. Fix provideHint
const hintReplacement = `function provideHint() {
            if (isGameCleared) return;
            if (typeof EconomyService !== 'undefined') {
                if (EconomyService.spendCoins(150)) {
                    executeHintLogic();
                    return;
                }
            }
            if (typeof AdMobService !== 'undefined' && AdMobService.showRewardedAd) {
                AdMobService.showRewardedAd(() => { 
                    if (typeof EconomyService !== 'undefined') EconomyService.addCoins(150); // Give them coins for the ad
                    executeHintLogic(); 
                });
            } else {
                alert("You need 150 coins for a hint!");
            }
        }`;
code = code.replace(/function provideHint\(\) \{[\s\S]*?\}/, hintReplacement);


// 4. Shop Rendering Logic
const shopRenderLogic = `
        window.renderShopUI = function() {
            const container = document.getElementById('shop-content-container');
            if (!container) return;
            
            let html = '';
            
            // Themes Section
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

            // Grids Section
            html += '<div class="mb-4"><h3 class="text-white font-bold tracking-widest mb-3"><i class="fa-solid fa-grid-2 text-purple-400 mr-2"></i>CUSTOM GRIDS</h3>';
            const grids = [
                { size: 6, name: '6x6 Expert', cost: 2000 },
                { size: 7, name: '7x7 Master', cost: 5000 },
                { size: 8, name: '8x8 Grandmaster', cost: 10000 }
            ];
            grids.forEach(g => {
                const itemId = 'grid_' + g.size;
                const isUnlocked = EconomyService.hasUnlocked(itemId);
                
                let btnHtml = '';
                if (isUnlocked) {
                    btnHtml = '<span class="text-xs font-bold text-slate-400 px-3 py-1">UNLOCKED</span>';
                } else {
                    btnHtml = \`<button onclick="buyItem('\${itemId}', \${g.cost}, 'grid', '')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> \${g.cost}</button>\`;
                }

                html += \`<div class="flex items-center justify-between p-3 rounded-2xl border bg-slate-900 border-slate-700 mb-2">
                    <div class="flex items-center gap-3">
                        <span class="text-sm font-bold \${isUnlocked ? 'text-white' : 'text-slate-400'}">\${g.name}</span>
                    </div>
                    \${btnHtml}
                </div>\`;
            });
            html += '</div>';

            container.innerHTML = html;
        };

        window.equipTheme = function(key) {
            activePaletteKey = key;
            if (typeof renderBoardUI !== 'undefined') renderBoardUI();
            if (typeof renderShopUI !== 'undefined') renderShopUI();
        };

        window.buyItem = function(itemId, cost, type, key) {
            if (EconomyService.spendCoins(cost)) {
                EconomyService.unlockItem(itemId);
                if (type === 'theme') {
                    equipTheme(key);
                }
                renderShopUI();
                sound.playWin(); // Play a nice sound on purchase
            } else {
                alert("Not enough coins!");
            }
        };
`;

code = code.replace(/function populateCampaignLevelsGrid\(\) \{/, shopRenderLogic + '\n        function populateCampaignLevelsGrid() {');

// 5. Disable locked custom grids
const customGameLogic = `
        function startCustomGame() {
            const sizeSelect = document.getElementById('select-grid-size');
            let s = 3;
            if (sizeSelect) s = parseInt(sizeSelect.value, 10);
            
            // Economy check
            if (s >= 6 && typeof EconomyService !== 'undefined') {
                if (!EconomyService.hasUnlocked('grid_' + s)) {
                    alert('You must unlock the ' + s + 'x' + s + ' grid in the shop first!');
                    return;
                }
            }

            const diffSelect = document.getElementById('select-difficulty');
`;
code = code.replace(/function startCustomGame\(\) \{[\s\S]*?const diffSelect = document\.getElementById\('select-difficulty'\);/, customGameLogic);

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Modified game.js for economy integration');
