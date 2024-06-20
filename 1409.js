/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
	let p = Array(m);
	for (var i = 0; i < m; i++) {
		p[i] = i + 1;
	}

	const ans = [];

	for (var i = 0; i < queries.length; i++) {
		const qry = queries[i];
		for (var j = 0; j < m; j++) {
			if (p[j] === qry) {
				ans.push(j);
				p = [p[j], ...p.slice(0, j), ...p.slice(j + 1)];
				break;
			}
		}
	}

	return ans;
};
