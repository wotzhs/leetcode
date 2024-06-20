// ref: https://www.youtube.com/watch?v=6dvtsejpYWM
/**
 * @param {number[][]} bombs
 * @return {number}
 */

var maximumDetonation = function (bombs) {
	const chain = Array(bombs.length);
	for (var i = 0; i < bombs.length; i++) {
		chain[i] = [];
	}

	for (var i = 0; i < bombs.length; i++) {
		for (var j = 0; j < bombs.length; j++) {
			if (i === j) {
				continue;
			}
			const [x1, y1, aoe] = bombs[i];
			const [x2, y2] = bombs[j];

			if (
				Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) <=
				Math.pow(aoe, 2)
			) {
				chain[i].push(j);
			}
		}
	}

	let maxChain = 0;
	for (var i = 0; i < bombs.length; i++) {
		const visited = Array(bombs.length);
		visited[i] = true;
		let count = 1;

		const q = [];
		q.push(i);

		while (q.length) {
			const next = q.shift();
			for (let j = 0; j < chain[next].length; j++) {
				if (visited[chain[next][j]]) {
					continue;
				}

				q.push(chain[next][j]);
				visited[chain[next][j]] = true;
				count++;
			}
		}
		if (count > maxChain) {
			maxChain = count;
		}
	}

	return maxChain;
};
