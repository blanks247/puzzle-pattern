const fs = require('fs');
let code = fs.readFileSync('src/js/main.js', 'utf8');

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
                            </div>
`;

code = code.replace(/const avatar = item\.avatar \|\| '🤔';\s*div\.innerHTML = `\s*<div class="flex items-center gap-3">\s*<div class="w-8 h-8 rounded-full bg-slate-900 border \${isMe \? 'border-amber-500\/50' : 'border-white\/10'} flex items-center justify-center text-sm font-bold \${isMe \? 'text-amber-400' : 'text-slate-400'}">\s*\${rank}\s*<\/div>\s*<div class="flex items-center gap-2">\s*<div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm">\s*\${avatar}\s*<\/div>\s*<div class="font-bold text-sm \${isMe \? 'text-amber-400' : 'text-slate-200'}">\${item\.name}<\/div>\s*<\/div>/m, lbBadgeLogic);

fs.writeFileSync('src/js/main.js', code, 'utf8');
fs.writeFileSync('dist/src/js/main.js', code, 'utf8');
console.log('Modified main.js to render badges');
