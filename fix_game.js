const fs = require('fs');
const html = fs.readFileSync('index_puzzle_backup.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    let content = scriptMatch[1];
    
    // Remove CAMPAIGN_LEVELS
    content = content.replace(/const CAMPAIGN_LEVELS = \[[\s\S]*?\];/g, '');
    
    // Fix modal overlay IDs
    content = content.replace(/modal-victory/g, 'victory-overlay');
    
    // Export PuzzleGame
    content += '\n\nwindow.PuzzleGame = { startCampaignLevel, startCustomGame };\n';
    
    // Safe DOM listeners
    const wrapRegex = /document\.getElementById\('([^']+)'\)\.addEventListener/g;
    content = content.replace(wrapRegex, (match, id) => {
        const safeId = id.replace(/-/g, '_');
        return `const el_${safeId} = document.getElementById('${id}');\nif (el_${safeId}) el_${safeId}.addEventListener`;
    });
    
    fs.writeFileSync('src/js/game.js', content);
    fs.writeFileSync('dist/src/js/game.js', content);
    console.log('Restored and safely wrapped game.js');
}
