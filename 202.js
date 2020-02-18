/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) {
        return true
    }
    
    let sums = {}
    while(n !== 1) {
        n = (n).toString()
        let sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += n[i]**2
        }

        if (sums[sum] > 1) {
            return false
        }

        sums[sum] = (sums[sum] || 0) + 1
        n = sum
    }
    return true
};