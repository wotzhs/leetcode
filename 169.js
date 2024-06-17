/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const counter = {};
	for (var i = 0; i < nums.length; i++) {
		counter[nums[i]] = counter[nums[i]] + 1 || 1;
	}

	let maxNum = 0;
	let maxcount = -1;

	for (const [num, count] of Object.entries(counter)) {
		if (count > maxcount) {
			maxNum = num;
			maxcount = count;
		}
	}

	return maxNum;
};
