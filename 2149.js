/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
	const pve = [];
	const nve = [];

	for (var i = 0; i < nums.length; i++) {
		if (nums[i] < 0) {
			nve.push(nums[i]);
		} else {
			pve.push(nums[i]);
		}
	}

	const ans = [];
	for (var i = 0; i < pve.length; i++) {
		ans.push(pve[i]);
		ans.push(nve[i]);
	}

	return ans;
};
