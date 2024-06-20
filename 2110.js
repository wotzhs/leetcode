/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
	let ans = 0;

	let l = 0;
	let r = 0;

	while (l <= prices.length && r + 1 <= prices.length) {
		if (prices[r] - prices[r + 1] === 1) {
			r++;
			continue;
		} else {
			const currLen = r - l + 1;
			ans += (currLen * (currLen + 1)) / 2;
			r++;
			l = r;
		}
	}

	return ans;
};
