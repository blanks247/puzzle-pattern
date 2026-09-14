const fs = require('fs');
let code = fs.readFileSync('src/js/game.js', 'utf8');

const oldBlock = `function provideHint() {
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
        });
            } else {
                executeHintLogic();
            }
        }`;

const newBlock = `function provideHint() {
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

code = code.replace(oldBlock, newBlock);

fs.writeFileSync('src/js/game.js', code, 'utf8');
fs.writeFileSync('dist/src/js/game.js', code, 'utf8');
console.log('Fixed syntax error in provideHint');
