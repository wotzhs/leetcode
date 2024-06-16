/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	const records1 = {};
	const records2 = {};
	for (var i = 0; i < nums1.length; i++) {
		records1[nums1[i]] = true;
	}

	for (var i = 0; i < nums2.length; i++) {
		records2[nums2[i]] = true;
	}

	const ans1 = new Set();
	for (var i = 0; i < nums1.length; i++) {
		if (!records2[nums1[i]]) {
			ans1.add(nums1[i]);
		}
	}
	const ans2 = new Set();
	for (var i = 0; i < nums2.length; i++) {
		if (!records1[nums2[i]]) {
			ans2.add(nums2[i]);
		}
	}

	return [Array.from(ans1), Array.from(ans2)];
};
