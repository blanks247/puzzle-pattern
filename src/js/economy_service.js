// Edges - Economy Service
const EconomyService = {
    getCoins: function() {
        return parseInt(localStorage.getItem('pattern_swap_coins') || '0', 10);
    },
    addCoins: function(amount) {
        let coins = this.getCoins();
        coins += amount;
        localStorage.setItem('pattern_swap_coins', coins);
        this.updateUI();
        return coins;
    },
    spendCoins: function(amount) {
        let coins = this.getCoins();
        if (coins >= amount) {
            coins -= amount;
            localStorage.setItem('pattern_swap_coins', coins);
            this.updateUI();
            return true;
        }
        return false;
    },
    hasUnlocked: function(itemId) {
        if (['theme_classic', 'grid_3', 'grid_4', 'grid_5', 'badge_none'].includes(itemId)) return true;
        return localStorage.getItem('edges_unlock_' + itemId) === 'true';
    },
    unlockItem: function(itemId) {
        localStorage.setItem('edges_unlock_' + itemId, 'true');
    },
    getEquippedBadge: function() {
        return localStorage.getItem('edges_equipped_badge') || 'badge_none';
    },
    equipBadge: function(itemId) {
        if (this.hasUnlocked(itemId)) {
            localStorage.setItem('edges_equipped_badge', itemId);
        }
    },
    updateUI: function() {
        document.querySelectorAll('.coin-balance-display').forEach(el => {
            el.innerText = this.getCoins().toLocaleString();
        });
    }
};
window.EconomyService = EconomyService;
