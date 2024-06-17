/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	for (let i=0; i<haystack.length; i++) {
		if (haystack[i] === needle[0]) {
			let matched = true;
			for (let j = 1; j<needle.length; j++) {
				if (haystack[i+j] !== needle[j])  {
					matched = false;
					break;
				}
			}
			if (matched) {
				return i
			}
		}
	}

	return -1
};
