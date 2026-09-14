// Pattern Swap - Main App Controller

const App = {
    activeScreen: 'menu-screen',
    sfxEnabled: true,
    musicEnabled: true,
    levelsBeatenThisSession: 0,

    init() {
        this.sfxEnabled = localStorage.getItem('pattern_swap_sfx') !== 'false';
        this.musicEnabled = localStorage.getItem('pattern_swap_music') !== 'false';
        this.updateSettingsUI();

        if (typeof LeaderboardService !== 'undefined' && LeaderboardService.syncProgress) {
            LeaderboardService.syncProgress();
        }
        if (typeof AdMobService !== 'undefined' && AdMobService.init) {
            AdMobService.init();
        }
        
        this.bindEvents();
        this.renderLevelSelect();

        // Splash screen timeout
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            const menu = document.getElementById('menu-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => {
                    splash.classList.remove('active');
                    splash.style.display = 'none';
                    if (menu) menu.classList.add('active');
                }, 500);
            }
        }, 1600);
    },

    updateSettingsUI() {
        const sfxBtn = document.getElementById('toggle-sfx');
        const musicBtn = document.getElementById('toggle-music');
        if (sfxBtn) {
            if (this.sfxEnabled) {
                sfxBtn.classList.remove('bg-slate-600');
                sfxBtn.classList.add('bg-amber-500');
                sfxBtn.firstElementChild.style.transform = 'translateX(0)';
            } else {
                sfxBtn.classList.add('bg-slate-600');
                sfxBtn.classList.remove('bg-amber-500');
                sfxBtn.firstElementChild.style.transform = 'translateX(-24px)';
            }
        }
        if (musicBtn) {
            if (this.musicEnabled) {
                musicBtn.classList.remove('bg-slate-600');
                musicBtn.classList.add('bg-purple-500');
                musicBtn.firstElementChild.style.transform = 'translateX(0)';
            } else {
                musicBtn.classList.add('bg-slate-600');
                musicBtn.classList.remove('bg-purple-500');
                musicBtn.firstElementChild.style.transform = 'translateX(-24px)';
            }
        }
    },

    bindEvents() {
        // Main Menu
        document.getElementById('btn-play')?.addEventListener('click', () => {
            this.showScreen('level-select-screen');
        });
        document.getElementById('btn-freeplay')?.addEventListener('click', () => {
            if (window.PuzzleGame) {
                window.PuzzleGame.startCustomGame();
                this.showScreen('gameplay-screen');
            }
        });
        document.getElementById('btn-menu-leaderboard')?.addEventListener('click', () => {
            this.showScreen('leaderboard-screen');
            if (typeof LeaderboardService !== 'undefined') LeaderboardService.renderGlobalRanks();
        });
        document.getElementById('btn-settings')?.addEventListener('click', () => {
            const so = document.getElementById('settings-overlay');
            so.classList.remove('hidden');
            so.style.display = 'flex';
            setTimeout(() => so.classList.add('active'), 10);
        });
        
        document.getElementById('btn-game-settings')?.addEventListener('click', () => {
            const so = document.getElementById('settings-overlay');
            so.classList.remove('hidden');
            so.style.display = 'flex';
            setTimeout(() => so.classList.add('active'), 10);
        });

        // Navigation Back Buttons
        document.getElementById('btn-levels-back')?.addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('btn-lb-back')?.addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('btn-game-back')?.addEventListener('click', () => {
            this.showScreen('level-select-screen');
            this.renderLevelSelect(); // Refresh locks
        });

        // Settings Toggles
        document.getElementById('btn-settings-close')?.addEventListener('click', () => {
            const so = document.getElementById('settings-overlay');
            so.classList.remove('active');
            setTimeout(() => { so.style.display = 'none'; so.classList.add('hidden'); }, 300);
        });
        document.getElementById('toggle-sfx')?.addEventListener('click', () => {
            this.sfxEnabled = !this.sfxEnabled;
            localStorage.setItem('pattern_swap_sfx', this.sfxEnabled);
            this.updateSettingsUI();
        });
        document.getElementById('toggle-music')?.addEventListener('click', () => {
            this.musicEnabled = !this.musicEnabled;
            localStorage.setItem('pattern_swap_music', this.musicEnabled);
            this.updateSettingsUI();
        });

        // Leaderboard Profile Edit
        document.getElementById('btn-edit-profile')?.addEventListener('click', () => {
            if (typeof LeaderboardService !== 'undefined') LeaderboardService.promptNameChange();
        });
    },

    showScreen(screenId) {
        if (screenId === 'leaderboard-screen') {
            this.renderLeaderboard();
        }
        document.querySelectorAll('.screen').forEach(el => {
            if (!el.id.includes('overlay')) {
                el.classList.remove('active');
                setTimeout(() => { if (!el.classList.contains('active')) el.style.display = 'none'; }, 300);
            }
        });
        const target = document.getElementById(screenId);
        if (target) {
            target.style.display = 'flex';
            // slight delay to allow display:flex to apply before fading in
            setTimeout(() => target.classList.add('active'), 10);
        }
        this.activeScreen = screenId;
    },

    renderLevelSelect() {
        const container = document.getElementById('levels-grid-container');
        if (!container || !window.CAMPAIGN_LEVELS) return;
        
        container.innerHTML = '';
        const unlockedIndex = parseInt(localStorage.getItem('pattern_swap_unlocked') || '0', 10);
        
        window.CAMPAIGN_LEVELS.forEach((lvl, idx) => {
            const isUnlocked = idx <= unlockedIndex;
            const btn = document.createElement('button');
            
            btn.className = `flex flex-col items-center justify-center p-3 rounded-2xl border transition ${
                isUnlocked 
                ? 'glass-btn border-amber-500/30 text-white hover:bg-white/10 active:scale-95 shadow-[0_0_15px_rgba(251,191,36,0.1)]' 
                : 'bg-black/40 border-white/5 text-slate-600 cursor-not-allowed opacity-60'
            }`;
            
            btn.innerHTML = `
                <div class="font-display font-extrabold text-sm ${isUnlocked ? 'text-amber-400' : 'text-slate-600'}">${lvl.level}</div>
                <div class="text-[10px] text-slate-400 mt-0.5">${lvl.size} x ${lvl.size}</div>
                <i class="fa-solid ${isUnlocked ? 'fa-puzzle-piece text-amber-500' : 'fa-lock text-slate-600'} text-xs mt-1.5"></i>
            `;
            
            if (isUnlocked) {
                btn.addEventListener('click', () => {
                    if (window.PuzzleGame) {
                        window.PuzzleGame.startCampaignLevel(idx);
                        this.showScreen('gameplay-screen');
                    }
                });
            }
            container.appendChild(btn);
        });
    },

    async renderLeaderboard() {
        const lbName = document.getElementById('lb-profile-name');
        if (typeof LeaderboardService !== 'undefined') {
            const profile = LeaderboardService.getPlayerProfile();
            if (lbName) lbName.textContent = profile.playerName;

            await LeaderboardService.syncProgress();
            const data = await LeaderboardService.fetchGlobalLeaderboard();
            const listEl = document.getElementById('leaderboard-list');
            
            if (listEl) {
                listEl.innerHTML = '';
                if (!data.players || data.players.length === 0) {
                    listEl.innerHTML = '<div class=\"text-center text-slate-400 mt-10 text-sm\">No scores yet!</div>';
                    return;
                }
                
                data.players.forEach((item, index) => {
                    const rank = index + 1;
                    const isMe = item.id === data.currentPlayerId;
                    const div = document.createElement('div');
                    
                    div.className = `flex items-center justify-between p-3 rounded-2xl border transition ${isMe ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]' : 'bg-black/30 border-white/5'}`;
                    
                    const avatar = item.avatar || '🦊';
                    
                    div.innerHTML = `
                        <div class="flex items-center gap-3">
                            <div class="w-8 text-center font-display font-black ${rank <= 3 ? 'text-amber-400' : 'text-slate-500'}">#${rank}</div>
                            <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xl">${avatar}</div>
                            <div class="flex flex-col">
                                <span class="font-bold ${isMe ? 'text-white' : 'text-slate-300'}">${item.name}</span>
                                <span class="text-[10px] text-slate-500">${item.totalCleared || 0} Levels Solved</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-end">
                            <span class="text-[10px] text-slate-400">MAX LEVEL</span>
                            <span class="font-display font-black text-lg text-amber-400">${item.maxLevel || 0}</span>
                        </div>
                    `;
                    listEl.appendChild(div);
                });
            }
        }
    },
    
    promptNameChange() {
        const lbName = document.getElementById('lb-profile-name');
        const newName = prompt('Enter your new profile name:', lbName ? lbName.textContent : '');
        if (newName && newName.trim().length > 0 && newName.trim().length <= 16) {
            const emojis = ['🦊','🐼','🐯','🦁','🐮','🐷','🐸','🐵','🦄','🐉','🦖','🐳'];
            const randomAvatar = emojis[Math.floor(Math.random() * emojis.length)];
            if (typeof LeaderboardService !== 'undefined') {
                LeaderboardService.setPlayerProfile(newName, randomAvatar);
                this.renderLeaderboard();
            }
        } else if (newName) {
            alert('Name must be 1-16 characters.');
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    App.init();
});
