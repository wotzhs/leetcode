/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
	const counter = {};
	for (const [x, y] of edges) {
		counter[x] = counter[x] + 1 || 1;
		counter[y] = counter[y] + 1 || 1;
	}

	for (const [node, count] of Object.entries(counter)) {
		if (count === edges.length) {
			return node;
		}
	}

	return -1;
};
