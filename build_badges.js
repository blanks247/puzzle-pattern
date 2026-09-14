const fs = require('fs');
let code = fs.readFileSync('src/js/game.js', 'utf8');

const badgesLogic = `
            // Badges Section
            html += '<div class="mb-4"><h3 class="text-white font-bold tracking-widest mb-3"><i class="fa-solid fa-award text-rose-400 mr-2"></i>BADGES</h3>';
            const badges = [
                { id: 'badge_none', name: 'No Badge', cost: 0, icon: '' },
                { id: 'badge_fire', name: 'Fire Badge', cost: 5000, icon: '<i class="fa-solid fa-fire text-rose-500"></i>' },
                { id: 'badge_crown', name: 'Crown Badge', cost: 10000, icon: '<i class="fa-solid fa-crown text-amber-400"></i>' },
                { id: 'badge_diamond', name: 'Diamond Badge', cost: 25000, icon: '<i class="fa-solid fa-gem text-cyan-400"></i>' }
            ];
            const currentBadge = typeof EconomyService !== 'undefined' ? EconomyService.getEquippedBadge() : 'badge_none';
            
            badges.forEach(b => {
                const isUnlocked = typeof EconomyService !== 'undefined' && EconomyService.hasUnlocked(b.id);
                const isEquipped = currentBadge === b.id;
                
                let btnHtml = '';
                if (isEquipped) {
                    btnHtml = '<span class="text-xs font-bold text-rose-400 border border-rose-400/50 px-3 py-1 rounded-full">EQUIPPED</span>';
                } else if (isUnlocked) {
                    btnHtml = \`<button onclick="buyItem('\${b.id}', 0, 'badge', '\${b.id}')" class="text-xs font-bold bg-slate-700 text-white px-4 py-1.5 rounded-full active:scale-95">EQUIP</button>\`;
                } else {
                    btnHtml = \`<button onclick="buyItem('\${b.id}', \${b.cost}, 'badge', '\${b.id}')" class="text-xs font-bold bg-emerald-600 text-white px-3 py-1.5 rounded-full active:scale-95 flex items-center gap-1"><i class="fa-solid fa-coins"></i> \${b.cost}</button>\`;
                }

                html += \`<div class="flex items-center justify-between p-3 rounded-2xl border \${isEquipped ? 'bg-slate-800 border-rose-500/50' : 'bg-slate-900 border-slate-700'} mb-2">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center">\${b.icon}</div>
                        <span class="text-sm font-bold \${isUnlocked ? 'text-white' : 'text-slate-400'}">\${b.name}</span>
                    </div>
                    \${btnHtml}
                </div>\`;
            });
            html += '</div>';
            
            container.innerHTML = html;
        };

        window.equipBadge = function(id) {
            if (typeof EconomyService !== 'undefined') EconomyService.equipBadge(id);
            if (typeof renderShopUI !== 'undefined') renderShopUI();
            if (typeof LeaderboardService !== 'undefined') LeaderboardService.syncProgress();
        };

        window.buyItem = function(itemId, cost, type, key) {
            if (typeof EconomyService !== 'undefined' && EconomyService.spendCoins(cost)) {
                EconomyService.unlockItem(itemId);
                if (type === 'theme') {
                    equipTheme(key);
                } else if (type === 'badge') {
                    equipBadge(key);
                }
                renderShopUI();
                sound.playWin();
            } else {
                alert("Not enough coins!");
            }
        };
`;

code = code.replace(/container\.innerHTML = html;[\s\S]*?alert\("Not enough coins!"\);\n            \}\n        \};/m, badgesLogic);

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Modified game.js to add Badges to Shop');
