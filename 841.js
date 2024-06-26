/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	const visited = Array(rooms.length);
	const q = [];

	q.push(rooms[0]);
	visited[0] = true;

	while (q.length) {
		const keys = q.shift();
		for (var i = 0; i < keys.length; i++) {
			if (visited[keys[i]]) {
				continue;
			}
			visited[keys[i]] = true;
			q.push(rooms[keys[i]]);
		}
	}

	for (var i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			return false;
		}
	}
	return true;
};
