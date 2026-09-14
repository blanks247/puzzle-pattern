const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add SHOP button to menu
html = html.replace(
    /<button id="btn-settings" class="w-full py-3 rounded-2xl glass-btn text-slate-200 font-bold tracking-wide flex items-center justify-center gap-2">\s*<i class="fa-solid fa-gear text-slate-400"><\/i> SETTINGS\s*<\/button>/,
    `<div class="flex gap-4">
                <button id="btn-shop" class="flex-1 py-3 rounded-2xl glass-btn text-emerald-100 font-bold tracking-wide flex items-center justify-center gap-2">
                    <i class="fa-solid fa-store text-emerald-400"></i> SHOP
                </button>
                <button id="btn-settings" class="flex-1 py-3 rounded-2xl glass-btn text-slate-200 font-bold tracking-wide flex items-center justify-center gap-2">
                    <i class="fa-solid fa-gear text-slate-400"></i> SETTINGS
                </button>
            </div>`
);

// Add Shop Modal
const shopModal = `
    <!-- Shop Overlay -->
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
        <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-8" id="shop-content-container">
            <!-- Injected by game.js -->
        </div>
    </div>
`;
// Inject Shop Modal before scripts
html = html.replace('    <script src="src/js/levels.js"></script>', shopModal + '\n    <script src="src/js/economy_service.js"></script>\n    <script src="src/js/levels.js"></script>');

// We also want the coin balance on the main menu!
// Let's put it in the top right of the menu screen
html = html.replace('<div id="menu-screen" class="screen flex-col items-center justify-between w-full h-full absolute inset-0 p-6 z-40 hidden">', 
`<div id="menu-screen" class="screen flex-col items-center justify-between w-full h-full absolute inset-0 p-6 z-40 hidden">
        <div class="absolute top-6 right-6 flex items-center gap-2 bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-500/30">
            <i class="fa-solid fa-coins text-emerald-400"></i>
            <span class="font-bold text-emerald-100 coin-balance-display">0</span>
        </div>`);


// Add "150 Coins" to the gameplay hint button
html = html.replace(/<button id="btn-hint"[\s\S]*?<\/button>/m, `<button id="btn-hint" class="flex-1 py-3 rounded-2xl glass-btn text-amber-100 font-bold tracking-wide flex flex-col items-center justify-center gap-1">
                <div class="flex items-center gap-2"><i class="fa-solid fa-lightbulb text-amber-400"></i> HINT</div>
                <div class="text-[10px] text-amber-400/80 font-medium flex items-center gap-1"><i class="fa-solid fa-coins"></i> 150</div>
            </button>`);


fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('dist/index.html', html, 'utf8');
console.log('Modified index.html for Shop UI');
