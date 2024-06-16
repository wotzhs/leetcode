/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const counter = {};
	const set = new Set();
	for (var i = 0; i < arr.length; i++) {
		counter[arr[i]] = counter[arr[i]] + 1 || 1;
	}

	for (const count of Object.values(counter)) {
		if (set.has(count)) {
			return false;
		}
		set.add(count);
	}

	return true;
};
