/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const isVowel = (ch) => {
	return ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u";
};

var maxVowels = function (s, k) {
	let sum = 0;
	for (var i = 0; i < k; i++) {
		if (isVowel(s[i])) {
			sum++;
		}
	}

	let max = sum;

	for (var i = k; i < s.length; i++) {
		if (isVowel(s[i])) {
			sum++;
		}

		if (isVowel(s[i - k])) {
			sum--;
		}

		if (sum > max) {
			max = sum;
		}
	}

	return max;
};
