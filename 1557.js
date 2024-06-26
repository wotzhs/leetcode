/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
	const visited = Array(n);
	const ans = [];

	for (var i = 0; i < edges.length; i++) {
		visited[edges[i][1]] = true;
	}

	for (var i = 0; i < n; i++) {
		if (!visited[i]) {
			ans.push(i);
		}
	}

	return ans;
};
