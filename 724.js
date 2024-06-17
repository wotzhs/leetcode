/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	const arr1 = [nums[0]];
	const arr2 = Array(nums.length);
	arr2[nums.length - 1] = nums[nums.length - 1];

	for (var i = 1; i < nums.length; i++) {
		arr1[i] = nums[i] + arr1[i - 1];
	}

	for (var i = nums.length - 2; i >= 0; i--) {
		arr2[i] = nums[i] + arr2[i + 1];
	}

	for (var i = 0; i < nums.length; i++) {
		if (arr1[i] === arr2[i]) {
			return i;
		}
	}

	return -1;
};
