/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	let currSum = 0;
	for (var i = 0; i < k; i++) {
		currSum += nums[i];
	}

	let max = currSum / k;

	for (var i = k; i < nums.length; i++) {
		currSum += nums[i] - nums[i - k];
		max = Math.max(max, currSum / k);
	}

	return max;
};
