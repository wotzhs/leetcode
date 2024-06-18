/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	let count = 0;

	for (var i = 0; i < nums.length; i++) {
		if (nums[i] >= k) {
			continue;
		}

		count++;

		let lastSum = nums[i];
		for (var j = i + 1; j < nums.length; j++) {
			if (lastSum * nums[j] >= k) {
				break;
			}
			lastSum *= nums[j];
			count++;
		}
	}

	return count;
};
