// ref: https://stackoverflow.com/a/63238163
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
	if (edges.length < 1) {
		return [0];
	}

	const adj = Array(n);
	let visited = Array(n);

	for (var i = 0; i < edges.length; i++) {
		const edge = edges[i];
		if (adj[edge[0]]) {
			adj[edge[0]].push(edge[1]);
		} else {
			adj[edge[0]] = [edge[1]];
		}

		if (adj[edge[1]]) {
			adj[edge[1]].push(edge[0]);
		} else {
			adj[edge[1]] = [edge[0]];
		}
	}

	let furthestNodeA;

	// find furthestNodeA from any node
	for (var i = 0; i < adj.length; i++) {
		if (adj[i] && adj[i].length) {
			const stack = [];
			stack.push({ vertex: adj[i][0], distance: 0 });
			let maxDistance = -1;
			while (stack.length) {
				const { vertex, distance } = stack.pop();
				if (visited[vertex]) {
					continue;
				}

				visited[vertex] = true;

				if (distance > maxDistance) {
					maxDistance = distance;
					furthestNodeA = vertex;
				}

				for (var j = 0; j < adj[vertex]?.length; j++) {
					stack.push({
						vertex: adj[vertex][j],
						distance: distance + 1,
					});
				}
			}
			break;
		}
	}

	// find furthest node from furthestNodeA
	const stack = [];
	visited = Array(n);
	let longestPath = [];

	stack.push({
		vertex: furthestNodeA,
		distance: 0,
		pathTravelled: [furthestNodeA],
	});

	let maxDistance = -1;

	while (stack.length) {
		const { vertex, distance, pathTravelled } = stack.pop();

		if (visited[vertex]) {
			continue;
		}

		if (distance > maxDistance) {
			maxDistance = distance;
			longestPath = pathTravelled;
		}

		visited[vertex] = true;

		for (var i = 0; i < adj[vertex]?.length; i++) {
			stack.push({
				vertex: adj[vertex][i],
				distance: distance + 1,
				pathTravelled: [...pathTravelled, adj[vertex][i]],
			});
		}
	}

	const mid = Math.ceil((longestPath.length - 1) / 2);
	if (longestPath.length % 2 === 0) {
		return [longestPath[mid - 1], longestPath[mid]];
	}

	return [longestPath[mid]];
};
