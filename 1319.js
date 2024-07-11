/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
	const dsu = Array(n).fill(-1);

	let redundant = 0;
	let disconnected = 0;

	for (var i = 0; i < connections.length; i++) {
		let v1;
		let v2;

		const stack = [];

		stack.push(connections[i][0]);
		while (stack.length) {
			const top = stack.pop();
			if (dsu[top] < 0) {
				v1 = top;
				break;
			}
			stack.push(dsu[top]);
		}

		stack.push(connections[i][1]);
		while (stack.length) {
			const top = stack.pop();
			if (dsu[top] < 0) {
				v2 = top;
				break;
			}
			stack.push(dsu[top]);
		}

		if (v1 === v2) {
			redundant++;
			continue;
		}

		if (dsu[v1] <= dsu[v2]) {
			[v1, v2] = [v2, v1];
		}

		dsu[v1] += dsu[v2];
		dsu[v2] = v1;
	}

	for (var i = 0; i < dsu.length; i++) {
		if (dsu[i] < 0) {
			disconnected++;
		}
	}

	if (disconnected - 1 > redundant) {
		return -1;
	}

	return Math.min(redundant, disconnected - 1);
};
