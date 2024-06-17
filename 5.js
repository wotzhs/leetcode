/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	const dp = Array(s.length).fill(0);
	for (var i = 0; i < s.length; i++) {
		dp[i] = Array(s.length).fill(0);
	}

	for (var i = 0; i < s.length; i++) {
		for (var j = 0; j < s.length; j++) {
			dp[i][i] = 1;
		}
	}

	let maxLen = 0;
	let start = 0;
	let end = 0;

	for (var i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) {
			if (i + 1 > end) {
				start = i;
				end = i + 1;
				maxLen = 2;
			}
			dp[i][i + 1] = 1;
		}
	}

	let tail = 2;

	while (tail < s.length) {
		for (var i = 0; i < s.length - tail; i++) {
			if (s[i] === s[i + tail] && dp[i + 1][i + tail - 1] === 1) {
				if (i + tail + 1 > maxLen) {
					start = i;
					end = i + tail;
				}

				dp[i][i + tail] = 1;
			}
		}
		tail++;
	}

	return s.substring(start, end + 1);
};
