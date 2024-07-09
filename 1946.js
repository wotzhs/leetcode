/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
	let ans = "";
	let mutated = false;
	for (var i = 0; i < num.length; i++) {
		if (num[i] <= change[num[i]]) {
			ans += change[num[i]];
			if (num[i] < change[num[i]]) {
				mutated = true;
			}
			continue;
		}
		if (mutated) {
			break;
		}

		ans += num[i];
	}

	return ans + num.slice(ans.length);
};
