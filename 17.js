/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (!digits) {
		return [];
	}

	const letters = {
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"],
	};

	const q = [];
	q.push([[], digits]);
	const ans = [];

	while (q.length > 0) {
		const [sofar, remaining] = q.shift();

		if (!remaining) {
			ans.push(sofar.join(""));
			continue;
		}

		const currDigit = remaining[0];
		for (var i = 0; i < letters[currDigit].length; i++) {
			q.push([[...sofar, letters[currDigit][i]], remaining.slice(1)]);
		}
	}

	return ans;
};
