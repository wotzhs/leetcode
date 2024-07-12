/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	const n = matrix.length;
	const m = matrix[0].length;
	for (var i = 0; i < n; i++) {
		for (var j = i; j < m; j++) {
			if (i === j) {
				continue;
			}
			[matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
		}
	}

	for (var i = 0; i < n; i++) {
		for (var j = 0, k = m - 1; j < k; j++, k--) {
			[matrix[i][k], matrix[i][j]] = [matrix[i][j], matrix[i][k]];
		}
	}
};
