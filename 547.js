/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	let count = 0;

	for (var i = 0; i < isConnected.length; i++) {
		for (var j = 0; j < isConnected[0].length; j++) {
			const q = [];

			if (isConnected[i][j] === 1) {
				count++;
				q.push(j);
				while (q.length) {
					const row = q.shift();
					for (var col = 0; col < isConnected[row].length; col++) {
						if (col === row) {
							isConnected[row][col] = 0;
							continue;
						}

						if (isConnected[row][col] === 1) {
							q.push(col);
							isConnected[row][col] = 0;
						}
					}
				}
			}
		}
	}

	return count;
};
