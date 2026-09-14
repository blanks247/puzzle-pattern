const fs = require('fs');
let code = fs.readFileSync('src/js/main.js', 'utf8');

const shopHandlers = `
        document.getElementById('btn-shop')?.addEventListener('click', () => {
            const so = document.getElementById('shop-overlay');
            so.classList.remove('hidden');
            if (typeof renderShopUI !== 'undefined') renderShopUI();
            so.style.display = 'flex';
            setTimeout(() => so.classList.add('active'), 10);
        });
        
        document.getElementById('btn-shop-close')?.addEventListener('click', () => {
            const so = document.getElementById('shop-overlay');
            so.classList.remove('active');
            setTimeout(() => { so.style.display = 'none'; so.classList.add('hidden'); }, 300);
        });
`;

code = code.replace(/\/\/ Settings Toggles/, shopHandlers + '\n        // Settings Toggles');

// Also call EconomyService.updateUI() on init
code = code.replace(/App = \{/, 'App = {\n    initEconomy: function() { if (typeof EconomyService !== "undefined") EconomyService.updateUI(); },');
code = code.replace(/this\.showScreen\('splash-screen'\);/, "this.showScreen('splash-screen');\n        this.initEconomy();");

fs.writeFileSync('src/js/main.js', code, 'utf8');
fs.writeFileSync('dist/src/js/main.js', code, 'utf8');
console.log('Modified main.js to handle Shop buttons');
