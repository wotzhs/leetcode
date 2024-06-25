/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let seen = {};
	let l = 0;
	let r = 0;
	let ans = 0;

	while (r < s.length) {
		if (seen[s[r]]) {
			ans = Math.max(ans, r - l);
			l++;
			r = l;
			seen = {};
		}

		seen[s[r]] = true;
		r++;
	}

	return Math.max(ans, r - l);
};
