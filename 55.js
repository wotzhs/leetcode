/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let gas = 0;

	for (let i = 0; i < nums.length; i++) {
		if (gas < 0) {
			return false;
		}

		if (nums[i] > gas) {
			gas = nums[i];
		}

		gas -= 1;
	}

	return true;

}
