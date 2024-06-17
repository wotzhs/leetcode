var removeDuplicates = function(nums) {
    let count = 0
    while(count < nums.length) {
        if (nums[count] === nums[count+1]) {
            removeDuplicates(nums)
        }
        count++
    }
};
