/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let l = 0,
		r = height.length - 1;

	let max = 0;
	while (l < r) {
		const area = Math.min(height[l], height[r]) * (r - l);
		if (area > max) {
			max = area;
		}

		if (height[l] < height[r]) {
			l++;
			continue;
		}

		r--;
	}

	return max;
};
