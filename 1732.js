var largestAltitude = function (gain) {
	let max = 0;
	let sofar = 0;
	for (var i = 0; i < gain.length; i++) {
		sofar += gain[i];
		if (sofar > max) {
			max = sofar;
		}
	}

	return max;
};
