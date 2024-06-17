const permute = (nums) => {
	const ans = [];
	const q = [];
	q.push([[], nums]);

	while (q.length) {
		const [sofar, remaining] = q.shift();
		if (!remaining.length) {
			ans.push(sofar);
			continue;
		}

		for (var i = 0; i < remaining.length; i++) {
			q.push([
				[...sofar, remaining[i]],
				[...remaining.slice(0, i), ...remaining.slice(i + 1)],
			]);
		}
	}

	return ans;
};
