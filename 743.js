/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
	const adj = Array(n);
	const q = [];
	const costs = Array(n + 1).fill(Number.MAX_VALUE);
	costs[k] = 0;
	costs[0] = 0;
	let maxCost = 0;

	for (var i = 0; i < times.length; i++) {
		const [u, v, w] = times[i];
		if (adj[u]) {
			adj[u].push([v, w]);
			continue;
		}

		adj[u] = [[v, w]];
	}

	q.push(k);
	while (q.length) {
		const vertex = q.pop();

		for (var i = 0; i < adj[vertex]?.length; i++) {
			const [next, cost] = adj[vertex][i];
			if (costs[next] > costs[vertex] + cost) {
				costs[next] = costs[vertex] + cost;
				q.push(next);
			}
		}
	}

	for (var i = 0; i < costs.length; i++) {
		if (costs[i] === Number.MAX_VALUE) {
			return -1;
		}
		maxCost = Math.max(maxCost, costs[i]);
	}

	return maxCost;
};
