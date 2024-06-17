/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	const dp = Array(triangle.length);
	for (var i = 0; i < triangle.length; i++) {
		const row = Array(triangle[i].length).fill(0);
		dp[i] = row;
	}

	for (var i = 0; i < triangle[triangle.length - 1].length; i++) {
		dp[triangle.length - 1][i] = triangle[triangle.length - 1][i];
	}

	for (var i = triangle.length - 2; i >= 0; i--) {
		for (var j = triangle[i + 1].length - 2; j >= 0; j--) {
			dp[i][j] = Math.min(
				triangle[i][j] + dp[i + 1][j],
				triangle[i][j] + dp[i + 1][j + 1]
			);
		}
	}

	return dp[0];
};
