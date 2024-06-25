/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	const q = [];
	const paths = [];
	q.push({ node: 0, path: [] });
	while (q.length) {
		const { node, path } = q.shift();
		path.push(node);
		const connected = graph[node];

		if (node === graph.length - 1) {
			paths.push(path);
			continue;
		}

		for (var i = 0; i < connected.length; i++) {
			q.push({ node: connected[i], path: [...path] });
		}
	}

	return paths;
};
