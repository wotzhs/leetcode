var removeDuplicates = function(nums) {
    let count = 0
    while(count < nums.length) {
    	// console.log(nums)
        if (nums[count] === nums[count+1]) {
        	console.log("count", count)
            console.log(nums.splice(count+1,count+1))
            removeDuplicates(nums)
        }
        count++
    }
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])