/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	var count = 0;
	var counts = {};
	for (let i = 0; i < nums.length; i++) {
		counts[nums[i]] = counts[nums[i]] + 1 || 1;
		nums[count] = nums[i];
		if (counts[nums[i]] < 3) {
			count++;
		}
	}

	return count;
};
