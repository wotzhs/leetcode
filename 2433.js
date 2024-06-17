/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
	const ans = Array(pref.length);
	ans[0] = pref[0];
	for (var i = 1; i < pref.length; i++) {
		ans[i] = pref[i - 1] ^ pref[i];
	}
	return ans;
};
