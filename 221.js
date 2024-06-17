/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	const dp = Array(matrix.length);
	for (var i = 0; i < matrix.length; i++) {
		dp[i] = Array(matrix[i].length).fill(0);
	}

	for (var i = 0; i < dp[0].length; i++) {
		dp[0][i] = +matrix[0][i];
	}

	for (var i = 0; i < dp.length; i++) {
		dp[i][0] = +matrix[i][0];
	}

	for (var i = 1; i < dp.length; i++) {
		for (var j = 1; j < dp[i].length; j++) {
			if (matrix[i][j] === "0") {
				dp[i][j] = 0;
				continue;
			}

			if (
				matrix[i][j] === matrix[i - 1][j] &&
				matrix[i][j] === matrix[i][j - 1] &&
				matrix[i][j] === matrix[i - 1][j - 1]
			) {
				if (matrix[i][j] === 1) {
					dp[i][j] = 4;
					continue;
				}

				dp[i][j] = Math.pow(
					Math.min(
						Math.sqrt(dp[i - 1][j]),
						Math.sqrt(dp[i][j - 1]),
						Math.sqrt(dp[i - 1][j - 1])
					) + 1,
					2
				);
				continue;
			}

			dp[i][j] = 1;
		}
	}

	var max = -1;
	for (var i = 0; i < dp.length; i++) {
		for (var j = 0; j < dp[i].length; j++) {
			if (dp[i][j] > max) {
				max = dp[i][j];
			}
		}
	}

	console.log(dp);
	return max;
};

console.log(
	maximalSquare([
		["1", "1", "1", "1", "0"],
		["1", "1", "1", "1", "0"],
		["1", "1", "1", "1", "1"],
		["1", "1", "1", "1", "1"],
		["0", "0", "1", "1", "1"],
	])
);
