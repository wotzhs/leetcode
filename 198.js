/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp  = [];
    for (let i=0; i<nums.length; i++) {
        dp.push(0);
    }

    dp[nums.length-1] = nums[nums.length-1]
    dp[nums.length-2] = Math.max(dp[nums.length-1],nums[nums.length-2])
    for (let i = nums.length-3; i>=0; i--) {
        dp[i] = Math.max(dp[i+1], dp[i+2]+nums[i])
    }
    
    return dp[0]
};
