/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let prime = {}
    for (let i = 2; i < n; i ++) {
        prime[i] = true
    }
    for (let i = 2; i * i < n; i++) {
        if (prime[i]) {
            for (let j = i; j * i < n; j++) {   
                prime[i*j] = false
            }   
        }
    }
    let count = 0
    for (const key in prime) {
        if (prime[key]) {
            count++
        }
    }
    return count
};