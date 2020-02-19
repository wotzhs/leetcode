/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // if (nums.length === 1) {
    //     return nums[0]
    // }
    let sum = nums[0]
    let bestSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i])
        bestSum = Math.max(bestSum, sum)
    }
    return bestSum
};