/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let addOne = true
    for (let i = digits.length -1; i >= 0; i--) {
        if (addOne) {
            digits[i] += 1    
        }

        if (digits[i]>9) {
            digits[i] = digits[i]%10
            if (i - 1 < 0) {
                digits.unshift(1)
                continue
            }
            continue
        }
        
        addOne = false
    }
    return digits
};