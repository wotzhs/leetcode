/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
	const counter = {};
	const ans = [];
	for (var i = 0; i < nums.length; i++) {
		const count = counter[nums[i]] || 0;
		if (ans[count]) {
			ans[count].push(nums[i]);
		} else {
			ans[count] = [nums[i]];
		}

		counter[nums[i]] = count + 1;
	}

	return ans;
};
