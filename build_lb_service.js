const fs = require('fs');
let code = fs.readFileSync('src/js/leaderboard_service.js', 'utf8');

// Update getPlayerProfile to include badge
code = code.replace(/let avatar = localStorage\.getItem\('pattern_swap_player_avatar'\) \|\| '🤔';\n    return \{ playerId, playerName, avatar \};/, `let avatar = localStorage.getItem('pattern_swap_player_avatar') || '🤔';
    let badge = localStorage.getItem('edges_equipped_badge') || 'badge_none';
    return { playerId, playerName, avatar, badge };`);

// Update payload to include badge
code = code.replace(/avatar: avatar,\n      maxLevel: currentMax,/, `avatar: avatar,
      badge: badge,
      maxLevel: currentMax,`);

// Update playersMap processing to include badge
code = code.replace(/avatar: playersMap\[id\]\.avatar \|\| '🤔',/, `avatar: playersMap[id].avatar || '🤔',
      badge: playersMap[id].badge || 'badge_none',`);

// In case the offline missing fallback needs updating
code = code.replace(/avatar: avatar,\n        maxLevel: currentMax,\n        totalCleared: clearedLevels\.length,/, `avatar: avatar,
        badge: badge,
        maxLevel: currentMax,
        totalCleared: clearedLevels.length,`);

fs.writeFileSync('src/js/leaderboard_service.js', code, 'utf8');
fs.writeFileSync('dist/src/js/leaderboard_service.js', code, 'utf8');
console.log('Modified leaderboard_service.js for badges');
