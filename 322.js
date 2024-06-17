/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	const dp = Array(amount + 1).fill(Number.MAX_VALUE);

	dp[0] = 0;

	for (var i = 1; i <= amount; i++) {
		for (var j = 0; j < coins.length; j++) {
			if (i - coins[j] >= 0) {
				dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
			}
		}
	}

	return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
