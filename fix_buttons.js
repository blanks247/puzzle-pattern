const fs = require('fs');
let code = fs.readFileSync('src/js/main.js', 'utf8');

const replacement = `document.getElementById('btn-settings')?.addEventListener('click', () => {
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

        // Hiding logic needs similar treatment to fade out smoothly
        document.getElementById('btn-settings-close')?.addEventListener('click', () => {
            const so = document.getElementById('settings-overlay');
            so.classList.remove('active');
            setTimeout(() => { so.style.display = 'none'; so.classList.add('hidden'); }, 300);
        });

        // Dummy replacement for the old btn-settings event to replace it cleanly
        const oldSettingsEvent = \`document.getElementById('btn-settings')?.addEventListener('click', () => {\`;`;

code = code.replace(/document\.getElementById\('btn-settings'\)\?\.addEventListener\('click', \(\) => \{[\s\S]*?\}\);/m, 
`document.getElementById('btn-settings')?.addEventListener('click', () => {
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
        });`);

code = code.replace(/document\.getElementById\('btn-settings-close'\)\?\.addEventListener\('click', \(\) => \{[\s\S]*?\}\);/m, 
`document.getElementById('btn-settings-close')?.addEventListener('click', () => {
            const so = document.getElementById('settings-overlay');
            so.classList.remove('active');
            setTimeout(() => { so.style.display = 'none'; so.classList.add('hidden'); }, 300);
        });`);


fs.writeFileSync('src/js/main.js', code, 'utf8');
fs.writeFileSync('dist/src/js/main.js', code, 'utf8');
console.log('Fixed btn-game-settings and btn-settings visibility');
