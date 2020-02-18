var singleNumber = function(nums) {
    let count = {}
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1
    }
    for (const key in count) {
        if (count[key] === 1) {
            return key
        }
    }
};