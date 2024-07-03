/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
	const dsu = Array(edges.length + 1).fill(-1);

	const ans = [];

	for (var i = 0; i < edges.length; i++) {
		const edge = edges[i];
		let p1 = undefined;
		let p2 = undefined;
		const stack = [];

		stack.push(edge[0]);
		while (stack.length) {
			const top = stack.pop();
			if (dsu[top] < 0) {
				p1 = top;
				break;
			}
			stack.push(dsu[top]);
		}

		stack.push(edge[1]);
		while (stack.length) {
			const top = stack.pop();
			if (dsu[top] < 0) {
				p2 = top;
				break;
			}
			stack.push(dsu[top]);
		}

		if (p1 === p2) {
			ans.push(edge);
			continue;
		}

		const w1 = dsu[p1];
		const w2 = dsu[p2];

		if (w1 <= w2) {
			dsu[p2] = p1;
			dsu[p1] += w2;
		} else {
			dsu[p1] = p2;
			dsu[p2] += w1;
		}
	}

	return ans[ans.length - 1];
};
