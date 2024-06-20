/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
	const numsMap = {};
	for (var i = 0; i < nums.length; i++) {
		numsMap[nums[i]] = true;
	}

	const seen = {};
	const ans = [];
	for (var i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (
			seen[num] ||
			seen[num + 1] ||
			seen[num - 1] ||
			numsMap[num + 1] ||
			numsMap[num - 1]
		) {
			seen[num]++;
			continue;
		}

		seen[num] = 1;
	}

	for (const [k, v] of Object.entries(seen)) {
		if (v === 1) {
			ans.push(+k);
		}
	}

	return ans;
};
